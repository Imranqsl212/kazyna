(function () {
  if (!window.Chart) return;

  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: { legend: { labels: { color: "#fff" } } }
  };

  function getLabels() {
    const t = window.kazynaI18n ? window.kazynaI18n.t : (k) => k;
    return [
      t("chart.households"),
      t("chart.firms"),
      t("chart.government"),
      t("chart.external")
    ];
  }

  const chartInstances = [];

  document.querySelectorAll("[data-chart]").forEach((canvas) => {
    const chart = new Chart(canvas, {
      type: canvas.dataset.chart,
      data: {
        labels: getLabels(),
        datasets: [{ data: [42, 28, 18, 12], backgroundColor: ["#c9952f", "#a6362f", "#143a5f", "#6f7f8f"] }]
      },
      options: {
        ...chartDefaults,
        plugins: { legend: { position: "bottom" } }
      }
    });
    chartInstances.push(chart);
  });

  window.addEventListener("kazyna:languagechange", () => {
    const labels = getLabels();
    chartInstances.forEach((chart) => {
      chart.data.labels = labels;
      chart.update();
    });
  });
})();
