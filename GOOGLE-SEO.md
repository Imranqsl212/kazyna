# Как попасть в Google — Эконова

**Живой сайт:** [https://econova.kg/](https://econova.kg/)

Сайт подготовлен технически (`robots.txt`, `sitemap.xml`, meta-теги, canonical). **В поиске вы появитесь только после индексации Google** — это делается вручную за 1–3 дня (иногда 1–2 недели).

## 1. Проверьте, что сайт доступен

- [https://econova.kg/](https://econova.kg/)
- [https://econova.kg/robots.txt](https://econova.kg/robots.txt)
- [https://econova.kg/sitemap.xml](https://econova.kg/sitemap.xml)

Если у вас свой домен (например `econova.kg`), подключите его в Vercel → Settings → Domains.

## 2. Google Search Console

1. Откройте [Google Search Console](https://search.google.com/search-console)
2. **Добавить ресурс** → укажите URL сайта (с `https://`)
3. Подтвердите владение одним из способов:
   - **HTML-тег** — скопируйте код и вставьте в `index.html` в `<head>`:

     ```html
     <meta name="google-site-verification" content="ВАШ_КОД" />
     ```

   - или через DNS у регистратора домена
4. **Файлы Sitemap** → добавьте **полный URL** (не только путь):
   `https://econova.kg/sitemap.xml`

   Если была ошибка «Не удалось обработать»:
   - удалите старый sitemap (три точки → Удалить);
   - подождите 2 минуты после деплоя Vercel;
   - откройте [sitemap.xml](https://econova.kg/sitemap.xml) в браузере — должен быть XML со списком URL;
   - добавьте sitemap заново.

5. **Проверка URL** → вставьте главную → **Запросить индексирование**

Повторите «Запросить индексирование» для важных страниц: `/pages/articles`, `/pages/macroeconomics`, статьи.

## 4. Ускорить появление в выдаче

| Действие | Зачем |
|----------|--------|
| Ссылка с GitHub README на живой сайт | Google находит сайт быстрее |
| Пост в соцсетях / Telegram с URL | Внешние ссылки |
| Регулярно добавлять статьи | Больше страниц в индексе |
| Уникальные `title` и `description` на каждой странице | Уже есть на основных страницах |

## 5. По каким запросам могут найти

Примеры (нужно время и конкуренция):

- economics olympiad preparation
- macroeconomics study guide
- GDP explained students
- economics glossary
- подготовка к олимпиаде по экономике (если добавите RU-контент в текст страниц)

## 6. Проверка

Через 3–7 дней в Google: `site:econova.kg`

Если страниц 0 — снова Search Console → «Запросить индексирование» и проверьте, что `robots.txt` не блокирует сайт.

---

**Важно:** Google не гарантирует позиции. Техническая подготовка — необходимый минимум; трафик растёт от контента, ссылок и времени.
