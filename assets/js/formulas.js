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
  const FORMULA_TRANSLATIONS = {
    "ky": {
      "gdp": {
        "title": "Чыгымдар ИДП",
        "explanation": "Улуттук өндүрүштү керектөө, инвестиция, мамлекеттик чыгымдар жана таза экспорт аркылуу өлчөйт.",
        "example": "Эгерде С=500, I=120, G=180, X=90, M=70, анда ИДП = 820."
      },
      "real-gdp": {
        "title": "Реалдуу ИДП",
        "explanation": "Убакыттын өтүшү менен өндүрүштү салыштыруу үчүн баа деңгээлиндеги өзгөрүүлөрдү алып салат.",
        "example": "Номиналдуу ИДП 1200 жана баа индекси 125 реалдуу ИДП 960 берет."
      },
      "inflation": {
        "title": "Инфляциянын деңгээли",
        "explanation": "Керектөө бааларынын индексинин пайыздык өзгөрүшүн көрсөтөт.",
        "example": "КБИ 200дөн 214кө чейин инфляция 7%ды түзөт."
      },
      "multiplier": {
        "title": "Чыгымдардын мультипликатору",
        "explanation": "Жөнөкөй Кейнсиан моделинде автономдуу чыгымдар жалпы өндүрүштүн кандай өзгөрүшүн болжолдойт.",
        "example": "MPC 0,8 көбөйтүүчү 5 берет."
      },
      "money": {
        "title": "Сандык теория",
        "explanation": "Акча сунушун, ылдамдыгын, баа деңгээлин жана реалдуу өндүрүштү байланыштырат.",
        "example": "Узак мөөнөттүү акча жана инфляция интуициясы үчүн пайдалуу."
      },
      "elasticity": {
        "title": "Суроо-талаптын баа ийкемдүүлүгү",
        "explanation": "Баага суроо-талаптын көлөмү канчалык деңгээлде жооп берерин өлчөйт.",
        "example": "6% кымбаттагандан кийин сандын 12% төмөндөшү ийкемдүүлүктү -2 берет."
      },
      "income-elasticity": {
        "title": "Киреше ийкемдүүлүгү",
        "explanation": "Кадимки, начар, зарылчылык жана кымбат баалуу буюмдарды ажыратат.",
        "example": "Киреше 10%, суроо-талап 15% өссө, Эй = 1,5."
      },
      "utility": {
        "title": "Marginal Utility",
        "explanation": "Дагы бир бирдикти керектөөдөн кошумча канааттануу.",
        "example": "Бир бирдиктен кийин 40тан 47ге чейинки жалпы пайдалуулук MU=7ди билдирет."
      },
      "cost": {
        "title": "Орточо жалпы наркы",
        "explanation": "Фирмалык чечимдер жана рынок түзүмү суроолору үчүн борбордук чыгым ийри сызыгы.",
        "example": "TC 900 жана Q 30 ATC 30 берет."
      },
      "profit": {
        "title": "Пайда",
        "explanation": "Экономикалык пайда ачык жана жашыруун чыгымдарды алып салат.",
        "example": "Киреше 1000, жалпы экономикалык чыгым 860, пайда 140."
      },
      "_ui": {
        "tip": "Олимпиаданы колдонуу: алмаштыруудан мурун өзгөрмөлөрдү аныктаңыз.",
        "copy": "Көчүрмө",
        "copied": "Көчүрүлгөн",
        "macro": "макро",
        "micro": "микро"
      }
    },
    "fr": {
      "gdp": {
        "title": "Dépenses PIB",
        "explanation": "Mesure la production nationale à travers la consommation, l’investissement, les dépenses publiques et les exportations nettes.",
        "example": "Si C=500, I=120, G=180, X=90, M=70, alors PIB = 820."
      },
      "real-gdp": {
        "title": "PIB réel",
        "explanation": "Supprime les changements de niveau de prix afin que vous puissiez comparer la production au fil du temps.",
        "example": "Un PIB nominal de 1 200 et un indice des prix de 125 donnent un PIB réel de 960."
      },
      "inflation": {
        "title": "Taux d'inflation",
        "explanation": "Affiche la variation en pourcentage de l'indice des prix à la consommation.",
        "example": "Un IPC de 200 à 214 signifie que l’inflation est de 7 %."
      },
      "multiplier": {
        "title": "Multiplicateur de dépenses",
        "explanation": "Estimation de la manière dont les dépenses autonomes modifient la production totale dans un modèle keynésien simple.",
        "example": "MPC 0.8 donne un multiplicateur 5."
      },
      "money": {
        "title": "Théorie des quantités",
        "explanation": "Relie la masse monétaire, la vélocité, le niveau des prix et la production réelle.",
        "example": "Utile pour l’argent à long terme et l’intuition de l’inflation."
      },
      "elasticity": {
        "title": "Élasticité-prix de la demande",
        "explanation": "Mesure la réactivité de la quantité demandée au prix.",
        "example": "Une baisse de quantité de 12 % après une hausse de prix de 6 % donne une élasticité de -2."
      },
      "income-elasticity": {
        "title": "Élasticité du revenu",
        "explanation": "Sépare les biens normaux, inférieurs, de nécessité et de luxe.",
        "example": "Si le revenu augmente de 10 % et la demande de 15 %, Ey = 1,5."
      },
      "utility": {
        "title": "Utilité marginale",
        "explanation": "La satisfaction supplémentaire de consommer une unité supplémentaire.",
        "example": "L'utilité totale de 40 à 47 après une unité signifie MU=7."
      },
      "cost": {
        "title": "Coût total moyen",
        "explanation": "Une courbe de coûts centrale pour les décisions d'entreprise et les questions de structure du marché.",
        "example": "TC 900 et Q 30 donnent ATC 30."
      },
      "profit": {
        "title": "Bénéfice",
        "explanation": "Le profit économique soustrait les coûts explicites et implicites.",
        "example": "Revenu 1 000, coût économique total 860, bénéfice 140."
      },
      "_ui": {
        "tip": "Utilisation de l'Olympiade : identifier les variables avant de les remplacer.",
        "copy": "Copier",
        "copied": "Copié",
        "macro": "macro",
        "micro": "micro"
      }
    },
    "es": {
      "gdp": {
        "title": "PIB gasto",
        "explanation": "Mide la producción nacional a través del consumo, la inversión, el gasto público y las exportaciones netas.",
        "example": "Si C=500, I=120, G=180, X=90, M=70, entonces PIB = 820."
      },
      "real-gdp": {
        "title": "PIB real",
        "explanation": "Elimina los cambios en el nivel de precios para que pueda comparar la producción a lo largo del tiempo.",
        "example": "Un PIB nominal de 1200 y un índice de precios de 125 dan un PIB real de 960."
      },
      "inflation": {
        "title": "Tasa de inflación",
        "explanation": "Muestra el cambio porcentual en el índice de precios al consumidor.",
        "example": "El IPC de 200 a 214 significa que la inflación es del 7%."
      },
      "multiplier": {
        "title": "Multiplicador de gastos",
        "explanation": "Estima cómo el gasto autónomo cambia la producción total en un modelo keynesiano simple.",
        "example": "MPC 0,8 da un multiplicador 5."
      },
      "money": {
        "title": "Teoría cuantitativa",
        "explanation": "Relaciona la oferta monetaria, la velocidad, el nivel de precios y la producción real.",
        "example": "Útil para el dinero a largo plazo y la intuición inflacionaria."
      },
      "elasticity": {
        "title": "Elasticidad precio de la demanda",
        "explanation": "Mide qué tan sensible es la cantidad demandada al precio.",
        "example": "Una caída del 12% en la cantidad después de un aumento del precio del 6% da una elasticidad -2."
      },
      "income-elasticity": {
        "title": "Elasticidad ingreso",
        "explanation": "Separa bienes normales, inferiores, de necesidad y de lujo.",
        "example": "Si la renta aumenta un 10% y la demanda aumenta un 15%, Ey = 1,5."
      },
      "utility": {
        "title": "Utilidad marginal",
        "explanation": "La satisfacción extra de consumir una unidad más.",
        "example": "La utilidad total de 40 a 47 después de una unidad significa MU=7."
      },
      "cost": {
        "title": "Costo total promedio",
        "explanation": "Una curva de costos central para decisiones firmes y cuestiones de estructura de mercado.",
        "example": "TC 900 y Q 30 dan ATC 30."
      },
      "profit": {
        "title": "beneficio",
        "explanation": "El beneficio económico resta los costos tanto explícitos como implícitos.",
        "example": "Ingresos 1000, coste económico total 860, beneficio 140."
      },
      "_ui": {
        "tip": "Uso olímpico: identificar variables antes de sustituirlas.",
        "copy": "Copiar",
        "copied": "copiado",
        "macro": "macro",
        "micro": "micrófono"
      }
    },
    "zh": {
      "gdp": {
        "title": "支出国内生产总值",
        "explanation": "通过消费、投资、政府支出和净出口衡量国民产出。",
        "example": "如果C=500、I=120、G=180、X=90、M=70，则GDP=820。"
      },
      "real-gdp": {
        "title": "实际GDP",
        "explanation": "消除价格水平变化，以便您可以比较一段时间内的产量。",
        "example": "名义 GDP 1200 和价格指数 125 得出实际 GDP 960。"
      },
      "inflation": {
        "title": "通货膨胀率",
        "explanation": "显示消费者价格指数的百分比变化。",
        "example": "CPI从200到214意味着通货膨胀率为7%。"
      },
      "multiplier": {
        "title": "支出乘数",
        "explanation": "在简单的凯恩斯主义模型中估计自主支出如何改变总产出。",
        "example": "MPC 0.8 给出乘数 5。"
      },
      "money": {
        "title": "数量论",
        "explanation": "连接货币供应量、流通速度、价格水平和实际产出。",
        "example": "对于长期货币和通胀直觉有用。"
      },
      "elasticity": {
        "title": "需求价格弹性",
        "explanation": "衡量需求数量对价格的反应程度。",
        "example": "价格上涨 6% 后数量下降 12% 则弹性为 -2。"
      },
      "income-elasticity": {
        "title": "收入弹性",
        "explanation": "区分普通、劣质、必需品和奢侈品。",
        "example": "如果收入增长 10%，需求增长 15%，则 Ey = 1.5。"
      },
      "utility": {
        "title": "边际效用",
        "explanation": "多消耗一单位带来额外的满足感。",
        "example": "一单位后的总效用从 40 到 47 意味着 MU=7。"
      },
      "cost": {
        "title": "平均总成本",
        "explanation": "公司决策和市场结构问题的中心成本曲线。",
        "example": "TC 900 和 Q 30 给出 ATC 30。"
      },
      "profit": {
        "title": "利润",
        "explanation": "经济利润减去显性成本和隐性成本。",
        "example": "收入1000，总经济成本860，利润140。"
      },
      "_ui": {
        "tip": "奥林匹克竞赛用途：在替换之前识别变量。",
        "copy": "复制",
        "copied": "已复制",
        "macro": "宏",
        "micro": "微"
      }
    }
  };

  const FORMULA_UI = {
    en: {"tip":"Olympiad use: identify variables before substituting.","copy":"Copy","copied":"Copied","macro":"macro","micro":"micro"},
    ru: {"tip":"Олимпиадный прием: определи переменные до подстановки.","copy":"Копировать","copied":"Скопировано","macro":"макро","micro":"микро"},
    ky: FORMULA_TRANSLATIONS.ky._ui,
    fr: FORMULA_TRANSLATIONS.fr._ui,
    es: FORMULA_TRANSLATIONS.es._ui,
    zh: FORMULA_TRANSLATIONS.zh._ui
  };

  const mount = document.querySelector("[data-formulas]");
  if (!mount) return;

  function lang() {
    const stored = localStorage.getItem("econlyx-language") || "en";
    return ["en", "ru", "ky", "fr", "es", "zh"].includes(stored) ? stored : "en";
  }

  function pick(formula, key) {
    if (lang() === "en") return formula[key];
    if (lang() === "ru") return formula[`${key}Ru`];
    return FORMULA_TRANSLATIONS[lang()]?.[formula.id]?.[key] || formula[key];
  }

  function ui(key) {
    return FORMULA_UI[lang()]?.[key] || FORMULA_UI.en[key];
  }

  function render(category) {
    const visible = category === "all" ? formulas : formulas.filter((formula) => formula.category === category);
    mount.innerHTML = visible.map((formula) => `
      <article class="card formula-card" id="${formula.id}" data-filter-card="formulas" data-category="${formula.category}">
        <span class="badge">${ui(formula.category)}</span>
        <h3>${pick(formula, "title")}</h3>
        <div class="formula-card__formula" data-tex="${formula.tex}">${formula.tex}</div>
        <p>${pick(formula, "explanation")}</p>
        <p class="muted">${pick(formula, "example")}</p>
        <div class="formula-card__footer">
          <small class="muted">${ui("tip")}</small>
          <button class="button button--ghost" data-copy="${formula.tex}">${ui("copy")}</button>
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
      copy.textContent = ui("copied");
      setTimeout(() => { copy.textContent = ui("copy"); }, 1200);
    }
    const filter = event.target.closest("[data-formula-filter]");
    if (filter) {
      document.querySelectorAll("[data-formula-filter]").forEach((item) => item.classList.remove("filter-bar__button--active"));
      filter.classList.add("filter-bar__button--active");
      render(filter.dataset.formulaFilter);
    }
  });

  window.addEventListener("econlyx:languagechange", () => render(document.querySelector("[data-formula-filter].filter-bar__button--active")?.dataset.formulaFilter || "all"));
})();
