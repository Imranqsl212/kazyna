# Requirements Document

## Introduction

This document defines the requirements for adding full multilingual support (Russian and English) to the Econlyx static website. The site is a pure HTML/CSS/JS project with ~36 pages across `index.html` and `/pages/`. A partial i18n infrastructure already exists — `data-i18n` attributes are present on some elements, a language-toggle button exists in the navbar, and `formulas.js` already holds bilingual data — but the core `i18n.js` engine has not yet been built and many pages still contain hardcoded text.

The feature must deliver: a lightweight, zero-dependency translation engine loaded from local JSON files; complete text coverage across all pages and all dynamically rendered content; a language switcher with instant switching and localStorage persistence; browser language auto-detection on first visit; URL-based locale selection (`?lang=ru` / `?lang=en`); per-language SEO meta tags and hreflang links; and an architecture that makes adding future languages (KG, KZ, TR, AR, etc.) trivial.

## Glossary

- **I18n_Engine**: The JavaScript module (`assets/js/i18n.js`) responsible for loading locale files, resolving translation keys, applying translations to the DOM, and dispatching language-change events.
- **Locale_File**: A JSON file at `locales/{lang}/common.json` containing all translation key-value pairs for a given language code (e.g., `en`, `ru`).
- **Translation_Key**: A dot-notation string (e.g., `nav.home`, `index.hero.title`) that uniquely identifies a piece of UI text within a Locale_File.
- **t()**: The global translation function exposed by the I18n_Engine. Accepts a Translation_Key and returns the translated string for the active language.
- **Active_Language**: The currently selected language code (`en` or `ru`), determined by URL param, localStorage, or browser detection — in that priority order.
- **Language_Switcher**: The `<button data-lang-toggle>` element present in the navbar of every page.
- **data-i18n**: An HTML attribute placed on elements whose `textContent` should be replaced by the result of `t(value)` when translations are applied.
- **data-i18n-placeholder**: An HTML attribute placed on `<input>` and `<textarea>` elements whose `placeholder` should be replaced by `t(value)`.
- **data-i18n-aria-label**: An HTML attribute placed on interactive elements whose `aria-label` should be replaced by `t(value)`.
- **econlyx:languagechange**: A custom DOM event dispatched on `window` after the Active_Language changes, carrying the new language code in `event.detail.lang`. Consumed by `formulas.js` and any other module that renders dynamic content.
- **hreflang**: An HTML `<link rel="alternate" hreflang="...">` tag injected into `<head>` to signal alternate-language versions of a page to search engines.
- **SEO_Module**: The existing `assets/js/seo.js` file, which will be extended to inject per-language meta tags and hreflang links.

---

## Requirements

### Requirement 1: Translation Engine

**User Story:** As a developer, I want a single lightweight JS module that loads locale JSON files and resolves translation keys, so that all other modules and HTML pages can use one consistent `t()` function without duplicating translation logic.

#### Acceptance Criteria

1. THE I18n_Engine SHALL expose a global `window.econlyxI18n` object containing the `t()` function, an `applyTranslations(root)` function, and a `setLanguage(lang)` function.
2. WHEN the I18n_Engine initialises, THE I18n_Engine SHALL load the Locale_File for the Active_Language synchronously from the pre-fetched in-memory bundle (no XHR or fetch calls at runtime).
3. WHEN `t(key)` is called with a Translation_Key that exists in the active Locale_File, THE I18n_Engine SHALL return the corresponding translated string.
4. IF `t(key)` is called with a Translation_Key that does not exist in the active Locale_File and does not exist in the English Locale_File, THEN THE I18n_Engine SHALL return the Translation_Key string unchanged as a last-resort fallback.
5. IF `t(key)` is called with a Translation_Key that does not exist in the active Locale_File but exists in the English Locale_File, THEN THE I18n_Engine SHALL return the English string as a secondary fallback before returning the key itself.
6. THE I18n_Engine SHALL support nested Translation_Keys using dot notation (e.g., `nav.home` resolves to `translations["nav"]["home"]`).
7. FOR ALL valid Translation_Keys in any Locale_File, parsing the Locale_File JSON then calling `t(key)` SHALL return a non-empty string (round-trip property).

### Requirement 2: Locale File Structure

**User Story:** As a developer, I want all translations stored in structured JSON files under `/locales/`, so that translators can edit text without touching any JavaScript or HTML.

#### Acceptance Criteria

1. THE I18n_Engine SHALL load translations exclusively from `locales/en/common.json` and `locales/ru/common.json`.
2. THE Locale_File for English SHALL contain Translation_Keys covering every piece of visible text on the site: navigation labels, hero titles and subtitles, section headings, card titles and descriptions, button labels, form labels, form placeholders, footer text, search UI strings, modal labels, aria-labels, toast/notification messages, and SEO meta strings.
3. THE Locale_File for Russian SHALL contain the identical set of Translation_Key names as the English Locale_File, with all values translated into Russian.
4. WHERE a future language is added, THE I18n_Engine SHALL load it by adding a new `locales/{lang}/common.json` file and registering the language code — no changes to HTML or existing JS files SHALL be required.
5. THE I18n_Engine SHALL validate on initialisation that the active Locale_File is valid JSON; IF the Locale_File is malformed, THEN THE I18n_Engine SHALL fall back to English and log a console warning.

