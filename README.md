# Kazyna Economics

Kazyna Economics is a production-ready static educational website for macroeconomics, microeconomics, economics olympiad preparation, formulas, tests, articles, and glossary revision.

## Tech Stack

- HTML5 semantic pages
- Modular CSS3 with BEM naming
- Vanilla JavaScript
- Optional CDN enhancements: Chart.js and KaTeX
- No React, Vue, Angular, jQuery, or heavy runtime

## Structure

```txt
kazyna-economics/
├── index.html
├── pages/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── README.md
```

## Run Locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Features

- Sticky responsive navbar
- Mobile burger menu
- Dark/light mode
- One-click Russian/English language switcher
- Reading progress bar
- Scroll-to-top button
- Search modal
- Category filters
- Article table of contents
- Interactive formula cards with copy buttons
- KaTeX formula rendering
- Timed quiz system with score tracking and explanations
- Searchable 100-term glossary
- Chart.js economics visualizations
- SEO meta tags and schema markup
- Accessible focus states, semantic landmarks, and readable contrast

## Customization

Edit colors and typography in `assets/css/variables.css`. Add article cards in `pages/articles.html`. Add formula cards in `assets/js/formulas.js`. Add glossary terms in `assets/js/glossary.js`.

## Google / SEO

See **[GOOGLE-SEO.md](GOOGLE-SEO.md)** for step-by-step indexing in Google Search Console.

Included: `robots.txt`, `sitemap.xml`, canonical URLs, Open Graph, Twitter cards, JSON-LD.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other** (static site, no build command).
4. Output directory: **`.`** (project root).
5. Deploy.

`vercel.json` is included: clean URLs, asset caching, no build step.

CLI:

```bash
npx vercel --prod
```

### GitHub Pages

Serve the repository root as a static site (same folder as `index.html`).

### Other hosts

Netlify, Nginx, Apache, or any CDN-backed object storage works — no server runtime required.
