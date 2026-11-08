# Project Memory — Heshmat Sayadparast Profile Website

A precise, chronological record of everything done on this project.
Written in English for any AI assistant or developer. Companion to `RULES.md`.

## Overview

- **Purpose:** a LinkedIn-style, Persian RTL personal-profile / tribute website for
  **Heshmat Sayadparast**, a footballer born 1362 (Solar Hijri) in Shahrak-e Vali Asr
  village, Badreh county, Ilam province, Iran, nicknamed «بولدوزر دانشگاه»
  ("the University Bulldozer"). The user writes on Heshmat's behalf (a tribute),
  not as Heshmat himself.
- **Live URL:** https://heshmatsayad.github.io/
- **Repository:** https://github.com/HeshmatSayad/HeshmatSayad.github.io
  (GitHub Pages, `main` branch, legacy build, auto-deploys on push, HTTPS enforced).
- **Local project root:** `D:\Projects\PublicProfile\Heshmat`
  (this folder IS the git repository root).
- **Stack:** static HTML + CSS + vanilla JS, no build step. Font: Vazirmatn via
  jsDelivr CDN. Language `fa`, direction `rtl`.

## Chronological work log

### 2026-11-08 — Access & repository
- GitHub CLI was initially authenticated as `elias-hatami` (no access to target).
- Ran the device-flow login (`gh auth login --web`); user authorized as
  **HeshmatSayad**. Active account switched to HeshmatSayad (token scopes:
  gist, read:org, repo). `elias-hatami` remains as a secondary inactive account.
- Created the public repo `HeshmatSayad/HeshmatSayad.github.io`.

### 2026-11-08 — Initial site build
- User supplied raw Persian bio text and asked for a clean, professional rewrite.
- Built `index.html`, `styles.css`, `script.js` with these sections:
  profile header card (cover + avatar + name + headline + tags), About,
  football Journey (vertical timeline), Playing Style (3 cards + nickname banner),
  Legacy (quote + closing wish), footer.
- Design: warm cream background, white cards, green/amber accents, sticky top nav,
  scroll-reveal animation (IntersectionObserver), responsive (mobile breakpoint 640px).
- Generated two artistic images with ImageGen: a sunset dirt-pitch cover and a
  footballer-silhouette avatar. Compressed cover to JPEG (~390 KB), avatar to 512px.
- Verified locally with headless Edge renders (desktop + mobile). Fixed a
  false-looking mobile overflow (it was a headless artifact; real CDP measurement
  showed scrollWidth == innerWidth, no overflow).
- Made scroll-reveal degrade gracefully without JS (`body.js` gate).
- Committed and pushed; GitHub Pages auto-built; verified live HTTP 200 and render.

### 2026-11-08 — Cover image from user
- User sent a cover image; replaced `assets/cover.jpg` with it (JPEG q85, ~430 KB).
- Pushed; verified the live file hash matched the local file exactly.

### 2026-11-08 — Directory relocation
- User ordered all project files to live in `D:\Projects\PublicProfile\Heshmat`.
- Moved the entire project (including `.git`) into that subfolder; verified git
  remote and history intact.

### 2026-11-08 — Real profile photo
- User placed a real photo at `pictures/photo_2024-07-27_11-53-24.jpg` (640x640).
- Cropped head-and-shoulders (rect 180,40,400,400) and resized to 512px JPEG
  (`assets/avatar.jpg`, ~49 KB). Replaced the illustrated avatar everywhere
  (profile avatar, top-nav brand, favicon). Removed old `assets/avatar.png`.
- Committed the source photo under `pictures/` too. Pushed; verified live render.

### 2026-11-08 — Photo placement + Rule 1
- User ordered: check `pictures/` and add new photos to suitable sections at the
  assistant's discretion; record this as Rule 1.
- Placed the real photo in the About section (`.about-grid`, photo beside text)
  and generated an artistic football-on-grass image (`assets/grass-ball.jpg`,
  ~220 KB) for the Legacy section banner.
- Created `RULES.md` (initially Persian) with Rule 1 (photo management).
- Pushed; verified live.

### 2026-11-09 — Deep SEO + Rule 2 (English rules)
- User ordered very deep Google SEO and to record it as strict Rule 2; rules file
  must always be plain English understandable by all AIs.
- Rewrote `RULES.md` fully in English: Rule 1 (photos) + Rule 2 (strict SEO).
- Implemented comprehensive SEO in `index.html`:
  - `<title>` and meta description; `author`, `robots`
    (`index, follow, max-image-preview:large, max-snippet:-1`), `googlebot`,
    `theme-color`; self-referencing `canonical`.
  - Full Open Graph (site_name, title, description, url, type=profile,
    locale=fa_IR, absolute image URL + type/width/height/alt, profile first/last
    name + username) and Twitter Card (summary_large_image).
  - JSON-LD `@graph`: `WebSite` + `ProfilePage` + `Person` (absolute @id URLs,
    name, given/family name, alternateName, jobTitle, nationality, birthPlace,
    worksFor = Tehran University of Medical Sciences, knowsAbout, image).
  - Icons (favicon + apple-touch-icon), `preconnect` to CDN, `preload` of the LCP
    cover image with fetchpriority=high, deferred JS.
  - Images: descriptive alt, explicit width/height (CLS prevention),
    `loading="lazy"` below the fold, `decoding="async"`.
  - Semantic structure: single h1, ordered headings, main/section/nav/footer;
    moved footer outside main.
- Created `robots.txt` (Allow all + Sitemap line) and `sitemap.xml`
  (with image entries, lastmod 2026-11-09).
