/**
 * projects.js — CONTENT ONLY (Phase 2, task 8: content separated from presentation).
 *
 * Single source of truth: reference-audit/ (Phase 1) + verbatim extraction from the
 * reference site's server-rendered HTML (/work page). Every string below is transcribed
 * exactly as it appears on https://www.sandeep.design/ — including the P .08 spacing
 * quirk and the trailing-dot / parentheses slugs. Do NOT "clean up" these values.
 *
 * Presentation lives in components/ (ProjectRow, FeaturedCaseCard, CaseStudyLayout...).
 */

/** Local asset path helper — original filenames preserved in reference-audit/assets/images.
 *  Absolute path so nested SPA routes (/work/:slug) resolve; served by the Vite
 *  reference-audit plugin (vite.config.js). */
export const imageUrl = (filename) => `/reference-audit/assets/images/${filename}`;

/**
 * The 11 project rows, in reference order.
 * number/title/description/category/year: verbatim from the /work page anchor text.
 * image: the row's preview image (framerusercontent.com filename, downloaded in Phase 1).
 * description is absent for P.06–P.11 on the reference (do not invent one).
 */
export const projects = [
  {
    slug: 'offx-redesign',
    number: 'P. 01',
    title: 'Offx: Deal Discovery & Creation Flow',
    description:
      'Turning a fragmented multi-asset OTC platform into a trusted workflow for buy-side traders, while keeping the technical depth they relied on.',
    category: 'Product Design',
    year: '2024-25',
    image: 'RyTIDibqosLDiLqwTKVG5WoKhfs.jpg',
  },
  {
    slug: 'herd-simplifying-blockchain-with-ai',
    number: 'P. 02',
    title: 'Herd - Simplifying Blockchain with AI',
    description:
      'Herd.eco is a collaborative platform designed to help users search, understand, and act on blockchain data with the assistance of AI agents.',
    category: 'Product Design',
    year: '2025-26',
    image: 'WfDIJ0KRJ019FAQYHr30yJGl0c.jpg',
  },
  {
    slug: 'no-code-data-builder',
    number: 'P. 03',
    title: 'Crypto No code Data Builder',
    description:
      'The Delphi Chart builder is an intuitive no-code solution that allows users to explore and build widgets using datasets.',
    category: 'Product Design',
    year: '2022-23',
    image: 'bin6vivTjf7oNqgZMr51mPIBpjk.jpg',
  },
  {
    slug: 'corestack-enterprise-control-panel',
    number: 'P. 04',
    title: 'CoreStack: Enterprise Control Panel',
    description:
      'A full redesign of a cloud-hosting control panel turning years of feature growth into a product that infrastructure, support, sales, billing teams, and clients could navigate with confidence.',
    category: 'Design concept',
    year: '2026',
    image: '9tIFy4oKAd2vcgl4koydzlYQ8.png',
  },
  {
    slug: 'making-direct-mail-campaigns-easier-to-launch-manage-and-measure.',
    number: 'P. 05',
    title: 'Making direct mail campaigns easier to launch, manage, and measure',
    description:
      'A redesign of an established direct-mail platform for roofers, real-estate agents, and home-service businesses. I turned an engineer-built dashboard into a guided product that helps non-technical owners understand the platform and reach their first campaign with confidence.',
    category: 'Design concept',
    year: '2026',
    image: 'lv3wcLxp8pEqp1ULaO7iCuw1yY.png',
  },
  {
    slug: 'zenrock-webapp-design',
    number: 'P. 06',
    title: 'Zenrock Webapp Design',
    description: null, // verbatim: no description on reference for P.06–P.11
    category: 'Product Design',
    year: '2024-25',
    image: 'R7rQf0AvfN1p4v7gOUF2CeAQcTU.jpg',
  },
  {
    slug: 'zenrock-website-design(mvp)',
    number: 'P. 07',
    title: 'Zenrock Website Design(MVP)',
    description: null,
    category: 'UI/UX',
    year: '2024-25',
    image: 'I83GiBzRWojsWdPiJb07EL4GQs.jpg',
  },
  {
    slug: 'getlit-webapp',
    number: 'P .08', // verbatim quirk: space after "P" on the reference — preserve it
    title: 'Getlit Webapp',
    description: null,
    category: 'UI/UX',
    year: '2021',
    image: 'oAoXRhotsUEqkLRTjCd33QfW7AQ.png',
  },
  {
    slug: 'houzecheck-webapp',
    number: 'P. 09',
    title: 'Houzecheck Webapp and Website',
    description: null,
    category: 'UI/UX',
    year: '2022',
    image: '0HVYUWJokoUFdCX48O2kjB4QiJA.png',
  },
  {
    slug: 'mindlantic',
    number: 'P. 10',
    title: 'Mindlantic',
    description: null,
    category: 'UI/UX',
    year: '2021',
    image: 'KP9PFiT6LM2hIfGv1QlkurqRGc.png',
  },
  {
    slug: 'swoop',
    number: 'P. 11',
    title: 'Swoop Mobile App',
    description: null,
    category: 'UI/UX',
    year: '2021',
    image: 'XFCcAHWT01IfOD6nXF7xn2DFdM.png',
  },
];

/**
 * Homepage featured-case card (section 01) content — verbatim from home HTML.
 * "Key Highlights" bullets use the katakana middle dot ・ as the reference does.
 */
export const featuredCase = {
  label: { number: '01', text: 'featured case' }, // rendered uppercase by CSS
  slug: 'offx-redesign',
  title: 'Offx: Deal Discovery & Creation Flow',
  tag: 'Product Design',
  highlightsLabel: 'Key Highlights',
  highlights: [
    '・ Redesigned a fragmented OTC platform into a clearer trader workflow.',
    '・ Moved pricing, terms, and context closer to the decision point.',
    '・ Added guided onboarding and review steps for high-value actions.',
  ],
  readMoreLabel: 'Read More',
  image: 'RyTIDibqosLDiLqwTKVG5WoKhfs.jpg',
};

/** Helper: look up a project by its URL slug (handles trailing-dot + parens slugs). */
export const getProject = (slug) => projects.find((p) => p.slug === slug) || null;

/** Ordered slugs for the /work list page. */
export const projectSlugs = projects.map((p) => p.slug);

/**
 * Archived rows on the /work list page (P.06–P.11), in reference order — the tail
 * of `projects` after the 5 selected (P.01–P.05). Archived rows carry no
 * description (verified: P.06–P.11 anchors have none on the reference).
 */
export const archivedProjects = projects.slice(5);
