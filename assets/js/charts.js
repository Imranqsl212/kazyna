(function () {
  if (!window.Chart) return;

  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: { legend: { labels: { color: "#fff" } } }
  };

  document.querySelectorAll("[data-chart]").forEach((canvas) => {
    new Chart(canvas, {
      type: canvas.dataset.chart,
      data: {
        labels: ["Households", "Firms", "Government", "External"],
        datasets: [{ data: [42, 28, 18, 12], backgroundColor: ["#c9952f", "#a6362f", "#143a5f", "#6f7f8f"] }]
      },
      options: {
        ...chartDefaults,
        plugins: { legend: { position: "bottom" } }
      }
    });
  });
})();
