(function () {
  const formulas = [
    { id: "gdp", category: "macro", title: "Expenditure GDP", titleRu: "ВВП по расходам", tex: "Y = C + I + G + (X - M)", explanation: "Measures national output through consumption, investment, government spending, and net exports.", explanationRu: "Измеряет национальный выпуск через потребление, инвестиции, государственные расходы и чистый экспорт.", example: "If C=500, I=120, G=180, X=90, M=70, then GDP = 820.", exampleRu: "Если C=500, I=120, G=180, X=90, M=70, то ВВП = 820." },
    { id: "real-gdp", category: "macro", title: "Real GDP", titleRu: "Реальный ВВП", tex: "\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{Price Index}} \\times 100", explanation: "Removes price-level changes so you can compare production over time.", explanationRu: "Убирает влияние изменения цен, чтобы сравнивать производство во времени.", example: "Nominal GDP 1200 and price index 125 gives real GDP 960.", exampleRu: "Номинальный ВВП 1200 и индекс цен 125 дают реальный ВВП 960." },
    { id: "inflation", category: "macro", title: "Inflation Rate", titleRu: "Темп инфляции", tex: "\\pi = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%", explanation: "Shows the percentage change in the consumer price index.", explanationRu: "Показывает процентное изменение индекса потребительских цен.", example: "CPI from 200 to 214 means inflation is 7%.", exampleRu: "CPI вырос с 200 до 214, значит инфляция равна 7%." },
    { id: "multiplier", category: "macro", title: "Spending Multiplier", titleRu: "Мультипликатор расходов", tex: "k = \\frac{1}{1 - MPC}", explanation: "Estimates how autonomous spending changes total output in a simple Keynesian model.", explanationRu: "Оценивает, как автономные расходы меняют общий выпуск в простой кейнсианской модели.", example: "MPC 0.8 gives multiplier 5.", exampleRu: "MPC 0.8 дает мультипликатор 5." },
    { id: "money", category: "macro", title: "Quantity Theory", titleRu: "Количественная теория денег", tex: "MV = PY", explanation: "Connects money supply, velocity, price level, and real output.", explanationRu: "Связывает денежную массу, скорость обращения, уровень цен и реальный выпуск.", example: "Useful for long-run money and inflation intuition.", exampleRu: "Полезна для долгосрочной интуиции о деньгах и инфляции." },
    { id: "elasticity", category: "micro", title: "Price Elasticity of Demand", titleRu: "Ценовая эластичность спроса", tex: "E_d = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}", explanation: "Measures how responsive quantity demanded is to price.", explanationRu: "Измеряет, насколько величина спроса реагирует на цену.", example: "A 12% drop in quantity after a 6% price rise gives elasticity -2.", exampleRu: "Падение количества на 12% после роста цены на 6% дает эластичность -2." },
    { id: "income-elasticity", category: "micro", title: "Income Elasticity", titleRu: "Эластичность по доходу", tex: "E_y = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}", explanation: "Separates normal, inferior, necessity, and luxury goods.", explanationRu: "Различает нормальные, инфериорные, необходимые и люксовые товары.", example: "If income rises 10% and demand rises 15%, Ey = 1.5.", exampleRu: "Если доход вырос на 10%, а спрос на 15%, то Ey = 1.5." },
    { id: "utility", category: "micro", title: "Marginal Utility", titleRu: "Предельная полезность", tex: "MU = \\frac{\\Delta TU}{\\Delta Q}", explanation: "The extra satisfaction from consuming one more unit.", explanationRu: "Дополнительная полезность от потребления еще одной единицы.", example: "Total utility from 40 to 47 after one unit means MU=7.", exampleRu: "Если общая полезность выросла с 40 до 47 после одной единицы, MU=7." },
    { id: "cost", category: "micro", title: "Average Total Cost", titleRu: "Средние общие издержки", tex: "ATC = \\frac{TC}{Q} = AFC + AVC", explanation: "A central cost curve for firm decisions and market structure questions.", explanationRu: "Ключевая кривая издержек для решений фирмы и задач о структуре рынка.", example: "TC 900 and Q 30 gives ATC 30.", exampleRu: "TC 900 и Q 30 дают ATC 30." },
    { id: "profit", category: "micro", title: "Profit", titleRu: "Прибыль", tex: "\\pi = TR - TC", explanation: "Economic profit subtracts both explicit and implicit costs.", explanationRu: "Экономическая прибыль вычитает явные и неявные издержки.", example: "Revenue 1000, total economic cost 860, profit 140.", exampleRu: "Выручка 1000, экономические издержки 860, прибыль 140." }
  ];

  const mount = document.querySelector("[data-formulas]");
  if (!mount) return;

  function lang() {
    return localStorage.getItem("econova-language") === "ru" ? "ru" : "en";
  }

  function pick(formula, key) {
    return lang() === "ru" ? formula[`${key}Ru`] : formula[key];
  }

  function render(category) {
    const visible = category === "all" ? formulas : formulas.filter((formula) => formula.category === category);
    mount.innerHTML = visible.map((formula) => `
      <article class="card formula-card" id="${formula.id}" data-filter-card="formulas" data-category="${formula.category}">
        <div class="formula-card__ornament" aria-hidden="true"></div>
        <span class="badge">${formula.category === "macro" ? (lang() === "ru" ? "макро" : "macro") : (lang() === "ru" ? "микро" : "micro")}</span>
        <h3>${pick(formula, "title")}</h3>
        <div class="formula-card__formula" data-tex="${formula.tex}">${formula.tex}</div>
        <p>${pick(formula, "explanation")}</p>
        <p class="muted">${pick(formula, "example")}</p>
        <div class="formula-card__footer">
          <small class="muted">${lang() === "ru" ? "Олимпиадный прием: определи переменные до подстановки." : "Olympiad use: identify variables before substituting."}</small>
          <button class="button button--ghost" data-copy="${formula.tex}">${lang() === "ru" ? "Копировать" : "Copy"}</button>
        </div>
      </article>
    `).join("");

    if (window.katex) {
      mount.querySelectorAll("[data-tex]").forEach((node) => {
        window.katex.render(node.dataset.tex, node, { throwOnError: false, displayMode: true });
      });
    }
  }

  render("all");
  document.addEventListener("click", (event) => {
    const copy = event.target.closest("[data-copy]");
    if (copy) {
      navigator.clipboard.writeText(copy.dataset.copy);
      copy.textContent = lang() === "ru" ? "Скопировано" : "Copied";
      setTimeout(() => { copy.textContent = lang() === "ru" ? "Копировать" : "Copy"; }, 1200);
    }
    const filter = event.target.closest("[data-formula-filter]");
    if (filter) {
      document.querySelectorAll("[data-formula-filter]").forEach((item) => item.classList.remove("filter-bar__button--active"));
      filter.classList.add("filter-bar__button--active");
      render(filter.dataset.formulaFilter);
    }
  });

  window.addEventListener("econova:languagechange", () => render(document.querySelector("[data-formula-filter].filter-bar__button--active")?.dataset.formulaFilter || "all"));
})();