- Fixed an image-distortion bug: width/height attributes acted as a fixed-height
  presentational hint on `.about-photo`; added `height: auto` to keep aspect ratio.
- Validated JSON-LD (parses; WebSite/ProfilePage/Person), sitemap XML well-formed,
  single h1, canonical present. Verified live: robots.txt 200, sitemap.xml 200,
  JSON-LD/canonical/OG/Twitter tags present.

### 2026-11-09 — Primary keyword targeting
- User specified the primary target keywords in three written forms:
  `حشمت صیاد`, `حشمت صیاد پرست` (spaced), `حشمت صیادپرست` (joined).
- Targeted naturally (no keyword stuffing, per Google spam policies):
  - Title: `حشمت صیادپرست (حشمت صیاد) | بولدوزر دانشگاه — پروفایل رسمی فوتبالیست`.
  - Meta description and OG/Twitter titles include the joined + short forms.
  - About opening sentence uses the spaced form and the short form naturally.
  - JSON-LD Person `alternateName`:
    `["بولدوزر دانشگاه", "حشمت صیاد", "حشمت صیاد پرست"]`.
- Recorded the three target keywords in `RULES.md` under Rule 2.
- Pushed; verified live title and alternateName.

### 2026-11-09 — Strict Vazir font (Rule 3)
- User ordered the font strictly set to **Vazir** (وزیر), not Vazirmatn.
- Self-hosted Vazir woff2 (Regular/Medium/Bold/Black, ~44 KB each) under
  `assets/fonts/`; removed the Vazirmatn CDN stylesheet and jsDelivr preconnect.
- Added four `@font-face` rules (weights 400/500/700/900, `font-display: swap`)
  and set `font-family: 'Vazir', Tahoma, sans-serif`. Preloaded Regular + Bold.
- Added **Rule 3** to `RULES.md`: font must strictly be self-hosted Vazir.
- Verified via CDP: `document.fonts.check('16px Vazir')` true, body/h1 computed
  family = Vazir, weights 400/700/900 loaded. Verified live: font file HTTP 200,
  four @font-face present, Vazirmatn removed.
- Note: a user reference file `FONT_RULES.md` (Kashida stretching, unrelated to
  this site) exists in the folder; left untracked, NOT committed/published.

### 2026-11-09 — ZWNJ & Kashida (Rule 4, per FONT_RULES.md)
- User ordered the ZWNJ (half-space) and Kashida (stretching) rules from
  `FONT_RULES.md` applied precisely to the site.
- ZWNJ audit: content already correct (all plural «ها» and prefix «می» use U+200C,
  no full-space violations). The keyword form `حشمت صیاد پرست` keeps its full
  space intentionally (Rule 2 exception).
- Implemented the exact `FONT_RULES.md` algorithm in `script.js`
  (joiningType/lettersJoin/withKashidas/stretched, ratio 1.25, one kashida per
  valid gap, fill in order, stop at target, skip already-stretched). Applied
  display-only to titles/labels (h1/h2/h3, tags, nav, brand, timeline-place,
  nickname banner, blockquote) after `document.fonts.ready`, measuring with canvas
  using each element's computed Vazir font. HTML source stays raw (SEO-safe).
- Added **Rule 4** to `RULES.md`.
- User then required stretching in ALL text, not only titles. Reworked
  `applyKashida` to walk every visible body text node (TreeWalker, SHOW_TEXT),
  skipping script/style/noscript/input/textarea, stretching each with its parent's
  computed font. Rule 4 updated to "all display text".
- Verified via CDP: 892 kashida chars in rendered DOM (incl. paragraphs), About
  paragraph stretched, ZWNJ preserved, no overflow (scrollWidth <= innerWidth),
  all images load. Verified live: script.js uses the text walker, HTML source has
  0 kashida (display-only).
- `FONT_RULES.md` is now a referenced project rule file (still not published as a
  site page; it remains a local reference).

## Current state

- Site is live, fully built, SEO-optimized, mobile-friendly, with the real photo,
  self-hosted Vazir font, and ZWNJ + Kashida shaping.
- All project files are under `D:\Projects\PublicProfile\Heshmat`.
- Governance files: `RULES.md` (English, Rule 1 photos + Rule 2 strict SEO +
  target keywords + Rule 3 strict Vazir font + Rule 4 ZWNJ/Kashida) and this
  `MEMORY.md`. `FONT_RULES.md` is the local shaping reference for Rule 4.

## Pending / recommended (requires user action)

- **Google Search Console:** verify the property and submit
  `https://heshmatsayad.github.io/sitemap.xml` for faster indexing. This needs the
  user's Google account; not yet done.

## Conventions & notes for future work

- Commit + push to GitHub IS the ordered deliverable here (unlike the user's other
  projects). Use per-command identity:
  `git -c user.name="HeshmatSayad" -c user.email="HeshmatSayad@users.noreply.github.com" commit ...`
  (no global git config is set; do not modify git config).
- After every push: wait for Pages build (`gh api repos/HeshmatSayad/HeshmatSayad.github.io/pages/builds/latest`),
  then verify the live URL before reporting success (Rule 2.8).
- Visual verification: the in-app browser is often hidden; use headless Edge
  (`--headless --screenshot --virtual-time-budget=...`) for real renders. For exact
  mobile measurement use CDP (Python `websocket-client`), not old headless
  `--window-size` (which can fake overflow).
- Optimize images before publishing (JPEG, resized). Real people photos only in
  intro sections; artistic generated images elsewhere (Rule 1).
- Persian prose in chat replies is wrapped in `<div dir="rtl" align="right">`;
  canonical RTL rules live in `D:\Projects\RtlQoder\rules\rtl-rules.md`.