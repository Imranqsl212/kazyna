(function () {
  const root = document.documentElement;
  // Always use light theme
  root.dataset.theme = "light";

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
