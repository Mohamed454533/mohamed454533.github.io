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

### 2026-11-09 — Full SEO audit (verified) + fixes
- Ran a comprehensive live audit (page, robots, sitemap, all assets, JSON-LD,
  headings, images, meta, keywords). Confirmed healthy: HTTP 200 everywhere;
  single h1 with clean h1→h2→h3 hierarchy; 11 OG + 5 Twitter tags; valid
  WebSite/ProfilePage/Person JSON-LD with absolute URLs; all 5 images have alt +
  width/height; source HTML has 0 kashida (display-only); robots.txt + sitemap.xml
  200 and canonical-matched; all three keyword forms present (spaced form in body
  + alternateName).
- Applied genuine improvements: Person `sameAs` → GitHub profile; ProfilePage
  `dateModified` 2026-11-09; nav `aria-label`; meta description trimmed 176→151
  chars; sitemap image entries 2→4 (added about photo + grass-ball).
- Verified live: sameAs, dateModified, aria-label present; sitemap has 4 images.
- SEO note on kashida: no negative impact — indexed source is kashida-free and
  tatweel (U+0640) is a decorative char normalized by search engines; no cloaking.

### 2026-11-09 — GitHub profile + backlinks + external links
- Goal: configure the GitHub profile (github.com/HeshmatSayad) from the website
  content and create bidirectional + external links for SEO.
- Created the profile README repo `HeshmatSayad/HeshmatSayad` (public). Uploaded a
  Persian RTL `README.md` (source kept at `Heshmat/profile/README.md`) with the bio,
  keywords (all 3 name forms), avatar image, a keyword-anchor backlink to
  https://heshmatsayad.github.io/, and external links (TUMS, FFIRI). This README
  renders on the GitHub profile and is indexed by google.com → a high-authority
  backlink to the site.
- Website: added a «پیوندها» section + nav item with a visible link to the GitHub
  profile (bidirectional with the README backlink and the JSON-LD sameAs), plus
  authoritative outbound links: دانشگاه علوم پزشکی تهران (tums.ac.ir) and فدراسیون
  فوتبال ایران (ffiri.ir). Links use target=_blank rel=noopener. Verified live.
- Profile fields (name/bio/company/blog/location): BLOCKED — the device-flow token
  lacks the `user` scope (PATCH /user → 404). Ran `gh auth refresh -h github.com -s user`
  (device code 06C0-69D8); awaiting user authorization. Once authorized, set:
  name=حشمت صیادپرست, bio (nickname + حشمت صیاد + بدرهٔ ایلام), company=دانشگاه علوم
  پزشکی تهران, blog=https://heshmatsayad.github.io, location=تهران، ایران.
- Note: gh api endpoints need `MSYS_NO_PATHCONV=1` (or no leading slash) in Git Bash
  to avoid /repos being rewritten to a filesystem path.

### 2026-11-09 — SEO master-prompt pass (SEO_Master_Prompt_English.txt)
- Read the comprehensive SEO framework file; applied feasible outstanding items
  to the website (GitHub profile fields remain Blocked on `user` scope).
- Implemented + verified live:
  - WebP for large images via browser canvas (Pillow unavailable in this env):
    cover.jpg 434KB→cover.webp 300KB; grass-ball.jpg 220KB→144KB. `<picture>` with
    JPEG fallback; LCP preload switched to cover.webp. currentSrc confirms WebP used.
  - Descriptive image filename: pictures/photo_2024-07-27_11-53-24.jpg →
    pictures/heshmat-sayadparast.jpg (git mv; index.html + sitemap updated).
  - rel="me" on the website's GitHub-profile link (identity linking).
  - Custom 404.html (noindex,follow; on-brand Vazir RTL; links home). Verified live:
    missing URL returns HTTP 404 with the custom page.
