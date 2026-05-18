(function () {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar__link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const file = href.split("/").pop() || "index.html";
    if (file === current) link.classList.add("navbar__link--active");
  });
})();
