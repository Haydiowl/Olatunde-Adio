# Phase 0 — Existing Portfolio Audit (Personalization Readiness)

**Project:** `/Users/user/Downloads/Olatunde Adio Portfolio`  
**Goal:** Personalize the existing replicated site (https://www.sandeep.design/ implementation) to represent **Olatunde Adio**.  
**Scope of this phase:** Audit only. **No code, assets, styles, layouts, animations, or content were modified.**  
**Audit date:** 2026-11-12

---

## 1) Executive summary

Personal/identity content is primarily centralized in `src/data/*` and `index.html`, but it fans out across all pages through shared components (`SiteNav`, `SiteFooter`, `CTASection`, `HeroSection`, project/case-study renderers). The largest personalization surfaces are:
- **Global identity/contact/links/metadata:** `index.html`, `src/data/site.js`, `package.json` (repo metadata), and hardcoded resume URL in `src/pages/About.jsx`.
- **Portfolio/project identity and imagery:** `src/data/projects.js`, `src/data/home.js` (selected/featured/trusted-by), `src/data/media.js`, `src/data/caseStudies.js` (very large, 3.5k+ lines of project narratives/facts/see-also/images), and runtime assets in `reference-audit/assets/images/*` and `reference-audit/assets/svg/*`.
- **About/CV/education/biographical claims:** `src/data/site.js` (`aboutPage`) and rendered by `src/pages/About.jsx` / `Beliefs` / `HowIWork`.
- **Historical/reference artifacts (non-runtime but in repo):** `reference-audit/*` docs, screenshots, JSON measurements, and `dist/*` build output contain extensive Sandeep/original-site references.

**Safest approach:** treat this as a **content/data replacement + asset swap** driven from canonical data sources, keeping component structure, class names, layout, spacing, typography system, routing shape, and animations unchanged. Replace links/slugs/case-study data in a coordinated pass to avoid broken routes/images/see-also references.

---

## 2) Inventory by requested area

### 2.1 Homepage (`/`)
| Section | Current original content (summary) | Primary source(s) | Proposed replacement category | Notes |
|---|---|---|---|---|
| Navigation & logo/name | `Sandeep Kumar`, links Home/Work/About, `Book a Call` → `https://cal.com/sandeep/30min` | `src/data/site.js` (`nav`), `src/components/navigation/SiteNav.jsx` | Olatunde Adio name/logo text, Olatunde booking/contact link (or remove/replace CTA) | Shared across all routes. |
| Hero introduction & professional title | H1: “Product design for complex systems that feel obvious” (accent “Product design”); subcopy: “Product & UX/UI designer with 6 years…”; actions: Contra + `mailto:hello@sandeep.design` | `src/data/site.js` (`hero`), `src/components/sections/HeroSection.jsx` | Olatunde headline, role/title, years/positioning, primary actions/links | Accent-word handling in data must match new copy if accents retained. |
| Availability status / portfolio bar | `Portfolio '26`, `Open to work` (pulsing dot) | `src/data/site.js` (`portfolioBar`), `src/components/sections/PortfolioBar.jsx` | Year/label, availability status for Olatunde | Shared visual pattern; content-only change. |
| Featured case study | Offx (`P.01`, `Product Design`, highlights, Read More, image) | `src/data/projects.js` (`featuredCase`), `src/data/media.js`, `src/components/sections/FeaturedSection.jsx`, `src/components/projects/FeaturedCaseCard.jsx` | Olatunde’s featured case/project (title, tag, highlights, slug, image) | Must align with a valid case-study route/slug and available asset. |
| Selected projects | 4 homepage rows: Herd, Crypto No code Data Builder, CoreStack, Direct mail campaign (all Sandeep projects) | `src/data/home.js` (`selectedSlugs`), `src/data/projects.js`, `src/components/sections/WorksSection.jsx`, `src/components/projects/ProjectRow.jsx` | Olatunde’s selected projects and ordering | `selectedSlugs` must reference existing project entries/slugs. |
| Why Work With Me | 3 principle cards and intro copy as written for Sandeep’s positioning | `src/data/home.js` (`whyWork`), `src/components/sections/WhyWork.jsx` | Olatunde’s value proposition/principles | Copy length/structure affects layout but structure should be preserved. |
| How I Work | 4-step process copy (H.01–H.04) | `src/data/home.js` (`howIWork`), shared `HowIWork` component/section | Olatunde’s process/collaboration style | Used on Home, Work, About in some variants. |
| Previously Trusted By | 7 logo assets/ticker items (original client/company logos) | `src/data/home.js` (`trustedBy`), `src/data/media.js` (`trustedBySrc`), `src/components/sections/TrustedBy.jsx`, assets in `reference-audit/assets/images/*` and `reference-audit/assets/svg/*` | Olatunde’s clients/brands (or section content replacement if unavailable) | **Original-designer/client brand assets**; replacing requires rights-cleared assets and correct dimensions/blend settings. |
| Contact section (CTA) | “get in touch”, heading, `hire me on contra`, `Email me` (`hello@sandeep.design`), status/reply SLA | `src/data/site.js` (`cta`), `src/components/sections/CTASection.jsx` | Olatunde CTA copy, contact actions, email/status | Shared on Home, Work, About (and possibly case-study patterns via shared usage). |
| Footer | `hello@sandeep.design`, Pages, Elsewhere (Dribbble, LinkedIn, Resume), Currently, copyright/location/love line, bubble game shell | `src/data/site.js` (`footer`), `src/components/footer/SiteFooter.jsx`, `src/components/footer/BubbleGame.jsx` | Olatunde email/socials/resume/location/copyright/status | Shared globally; resume link also duplicated elsewhere. |

### 2.2 Work page (`/work`)
| Section | Current original content (summary) | Primary source(s) | Proposed replacement category | Notes |
|---|---|---|---|---|
| Page intro/header | `01 — Work`, H1 “Selected work across products, systems, and experiments” (accents on `products,`, `systems,`) | `src/data/site.js` (`workPage`), `src/pages/Work.jsx` | Olatunde work-page intro/headline and accents | Accent words must exist in headline text for highlighting logic. |
| Selected projects (P.01–P.05) | Offx, Herd, Crypto No code Data Builder, CoreStack, Direct mail campaigns — titles, descriptions, categories, years, slugs, images | `src/data/projects.js` (first 5), `src/pages/Work.jsx`, `src/components/sections/WorksSection.jsx` | Olatunde selected projects/metadata/imagery/links | Drives routing targets and cards. |
| Archived projects (P.06–P.11) | Zenrock Webapp, Zenrock Website(MVP), Getlit, Houzecheck, Mindlantic, Swoop — including `P .08` spacing quirk and special slugs | `src/data/projects.js` (slice 5), `src/components/sections/ArchivedSection.jsx` | Olatunde archived projects or revised set | Slug characters (`.`, `()`) and number formatting are currently preserved verbatim; changing them impacts URLs and internal links. |
| Project thumbnails/images | All project preview/row images from original portfolio | `reference-audit/assets/images/*`, `src/data/media.js`, `src/data/projects.js` | Olatunde project imagery/thumbnails | Runtime-loaded from `reference-audit/assets/images` via `imageUrl/img` helpers. |
| Section labels / How I work / CTA / Footer | `02 Selected`, `03 Archived`, `04 How I work?`, shared CTA/footer identity | `src/data/site.js`, `src/data/home.js`, shared components | Olatunde labels/copy/status/links as needed | Mostly data-driven. |

### 2.3 Individual project / case-study pages (`/work/:slug`)
| Section | Current original content (summary) | Primary source(s) | Proposed replacement category | Notes |
|---|---|---|---|---|
| Routing/slugs | 11 original slugs (including `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.` and `zenrock-website-design(mvp)`) | `src/App.jsx`, `src/data/projects.js`, `src/data/caseStudies.js` keys, internal links/See-also | Olatunde project slugs/routes (if projects change) | Slug changes require coordinated updates in router assumptions, project data, case-study keys, See-also items, and any hardcoded references. |
| Project intro/metadata/hero/facts | Per-project title, lede, meta (discipline/year/industry), role, duration, status, external project link (e.g. Delphi workspace), hero image | `src/data/caseStudies.js`, `src/pages/CaseStudy.jsx` | Olatunde project intros, roles, timelines, statuses, external links, hero media | `Role` currently `Product Designer` in audited entries; facts/links are project-specific. |
| Overview/problem/objectives/research/process/decisions/outcomes | Extensive narrative blocks, lists, quotes, rail sections, learnings (especially `no-code-data-builder`; others extracted/rich-basic/simple content) | `src/data/caseStudies.js` (`sections`, `introParagraphs`, `bodyItems`, etc.) | Olatunde case-study narratives and outcomes | **Largest content body**; many texts reference original companies/products/users (Offx, Herd, Delphi, Zenrock, etc.). |
| Screenshots/visual assets/galleries | Hero and content images per case study | `src/data/caseStudies.js`, `reference-audit/assets/images/*`, `src/data/media.js` (`imageMeta` subset) | Olatunde project screenshots/visuals | All case-study images currently reference original filenames in `reference-audit/assets/images`. |
| Navigation between projects (See also) | “02 — See Also” lists of 10 other projects with titles/years/categories/slugs | `src/data/caseStudies.js` (`seeAlso` per entry), rendered in `CaseStudy.jsx` | Olatunde related-project navigation set | Must stay consistent with actual available projects/slugs; easy source of broken/misaligned links if partially edited. |
| Shared footer/contact | Same global footer/identity | `src/components/footer/SiteFooter.jsx`, `src/data/site.js` | Olatunde global contact/footer | Case-study pages use shared footer. |

### 2.4 About page (`/about`)
| Section | Current original content (summary) | Primary source(s) | Proposed replacement category | Notes |
|---|---|---|---|---|
| Introduction / H1 | `01 — About me`; H1 “I design things that work and look clean” (accents `design`, `clean`) | `src/data/site.js` (`aboutPage.headerLabel`, `h1`, `accentWords`), `src/pages/About.jsx` | Olatunde bio headline/positioning | Data-driven accents. |
| Biography framing | Implicit in hero/subcopy/history/beliefs (site-wide), not a separate long-form bio block component beyond these sections | `src/data/site.js` (`hero`, `aboutPage`), `src/data/home.js` | Olatunde biography/professional summary | May require content additions but **not layout changes** (per constraints later). |
| Employment history (CV) | 8 roles (Delphi Digital, DM Applications, Fast Forward, Strategy Compass, Houzecheck, Purpose Lab, Greenbox, Freelance) with years/roles/descriptions | `src/data/site.js` (`aboutPage.cv.rows`), `src/pages/About.jsx` | Olatunde employment history | Descriptions include Sandeep-specific project/company claims. |
| Education | `2011-15`, `Civil Engineering`, `Bachelor of Technology` | `src/data/site.js` (`aboutPage.cv.education`), `src/pages/About.jsx` | Olatunde education | Rendered in dedicated education block. |
| Skills/capabilities | Expressed indirectly through hero, why/how, CV descriptions, beliefs (no standalone “Skills” list component found) | `src/data/site.js`, `src/data/home.js`, `src/data/caseStudies.js` | Olatunde skills/capabilities statements | Requires deciding where truthful equivalents live within existing sections. |
| Personal philosophy / beliefs | “Things I believe” heading, intro, 3 belief cards (T.01/T.02/t.03) | `src/data/site.js` (`aboutPage.beliefs` / exported `beliefs`), `src/components/sections/Beliefs.jsx` | Olatunde philosophy/principles | Shared belief content structure. |
| Working process | “How I work?” (H.01–H.04) | `src/data/home.js` (`howIWork`), `HowIWork` component | Olatunde process | Shared with Home/Work. |
| Resume/download link | **Hardcoded** Google Drive resume URL in About page button | `src/pages/About.jsx` (Download Resume `href`) and `src/data/site.js` (`footer.columns[Elsewhere].Resume`) | Olatunde resume URL/file destination | Link appears in multiple places (About CTA/button and footer) — must be updated consistently. |
| Contact CTA | About-specific heading override “Now you know me. Want to work together?” with accent `work` + shared buttons/status | `src/data/site.js` (`aboutPage.cta`, `cta`), `src/pages/About.jsx`, `CTASection` | Olatunde CTA copy/actions/status | Shared CTA data still used for buttons/status. |

### 2.5 Global information
| Item | Current original content (summary) | Primary source(s) | Proposed replacement category | Notes |
|---|---|---|---|---|
| Browser title & meta description | Title: `Sandeep Kumar — Product Designer`; Description: `Product design for complex systems that feel obvious` | `index.html` | Olatunde name, role/title, site description | No router-level dynamic titles found; likely single global document title/meta today. |
| Open Graph / Twitter metadata | **Not present** in `index.html` | `index.html` (absence) | Olatunde OG/Twitter title/description/image/url metadata (content values) | Adding tags is a content/metadata task; keep implementation minimal and non-visual. |
| Favicon / branding marks | No `public/` directory found; no favicon links/icons found in `index.html` | Project root / `index.html` | Olatunde favicon/app icons/branding assets | Asset/content addition may be required; no existing favicon file to “replace” in repo. |
| Email addresses | `hello@sandeep.design` (hero action, CTA, footer, nav-adjacent flows via data) | `src/data/site.js`, rendered in `HeroSection`, `CTASection`, `SiteFooter` | Olatunde contact email(s) | Single canonical value in `site.js` plus display usage. |
| Social media / external profile links | Cal.com, Contra, Dribbble, LinkedIn (Sandeep-specific URLs) | `src/data/site.js` (`nav.bookACall`, hero action, `cta.buttons`, `footer` Elsewhere) | Olatunde booking/social/profile links | Some labels are identity-tied (e.g. “hire me on contra”). |
| Resume links | Google Drive file URL (Sandeep resume) | `src/data/site.js` footer Resume; `src/pages/About.jsx` hardcoded | Olatunde resume link | **Duplication risk** (data + hardcoded). |
| Package/repo metadata | `sandeep-design-replica`, description referencing replica of sandeep.design | `package.json`, `package-lock.json` (if regenerated) | Project/package identity (optional but recommended for clarity) | Not runtime UI, but part of project identity. |
| Hardcoded references in source content | “Sandeep Kumar”, Sandeep URLs/emails, Sandeep’s companies/projects throughout data and comments in runtime files | `src/data/site.js`, `src/data/projects.js`, `src/data/caseStudies.js`, `index.html`, CSS comments (`typography.css`), etc. | Olatunde identity and project/company/content | Comments in runtime source can remain internal, but visible strings must be replaced. |
| Historical/reference artifacts in repo | Extensive Sandeep references and original-site captures/measurements/reports | `reference-audit/*`, `dist/*`, `ARCHITECTURE.md` | N/A (historical) unless requested | Not user-facing runtime content in source, but contain original identity/material. |

---

## 3) Deliverables (detailed)

### 3.1 Every file that needs personalization
**Runtime/content-critical (highest priority):**
- `index.html` — document title, meta description (and future OG/favicon tags if added as content metadata).
- `src/data/site.js` — **primary shared source** for nav/logo, hero, portfolio bar, CTA, footer (email/social/resume/location/copyright/status), work/about labels/headlines, About CV/education/beliefs/CTA overrides.
- `src/data/home.js` — selected project slugs, Why Work With Me, How I Work, Trusted By labels/logos.
- `src/data/projects.js` — all project entries (slugs, numbers, titles, descriptions, categories, years, image filenames), featured case, archived slice.
- `src/data/caseStudies.js` — all case-study content: meta/titles/ledes/facts/links, narrative blocks, section rails/labels, images, see-also items per slug.
- `src/data/media.js` — `imageMeta` map for known assets (and any media helper assumptions if filenames/sets change).
- `src/pages/About.jsx` — **hardcoded** resume download URL; renders CV/education/beliefs/how/CTA/footer from data.

**Runtime components/pages likely requiring review (mostly data-driven today, but verify for hardcoded strings during implementation):**
- `src/components/navigation/SiteNav.jsx`, `MobileMenuPanel.jsx` (open-state unverified; currently no Sandeep content except via data)
- `src/components/footer/SiteFooter.jsx`, `src/components/footer/BubbleGame.jsx`
- `src/components/sections/HeroSection.jsx`, `PortfolioBar.jsx`, `FeaturedSection.jsx`, `WorksSection.jsx`, `WhyWork.jsx`, `HowIWork.jsx`, `TrustedBy.jsx`, `Beliefs.jsx`, `CTASection.jsx`, `ArchivedSection.jsx`, `SectionLabel.jsx`, `AccentText.jsx`, `Rule.jsx`
- `src/components/projects/ProjectRow.jsx`, `FeaturedCaseCard.jsx`, `ArchivedRow.jsx`
- `src/pages/Home.jsx`, `Work.jsx`, `CaseStudy.jsx`, `src/App.jsx` (route structure/slug handling)
- `src/animations/*` (behavioral; no identity content expected)

**Assets used at runtime (must be reviewed/replaced as appropriate):**
- `reference-audit/assets/images/*` — project thumbnails, case-study hero/content images, some trusted-by logos currently referenced by data.
- `reference-audit/assets/svg/*` — trusted-by SVG logos referenced by data.

**Non-runtime / project metadata & historical artifacts (review/decide):**
- `package.json` (`name`, `description`) and possibly `package-lock.json` (generated)
- `ARCHITECTURE.md` (replica documentation references Sandeep/site)
- `reference-audit/**/*` (audit docs, screenshots, measurements, inventories, reports — contain original identity/site references)
- `dist/**/*` (built output; will reflect old content until rebuilt)

### 3.2 Every section containing original personal information
- **Global chrome:** logo/name, booking link, CTA labels/links/statuses, footer email/social/resume/location/copyright/availability.
- **Homepage:** hero headline/subcopy/actions/status, featured case, selected projects, Why/How copy, trusted-by brands/logos, CTA/footer.
- **Work page:** page headline/accents, selected+archived project identities/metadata/descriptions/images/links, section labels, CTA/footer.
- **Case-study pages:** per-project titles/ledes/meta/facts (role/duration/status/external links), all narrative/process/outcomes content, imagery, and See-also cross-links.
- **About page:** intro headline, CV companies/roles/dates/descriptions, education, beliefs, working process, CTA, resume link, footer.
- **Metadata:** HTML `<title>` and meta description.

### 3.3 Current content and proposed replacement category
| Current content/item | Proposed replacement category | Notes / source of truth needed |
|---|---|---|
| `Sandeep Kumar` (logo/nav text, title context) | Olatunde Adio name/brand | Confirm preferred display name (e.g. “Olatunde Adio”). |
| `Sandeep Kumar — Product Designer` (page title) | Olatunde site/page title | Confirm professional title/descriptor. |
| Hero headline/subcopy/availability (`6 years`, `Open to work`, `Portfolio '26`) | Olatunde positioning, experience summary, availability, current year/label | Requires confirmed bio details and status. |
| `hello@sandeep.design`, Cal.com, Contra, Dribbble, LinkedIn, Google Drive resume | Olatunde contact, scheduling, portfolio/social, resume links | **User must provide canonical URLs/emails.** |
| CTA copy/status (`Replies within 2 hrs/2hrs`, etc.) | Olatunde contact preferences/SLAs | Confirm accuracy. |
| Footer location/copyright (`Based in India`, `Working Worldwide`, `copyright 2026`, `built with love`) | Olatunde location/work mode/copyright text | Confirm factual details. |
| All 11 projects (names, slugs, dates, categories, descriptions, case studies, outcomes, client/product context) | Olatunde’s projects/case studies (or curated subset mapped to existing slots) | **Requires full project content + imagery + permission/rights.** Major scope item. |
| CV/employment/education history | Olatunde’s career and education history | **User must provide verified CV details.** |
| Trusted-by logos/company names | Olatunde’s client/company logos or replacement content | **User must provide assets and usage rights.** |
| Why/How/Beliefs copy (authored voice) | Olatunde’s own principles/process/philosophy | Can be adapted but needs Olatunde-approved text. |

### 3.4 Images and assets that may belong to the original designer
**Runtime-referenced (high likelihood original/Sandeep project assets):**
- `reference-audit/assets/images/*` — includes all project row/featured/hero/gallery images (e.g. Offx/Herd/Zenrock/CoreStack/etc.) and PNG logos used in trusted-by (`ZLhnW4YzXOO05k4nhhbCTV8U.png`, `mhb1VlcGpDRDYlkXYfUDOeI0q8.svg` stored in images, `4crBo7ox3nLtlUrQTXFwQNU7xKE.png`, etc. as referenced).
- `reference-audit/assets/svg/*` — trusted-by SVGs (`svg9165354306.svg`, `svg-1493448807_2847.svg`, `svg10868082009.svg`, `svg-338745722_19389.svg`).

**Historical/reference-only in repo (not runtime UI, but original-site material):**
- `reference-audit/reference-screenshots/*`
- `reference-audit/asset-inventory.json`, captures/measurements referencing original assets and pages
- Any downloaded original artifacts under `reference-audit/` outside runtime paths

**Action needed (later phases):** identify which assets can be retained, replaced, or removed with Olatunde-owned/licensed equivalents; update `imageMeta`/references accordingly.

### 3.5 Links that must be replaced
| Link | Current value | Where referenced | Replacement needed |
|---|---|---|---|
| Booking | `https://cal.com/sandeep/30min` | `src/data/site.js` (nav), audit docs | Olatunde booking/calendar link |
| Contra | `https://contra.com/sandeep23?...` | `src/data/site.js` (hero action, CTA button) | Olatunde freelance/profile or alternate CTA |
| Email | `mailto:hello@sandeep.design` / `hello@sandeep.design` | `src/data/site.js` (hero, CTA, footer) | Olatunde email |
| Dribbble | `https://dribbble.com/sandeep-design` | `src/data/site.js` (footer Elsewhere) | Olatunde Dribbble or replacement |
| LinkedIn | `https://www.linkedin.com/in/sandeepdotdesign/` | `src/data/site.js` (footer Elsewhere) | Olatunde LinkedIn |
| Resume | `https://drive.google.com/file/d/1CUgbdKJ47R9vHz2RLouRli7Th3_-NmN4/view?usp=sharing` | `src/data/site.js` (footer), `src/pages/About.jsx` (hardcoded) | Olatunde resume URL/file |
| Case-study external project link(s) | e.g. `https://members.delphidigital.io/data/workspace` and other project-specific `facts.href` values in `caseStudies.js` | `src/data/caseStudies.js` | Olatunde-relevant live links (or remove/replace per project) |
| Internal route slugs/links | `/work/offx-redesign` etc. and See-also cross-links | `src/data/projects.js`, `home.js`, `caseStudies.js`, components | Only if project set/slugs change (must stay consistent) |

### 3.6 Content that requires additional information from Olatunde Adio
- **Identity & positioning:** preferred full name/brand display, professional title(s), location/base, work authorization/availability, “open to…” status, response-time promise, years of experience, short bio/hero subcopy.
- **Contact & profiles:** primary email, booking link, LinkedIn, portfolio/social profiles (and which CTA labels to keep: Contra/Email/other).
- **Resume:** final resume file/link and preferred button label(s).
- **Work/CV:** complete employment history (companies, roles, dates, descriptions) and education details.
- **Projects/case studies:** which projects to feature (selected/archived), for each: slug/title/summary/role/duration/status/category/year, problem/process/decisions/outcomes text, live links, and final image assets/screenshots.
- **Brand assets/logos:** trusted-by/client logos (with rights), any headshot/personal imagery, favicon/OG image.
- **Voice/copy:** preferred wording for Why Work With Me, How I Work, Beliefs, CTA headings, footer tagline/copyright line (and whether to keep “built with love”).
- **Legal/accuracy:** claims about clients, metrics, outcomes, and confidentiality constraints.

### 3.7 Shared data sources or components that control multiple pages
- **`src/data/site.js`** — global/shared: `nav`, `hero`, `portfolioBar`, `cta`, `footer`, `workPage` labels/copy, `aboutPage` (header/CV/education/beliefs/CTA overrides). Consumed across Home/Work/About and shared components.
- **`src/data/home.js`** — homepage section content and `selectedSlugs`; also `howIWork`/belief-adjacent copy reused conceptually.
- **`src/data/projects.js`** — canonical project registry (ordering, slugs, metadata, images), featured case, archived slice; drives Home featured/selected, Work selected/archived, and case-study routing targets.
- **`src/data/caseStudies.js`** — per-slug case-study content and See-also networks; consumed by `CaseStudy.jsx`.
- **`src/data/media.js`** — asset path resolution and `imageMeta` for runtime images.
- **Shared components:** `SiteNav`, `SiteFooter`, `CTASection`, `HowIWork`, `Beliefs`, `WorksSection`/project rows, `CaseStudy` renderers — a single content change in data propagates site-wide.
- **`src/App.jsx`** — route map (`/`, `/work`, `/about`, `/work/:slug`); slug/data consistency is critical.

---

## 4) Safest implementation approach (recommended, for approval before Phase 1)

1. **Preserve architecture and visuals:** keep all components, CSS, layout rules, breakpoints, animation code, and routing structure unchanged except where strictly necessary to reference new content/assets (no redesign/refactor).
2. **Personalize from canonical data sources first:**
   - Replace identity/contact/links/status/copy in `src/data/site.js` and `src/data/home.js`.
   - Replace project registry in `src/data/projects.js` and align `selectedSlugs`, featured case, and archived logic.
   - Replace or rebuild `src/data/caseStudies.js` per Olatunde’s projects while keeping renderer-compatible data shapes (`sections`/`facts`/`seeAlso`/image fields) where possible.
3. **Resolve duplication/hardcoding:** centralize the resume URL (currently duplicated in `site.js` and hardcoded in `src/pages/About.jsx`) so one value drives all uses.
4. **Swap assets systematically:** replace runtime images/SVGs in `reference-audit/assets/images` and `reference-audit/assets/svg` (or update paths) and update `media.js` `imageMeta` for replaced assets to avoid layout shifts.
5. **Update metadata last-but-explicitly:** change `index.html` title/description (and add OG/favicon only if content/assets are provided), then rebuild to refresh `dist/`.
6. **Maintain link/slug integrity:** if project slugs change, update `projects.js`, `caseStudies.js` keys, `home.js` selections, See-also entries, and verify every internal route (including special-character slugs) and image reference.
7. **Validate without visual changes:** run route/link/image checks, responsive/console sanity checks, and targeted comparisons to ensure only intended content/assets changed.
8. **Defer or separately handle historical artifacts:** decide whether `reference-audit` historical docs/screenshots and `dist` should be regenerated/cleaned to remove original identity (non-runtime in source, but present in repo).

**Risk hotspots:** `src/data/caseStudies.js` size/cross-references (See-also/slugs/images), slug special characters, duplicated resume links, and replacing trusted-by/project imagery while preserving dimensions/blend behavior.

---

## 5) Readiness / approval gate

- Audit complete based on current repository state.
- **No files were modified** as part of this Phase 0 audit.
- Awaiting your approval and the required Olatunde-specific information/assets before proceeding to **Phase 1 (personalization implementation)**.

---

## 6) Additional audit: Product Design positioning (focus/readiness)

**Purpose:** Prepare the existing website for a portfolio repositioned **exclusively around Product Design**. This section identifies relevant vs. potentially unrelated content/projects, classifies relevance, and flags items that may not belong in the final portfolio. **No code, assets, styles, layouts, animations, or content were deleted or modified.**

### 6.1 Content aligned with Product Design / target domains
| Area / file(s) | Content observed | Alignment to requested PD focus |
|---|---|---|
| `index.html`, `src/data/site.js` (`hero`) | Title/descriptor and hero: “Product design for complex systems that feel obvious”, accent “Product design”, “Product & UX/UI designer…” | **Direct:** Product Design, UI/UX positioning (identity/copy). |
| `src/data/home.js` (`whyWork`, `howIWork`) | Systems/clarity focus, collaboration with product/engineering, implementation-aware handoff, iterative workflow, edge cases/states/interaction details | **Direct:** Product design process, interaction/detail thinking, cross-functional product work. |
| `src/data/site.js` (`aboutPage.cv`) | Roles: Product Designer (Delphi Digital), UI/UX Designer roles, freelance UI/UX; descriptions mention portals, experiences, product discovery, UX, dashboards/chart builder contexts in projects | **Direct:** Product Design/UI/UX experience (employment framing). CV includes some non-digital/older entries (e.g. “kiosk system and employee dashboards” mentioned in Greenbox context in content/history) — still adjacent to product/digital UI work. |
| `src/data/projects.js`, `src/data/caseStudies.js` | Project categories/meta include **Product Design**, **UI/UX**, **Design concept** across SaaS, web apps, mobile app, enterprise/dashboard, fintech/crypto/trading, AI/blockchain, edtech, real estate, productivity, restaurant contexts | **Mixed-to-strong:** most items map to product/UI work for digital products; relevance varies by case (see §6.3). |
| Case-study narratives (`src/data/caseStudies.js`) | User journeys, flows, information architecture/structure, interaction patterns, constraints, onboarding, trust/decision points, dashboards/builders/control panels, iteration/learnings, problem–solution framing | **Direct:** User research-adjacent/product thinking, interaction design, product strategy elements, and (in detailed cases) system/workspace modeling consistent with product design work. |
| `src/components/*`, `src/pages/*` | UI patterns for portfolio presentation (nav, cards, rails, galleries, facts/metadata, CTAs) | **Neutral/supporting:** presentation scaffolding, not service offerings. |

### 6.2 Content relating exclusively to unrelated services (standalone branding, graphic design, motion graphics, general content writing, marketing website design)
| Finding | Evidence/location | Notes |
|---|---|---|
| **No explicit standalone service offerings found** for branding-only, graphic-design-only, motion-graphics-only, or general content-writing-only work. | Reviewed `src/data/site.js`, `src/data/home.js`, `src/data/projects.js`, `src/data/caseStudies.js`, `index.html`, and page copy/components. | Site positions as Product/UX/UI design portfolio; no dedicated service lists/pages for those unrelated disciplines. |
| **Potentially adjacent (not confirmed exclusive): “website design” in project titles** | `zenrock-website-design(mvp)` — title “Zenrock Website Design(MVP)”, meta/category UI/UX/Crypto-Fintech (`projects.js`, `caseStudies.js`); `houzecheck-webapp` — title “Houzecheck Webapp and Website” | These may include marketing/website surfaces, but as represented they are tied to product/company contexts (web app/website/product UX). **Not classified as exclusively unrelated** without more detail; flagged for review in §6.3/§6.4. |

### 6.3 Project-by-project classification (relevance to a focused Product Designer portfolio)
| Slug | Title (current) | Cat/Meta (current) | Observed domain/type | PD-relevant signals | Classification | Flag / may not belong in final PD portfolio? |
|---|---|---|---|---|---|---|
| `offx-redesign` | Offx: Deal Discovery & Creation Flow | Product Design · 2024-25 · Crypto/Fintech | Trading/OTC deal workflow, multi-asset platform | Complex workflow redesign, trust/decision UX, pricing/terms/actions, onboarding/review for high-value actions | **High relevance** | No (core fit). |
| `herd-simplifying-blockchain-with-ai` | Herd - Simplifying Blockchain with AI | Product Design · 2025-26 · AI (and blockchain per copy) | AI-assisted blockchain data platform, collaborative search/understand/act | Product flows, AI-assisted task UX, complex data understanding/action | **High relevance** | No (core fit). |
| `no-code-data-builder` | Crypto No code Data Builder | Product Design · 2022-23 · Crypto/Fintech | No-code builder, dashboards/widgets/charts/workspace/permissions | SaaS/product builder UX, progressive flows, IA/mental model, configuration UX, system scalability | **High relevance** | No (core fit). |
| `corestack-enterprise-control-panel` | CoreStack: Enterprise Control Panel | Design concept · 2026 · B2B SaaS | Enterprise cloud-hosting control panel, multi-role users | Enterprise software, dashboards/control surfaces, navigation/IA for complex systems (concept) | **High relevance (concept)** | **Review:** labeled “Design concept” (not shipped case stated as concept) — keep if positioned transparently as product design concept; otherwise may be deprioritized. |
| `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.` | Making direct mail campaigns easier to launch, manage, and measure | Design concept · 2026 · SaaS | Campaign SaaS/dashboard for non-technical SMB users | Guided product UX, dashboard/workflow simplification, onboarding-to-first-campaign | **High relevance (concept)** | **Review:** “Design concept” and domain (direct mail) is less central than core digital product/fintech/enterprise examples; keep if strong PD narrative/assets exist. |
| `zenrock-webapp-design` | Zenrock Webapp Design | Product Design · 2024-25 · Crypto/Fintech | Web application (decentralized key management platform) | Full web app redesign, UX/interface/product design for technical platform | **High relevance** | No (good fit). |
| `zenrock-website-design(mvp)` | Zenrock Website Design(MVP) | UI/UX · 2024-25 · Crypto/Fintech | Website/MVP (company/product website context implied) | UI/UX for web surface | **Medium relevance / boundary case** | **Flag:** “Website Design (MVP)” can skew toward marketing/brand website rather than in-product UX; include only if framed as product/experience design for a product web surface with clear PD contribution. |
| `getlit-webapp` | Getlit Webapp | UI/UX · 2021 · Edtech | Learning/collaboration web app (poetry) | Web app UI/UX, collaboration/learning flows (limited detail in registry) | **Medium relevance** | **Review:** older/archived, sparse description; keep if case study demonstrates strong product design decisions. |
| `houzecheck-webapp` | Houzecheck Webapp and Website | UI/UX · 2022 · Real Estate | Web app and website (product discovery/UX improvements) | Product discovery, UX improvements across app/website surfaces | **Medium relevance** | **Flag/Review:** combined “Webapp and Website” scope; website portion may be partly marketing/informational — verify PD depth vs general web redesign. |
| `mindlantic` | Mindlantic | UI/UX · 2021 · Productivity | Soft-skills learning/productivity solution (daily learning bites) | Product concept/app UX signals (limited detail) | **Medium relevance** | **Review:** older/archived, minimal detail; may be weaker than stronger PD case studies. |
| `swoop` | Swoop Mobile App | UI/UX · 2021 · Restaurant | Mobile social/ordering app for restaurants | **Mobile application** UI/UX, social/ordering flows (limited detail) | **Medium relevance** | **Review:** domain (restaurant/social) is less aligned to complex systems/enterprise/fintech focus implied by hero; keep only if demonstrating strong mobile product design craft. |

**Summary:** 4 projects are clearly high-relevance product design case studies (`offx-redesign`, `herd-simplifying-blockchain-with-ai`, `no-code-data-builder`, `zenrock-webapp-design`), 2 are high-relevance but concept-labeled (`corestack-enterprise-control-panel`, `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.`), and 5 archived/older or boundary items (`zenrock-website-design(mvp)`, `getlit-webapp`, `houzecheck-webapp`, `mindlantic`, `swoop`) should be reviewed for depth, recency, and fit with an exclusively Product Design-focused narrative.

### 6.4 Global/site content flags for repositioning (audit notes, no changes made)
- **Hero/positioning copy (`index.html`, `src/data/site.js`)** already centers Product Design/complex systems — strong base; ensure all supporting copy avoids implying unrelated standalone services.
- **Category/label taxonomy (`src/data/projects.js`, see-also in `caseStudies.js`)** mixes `Product Design`, `UI/UX`, and `Design concept`; for exclusive Product Design positioning, these labels should be reviewed for consistency in a later phase.
- **Trusted-by/logos and CV claims (`src/data/home.js`, `src/data/site.js`)** should be revalidated to support a focused Product Designer story (content/accuracy), without layout changes.
- **Non-runtime artifacts** (`ARCHITECTURE.md`, `reference-audit/*`, `dist/*`) contain legacy/original framing and should be handled separately from runtime personalization decisions.