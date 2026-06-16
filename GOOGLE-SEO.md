# Google SEO запуск — Econova

**Планируемый production-домен:** [https://econova.com/](https://econova.com/)

Сайт технически подготовлен для индексации: `robots.txt`, `sitemap.xml`, canonical, hreflang, Open Graph, Twitter Cards, manifest и schema.org. Это не гарантирует топ-1: Google ранжирует сайт по качеству контента, ссылкам, поведению пользователей, скорости, доверию домена и конкуренции.

## Перед публикацией домена

1. Подключите `econova.com` к хостингу.
2. Проверьте, что открываются:
   - `https://econova.com/`
   - `https://econova.com/robots.txt`
   - `https://econova.com/sitemap.xml`
3. Если домен будет не `econova.com`, замените `https://econova.com` в HTML, `robots.txt`, `sitemap.xml`, `site.webmanifest` и `assets/js/seo.js`.

## Google Search Console

1. Откройте [Google Search Console](https://search.google.com/search-console).
2. Добавьте ресурс `https://econova.com/`.
3. Подтвердите владение через DNS или HTML-файл.
4. В разделе **Sitemaps** отправьте:

   ```text
   https://econova.com/sitemap.xml
   ```

5. В **URL Inspection** запросите индексирование главной и ключевых страниц:
   - `/pages/articles`
   - `/pages/formulas`
   - `/pages/microeconomics`
   - `/pages/macroeconomics`
   - `/pages/olympiads`

## Что реально двигает сайт вверх

| Приоритет | Что делать |
| --- | --- |
| 1 | Публиковать уникальные статьи по экономике, формулам и олимпиадным задачам |
| 2 | Получить внешние ссылки: школы, олимпиады, соцсети, GitHub, Telegram |
| 3 | Добавить реальные авторские материалы, примеры задач, решения и PDF-гайды |
| 4 | Следить за Search Console: ошибки индексации, страницы без кликов, запросы |
| 5 | Обновлять sitemap после добавления новых страниц |

## Проверка после индексации

Через 1–4 недели проверьте:

```text
site:econova.com
```

Если страниц нет, проверьте `robots.txt`, sitemap, canonical и статус домена в Search Console.