- Added **Rule 5** to RULES.md (audit framework + WebP/filename/404/rel=me conventions).
- Framework items marked Blocked/Not Verified: GitHub profile fields (user scope),
  Google Search Console + Analytics (user's Google account), field Core Web Vitals
  (no CrUX data yet). N/A for this single-page profile: e-commerce, hreflang,
  breadcrumbs, local business schema.

### 2026-11-09 — Tag audit + indexing-discovery cluster
- Ran a 37-point live tag audit: 37/37 PASS (charset, viewport, lang/dir, title,
  description, author, robots/googlebot, theme-color, canonical, favicon,
  apple-touch-icon, all 11 OG + profile tags, Twitter card, LCP/font preload,
  defer, valid JSON-LD with sameAs/alternateName/dateModified, 404 noindex).
- Increased indexing discovery (feasible, no user auth): set both repos' `homepage`
  field to https://heshmatsayad.github.io (website repo + profile repo); added a
  keyword-rich README.md to the website repo linking the live site + profile +
  external links. This forms a crawlable github.com → site link cluster alongside
  the profile README backlink and the site's rel=me link.
- Verified: repo homepages set, website repo README present, Pages built.
- Rule 5 updated with the indexing-discovery convention.
- Still Blocked (user action): GitHub profile fields (`user` scope), Google Search
  Console + Analytics (user's Google account — the primary direct indexing lever).

### 2026-11-09 — Deep refactor (zero behavior change)
- Baseline evidence before refactor: kashida count 934 (incl. links section),
  scrollWidth 1265/1280, 5 images all loading (WebP for cover/grass-ball),
  timelinePlace margin 4px, tag audit 37/37.
- Refactor:
  - Extracted the pure kashida engine to `kashida.js` (ES module, no DOM);
    `script.js` keeps reveal-on-scroll + DOM wiring and imports `{ stretch }`.
    index.html loads `script.js` as `type="module"`.
  - styles.css reorganized into 16 numbered sections with shared tokens
    (--surface, --radius-sm, --amber-ink, --amber-line, --text); removed the
    `.timeline-place` !important by scoping to `.card .timeline-place` (computed
    margin still 4px).
  - Moved 404.html's inline <style> block into styles.css (section 14).
- Post-refactor verification (local CDP): kashida 934, fonts Vazir, images/WebP
  identical, timelinePlace margin 4px, styleItem bg #faf9f6, no overflow; main +
  404 renders identical to baseline. Live: tag audit 39/39 PASS, kashida.js 200,
  source kashida still 0.
- No URLs, content, tags, or visual behavior changed (Rule 5 forbids cosmetic URL
  changes; module script is the only new URL).

### 2026-11-09 — Gallery from new pictures (Rule 1)
- User dropped 3 new photos in pictures/. Assessment: grass-pitch photo (two
  players #17/#5 + child, 1280x964) good quality; futsal team lineup (photo of a
  screen, 1000x750) usable after crop; third photo rotated with screen chrome —
  skipped at discretion (Rule 1 allows choosing suitable ones).
- Optimized: pictures/futsal-team-lineup.jpg (cropped 910x680, 158KB) and
  pictures/grass-pitch-team.jpg (1280x964, 121KB); originals kept in pictures/.
- Added a «گالری» section (nav item + 2-column grid with captions, mobile 1-col)
  between Legacy and Links; sitemap image entries 4→6.
- Verified locally (both images load, kashida 960 incl. captions, no overflow) and
  live (both images 200, sitemap 6 images, gallery markup present).

## Current state

- Site is live, fully built, SEO-optimized, mobile-friendly, with the real photo,
  self-hosted Vazir font, and ZWNJ + Kashida shaping.
- All project files are under `D:\Projects\PublicProfile\Heshmat`.
- Governance files: `RULES.md` (English, Rule 1 photos + Rule 2 strict SEO +
  target keywords + Rule 3 strict Vazir font + Rule 4 ZWNJ/Kashida + Rule 5 SEO
  audit framework & technical conventions) and this `MEMORY.md`. `FONT_RULES.md`
  is the local shaping reference for Rule 4; `SEO_Master_Prompt_English.txt` is the
  audit framework for Rule 5.

## Pending / recommended (requires user action)

- **GitHub profile fields:** the device-flow token lacks the `user` scope, so
  name/bio/company/blog/location could not be set (PATCH /user → 404). Needs
  `gh auth refresh -h github.com -s user` authorized by the user (device code).
  The first code 06C0-69D8 expired; regenerate and have the user authorize, then
  apply the field values listed in the 2026-11-09 GitHub-profile log entry.
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