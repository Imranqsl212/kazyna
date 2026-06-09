(function () {
  const origin = location.origin;
  let path = location.pathname.replace(/index\.html$/i, "").replace(/\.html$/i, "");
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  const canonical = origin + (path || "/");

  function upsertLink(rel, href) {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  function upsertMeta(property, content) {
    let node = document.querySelector(`meta[property="${property}"]`);
    if (!node) {
      node = document.createElement("meta");
      node.setAttribute("property", property);
      document.head.appendChild(node);
    }
    node.content = content;
  }

  upsertLink("canonical", canonical);
  upsertMeta("og:url", canonical);

  if (!document.querySelector('meta[name="robots"]')) {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "index, follow, max-image-preview:large";
    document.head.appendChild(robots);
  }

  if (!document.querySelector('meta[name="twitter:card"]')) {
    const card = document.createElement("meta");
    card.name = "twitter:card";
    card.content = "summary_large_image";
    document.head.appendChild(card);
  }

  document.querySelectorAll('script[type="application/ld+json"]').forEach((node) => {
    try {
      const data = JSON.parse(node.textContent);
      if (data.url && data.url.includes("econova.local")) {
        data.url = origin + "/";
        node.textContent = JSON.stringify(data);
      }
    } catch (_) {
      /* ignore */
    }
  });
})();
