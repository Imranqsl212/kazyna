(function () {
  const terms = [
    ["Absolute advantage", "Ability to produce more output with the same resources."],
    ["Aggregate demand", "Total planned spending on domestic output at each price level."],
    ["Aggregate supply", "Total output firms are willing to produce at each price level."],
    ["Allocative efficiency", "Resources go to the goods society values most."],
    ["Appreciation", "Increase in a currency's value under floating exchange rates."],
    ["Arbitrage", "Buying and selling to profit from price differences."],
    ["Average cost", "Total cost divided by quantity."],
    ["Balance of payments", "Record of economic transactions with the rest of the world."],
    ["Barriers to entry", "Obstacles preventing firms from entering a market."],
    ["Bond", "Debt security that promises future payments."],
    ["Budget deficit", "Government spending exceeds revenue in a period."],
    ["Business cycle", "Fluctuations around long-run economic growth."],
    ["Capital", "Produced inputs used to make other goods and services."],
    ["Cartel", "Group of firms coordinating output or price."],
    ["Central bank", "Institution managing money, credit, and financial stability."],
    ["Ceteris paribus", "Holding other relevant factors constant."],
    ["Circular flow", "Model of flows between households, firms, government, and foreign sector."],
    ["Comparative advantage", "Ability to produce at lower opportunity cost."],
    ["Complements", "Goods consumed together, such as phones and data plans."],
    ["Consumer surplus", "Benefit buyers receive above what they pay."],
    ["Consumption", "Household spending on goods and services."],
    ["Cost-push inflation", "Inflation caused by higher production costs."],
    ["Cross elasticity", "Responsiveness of demand for one good to price of another."],
    ["Crowding out", "Government borrowing reduces private investment."],
    ["Deadweight loss", "Lost total surplus from inefficient output."],
    ["Deflation", "Sustained decrease in the general price level."],
    ["Demand", "Quantities buyers are willing and able to purchase at prices."],
    ["Demand-pull inflation", "Inflation caused by excessive aggregate demand."],
    ["Depreciation", "Decrease in a currency's value under floating exchange rates."],
    ["Diminishing returns", "Extra output eventually falls as one input increases."],
    ["Discount rate", "Interest rate central banks charge commercial banks."],
    ["Disposable income", "Income after taxes and transfers."],
    ["Dominant strategy", "Best strategy regardless of the rival's action."],
    ["Economic growth", "Increase in an economy's productive capacity."],
    ["Economic profit", "Revenue minus explicit and implicit costs."],
    ["Elastic demand", "Quantity responds more than proportionally to price."],
    ["Elasticity", "Responsiveness of one variable to another."],
    ["Equilibrium", "State where quantity demanded equals quantity supplied."],
    ["Exchange rate", "Price of one currency in terms of another."],
    ["Externality", "Side effect on third parties not reflected in market price."],
    ["Fiscal policy", "Government use of spending and taxation."],
    ["Fixed cost", "Cost that does not vary with output in the short run."],
    ["Free rider", "Someone benefiting without paying for a public good."],
    ["Game theory", "Study of strategic interaction."],
    ["GDP", "Market value of final goods and services produced domestically."],
    ["Gini coefficient", "Measure of income inequality from 0 to 1."],
    ["Human capital", "Skills, knowledge, and health embodied in workers."],
    ["Incentive", "Reward or penalty influencing behavior."],
    ["Income elasticity", "Demand response to income changes."],
    ["Inferior good", "Good demanded less as income rises."],
    ["Inflation", "Sustained rise in the general price level."],
    ["Interest rate", "Price of borrowing or return to lending."],
    ["Investment", "Spending on capital goods, inventories, and structures."],
    ["IS-LM model", "Model linking goods and money market equilibrium."],
    ["Labor force", "People employed or actively seeking work."],
    ["Liquidity", "Ease of converting an asset into money."],
    ["Long run", "Period where all inputs can adjust."],
    ["Marginal benefit", "Extra benefit from one more unit."],
    ["Marginal cost", "Extra cost from one more unit."],
    ["Marginal propensity to consume", "Share of extra income spent."],
    ["Marginal revenue", "Extra revenue from selling one more unit."],
    ["Market failure", "When markets do not maximize total surplus."],
    ["Monetary policy", "Central bank actions affecting money and credit."],
    ["Money multiplier", "Potential expansion of deposits from reserves."],
    ["Monopolistic competition", "Many firms selling differentiated products."],
    ["Monopoly", "Single seller with market power."],
    ["Moral hazard", "Riskier behavior when protected from consequences."],
    ["Multiplier", "Amplified output effect from spending changes."],
    ["Natural monopoly", "One firm can supply market at lower cost."],
    ["Nominal GDP", "GDP measured at current prices."],
    ["Normal good", "Good demanded more as income rises."],
    ["Oligopoly", "Market dominated by a few strategic firms."],
    ["Opportunity cost", "Value of the next best alternative."],
    ["Phillips curve", "Short-run relationship between inflation and unemployment."],
    ["Price ceiling", "Legal maximum price."],
    ["Price floor", "Legal minimum price."],
    ["Price index", "Measure of average prices relative to a base period."],
    ["Producer surplus", "Benefit sellers receive above minimum acceptable price."],
    ["Productivity", "Output per unit of input."],
    ["Public good", "Non-rival and non-excludable good."],
    ["Purchasing power parity", "Exchange rate concept based on equal purchasing power."],
    ["Quota", "Quantity limit on trade or production."],
    ["Rational choice", "Decision-making by comparing marginal benefits and costs."],
    ["Real GDP", "GDP adjusted for inflation."],
    ["Recession", "Significant decline in economic activity."],
    ["Reserve requirement", "Minimum reserves banks must hold."],
    ["Scarcity", "Limited resources relative to wants."],
    ["Shortage", "Quantity demanded exceeds supplied at a price."],
    ["Short run", "Period where at least one input is fixed."],
    ["Stagflation", "High inflation with weak growth and unemployment."],
    ["Subsidy", "Payment lowering producer cost or consumer price."],
    ["Substitutes", "Goods that can replace each other."],
    ["Supply", "Quantities sellers are willing and able to sell at prices."],
    ["Surplus", "Quantity supplied exceeds demanded at a price."],
    ["Tariff", "Tax on imports."],
    ["Total revenue", "Price multiplied by quantity sold."],
    ["Trade-off", "Choice requiring sacrifice of another option."],
    ["Unemployment rate", "Unemployed divided by labor force."],
    ["Utility", "Satisfaction or benefit from consumption."],
    ["Variable cost", "Cost that changes with output."],
    ["Velocity", "Average frequency money is used to buy final output."],
    ["Welfare economics", "Study of how allocation affects social well-being."]
  ];

  const ruTerms = {
    "Absolute advantage": ["Абсолютное преимущество", "Способность производить больше выпуска при тех же ресурсах."],
    "Aggregate demand": ["Совокупный спрос", "Общие планируемые расходы на внутренний выпуск при каждом уровне цен."],
    "Aggregate supply": ["Совокупное предложение", "Общий выпуск, который фирмы готовы произвести при каждом уровне цен."],
    "Allocative efficiency": ["Аллокативная эффективность", "Ресурсы направлены на товары, которые общество ценит сильнее всего."],
    "Appreciation": ["Укрепление валюты", "Рост стоимости валюты при плавающем обменном курсе."],
    "Arbitrage": ["Арбитраж", "Покупка и продажа ради прибыли на разнице цен."],
    "Average cost": ["Средние издержки", "Общие издержки, деленные на количество выпуска."],
    "Balance of payments": ["Платежный баланс", "Запись экономических операций со всем остальным миром."],
    "Barriers to entry": ["Барьеры входа", "Препятствия, мешающие фирмам войти на рынок."],
    "Bond": ["Облигация", "Долговая ценная бумага, обещающая будущие выплаты."],
    "Budget deficit": ["Бюджетный дефицит", "Государственные расходы превышают доходы за период."],
    "Business cycle": ["Деловой цикл", "Колебания вокруг долгосрочного экономического роста."],
    "Capital": ["Капитал", "Произведенные ресурсы, используемые для создания других товаров и услуг."],
    "Cartel": ["Картель", "Группа фирм, координирующих выпуск или цену."],
    "Central bank": ["Центральный банк", "Институт, управляющий деньгами, кредитом и финансовой стабильностью."],
    "Ceteris paribus": ["Ceteris paribus", "Предположение, что остальные важные факторы неизменны."],
    "Circular flow": ["Кругооборот", "Модель потоков между домохозяйствами, фирмами, государством и внешним сектором."],
    "Comparative advantage": ["Сравнительное преимущество", "Способность производить с меньшими альтернативными издержками."],
    "Complements": ["Комплементы", "Товары, потребляемые вместе, например телефон и мобильный интернет."],
    "Consumer surplus": ["Излишек потребителя", "Выгода покупателей сверх того, что они платят."],
    "Consumption": ["Потребление", "Расходы домохозяйств на товары и услуги."],
    "Cost-push inflation": ["Инфляция издержек", "Инфляция, вызванная ростом производственных издержек."],
    "Cross elasticity": ["Перекрестная эластичность", "Реакция спроса на один товар на изменение цены другого товара."],
    "Crowding out": ["Эффект вытеснения", "Государственные заимствования сокращают частные инвестиции."],
    "Deadweight loss": ["Чистые потери", "Потерянный общий излишек из-за неэффективного объема выпуска."],
    "Deflation": ["Дефляция", "Устойчивое снижение общего уровня цен."],
    "Demand": ["Спрос", "Количество, которое покупатели готовы и способны купить при разных ценах."],
    "Demand-pull inflation": ["Инфляция спроса", "Инфляция, вызванная чрезмерным совокупным спросом."],
    "Depreciation": ["Обесценение валюты", "Снижение стоимости валюты при плавающем обменном курсе."],
    "Diminishing returns": ["Убывающая отдача", "Дополнительный выпуск со временем падает при увеличении одного ресурса."],
    "Discount rate": ["Учетная ставка", "Процентная ставка, по которой центральный банк кредитует коммерческие банки."],
    "Disposable income": ["Располагаемый доход", "Доход после налогов и трансфертов."],
    "Dominant strategy": ["Доминирующая стратегия", "Лучшая стратегия независимо от действия соперника."],
    "Economic growth": ["Экономический рост", "Увеличение производственного потенциала экономики."],
    "Economic profit": ["Экономическая прибыль", "Выручка минус явные и неявные издержки."],
    "Elastic demand": ["Эластичный спрос", "Количество реагирует на цену более чем пропорционально."],
    "Elasticity": ["Эластичность", "Чувствительность одной переменной к изменению другой."],
    "Equilibrium": ["Равновесие", "Состояние, где величина спроса равна величине предложения."],
    "Exchange rate": ["Обменный курс", "Цена одной валюты, выраженная в другой валюте."],
    "Externality": ["Внешний эффект", "Побочный эффект для третьих лиц, не отраженный в рыночной цене."],
    "Fiscal policy": ["Фискальная политика", "Использование государственных расходов и налогов."],
    "Fixed cost": ["Постоянные издержки", "Издержки, которые не меняются с выпуском в краткосрочном периоде."],
    "Free rider": ["Безбилетник", "Тот, кто получает выгоду от общественного блага, не платя за него."],
    "Game theory": ["Теория игр", "Изучение стратегического взаимодействия."],
    "GDP": ["ВВП", "Рыночная стоимость конечных товаров и услуг, произведенных внутри страны."],
    "Gini coefficient": ["Коэффициент Джини", "Показатель неравенства доходов от 0 до 1."],
    "Human capital": ["Человеческий капитал", "Навыки, знания и здоровье работников."],
    "Incentive": ["Стимул", "Награда или наказание, влияющие на поведение."],
    "Income elasticity": ["Эластичность по доходу", "Реакция спроса на изменение дохода."],
    "Inferior good": ["Инфериорный товар", "Товар, спрос на который падает при росте дохода."],
    "Inflation": ["Инфляция", "Устойчивый рост общего уровня цен."],
    "Interest rate": ["Процентная ставка", "Цена заимствования или доходность кредитования."],
    "Investment": ["Инвестиции", "Расходы на капитальные товары, запасы и сооружения."],
    "IS-LM model": ["Модель IS-LM", "Модель равновесия на товарном и денежном рынках."],
    "Labor force": ["Рабочая сила", "Занятые и те, кто активно ищет работу."],
    "Liquidity": ["Ликвидность", "Легкость превращения актива в деньги."],
    "Long run": ["Долгосрочный период", "Период, в котором все ресурсы могут изменяться."],
    "Marginal benefit": ["Предельная выгода", "Дополнительная выгода от еще одной единицы."],
    "Marginal cost": ["Предельные издержки", "Дополнительные издержки от еще одной единицы."],
    "Marginal propensity to consume": ["Предельная склонность к потреблению", "Доля дополнительного дохода, которая тратится."],
    "Marginal revenue": ["Предельная выручка", "Дополнительная выручка от продажи еще одной единицы."],
    "Market failure": ["Провал рынка", "Ситуация, когда рынок не максимизирует общий излишек."],
    "Monetary policy": ["Монетарная политика", "Действия центрального банка, влияющие на деньги и кредит."],
    "Money multiplier": ["Денежный мультипликатор", "Потенциальное расширение депозитов через резервы."],
    "Monopolistic competition": ["Монополистическая конкуренция", "Много фирм продают дифференцированные продукты."],
    "Monopoly": ["Монополия", "Единственный продавец с рыночной властью."],
    "Moral hazard": ["Моральный риск", "Более рискованное поведение при защите от последствий."],
    "Multiplier": ["Мультипликатор", "Усиленный эффект изменения расходов на выпуск."],
    "Natural monopoly": ["Естественная монополия", "Одна фирма может снабжать рынок с меньшими издержками."],
    "Nominal GDP": ["Номинальный ВВП", "ВВП, измеренный в текущих ценах."],
    "Normal good": ["Нормальный товар", "Товар, спрос на который растет при росте дохода."],
    "Oligopoly": ["Олигополия", "Рынок, где доминируют несколько стратегически зависимых фирм."],
    "Opportunity cost": ["Альтернативные издержки", "Ценность лучшей упущенной альтернативы."],
    "Phillips curve": ["Кривая Филлипса", "Краткосрочная связь между инфляцией и безработицей."],
    "Price ceiling": ["Потолок цены", "Законодательно установленная максимальная цена."],
    "Price floor": ["Минимальная цена", "Законодательно установленная минимальная цена."],
    "Price index": ["Индекс цен", "Показатель средних цен относительно базового периода."],
    "Producer surplus": ["Излишек производителя", "Выгода продавцов сверх минимально приемлемой цены."],
    "Productivity": ["Производительность", "Выпуск на единицу ресурса."],
    "Public good": ["Общественное благо", "Неконкурентное и неисключаемое благо."],
    "Purchasing power parity": ["Паритет покупательной способности", "Идея обменного курса на основе равной покупательной способности."],
    "Quota": ["Квота", "Количественное ограничение торговли или производства."],
    "Rational choice": ["Рациональный выбор", "Принятие решений через сравнение предельных выгод и издержек."],
    "Real GDP": ["Реальный ВВП", "ВВП с поправкой на инфляцию."],
    "Recession": ["Рецессия", "Значительное снижение экономической активности."],
    "Reserve requirement": ["Норма резервирования", "Минимальные резервы, которые банки обязаны держать."],
    "Scarcity": ["Редкость ресурсов", "Ограниченность ресурсов относительно желаний."],
    "Shortage": ["Дефицит", "Величина спроса превышает величину предложения при данной цене."],
    "Short run": ["Краткосрочный период", "Период, в котором хотя бы один ресурс фиксирован."],
    "Stagflation": ["Стагфляция", "Высокая инфляция при слабом росте и безработице."],
    "Subsidy": ["Субсидия", "Платеж, снижающий издержки производителя или цену для потребителя."],
    "Substitutes": ["Субституты", "Товары, которые могут заменять друг друга."],
    "Supply": ["Предложение", "Количество, которое продавцы готовы и способны продать при разных ценах."],
    "Surplus": ["Излишек", "Величина предложения превышает величину спроса при данной цене."],
    "Tariff": ["Тариф", "Налог на импорт."],
    "Total revenue": ["Общая выручка", "Цена, умноженная на проданное количество."],
    "Trade-off": ["Компромисс", "Выбор, требующий отказа от другой возможности."],
    "Unemployment rate": ["Уровень безработицы", "Безработные, деленные на рабочую силу."],
    "Utility": ["Полезность", "Удовлетворение или выгода от потребления."],
    "Variable cost": ["Переменные издержки", "Издержки, которые меняются с выпуском."],
    "Velocity": ["Скорость обращения денег", "Средняя частота использования денег для покупки конечного выпуска."],
    "Welfare economics": ["Экономика благосостояния", "Изучение влияния распределения ресурсов на общественное благополучие."]
  };

  const mount = document.querySelector("[data-glossary]");
  const search = document.querySelector("[data-glossary-search]");
  const letters = document.querySelector("[data-glossary-letters]");
  if (!mount) return;

  function render(query = "", letter = "all") {
    const q = query.toLowerCase();
    const filtered = terms.filter(([term, def]) => {
      const localized = localize(term, def);
      const matchesQuery = `${term} ${def} ${localized[0]} ${localized[1]}`.toLowerCase().includes(q);
      const matchesLetter = letter === "all" || term[0].toUpperCase() === letter || localized[0][0].toUpperCase() === letter;
      return matchesQuery && matchesLetter;
    });
    mount.innerHTML = filtered.map(([term, def]) => {
      const [title, description] = localize(term, def);
      return `
      <article class="card">
        <span class="badge">${title[0].toUpperCase()}</span>
        <h3>${title}</h3>
        <p class="muted">${description}</p>
      </article>
    `;
    }).join("") || `<p class="muted">${isRu() ? "Нет терминов по этому фильтру." : "No terms match this filter."}</p>`;
  }

  function isRu() {
    return localStorage.getItem("kazyna-language") === "ru";
  }

  function localize(term, def) {
    return isRu() && ruTerms[term] ? ruTerms[term] : [term, def];
  }

  if (letters) {
    const alphabet = ["all", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    letters.innerHTML = alphabet.map((letter) => `<button class="filter-bar__button ${letter === "all" ? "filter-bar__button--active" : ""}" data-letter="${letter}">${letter}</button>`).join("");
    letters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-letter]");
      if (!button) return;
      letters.querySelectorAll("button").forEach((item) => item.classList.remove("filter-bar__button--active"));
      button.classList.add("filter-bar__button--active");
      render(search ? search.value : "", button.dataset.letter);
    });
  }
  if (search) search.addEventListener("input", () => render(search.value, letters.querySelector(".filter-bar__button--active").dataset.letter));
  window.addEventListener("kazyna:languagechange", () => render(search ? search.value : "", letters.querySelector(".filter-bar__button--active").dataset.letter));
  render();
})();
