(function () {
  const STORAGE_KEY = "kazyna-language";
  const DEFAULT_LANG = "en";
  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  let translating = false;

  const textMap = {
    "Kazyna Economics": "Kazyna Economics",
    Home: "Главная",
    Macro: "Макро",
    Micro: "Микро",
    macro: "макро",
    micro: "микро",
    olympiad: "олимпиада",
    Olympiads: "Олимпиады",
    Formulas: "Формулы",
    Articles: "Статьи",
    Tests: "Тесты",
    Glossary: "Глоссарий",
    About: "О проекте",
    Contact: "Контакты",
    Contacts: "Контакты",
    "Skip to content": "Перейти к основному контенту",
    "Kyrgyz editorial learning platform":
      "Кыргызская образовательная платформа",
    "Master Economics. Win Olympiads. Build Your Future.":
      "Изучай экономику. Побеждай на олимпиадах. Строй будущее.",
    "A focused platform for ambitious students: clear macro and micro theory, formulas, olympiad strategies, interactive tests, and readable long-form economics articles.":
      "Платформа для амбициозных студентов: понятная макро- и микроэкономика, формулы, олимпиадные стратегии, интерактивные тесты и удобные длинные статьи.",
    "Start olympiad roadmap": "Начать олимпиадный план",
    "Read featured articles": "Читать лучшие статьи",
    "glossary terms": "терминов в глоссарии",
    "learning modules": "учебных модулей",
    "Featured articles": "Избранные статьи",
    "Economics that reads like a sharp briefing, not a sleepy textbook.":
      "Экономика, которая читается как сильный briefing, а не сонный учебник.",
    "Each piece connects definitions, diagrams, intuition, and olympiad shortcuts so students can move from reading to solving.":
      "Каждый материал связывает определения, диаграммы, интуицию и олимпиадные приемы, чтобы студент переходил от чтения к решению.",
    "GDP explained: output, income, and the story behind a number":
      "ВВП простыми словами: выпуск, доход и история за одной цифрой",
    "A practical guide to measuring production without confusing prices for prosperity.":
      "Практический гид по измерению производства без путаницы между ценами и благосостоянием.",
    "Inflation: why price signals get noisy":
      "Инфляция: почему ценовые сигналы становятся шумными",
    "Demand-pull, cost-push, expectations, CPI, and the central bank reaction function.":
      "Инфляция спроса и издержек, ожидания, CPI и реакция центрального банка.",
    "Game theory basics for olympiad problems":
      "Основы теории игр для олимпиадных задач",
    "Dominant strategies, Nash equilibrium, and clean payoff-matrix reasoning.":
      "Доминирующие стратегии, равновесие Нэша и аккуратная логика матрицы выигрышей.",
    "Understand economies as living systems.":
      "Понимай экономику как живую систему.",
    "Open macro track": "Открыть макро-трек",
    "Study micro": "Изучать микро",
    "Open formulas": "Открыть формулы",
    "Take a test": "Пройти тест",
    "Macroeconomics: the economy from 10,000 meters and from the policy desk.":
      "Макроэкономика: экономика с высоты 10 000 метров и с рабочего стола политика.",
    "This track teaches the models students actually use in olympiads: national accounts, inflation, labor markets, fiscal and monetary tools, exchange rates, growth theory, recessions, central banks, IS-LM, and AD-AS.":
      "Этот трек объясняет модели, которые действительно нужны на олимпиадах: национальные счета, инфляцию, рынок труда, фискальные и монетарные инструменты, валютные курсы, теорию роста, рецессии, центральные банки, IS-LM и AD-AS.",
    Unemployment: "Безработица",
    "Exchange rates and open economy logic":
      "Валютные курсы и логика открытой экономики",
    "IS-LM and AD-AS models": "Модели IS-LM и AD-AS",
    "Economic growth and recessions": "Экономический рост и рецессии",
    "Microeconomics: incentives, choices, markets, and strategy.":
      "Микроэкономика: стимулы, выбор, рынки и стратегия.",
    "Microeconomics is the language of marginal thinking. This page gives you the core models needed for essays, graphs, calculations, and olympiad puzzles.":
      "Микроэкономика - это язык предельного мышления. Эта страница дает ключевые модели для эссе, графиков, расчетов и олимпиадных задач.",
    "Supply and demand": "Спрос и предложение",
    Elasticity: "Эластичность",
    "Utility and consumer behavior": "Полезность и поведение потребителя",
    "Production costs": "Производственные издержки",
    "Market structures": "Структуры рынка",
    "Game theory basics": "Основы теории игр",
    "Opportunity cost": "Альтернативные издержки",
    "Comparative advantage": "Сравнительное преимущество",
    "Formula library": "Библиотека формул",
    "Equations with context, not just symbols.":
      "Уравнения с контекстом, а не просто символы.",
    "Use these cards for quick recall, copy formulas into notes, and connect each equation to the model where it belongs.":
      "Используй карточки для быстрого повторения, копируй формулы в конспект и связывай каждое уравнение с нужной моделью.",
    All: "Все",
    "Timed quizzes with feedback that teaches.":
      "Тесты на время с обратной связью, которая учит.",
    "Choose macro, micro, or olympiad mode. Every answer gives an explanation so mistakes become reusable rules.":
      "Выбери макро, микро или олимпиадный режим. Каждый ответ сопровождается объяснением, чтобы ошибки превращались в правила.",
    "100 terms for fast economics revision.":
      "100 терминов для быстрого повторения экономики.",
    "Search by concept or filter alphabetically. Definitions are concise enough for revision and precise enough for contest writing.":
      "Ищи по понятию или фильтруй по алфавиту. Определения краткие для повторения и точные для олимпиадных ответов.",
    "Editorial library": "Редакционная библиотека",
    "Articles for students who want intuition and precision.":
      "Статьи для студентов, которым нужны интуиция и точность.",
    "Filter by category. Every article preview is written as a real study path, not filler.":
      "Фильтруй по категориям. Каждое превью написано как реальный учебный маршрут, а не заглушка.",
    "Output, income, expenditure, real vs nominal GDP, and olympiad traps.":
      "Выпуск, доход, расходы, реальный и номинальный ВВП, олимпиадные ловушки.",
    Inflation: "Инфляция",
    "Fiscal and monetary policy": "Фискальная и монетарная политика",
    "Olympiad preparation": "Подготовка к олимпиадам",
    "Train like an economist, write like a finalist.":
      "Тренируйся как экономист, пиши как финалист.",
    "Olympiad success comes from model fluency, careful diagrams, clean assumptions, and fast reflection after mistakes.":
      "Олимпиадный успех строится на свободном владении моделями, аккуратных графиках, чистых предпосылках и быстром разборе ошибок.",
    "About Kazyna": "О Kazyna",
    "A learning platform for students who want economics to feel alive.":
      "Образовательная платформа для студентов, которые хотят почувствовать экономику живой.",
    Mission: "Миссия",
    Philosophy: "Философия",
    "Readable depth": "Глубина, которую удобно читать",
    "Olympiad culture": "Олимпиадная культура",
    "Kyrgyz identity": "Кыргызская идентичность",
    FAQ: "Часто задаваемые вопросы",
    "Is this only for olympiads?": "Это только для олимпиад?",
    "Do I need advanced math?": "Нужна ли продвинутая математика?",
    "Build the next generation of economic thinkers with us.":
      "Создавай с нами новое поколение экономического мышления.",
    "Send a message": "Отправить сообщение",
    Name: "Имя",
    Email: "Email",
    Message: "Сообщение",
    "Send message": "Отправить сообщение",
    Programs: "Программы",
    Location: "Месторасположение",
    Social: "Соцсети",
    Search: "Поиск",
    "No results yet. Try macro, elasticity, GDP, or olympiad.":
      "Пока нет результатов. Попробуй macro, elasticity, GDP или olympiad.",
    Copy: "Копировать",
    Copied: "Скопировано",
    Finish: "Завершить",
    "Next question": "Следующий вопрос",
    Restart: "Начать заново",
    "Time is up": "Время вышло",
    "Your result is saved in the session. Review explanations, then try a different topic.":
      "Результат сохранен в текущей сессии. Разбери объяснения и попробуй другую тему.",
    "No terms match this filter.": "Нет терминов по этому фильтру.",
    "In this article": "В статье",
    Meaning: "Смысл",
    Approaches: "Подходы",
    "Real vs nominal": "Реальный и номинальный",
    Limits: "Ограничения",
    Takeaways: "Выводы",
    "What GDP means": "Что означает ВВП",
    "Three approaches": "Три подхода",
    "What GDP misses": "Что ВВП не показывает",
    "Diagram and data example": "Пример с диаграммой и данными",
    "Key takeaways": "Главные выводы",
    Next: "Далее",
    Contact: "Контакт",
    "contacts@kazyna.edu": "contacts@kazyna.edu",
  };

  const attrMap = {
    "Open search": "Открыть поиск",
    "Toggle theme": "Переключить тему",
    "Open menu": "Открыть меню",
    "Close search": "Закрыть поиск",
    "Scroll to top": "Наверх",
    "Search GDP, elasticity, olympiad...":
      "Искать ВВП, эластичность, олимпиаду...",
    "Search macro topics": "Искать темы макроэкономики",
    "Search micro topics": "Искать темы микроэкономики",
    "Search olympiad topics": "Искать олимпиадные темы",
    "Search formulas": "Искать формулы",
    "Search tests": "Искать тесты",
    "Search term or definition": "Искать термин или определение",
    "Search site": "Искать по сайту",
    "Search articles": "Искать статьи",
    "Search article topics": "Искать темы статьи",
    "Your name": "Ваше имя",
    "Tell us about your program or question":
      "Расскажите о вашей программе или вопросе",
  };

  function translateValue(value, dictionary) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (currentLang === "en") return null;
    const translated = dictionary[trimmed];
    if (!translated) return null;
    return value.replace(trimmed, translated);
  }

  function walkText(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
      acceptNode(textNode) {
        const parent = textNode.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, svg, canvas, .katex"))
          return NodeFilter.FILTER_REJECT;
        return textNode.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((textNode) => {
      if (!textNode.__kazynaOriginal)
        textNode.__kazynaOriginal = textNode.nodeValue;
      textNode.nodeValue =
        currentLang === "en"
          ? textNode.__kazynaOriginal
          : translateValue(textNode.__kazynaOriginal, textMap) ||
            textNode.__kazynaOriginal;
    });
  }

  function translateAttributes(root) {
    root
      .querySelectorAll("[placeholder], [aria-label], [title]")
      .forEach((node) => {
        ["placeholder", "aria-label", "title"].forEach((attr) => {
          if (!node.hasAttribute(attr)) return;
          const key = `__kazynaOriginal${attr}`;
          if (!node[key]) node[key] = node.getAttribute(attr);
          node.setAttribute(
            attr,
            currentLang === "en"
              ? node[key]
              : translateValue(node[key], attrMap) || node[key],
          );
        });
      });
  }

  function updateToggle() {
    document.querySelectorAll("[data-i18n-toggle]").forEach((button) => {
      button.textContent = currentLang === "en" ? "RU" : "EN";
      button.setAttribute(
        "aria-label",
        currentLang === "en"
          ? "Switch to Russian"
          : "Переключить на английский",
      );
      button.setAttribute(
        "title",
        currentLang === "en"
          ? "Switch to Russian"
          : "Переключить на английский",
      );
    });
  }

  function applyTranslations(root = document.body) {
    if (!root || translating) return;
    translating = true;
    document.documentElement.lang = currentLang === "ru" ? "ru" : "en";
    walkText(root);
    translateAttributes(root instanceof Element ? root : document.body);
    updateToggle();
    translating = false;
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-i18n-toggle]");
    if (!button) return;
    currentLang = currentLang === "en" ? "ru" : "en";
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyTranslations();
    window.dispatchEvent(
      new CustomEvent("kazyna:languagechange", {
        detail: { language: currentLang },
      }),
    );
  });

  window.kazynaI18n = { applyTranslations, getLanguage: () => currentLang };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyTranslations());
  } else {
    applyTranslations();
  }
})();
