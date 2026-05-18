(function () {
  const tests = {
    macro: [
      { q: "Which component is not part of expenditure GDP?", qRu: "Какой компонент не входит в ВВП по расходам?", a: ["Consumption", "Investment", "Money velocity", "Net exports"], aRu: ["Потребление", "Инвестиции", "Скорость обращения денег", "Чистый экспорт"], correct: 2, exp: "Velocity appears in MV=PY, not in Y=C+I+G+(X-M).", expRu: "Скорость обращения относится к MV=PY, а не к Y=C+I+G+(X-M)." },
      { q: "If MPC is 0.75, the simple spending multiplier is:", qRu: "Если MPC равен 0.75, простой мультипликатор расходов равен:", a: ["1.33", "2", "4", "7.5"], aRu: ["1.33", "2", "4", "7.5"], correct: 2, exp: "k = 1/(1-MPC) = 1/0.25 = 4.", expRu: "k = 1/(1-MPC) = 1/0.25 = 4." },
      { q: "Contractionary monetary policy usually aims to:", qRu: "Сдерживающая монетарная политика обычно направлена на то, чтобы:", a: ["Raise aggregate demand", "Reduce inflation pressure", "Lower interest rates", "Increase money growth"], aRu: ["Повысить совокупный спрос", "Снизить инфляционное давление", "Снизить процентные ставки", "Ускорить рост денежной массы"], correct: 1, exp: "It cools demand through tighter money and often higher rates.", expRu: "Она охлаждает спрос через более жесткие денежные условия и часто более высокие ставки." },
      { q: "Real GDP rises while nominal GDP is flat. This most likely means:", qRu: "Реальный ВВП растет, а номинальный ВВП не меняется. Скорее всего:", a: ["Prices are rising", "Prices are falling", "Unemployment must be zero", "Exports equal imports"], aRu: ["Цены растут", "Цены падают", "Безработица равна нулю", "Экспорт равен импорту"], correct: 1, exp: "Flat nominal with higher real implies lower price level or deflation.", expRu: "Номинальный не меняется при росте реального — значит ценовой уровень снижается." },
      { q: "Cost-push inflation in AD-AS is shown by:", qRu: "Инфляция издержек на графике AD-AS — это:", a: ["AD shifts right", "SRAS shifts left", "LRAS shifts right", "AD shifts left only"], aRu: ["Сдвиг AD вправо", "Сдвиг SRAS влево", "Сдвиг LRAS вправо", "Только сдвиг AD влево"], correct: 1, exp: "Higher input costs reduce supply at each price level.", expRu: "Рост издержек снижает предложение при каждом уровне цен." }
    ],
    micro: [
      { q: "A price ceiling below equilibrium creates:", qRu: "Потолок цены ниже равновесия создает:", a: ["Surplus", "Shortage", "No trade", "Higher supply"], aRu: ["Излишек", "Дефицит", "Отсутствие торговли", "Рост предложения"], correct: 1, exp: "Quantity demanded exceeds quantity supplied.", expRu: "Величина спроса превышает величину предложения." },
      { q: "Demand is elastic when |Ed| is:", qRu: "Спрос эластичен, когда |Ed|:", a: ["Less than 1", "Equal to 0", "Greater than 1", "Always negative"], aRu: ["Меньше 1", "Равен 0", "Больше 1", "Всегда отрицателен"], correct: 2, exp: "Elastic demand responds more than proportionally to price.", expRu: "Эластичный спрос реагирует на цену более чем пропорционально." },
      { q: "A dominant strategy is best:", qRu: "Доминирующая стратегия является лучшей:", a: ["Only if rivals cooperate", "No matter what rivals do", "Only in monopoly", "Only when prices are fixed"], aRu: ["Только если соперники сотрудничают", "Независимо от действий соперников", "Только в монополии", "Только при фиксированных ценах"], correct: 1, exp: "It wins against every possible strategy of the opponent.", expRu: "Она лучшая против любой возможной стратегии соперника." },
      { q: "If demand is inelastic, a price increase will:", qRu: "При неэластичном спросе рост цены:", a: ["Lower total revenue", "Raise total revenue", "Leave revenue unchanged always", "Eliminate consumer surplus"], aRu: ["Снизит выручку", "Повысит выручку", "Всегда не изменит выручку", "Уничтожит излишек потребителя"], correct: 1, exp: "Quantity falls by a smaller percentage than price rises.", expRu: "Количество падает на меньший процент, чем растет цена." },
      { q: "A tax on sellers in a competitive market tends to:", qRu: "Налог на продавцов на конкурентном рынке обычно:", a: ["Shift supply left", "Shift demand right", "Increase equilibrium quantity", "Remove deadweight loss"], aRu: ["Сдвигает предложение влево", "Сдвигает спрос вправо", "Увеличивает равновесное количество", "Убирает потери общества"], correct: 0, exp: "Higher marginal cost reduces supply at each price.", expRu: "Рост предельных издержек снижает предложение при каждой цене." }
    ],
    olympiad: [
      { q: "Best first step in a word problem with many numbers?", qRu: "Лучший первый шаг в текстовой задаче с большим количеством чисел?", a: ["Calculate immediately", "Draw structure and define variables", "Skip to answer choices", "Memorize formulas"], aRu: ["Сразу считать", "Нарисовать структуру и определить переменные", "Перейти к вариантам ответа", "Заучить формулы"], correct: 1, exp: "Olympiad problems reward modeling before arithmetic.", expRu: "Олимпиадные задачи вознаграждают моделирование до арифметики." },
      { q: "A comparative advantage problem asks you to compare:", qRu: "Задача на сравнительное преимущество просит сравнить:", a: ["Absolute output", "Opportunity costs", "GDP levels", "Market prices only"], aRu: ["Абсолютный выпуск", "Альтернативные издержки", "Уровни ВВП", "Только рыночные цены"], correct: 1, exp: "Lower opportunity cost determines comparative advantage.", expRu: "Сравнительное преимущество определяется меньшими альтернативными издержками." },
      { q: "When a graph shifts, always identify:", qRu: "Когда график сдвигается, всегда определяй:", a: ["Axis labels and ceteris paribus change", "The longest sentence", "Only the intercept", "The source country"], aRu: ["Подписи осей и изменение ceteris paribus", "Самое длинное предложение", "Только точку пересечения", "Страну происхождения"], correct: 0, exp: "Correct graph logic starts with variables and the shock.", expRu: "Правильная логика графика начинается с переменных и шока." },
      { q: "After solving, the best review habit is:", qRu: "Лучшая привычка после решения:", a: ["Memorize the final number only", "Write what assumption drove the result", "Skip diagrams", "Change the question"], aRu: ["Запомнить только итоговое число", "Записать, какая предпосылка дала результат", "Пропустить графики", "Изменить условие задачи"], correct: 1, exp: "Reflection turns mistakes into reusable rules.", expRu: "Разбор превращает ошибки в правила." },
      { q: "In a 90-minute contest, time boxing means:", qRu: "Тайм-боксинг на 90-минутном конкурсе — это:", a: ["Spend all time on one hard problem", "Allocate minutes per problem and move on", "Ignore easy questions", "Never check units"], aRu: ["Потратить все время на одну сложную задачу", "Выделить минуты на задачу и идти дальше", "Игнорировать легкие вопросы", "Не проверять размерности"], correct: 1, exp: "Coverage beats perfection on one item.", expRu: "Охват важнее идеального решения одной задачи." }
    ]
  };

  const mount = document.querySelector("[data-test-app]");
  if (!mount) return;

  let topic = "macro";
  let index = 0;
  let score = 0;
  let answered = false;
  let seconds = 300;
  let timer;

  function lang() {
    return localStorage.getItem("kazyna-language") === "ru" ? "ru" : "en";
  }

  function label(en, ru) {
    return lang() === "ru" ? ru : en;
  }

  function currentSet() {
    return tests[topic];
  }

  function render() {
    const item = currentSet()[index];
    const answers = lang() === "ru" ? item.aRu : item.a;
    mount.innerHTML = `
      <div class="filter-bar" role="tablist">
        ${Object.keys(tests).map((key) => {
          const labels = { macro: ["Macro", "Макро"], micro: ["Micro", "Микро"], olympiad: ["Olympiad", "Олимпиада"] };
          const text = label(labels[key][0], labels[key][1]);
          return `<button class="filter-bar__button ${key === topic ? "filter-bar__button--active" : ""}" data-topic="${key}">${text}</button>`;
        }).join("")}
      </div>
      <div class="card test">
        <div class="test__meta muted">${label("Question", "Вопрос")} ${index + 1}/${currentSet().length} · ${label("Score", "Счет")} ${score} · ${label("Time", "Время")} ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}</div>
        <progress value="${index}" max="${currentSet().length}"></progress>
        <h3>${label(item.q, item.qRu)}</h3>
        <div class="stack">
          ${answers.map((answer, i) => `<button class="test__option" data-answer="${i}">${answer}</button>`).join("")}
        </div>
        <p class="test__explanation muted" data-explanation></p>
        <button class="button button--primary" data-next>${index === currentSet().length - 1 ? label("Finish", "Завершить") : label("Next question", "Следующий вопрос")}</button>
      </div>
    `;
  }

  function reset(nextTopic) {
    topic = nextTopic || topic;
    index = 0;
    score = 0;
    answered = false;
    seconds = 300;
    render();
  }

  document.addEventListener("click", (event) => {
    const topicButton = event.target.closest("[data-topic]");
    if (topicButton) reset(topicButton.dataset.topic);

    const answerButton = event.target.closest("[data-answer]");
    if (answerButton && !answered) {
      answered = true;
      const selected = Number(answerButton.dataset.answer);
      const item = currentSet()[index];
      if (selected === item.correct) score += 1;
      mount.querySelectorAll("[data-answer]").forEach((button) => {
        const value = Number(button.dataset.answer);
        if (value === item.correct) button.classList.add("test__option--correct");
        if (value === selected && value !== item.correct) button.classList.add("test__option--wrong");
      });
      mount.querySelector("[data-explanation]").textContent = label(item.exp, item.expRu);
    }

    if (event.target.closest("[data-next]")) {
      if (index < currentSet().length - 1) {
        index += 1;
        answered = false;
        render();
      } else {
        mount.innerHTML = `<div class="card center"><h2>${score}/${currentSet().length}</h2><p class="text-lead center">${label("Your result is saved in the session. Review explanations, then try a different topic.", "Результат сохранен в текущей сессии. Разбери объяснения и попробуй другую тему.")}</p><button class="button button--gold" data-restart>${label("Restart", "Начать заново")}</button></div>`;
      }
    }

    if (event.target.closest("[data-restart]")) reset(topic);
  });

  timer = setInterval(() => {
    seconds -= 1;
    const meta = mount.querySelector(".test__meta");
    if (meta) meta.textContent = `${label("Question", "Вопрос")} ${index + 1}/${currentSet().length} · ${label("Score", "Счет")} ${score} · ${label("Time", "Время")} ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    if (seconds <= 0) {
      clearInterval(timer);
      mount.innerHTML = `<div class="card center"><h2>${label("Time is up", "Время вышло")}</h2><p class="text-lead center">${label("Score", "Счет")}: ${score}/${currentSet().length}. ${label("Speed improves when models become automatic.", "Скорость растет, когда модели становятся автоматическими.")}</p><button class="button button--gold" data-restart>${label("Restart", "Начать заново")}</button></div>`;
    }
  }, 1000);

  window.addEventListener("kazyna:languagechange", render);
  render();
})();