### Requirement 3: DOM Translation Application

**User Story:** As a visitor, I want every visible text element on every page to display in my selected language, so that I never encounter untranslated content.

#### Acceptance Criteria

1. WHEN `applyTranslations(root)` is called, THE I18n_Engine SHALL replace the `textContent` of every element within `root` that carries a `data-i18n` attribute with the result of `t(data-i18n value)`.
2. WHEN `applyTranslations(root)` is called, THE I18n_Engine SHALL replace the `placeholder` attribute of every `<input>` and `<textarea>` within `root` that carries a `data-i18n-placeholder` attribute with the result of `t(data-i18n-placeholder value)`.
3. WHEN `applyTranslations(root)` is called, THE I18n_Engine SHALL replace the `aria-label` attribute of every element within `root` that carries a `data-i18n-aria-label` attribute with the result of `t(data-i18n-aria-label value)`.
4. THE I18n_Engine SHALL call `applyTranslations(document.body)` automatically on page load after the Active_Language is determined.
5. WHILE the page is loaded, THE I18n_Engine SHALL ensure that every element with a `data-i18n` attribute displays translated text — no element SHALL display a raw Translation_Key to the user.
6. THE I18n_Engine SHALL apply translations to dynamically inserted DOM nodes by exposing `applyTranslations(node)` for use by modules such as `main.js` (search results) and `formulas.js`.

### Requirement 4: Language Switcher

**User Story:** As a visitor, I want a clearly visible RU / EN toggle in the navbar, so that I can switch the site language instantly without reloading the page.

#### Acceptance Criteria

1. THE Language_Switcher SHALL be present in the navbar on every page of the site.
2. WHEN the Language_Switcher is clicked, THE I18n_Engine SHALL call `setLanguage()` with the opposite language code and re-apply all translations to `document.body` without triggering a page reload.
3. WHEN the Active_Language is English, THE Language_Switcher SHALL display the label `RU` to indicate the available switch target.
4. WHEN the Active_Language is Russian, THE Language_Switcher SHALL display the label `EN` to indicate the available switch target.
5. WHEN `setLanguage(lang)` is called, THE I18n_Engine SHALL save the selected language code to `localStorage` under the key `econlyx-language`.
6. WHEN `setLanguage(lang)` is called, THE I18n_Engine SHALL dispatch the `econlyx:languagechange` custom event on `window` with `{ detail: { lang } }`.
7. WHEN `setLanguage(lang)` is called, THE I18n_Engine SHALL update the `lang` attribute on the `<html>` element to the new language code.

### Requirement 5: Language Detection and Persistence

**User Story:** As a first-time visitor, I want the site to automatically show content in my browser language if it is Russian, so that I don't have to manually switch.

#### Acceptance Criteria

1. WHEN a visitor loads any page for the first time with no `econlyx-language` key in localStorage and no `?lang` URL parameter, THE I18n_Engine SHALL read `navigator.language`.
2. IF `navigator.language` starts with `ru`, THEN THE I18n_Engine SHALL set the Active_Language to `ru`.
3. IF `navigator.language` does not start with `ru`, THEN THE I18n_Engine SHALL set the Active_Language to `en`.
4. WHEN a visitor loads any page and `localStorage` contains a `econlyx-language` value of `ru` or `en`, THE I18n_Engine SHALL use that stored value as the Active_Language, overriding browser detection.
5. WHEN a visitor loads any page with a `?lang=ru` or `?lang=en` URL parameter, THE I18n_Engine SHALL use the parameter value as the Active_Language, overriding both localStorage and browser detection.
6. IF the `?lang` URL parameter contains a value other than `ru` or `en`, THEN THE I18n_Engine SHALL ignore the parameter and fall back to localStorage or browser detection, treating the invalid parameter as if no parameter was provided.

### Requirement 6: URL-Based Localisation

**User Story:** As a user sharing a link, I want to be able to include `?lang=ru` or `?lang=en` in the URL so that the recipient sees the page in the intended language.

#### Acceptance Criteria

1. THE I18n_Engine SHALL parse the `?lang` query parameter on every page load before any other language detection logic runs.
2. WHEN `?lang=ru` is present in the URL, THE I18n_Engine SHALL activate Russian regardless of localStorage or browser language.
3. WHEN `?lang=en` is present in the URL, THE I18n_Engine SHALL activate English regardless of localStorage or browser language.
4. WHEN the Language_Switcher is clicked on a page that has a `?lang` parameter, THE I18n_Engine SHALL update the URL parameter to the new language code using `history.replaceState` without reloading the page.
5. THE I18n_Engine SHALL preserve all other existing URL query parameters when updating the `?lang` parameter.

