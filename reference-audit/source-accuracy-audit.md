# Additional Source & Accuracy Audit (Final Website vs Supplied Sources)

**Compared against:** (1) uploaded CV (`/Users/user/Downloads/Olatunde UI_UX RESUME (1).pdf`, as represented by user-supplied CV details in conversation; PDF text not fully extractable in this environment), (2) Behance profile (`https://www.behance.net/bustin4jieber`, as observed earlier), (3) approved WhatsApp/email details.  
**Scope:** runtime site content/data (`index.html`, `src/data/*`, key page wiring) — **no visual changes made**.  
**Date:** 2026-11-12

---

## 1) Contact details and link checks

| Item | Expected (supplied) | Website value/location | Status |
|---|---|---|---|
| Email address | `adiotunde4567@gmail.com` | `mailto:adiotunde4567@gmail.com` in hero, CTA, footer `writeToMe.email` (`src/data/site.js`) | **Correct** |
| WhatsApp link | `https://wa.link/5gkbb7` | Nav CTA, CTA button, footer Elsewhere (`src/data/site.js`) | **Correct URL configured**; resolves via 301 to `https://api.whatsapp.com/send?...phone=2348130636803...` (HTTP 200 observed in automated check) — **works** |
| Telephone (supplied) | `+234 813 063 6803` | Footer “currently” text (`src/data/site.js`) | **Present/correct** |
| Behance link | `https://www.behance.net/bustin4jieber` | Footer Elsewhere (`src/data/site.js`) | **Correct URL configured**. Automated `curl -I` returned HTTP 400 (likely anti-bot/protection in this environment); profile content was previously accessible via web fetch in-session — **recommend manual browser verification** |
| Resume download | Uploaded CV, wired only after placed in repo and path confirmed | `[RESUME_URL]` placeholder in `src/data/site.js` (footer) and `src/pages/About.jsx` (About download button) | **Does not work / intentionally unwired** (path not yet confirmed) |

---

## 2) Experience, education, awards, skills, recognition (site vs supplied sources)

### 2.1 Employment (company names, titles, dates/types)
*Site source:* `src/data/site.js` → `aboutPage.cv.rows`

| # | Website entry | Supplied in conversation (from CV) | Match |
|---|---|---|---|
| 1 | Bynari Tech — UI/UX Designer, Part Time — January 2026 to Present | Bynari Tech, UI/UX Designer, Part Time, January 2026 to Present | **Matches** (company/title/type/dates) |
| 2 | Luxe Live — UI Designer, Contract — March 2026 to May 2026 | Luxe Live, UI Designer, Contract, March 2026 to May 2026 | **Matches** |
| 3 | Health Bridge Medical Inc — UI/UX Designer, Freelance — September 2025 to February 2026 | Health Bridge Medical Inc, UI/UX Designer, Freelance, September 2025 to February 2026 | **Matches** |
| 4 | Oxyygn Agency — Product Designer — July 2025 to August 2025 | Oxyygn Agency, Product Designer, July 2025 to August 2025 | **Matches** (no employment type shown on site; confirm if CV specifies type) |
| 5 | NovaPay Solutions — Product Designer — June 2024 to July 2025 | NovaPay Solutions, Product Designer, June 2024 to July 2025 | **Matches** (no employment type shown on site; confirm if CV specifies type) |
| 6 | Everlane — UI/UX Designer and Web Designer, Contract — September 2023 to November 2023 | Everlane, UI/UX Designer and Web Designer, Contract, September 2023 to November 2023 | **Matches** |

- **Responsibilities/achievements:** all 6 rows use placeholders `[Responsibilities and achievements from CV — to be added]` (not extracted from PDF text in this environment). **No invented responsibilities included**, but descriptions do **not yet match CV content** until added and verified.
- **Order:** listed in the provided (recent-first) sequence.

### 2.2 Education
*Site source:* `src/data/site.js` → `aboutPage.cv.education`

| Website | Supplied | Match / note |
|---|---|---|
| Obafemi Awolowo University, Nigeria — 2017 to 2021 — `[Degree title not specified in CV]` · freeCodeCamp Responsive Web Design Certification (Aug 30, 2020) | Obafemi Awolowo University, Nigeria, June 2017 to 2021 (degree title not specified); freeCodeCamp Responsive Web Design Certification, August 30, 2020 | **Substantially matches**. Minor formatting difference: site shows `2017 to 2021` vs supplied `June 2017 to 2021` (month precision omitted). Degree title correctly not invented. |

### 2.3 Awards and professional activities
*Site source:* `src/data/site.js` → `aboutPage.beliefs.intro` (text block)

| Website | Supplied | Match |
|---|---|---|
| Upwork Top Rated Plus | Upwork Top Rated Plus | **Matches** |
| Awwwards Honorable Mention, Mobile App UX/UI Excellence (Everlane) | Awwwards Honorable Mention, Mobile App UX/UI Excellence, Everlane | **Matches** |
| Guest Speaker, Lagos Design Week Tech-In-Design Summit (October 2024) | Lagos Design Week, Tech-In-Design Summit, Guest Speaker, October 2024 | **Matches** |
| Lead Mentor, UI/UX Design Bootcamp (June 2025 to December 2025) | UI/UX Design Bootcamp, Lead Mentor, June 2025 to December 2025 | **Matches** |

