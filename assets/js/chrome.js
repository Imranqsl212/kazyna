(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("kazyna-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = stored || (prefersDark ? "dark" : "light");

  function injectStripe() {
    if (document.querySelector(".gov-stripe")) return;
    const stripe = document.createElement("div");
    stripe.className = "gov-stripe";
    stripe.setAttribute("aria-hidden", "true");
    document.body.insertBefore(stripe, document.body.firstChild);
  }

  if (document.body) injectStripe();
  else document.addEventListener("DOMContentLoaded", injectStripe);
})();
