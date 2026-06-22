const MAX_TEXT_LENGTH = 800;

function readHeader(req, name) {
  const value = req.headers[name.toLowerCase()];
  if (Array.isArray(value)) return value.join(", ");
  return typeof value === "string" ? value : "";
}

function compactText(value, fallback = "unknown", maxLength = MAX_TEXT_LENGTH) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return fallback;
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function decodeHeader(value) {
  const text = compactText(value, "", 120);
  if (!text) return "";

  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

function firstForwardedIp(value) {
  return compactText(value, "", 120)
    .split(",")
    .map((part) => part.trim())
    .find(Boolean) || "";
}

function getClientIp(req) {
  const forwarded =
    firstForwardedIp(readHeader(req, "x-forwarded-for")) ||
    firstForwardedIp(readHeader(req, "x-real-ip")) ||
    firstForwardedIp(readHeader(req, "cf-connecting-ip")) ||
    firstForwardedIp(readHeader(req, "true-client-ip")) ||
    req.socket?.remoteAddress ||
    "";

  return compactText(forwarded.replace(/^::ffff:/, ""), "unknown", 120);
}

function getApproxLocation(req) {
  const city = decodeHeader(readHeader(req, "x-vercel-ip-city"));
  const region =
    decodeHeader(readHeader(req, "x-vercel-ip-country-region")) ||
    decodeHeader(readHeader(req, "x-vercel-ip-region"));
  const country = decodeHeader(readHeader(req, "x-vercel-ip-country"));
  const latitude = decodeHeader(readHeader(req, "x-vercel-ip-latitude"));
  const longitude = decodeHeader(readHeader(req, "x-vercel-ip-longitude"));
  const timezone = decodeHeader(readHeader(req, "x-vercel-ip-timezone"));

  const place = [city, region, country].filter(Boolean).join(", ");
  const coordinates = latitude && longitude ? `${latitude}, ${longitude}` : "";
  const parts = [place, coordinates && `coords: ${coordinates}`, timezone && `tz: ${timezone}`].filter(Boolean);

  return parts.length ? parts.join(" | ") : "unknown";
}

function parseAllowedHosts(req) {
  const configured = process.env.VISITOR_ALLOWED_HOSTS || readHeader(req, "host");
  return new Set(
    configured
      .split(",")
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean)
  );
}

function getUrlHost(value) {
  if (!value) return "";

  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return "";
  }
}

function isLikelySameSiteRequest(req) {
  const secFetchSite = readHeader(req, "sec-fetch-site").toLowerCase();
  if (secFetchSite && !["same-origin", "same-site", "none"].includes(secFetchSite)) {
    return false;
  }

  const allowedHosts = parseAllowedHosts(req);
  const originHost = getUrlHost(readHeader(req, "origin"));
  const refererHost = getUrlHost(readHeader(req, "referer"));

  if (originHost && !allowedHosts.has(originHost)) return false;
  if (refererHost && !allowedHosts.has(refererHost)) return false;

  return true;
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  const chunks = [];
  let length = 0;

  for await (const chunk of req) {
    length += chunk.length;
    if (length > 16 * 1024) return {};
    chunks.push(chunk);
  }

  if (!chunks.length) return {};

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return {};
  }
}

function buildTelegramMessage(req, payload) {
  const protocol = readHeader(req, "x-forwarded-proto") || "https";
  const host = readHeader(req, "host");
  const page = compactText(payload.page || payload.path || `${protocol}://${host}`, "unknown", 500);
  const referrer = compactText(payload.referrer, "direct/unknown", 500);

  return [
    "New Econlyx visit",
    `IP: ${getClientIp(req)}`,
    `Approx location: ${getApproxLocation(req)}`,
    `Page: ${page}`,
    `Title: ${compactText(payload.title, "unknown", 160)}`,
    `Referrer: ${referrer}`,
    `Language: ${compactText(payload.language, "unknown", 80)}`,
    `Visitor timezone: ${compactText(payload.timezone, "unknown", 120)}`,
    `Screen: ${compactText(payload.screen, "unknown", 80)}`,
    `User agent: ${compactText(readHeader(req, "user-agent"), "unknown", 500)}`,
    `Time: ${new Date().toISOString()}`
  ].join("\n");
}

async function sendTelegram(text) {
  const token = process.env.VISITOR_TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId =
    process.env.VISITOR_TELEGRAM_CHAT_ID ||
    process.env.TELEGRAM_CHAT_ID ||
    process.env.TELEGRAM_CHANNEL_ID;

  if (!token || !chatId) {
    return { ok: false, status: "not_configured" };
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Telegram send failed: ${response.status} ${details}`);
  }

  return { ok: true };
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.status(405).json({ ok: false });
    return;
  }

  if (!isLikelySameSiteRequest(req)) {
    res.status(403).json({ ok: false });
    return;
  }

  try {
    const payload = await readJsonBody(req);
    const text = buildTelegramMessage(req, payload);
    const result = await sendTelegram(text);

    if (!result.ok && result.status === "not_configured") {
      res.status(200).json({ ok: false, status: "not_configured" });
      return;
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(502).json({ ok: false });
  }
};