### 2.4 Skills and tools
*Site source:* `src/data/site.js` (About beliefs intro / positioning copy)

| Website | Supplied | Match / note |
|---|---|---|
| **Primary:** Figma (stated as primary) | Figma (Expert), primary design tool | **Matches intent**; “Expert” level not explicitly written on site. |
| **Secondary:** Adobe XD, Codex, Open code, Adobe Photoshop, Framer, Webflow, HTML5, CSS3, JavaScript | Adobe XD, Codex, Open code, Adobe Photoshop, Framer, Webflow, HTML5, CSS3, JavaScript | **Matches list** (presented as secondary/supporting) |
| Capability/domain phrasing (SaaS, web/mobile, fintech, AI-powered products, healthcare, e-commerce, admin systems/dashboards, etc.) | CV/positioning domains as supplied | **Aligned in intent**; verify against full CV skill/capability wording when PDF text is reviewed. |

### 2.5 Project descriptions (site vs CV/Behance)
| Area | Finding | Status |
|---|---|---|
| Work page cards & case studies (`src/data/projects.js`, `src/data/caseStudies.js`) | Project titles/descriptions/narratives/images/links still reflect **original Sandeep portfolio projects** (e.g. Offx, Herd, Crypto No code Data Builder, CoreStack, etc.), not Olatunde’s CV/Behance projects. | **Do not match supplied Olatunde sources** (critical) |
| CV personal projects (OPay Virtual Bank App Redesign, Nogovy AI Support Bot) | Not represented as implemented site case studies/projects. | **Not yet reflected on site** |
| Behance project inventory | Not yet selected/implemented on site. | **Not yet reflected on site** |

---

## 3) Experience-years discrepancy (flagged — not silently changed)

| Source | Stated experience |
|---|---|
| **CV (as stated by user)** | **5 years of experience** |
| **Behance profile (observed earlier)** | **“over 4 years of experience”** |
| **Website (current)** | **“4+ years of experience”** appears in `src/data/site.js` (`aboutPage.beliefs.intro`, line ~167) |

**Flag:** There is a discrepancy between the CV (“5 years”) and Behance (“over 4 years”), and the website currently aligns with Behance/“4+ years”. **No silent change made** to reconcile sources. Please confirm the canonical experience statement to publish; update website copy (and, if desired, external profiles) consistently based on your approved/accurate figure.

---

## 4) Project ownership, approvals, and claims

| Check | Finding | Status |
|---|---|---|
| Every project belongs to the correct portfolio owner | Homepage featured/selected, all 11 Work page projects, and all case-study pages/content/assets remain **original Sandeep projects/materials** (not Olatunde Adio’s verified work). | **Fail (critical)** — incorrect/misattributed for Olatunde’s portfolio |
| No unapproved projects have been added | No new Olatunde projects were added. However, original Sandeep projects remain published/displayed in the portfolio slots; none of these are approved Olatunde projects. | **Flag:** no *new* additions, but existing displayed projects are **not approved Olatunde portfolio entries** |
| No invented metrics or achievements appear | No fabricated metrics, business outcomes, user research results, testimonials, or invented awards/achievements introduced in personalized site copy. Placeholders used for missing CV descriptions/resume. Supplied awards/activities included as provided. | **Pass** (with placeholders pending verified detail) |
| CV/Behance alignment of project details | Cannot be fully validated on site because Olatunde’s CV/Behance projects are not yet implemented; Behance project contents were previously inaccessible (403) for deep comparison. | **Pending** |

---

## 5) Additional flags
- **Behance automated reachability:** configured URL is correct, but automated HEAD request received HTTP 400 in this environment; manual verification recommended.
- **Resume:** download non-functional until uploaded CV is placed in repo and final path is confirmed/wired.
- **Minor formatting:** education years rendered as `2017 to 2021` (site) vs `June 2017 to 2021` (supplied) — confirm preferred precision.
- **Employment type display:** Oxyygn Agency and NovaPay Solutions rows omit explicit “Contract/…” type labels on site; confirm against CV.
- **PDF comparison limitation:** full CV text (responsibilities/achievements, exact experience phrasing, degree/title details) could not be programmatically extracted here; comparison relies on user-supplied CV details.

---

## 6) Summary conclusion
- **Correct on site:** approved email, WhatsApp (configured and functional), telephone, Behance URL (configured), core employment companies/titles/dates as supplied, education/awards/activities/tools (substantially), and no invented metrics/achievements.
- **Not correct / incomplete:** resume download not wired; experience-years claim on site (**4+ years**) conflicts with stated CV (**5 years**) and was **not** reconciled; project cards/case studies/assets do not belong to Olatunde and do not match CV/Behance project materials.
- **No visual changes made during this audit.**