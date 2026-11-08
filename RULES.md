# Project Rules — Heshmat Sayadparast Profile Website

These rules are mandatory for any AI assistant or developer working on this project.
They are written in plain English so every AI can understand them.

## Rule 1 — Photo Management

The `pictures/` folder is the source of project photos. Whenever this folder is
checked, new photos must be added to the most suitable sections of the website
at the assistant's own discretion and taste, without requiring separate approval
for each photo.

- Real photos of people are used only in introduction sections (profile, about).
- For other sections, if no suitable photo exists, an artistic image may be generated.
- Photos must be optimized before publishing (small file size, proper crop).

## Rule 2 — SEO (Strict, Mandatory)

The website must be optimized deeply and strictly according to ALL of Google's
SEO guidelines (Google Search Essentials, structured data guidelines, and Core
Web Vitals). This rule is enforced on every change, not only once.

Required on every page and every publish:

1. **Indexing:** correct `robots` meta, `robots.txt`, XML `sitemap.xml` referenced
   from robots.txt, and a self-referencing `canonical` URL.
2. **Structured data:** valid JSON-LD (`ProfilePage` + `Person` + `WebSite`) using
   absolute URLs, matching the visible page content. No fake or invisible markup.
3. **Social metadata:** complete Open Graph (title, description, url, type, locale
   `fa_IR`, image with absolute URL, dimensions and alt) and Twitter Card tags.
4. **Semantic HTML:** exactly one `h1`, logical heading order, `main`, `section`,
   `nav`, `footer`, correct `lang="fa"` and `dir="rtl"`.
5. **Images:** descriptive `alt` text, explicit `width`/`height` (no layout shift),
   `loading="lazy"` below the fold, high priority for the LCP image, compressed files.
6. **Performance (Core Web Vitals):** preconnect/preload for critical resources,
   deferred JavaScript, no render-blocking mistakes, mobile-first responsive layout.
7. **Content quality:** honest, useful Persian content; no keyword stuffing, no
   hidden text, no doorway or manipulative techniques (Google spam policies).
8. **Verification:** after every publish, the live page must be checked (HTTP 200,
   correct tags, valid JSON-LD, working sitemap/robots) before reporting success.

Any change that weakens SEO is forbidden. When in doubt, follow Google's official
documentation over third-party advice.