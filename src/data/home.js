/**
 * home.js — CONTENT ONLY: homepage sections 02–05 verbatim from the reference.
 *
 * SOURCE: full reference HTML (server-rendered) — text transcribed exactly,
 * including punctuation (“-” vs “–”, curly apostrophes). Section 01 (featured
 * case) lives in projects.js → featuredCase. The hero/portfolio bar/CTA/footer
 * copy lives in site.js. Presentation lives in components/sections/*.
 *
 * No values here are invented; where the reference omits something (e.g. a
 * description), it is null.
 */

/**
 * Section 02 "Selected" — 4 work rows on the homepage (P.02–P.05).
 * P.01 is the featured case (section 01); P.06–P.11 appear only on /work.
 * Row content comes from projects.js (single source of truth) — this file only
 * records the homepage ordering.
 */
export const selectedSlugs = [
  'herd-simplifying-blockchain-with-ai',
  'no-code-data-builder',
  'corestack-enterprise-control-panel',
  'making-direct-mail-campaigns-easier-to-launch-manage-and-measure.',
];

/**
 * Section 03 "Why Work With Me?" — intro (two display lines, split per
 * character on the reference for the reveal animation) + 3 principle cards.
 */
export const whyWork = {
  label: { number: '03', text: 'Why Work With Me?' },
  intro: [
    'Clear thinking for complex product problems.',
    'I focus on user needs and business goals to turn complex requirements into clear, practical digital experiences.',
  ],
  // Accent-colored spans inside intro[0] (rendered by existing component logic).
  introAccents: ['Clear thinking', 'complex product problems.'],
  cards: [
    {
      letter: 'A',
      title: 'Start with the problem',
      desc: 'I take time to understand users, constraints, and business objectives before moving to screens, so the work addresses the right issue.',
    },
    {
      letter: 'B',
      title: 'Bring structure to complexity',
      desc: 'From user journeys and information architecture to interface details, I organize complex requirements into experiences people can navigate with confidence.',
    },
    {
      letter: 'C',
      title: 'Design for real use',
      desc: 'I consider states, edge cases, and handoff details so product decisions translate into clear, buildable interfaces for web and mobile.',
    },
  ],
};

/**
 * Section 04 "How I work?" — heading + intro + 4 process items (H.01–H.04),
 * separated by 1px rgba(111,110,106,0.2) rules (measured on the reference).
 */
export const howIWork = {
  label: { number: '04', text: 'How I work?' },
  heading: 'A practical process for thoughtful product design.',
  intro:
    'I work closely with founders, product managers, and developers to align on goals, make informed decisions, and deliver clear product experiences.',
  items: [
    {
      number: 'H. 01',
      title: 'Understand',
      desc: 'Align on goals, users, constraints, and product context to define the problem and the outcomes the design needs to support.',
    },
    {
      number: 'H. 02',
      title: 'Explore and structure',
      desc: 'Map journeys, flows, and information architecture, then explore solutions through sketches and wireframes before refining the interface.',
    },
    {
      number: 'H. 03',
      title: 'Design and refine',
      desc: 'Develop clear interfaces, interaction patterns, and consistent design-system elements, iterating through feedback and review.',
    },
    {
      number: 'H. 04',
      title: 'Support delivery',
      desc: 'Document decisions, clarify states and behaviours, and collaborate through handoff so the final product holds up in implementation.',
    },
  ],
};

/**
 * Section 05 "Previously trusted by" — 7 ticker items (DOM order, live probe):
 *   1. img ZLhnW4YzXOO05k4nhhbCTV8U.png  w109  blend multiply  opacity .51
 *   2. svg svg9165354306.svg             w163  blend normal    opacity .51
 *   3. svg svg-1493448807_2847.svg       w73   blend normal    opacity 1
 *      (this SVG carries <g opacity="0.5"> internally — not a wrapper value)
 *   4. img mhb1VlcGpDRDYlkXYfUDOeI0q8.svg w143 blend luminosity opacity .5
 *   5. img 4crBo7ox3nLtlUrQTXFwQNU7xKE.png w128 blend normal
 *      opacity .51 with filter: invert(1)  ← corrected: NOT mix-blend-mode
 *   6. svg svg10868082009.svg            w178  blend normal    opacity .51
 *   7. svg svg-338745722_19389.svg       w107  blend normal    opacity 1
 *
 * All items h30, ul row flex gap 50. The 4 svg files were extracted verbatim
 * from the reference's inline <symbol>/<svg id> definitions (no original
 * filenames exist for them — the id is the original identifier).
 * The row does NOT animate (no marquee keyframes in the reference CSS —
 * "ticker-item" is only a class name; the sole site animation is
 * pulsingDotRipple). The Phase-1 a11y count of 6 vs DOM 7 remains UNVERIFIED
 * (see UNVERIFIED-VALUES.md → logo a11y duplication).
 */
export const trustedBy = {
  label: { number: '05', text: 'Previously trusted by' },
  logos: [
    {
      kind: 'img',
      src: 'ZLhnW4YzXOO05k4nhhbCTV8U.png',
      width: 109,
      height: 29.88,
      blend: 'multiply',
      opacity: 0.51,
      alt: '',
    },
    {
      kind: 'svg',
      src: 'svg9165354306.svg',
      width: 163,
      height: 30,
      blend: 'normal',
      opacity: 0.51,
      alt: '',
    },
    {
      kind: 'svg',
      src: 'svg-1493448807_2847.svg',
      width: 73,
      height: 30,
      blend: 'normal',
      opacity: 1,
      alt: '',
    },
    {
      kind: 'img',
      src: 'mhb1VlcGpDRDYlkXYfUDOeI0q8.svg',
      width: 143,
      height: 30.04,
      blend: 'luminosity',
      opacity: 0.5,
      alt: '',
    },
    {
      kind: 'img',
      src: '4crBo7ox3nLtlUrQTXFwQNU7xKE.png',
      width: 128,
      height: 30,
      blend: 'normal',
      opacity: 0.51,
      filter: 'invert(1)',
      alt: '',
    },
    {
      kind: 'svg',
      src: 'svg10868082009.svg',
      width: 178,
      height: 30,
      blend: 'normal',
      opacity: 0.51,
      alt: '',
    },
    {
      kind: 'svg',
      src: 'svg-338745722_19389.svg',
      width: 107,
      height: 30,
      blend: 'normal',
      opacity: 1,
      alt: '',
    },
  ],
};

/** Homepage section order (root children after the nav — layout-measurements). */
export const homeSectionOrder = [
  'portfolio-bar',
  'hero',
  'section-01-featured',
  'section-02-selected',
  'section-03-why',
  'section-04-how',
  'section-05-trusted',
  'cta',
  'footer',
];