### Requirement 7: SEO — Per-Language Meta Tags

**User Story:** As a site owner, I want search engines to index the correct language-specific title and description for each page, so that Russian-speaking users find the Russian version and English-speaking users find the English version.

#### Acceptance Criteria

1. THE SEO_Module SHALL update the `<title>` element content to the translated page title from the active Locale_File on every page load.
2. THE SEO_Module SHALL update the `<meta name="description">` content to the translated page description from the active Locale_File on every page load.
3. THE SEO_Module SHALL update the `<meta property="og:title">` and `<meta property="og:description">` content to the translated values on every page load.
4. WHEN the Active_Language changes via the Language_Switcher, THE SEO_Module SHALL update all meta tags listed in criteria 1–3 to reflect the new language without a page reload.
5. THE SEO_Module SHALL inject two `<link rel="alternate" hreflang="...">` tags into `<head>` on every page load: one for `hreflang="en"` and one for `hreflang="ru"`, each pointing to the current page URL with the respective `?lang` parameter.
6. THE SEO_Module SHALL inject a `<link rel="alternate" hreflang="x-default">` tag pointing to the English version of the current page.

### Requirement 8: Dynamic Content Translation

**User Story:** As a visitor, I want all dynamically rendered content — search results, formula cards, form feedback messages, and filter labels — to appear in my selected language, so that the experience is consistent throughout the site.

#### Acceptance Criteria

1. WHEN the `econlyx:languagechange` event fires, THE `formulas.js` module SHALL re-render all formula cards using the translated title, explanation, example, and badge text for the new language.
2. WHEN the search modal renders results, THE `main.js` module SHALL call `applyTranslations()` on the results container so that any `data-i18n` attributes in result markup are resolved.
3. WHEN a contact form or newsletter form is submitted, THE `main.js` module SHALL display the submission feedback message using `t("form.sent")` for the active language.
4. WHEN the `econlyx:languagechange` event fires, THE `main.js` module SHALL update all hardcoded aria-labels (search open, theme toggle, burger menu, search close, scroll-to-top) to their translated equivalents via `t()`.
5. WHEN the `econlyx:languagechange` event fires, THE `main.js` module SHALL update the theme toggle aria-label to the translated dark/light theme switch string for the active language.
6. WHEN the search input returns no results, THE `main.js` module SHALL display the empty-state message using `t("search.empty")` for the active language.

### Requirement 9: Complete Text Coverage

**User Story:** As a visitor, I want every piece of text on every page to be available in both languages, so that I never encounter a mix of languages on a single page.

#### Acceptance Criteria

1. THE I18n_Engine SHALL ensure that every HTML element with visible text content on every page either carries a `data-i18n` attribute or has its text rendered exclusively via `t()` calls in JavaScript.
2. THE Locale_File for each language SHALL contain Translation_Keys for all of the following text categories on every page: page titles, section headings, navigation links, button labels, card titles, card descriptions, form labels, form placeholders, footer section headings, footer link labels, footer tagline, badge labels, hero subtitles, tab labels, aria-labels for interactive elements, search placeholder, search empty-state message, modal aria-labels, and toast/notification messages.
3. THE I18n_Engine SHALL cover all 36 pages: `index.html` and all files in the `/pages/` directory.
4. IF any Translation_Key referenced by a `data-i18n` attribute is missing from the active Locale_File, THEN THE I18n_Engine SHALL display the English fallback string rather than leaving the element empty or showing a raw key.

### Requirement 10: Performance and Architecture

**User Story:** As a site owner, I want the multilingual feature to add zero server requests and no measurable Lighthouse score degradation, so that the site remains fast for users on slow connections.

#### Acceptance Criteria

1. THE I18n_Engine SHALL bundle both locale JSON files inline within `i18n.js` as JavaScript object literals, so that no additional network requests are made at runtime.
2. THE I18n_Engine SHALL be loaded via a `<script src="assets/js/i18n.js">` tag placed in `<head>` before `<body>` content and SHALL execute during the BEFORE_FIRST_PAINT phase, ensuring translations are applied before first paint to prevent flash of untranslated content.
3. THE I18n_Engine SHALL complete its initialisation and first `applyTranslations()` call synchronously, with no asynchronous operations.
4. THE I18n_Engine file size SHALL remain under 50 KB (uncompressed) including both locale bundles.
5. WHERE a new language is added in the future, THE I18n_Engine SHALL require only the addition of a new locale object and a new language code to the supported-languages list — no structural changes to the engine logic SHALL be required.
6. THE I18n_Engine SHALL not introduce any global variable conflicts with existing scripts (`main.js`, `formulas.js`, `seo.js`, `navigation.js`, `tabs.js`, `animations.js`, `charts.js`).
