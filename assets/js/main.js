(function () {
  const root = document.documentElement;

  const progressBar = document.querySelector("[data-progress-bar]");
  const scrollTop = document.querySelector("[data-scroll-top]");
  const navLinks = document.querySelector("[data-nav-links]");
  const burger = document.querySelector("[data-burger]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const searchOpeners = document.querySelectorAll("[data-search-open]");
  const searchModal = document.querySelector("[data-search-modal]");
  const searchInput = document.querySelector("[data-search-input]");
  const searchResults = document.querySelector("[data-search-results]");

  function _t(key, fallback) {
    return (window.econlyxI18n && window.econlyxI18n.t(key) !== key) ? window.econlyxI18n.t(key) : fallback;
  }

  function applyAriaLabels() {
    document.querySelectorAll("[data-search-open]").forEach((node) => node.setAttribute("aria-label", _t("aria.open_search", "Open search")));
    document.querySelectorAll("[data-theme-toggle]").forEach((node) => {
      const dark = document.documentElement.dataset.theme === "dark";
      node.setAttribute("aria-label", dark ? _t("aria.theme_light", "Switch to light theme") : _t("aria.theme_dark", "Switch to dark theme"));
    });
    document.querySelectorAll("[data-burger]").forEach((node) => node.setAttribute("aria-label", _t("aria.open_menu", "Open menu")));
    document.querySelectorAll("[data-search-close]").forEach((node) => node.setAttribute("aria-label", _t("aria.close_search", "Close search")));
    document.querySelectorAll("[data-scroll-top]").forEach((node) => node.setAttribute("aria-label", _t("aria.scroll_top", "Scroll to top")));
  }

  applyAriaLabels();
  window.addEventListener("econlyx:languagechange", applyAriaLabels);

  const base = location.pathname.includes("/pages/") ? "" : "pages/";

  function getSearchIndex() {
    const T = (key, fb) => _t(key, fb);
    return [
      { title: T("search.idx.gdp","GDP explained"), category: T("search.cat.macro","Macro"), url: `${base}article-single.html`, text: "GDP C I G net exports income expenditure value added ВВП" },
      { title: T("search.idx.inflation","Inflation deep dive"), category: T("search.cat.macro","Macro"), url: `${base}article-inflation.html`, text: "CPI deflator demand pull cost push expectations инфляция" },
      { title: T("search.idx.fiscal","Fiscal and monetary policy"), category: T("search.cat.macro","Macro"), url: `${base}article-fiscal-policy.html`, text: "multiplier crowding out interest rates central bank мультипликатор" },
      { title: T("search.idx.unemployment","Unemployment types"), category: T("search.cat.macro","Macro"), url: `${base}macroeconomics.html#unemployment`, text: "frictional structural cyclical natural NAIRU безработица" },
      { title: T("search.idx.supply_demand","Supply and demand"), category: T("search.cat.micro","Micro"), url: `${base}article-supply-demand.html`, text: "equilibrium surplus shortage shifts спрос предложение" },
      { title: T("search.idx.elasticity","Elasticity masterclass"), category: T("search.cat.micro","Micro"), url: `${base}article-elasticity.html`, text: "PED income cross price revenue эластичность" },
      { title: T("search.idx.game_theory","Game theory basics"), category: T("search.cat.micro","Micro"), url: `${base}microeconomics.html#game-theory`, text: "Nash dominant strategy payoff matrix теория игр" },
      { title: T("search.idx.olympiad","Olympiad roadmap"), category: T("search.cat.olympiads","Olympiads"), url: `${base}olympiads.html#roadmap`, text: "weekly plan problem solving strategy олимпиада" },
      { title: T("search.idx.articles","Articles"), category: T("search.cat.articles","Articles"), url: `${base}articles.html`, text: "economics articles explanations macro micro olympiad статьи" },
      { title: T("search.idx.formulas","Formula library"), category: T("search.cat.formulas","Formulas"), url: `${base}formulas.html`, text: "equations formulas GDP elasticity multiplier формулы" },
      { title: T("search.idx.contacts","Contacts"), category: T("search.cat.about","About"), url: `${base}contacts.html`, text: "message email programs контакты" }
    ];
  }
  const searchIndex = getSearchIndex();

  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progressBar) progressBar.style.width = `${value}%`;
    if (scrollTop) scrollTop.classList.toggle("scroll-top--visible", window.scrollY > 640);
  }

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add("search-modal--open");
    searchModal.setAttribute("aria-hidden", "false");
    setTimeout(() => searchInput && searchInput.focus(), 0);
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove("search-modal--open");
    searchModal.setAttribute("aria-hidden", "true");
  }

  function renderSearch(query) {
    if (!searchResults) return;
    const normalized = query.trim().toLowerCase();
    const currentIndex = getSearchIndex();
    const items = normalized
      ? currentIndex.filter((item) => `${item.title} ${item.category} ${item.text}`.toLowerCase().includes(normalized))
      : currentIndex.slice(0, 5);

    searchResults.innerHTML = items.map((item) => `
      <a class="search-result" href="${item.url}">
        <strong>${item.title}</strong>
        <span class="badge">${item.category}</span>
      </a>
    `).join("") || `<p class="muted">${_t("search.no_results","No results yet. Try macro, elasticity, GDP, or olympiad.")}</p>`;
    if (window.econlyxI18n) window.econlyxI18n.applyTranslations(searchResults);
  }

  function animateCounters() {
    document.querySelectorAll("[data-count]").forEach((node) => {
      const target = Number(node.dataset.count || 0);
      const suffix = node.dataset.suffix || "";
      node.textContent = `${target}${suffix}`;
    });
  }

  function reportVisitor() {
    const storageKey = "econlyx-visitor-reported";

    try {
      if (sessionStorage.getItem(storageKey) === "1") return;
      sessionStorage.setItem(storageKey, "1");
    } catch (error) {
      // Private browsing modes can block storage; reporting can continue without deduping.
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const payload = {
      page: window.location.href,
      path: `${window.location.pathname}${window.location.search}`,
      title: document.title,
      referrer: document.referrer,
      language: navigator.language || "",
      timezone,
      screen: window.screen ? `${window.screen.width}x${window.screen.height}` : ""
    };

    try {
      fetch("/api/visitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
        credentials: "same-origin"
      }).catch(() => {});
    } catch (error) {
      // Ignore analytics failures so the site remains unaffected.
    }
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
  animateCounters();
  reportVisitor();

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("navbar__links--open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  function syncThemeIcon() {
    if (!themeToggle) return;
    const dark = root.dataset.theme === "dark";
    themeToggle.textContent = dark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  if (themeToggle) {
    syncThemeIcon();
    themeToggle.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("econlyx-theme", next);
      syncThemeIcon();
    });
  }

  document.querySelectorAll("[data-newsletter], [data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      const original = btn?.textContent;
      if (btn) btn.textContent = _t("form.sent", "✓ Sent (demo)");
      setTimeout(() => {
        if (btn && original) btn.textContent = original;
        form.reset();
      }, 2200);
    });
  });

  searchOpeners.forEach((button) => button.addEventListener("click", openSearch));
  if (searchModal) {
    searchModal.addEventListener("click", (event) => {
      if (event.target === searchModal || event.target.closest("[data-search-close]")) closeSearch();
    });
  }
  if (searchInput) {
    renderSearch("");
    searchInput.addEventListener("input", () => renderSearch(searchInput.value));
  }
  window.addEventListener("econlyx:languagechange", () => {
    // Rebuild search index with new language
    if (searchInput) renderSearch(searchInput.value || "");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSearch();
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });
  if (scrollTop) scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const cards = document.querySelectorAll(`[data-filter-card="${group.dataset.filterGroup}"]`);
    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      group.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("filter-bar__button--active"));
      button.classList.add("filter-bar__button--active");
      const filter = button.dataset.filter;
      cards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
})();
