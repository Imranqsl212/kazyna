/* ============================================================
   Tabs — Эконова
   Handles the three-tab system on the homepage
   ============================================================ */
(function () {
  'use strict';

  function initTabs(container) {
    const buttons = container.querySelectorAll('[data-tab]');
    const panels = container.querySelectorAll('.tabs__panel');

    if (!buttons.length || !panels.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.dataset.tab;

        // Update buttons
        buttons.forEach(function (b) {
          b.classList.remove('tabs__btn--active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('tabs__btn--active');
        btn.setAttribute('aria-selected', 'true');

        // Update panels
        panels.forEach(function (panel) {
          panel.classList.remove('tabs__panel--active');
        });

        const targetPanel = container.querySelector('#tab-' + target);
        if (targetPanel) {
          targetPanel.classList.add('tabs__panel--active');
        }
      });
    });

    // Keyboard navigation
    container.querySelector('.tabs__nav').addEventListener('keydown', function (e) {
      const btns = Array.from(buttons);
      const idx = btns.indexOf(document.activeElement);
      if (idx === -1) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        btns[(idx + 1) % btns.length].focus();
        btns[(idx + 1) % btns.length].click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        btns[(idx - 1 + btns.length) % btns.length].focus();
        btns[(idx - 1 + btns.length) % btns.length].click();
      }
    });
  }

  document.querySelectorAll('[data-tabs]').forEach(initTabs);
})();
