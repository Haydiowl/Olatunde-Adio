/**
 * site.js — CONTENT ONLY: shared chrome copy (nav, footer, CTA) verbatim from the reference.
 * Presentation lives in components/ (SiteNav, SiteFooter, sections/CTASection...).
 * No values here are invented; hrefs are the reference's exact destinations.
 */

export const nav = {
  logoText: 'Olatunde Adio',
  logoHref: '/',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ],
  bookACall: {
    // Label/casing preserved for existing styling; using supplied WhatsApp contact.
    label: 'WhatsApp',
    href: 'https://wa.link/5gkbb7',
    external: true,
  },
  menuTrigger: { label: 'menu' }, // renders MENU via text-transform; open state UNVERIFIED (D2)
};

export const hero = {
  // H1 is split per-character by the reference (staggered reveal); segments mark the
  // accent-colored words. Rendering is a presentation concern — this file holds the words.
  headline: 'I design thoughtful digital products for complex experiences',
  accentWords: ['thoughtful digital products'], // rendered rgb(229,52,27) on the reference
  subcopy:
    'I’m Olatunde Adio, a Product Designer based in Lagos, Nigeria. I make complex experiences simpler and more useful by turning product problems and requirements into clear, practical interfaces.',
  actions: [
    { label: 'View work', href: '/work', external: false },
    { label: 'Email me', href: 'mailto:adiotunde4567@gmail.com', external: true },
  ],
};

export const portfolioBar = {
  left: "Portfolio '26",
  right: { dot: true, text: 'Available for freelance & full-time' }, // based on Behance profile, subject to approval
};

export const cta = {
  label: 'get in touch',
  heading: 'Have a product challenge to work through?',
  headingHighlight: 'product challenge', // rendered in accent color
  buttons: [
    {
      label: 'Email me',
      href: 'mailto:adiotunde4567@gmail.com',
      variant: 'dark', // bg #2A2A2A, white label (verified fresh-load resting state)
      external: true,
      arrow: true, // both CTA buttons carry the 20×20 arrow box (verified DOM)
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.link/5gkbb7',
      variant: 'accent', // bg #E5341B, white label + white 28×28 arrow (verified)
      external: true,
      arrow: true,
    },
  ],
  status: ['Available for freelance & full-time', 'Based in Lagos, Nigeria'],
};

export const footer = {
  writeToMe: { label: 'Write to me', email: 'adiotunde4567@gmail.com' }, // Tel: +234 813 063 6803 (supplied)
  columns: [
    { label: 'Pages', links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
    ] },
    { label: 'Elsewhere', links: [
      // Only explicitly supplied/verified professional links included.
      { label: 'Behance', href: 'https://www.behance.net/bustin4jieber', external: true },
      { label: 'WhatsApp', href: 'https://wa.link/5gkbb7', external: true },
      { label: 'Resume', href: 'https://drive.google.com/file/d/12TNnqEgK5kSCVRR4zy6iAwqIb38LTyrU/view?usp=sharing', external: true },
    ] },
    { label: 'currently', links: [
      { label: 'Available for freelance & full-time', href: null },
      { label: 'Lagos, Nigeria', href: null },
      { label: '+234 813 063 6803', href: null },
    ] },
  ],
  bottomLine: ['copyright 2026', 'Lagos, Nigeria', 'Product Designer', 'built with care'],
  game: {
    score: { score: 0, popped: 0 },
    controls: [
      { ariaLabel: 'Toggle sound' },
      { ariaLabel: 'Reset' },
    ],
    // Bubble spawn parameters / keyframe durations are UNVERIFIED (§A5/A6) — not specified here.
  },
};

export const workPage = {
  headerLabel: { number: '01', text: 'Work' }, // no divider under this label (verified /work)
  h1: 'Selected product design work for web and mobile products',
  // Accent spans rendered in the accent color by existing component logic.
  accentWords: ['product design', 'web and mobile'],
  sectionLabel: { number: '02', text: 'Selected' },
  archivedLabel: { number: '03', text: 'Archived' },
  howLabel: { number: '04', text: 'How I work?' },
};

export const aboutPage = {
  headerLabel: { number: '01', text: 'About me' }, // inline rule under number only (verified)
  // Phase 5: shortened from "I design digital products around real problems and
  // clear decisions" (wrapped to 3 lines at 1440; >2-line desktop limit). Same
  // meaning; "digital products" remains in the subcopy + CV heading context.
  h1: 'I design for real problems and clear decisions',
  // Accent spans rendered in the accent color by existing component logic.
  accentWords: ['clear decisions'],
  cv: {
    label: { number: '02', text: 'Curriculum Vitæ' },
    heading: "Experience and background that shape how I work.",
    // Accent span starts at "shape how I work." (rendered by existing markup).
    headingAccent: "shape how I work.",
    downloadResumeLabel: 'Download Resume',
    rows: [
      {
        year: 'January 2026 – Present',
        company: 'Qanoroo Tech, United Kingdom',
        role: 'UI/UX Designer, Part Time',
        desc: [
          'Led UX design work for an AI-powered product focused on helping users make better, more informed decisions.',
          'Translated complex decision-support requirements into intuitive user flows, interaction patterns and clear interfaces.',
          'Designed AI interactions and user experiences in Figma with a focus on clarity, trust and actionable recommendations.',
          'Worked through UX problems from early concepts to high-fidelity screens, balancing user needs with product goals.',
        ],
      },
      {
        year: 'March 2026 – May 2026',
        company: 'Luxe Live, Spain',
        role: 'UI Designer, Contract',
        desc: [
          'Designed over 270 mobile screens, 100+ admin panel interfaces and 12 landing pages, creating a scalable ecosystem for users, creators, moderators and administrators.',
          'Developed live-streaming experiences, including multi-guest rooms, battle systems, gifting interactions and creator engagement features.',
          'Architected a virtual economy featuring Luxe Gold, Emeralds, mystery wheel mechanics, subscriptions, premium memberships and creator payout workflows.',
          'Created a scalable Figma design system with reusable components, standardized patterns and developer-friendly documentation.',
          'Designed admin and moderation experiences for user management, content control, verification workflows, transactions, payouts, monetization management and platform operations.',
          'Collaborated with stakeholders to translate complex business requirements into user experiences across mobile, web and administrative platforms.',
        ],
      },
      {
        year: 'September 2025 – February 2026',
        company: 'Health Bridge Medical Inc, United Arab Emirates',
        role: 'UI/UX Designer, Freelance',
        desc: [
          'Worked on a digital health and wellness platform focused on helping users track habits, manage appointments and maintain healthier lifestyles.',
          'Improved user retention by 11% through redesigning onboarding and health-tracking experiences based on behavioral insights and user feedback.',
          'Increased appointment booking efficiency by 14% by simplifying scheduling flows and reducing unnecessary steps.',
          'Designed accessible interfaces aligned with WCAG standards.',
          'Developed a component-based Figma design system to improve consistency across mobile and web products.',
          'Collaborated with cross-functional teams to translate complex health information into clear and actionable user experiences.',
        ],
      },
      {
        year: 'July 2025 – August 2025',
        company: 'Oxyygn Agency, United Kingdom',
        role: 'Product Designer',
        desc: [
          'Researched user behavior, industry trends and competitor benchmarks to identify product opportunities in the e-commerce market.',
          'Translated research and insights into user flows, wireframes and high-fidelity designs.',
          'Worked on product discovery and checkout experiences across devices.',
          'Contributed to improving the platform\'s functionality and shopping experience.',
        ],
      },
      {
        year: 'June 2024 – July 2025',
        company: 'NovaPay Solutions, South Africa',
        role: 'Product Designer',
        desc: [
          'Worked on a digital payments platform helping individuals and businesses manage transactions.',
          'Increased onboarding completion by 12% through redesigning account creation and verification flows based on user feedback and usability testing.',
          'Improved transaction success rates by 9% by simplifying payment journeys and reducing friction points.',
          'Designed and maintained a scalable Figma design system, reducing UI inconsistencies by 20% and accelerating feature delivery.',
          'Redesigned security, notification and transaction status experiences to improve user trust.',
          'Collaborated with product managers and engineers in Agile environments to deliver customer-focused features.',
        ],
      },
      {
        year: 'September 2023 – November 2023',
        company: 'Everlane, Germany',
        role: 'UI/UX Designer and Web Designer, Contract',
        desc: [
          'Led the end-to-end redesign of a cross-platform e-commerce store, focusing on mobile-first shopping experiences and one-click checkout flows.',
          'Conducted user research and wireframing.',
          'Improved the Add-to-Cart conversion rate by 18% within the first quarter after launch, as stated in my CV.',
        ],
      },
    ],
    education: [
      {
        year: '2017 – 2021',
        org: 'Obafemi Awolowo University, Nigeria',
        role: 'B.Sc. Economics',
        desc: null,
      },
      {
        year: 'Sep, 2023',
        org: 'Google',
        role: 'Google UX Design Professional Certificate',
        desc: null,
      },
      {
        year: 'August 30, 2020',
        org: 'freeCodeCamp',
        role: 'Responsive Web Design Certification',
        desc: null,
      },
    ],
  },
  beliefs: {
    label: { number: '03', text: 'Things I believe' },
    // Phase 5: shortened from "Good product design balances user needs, clarity,
    // and business goals" (3 lines at 1440); "users, clarity" keeps both accents.
    heading: 'Good design balances users, clarity, and business goals',
    headingAccents: ['users', 'clarity'],
    intro:
      'I’m Olatunde Adio, a Product Designer based in Lagos, Nigeria with 4+ years of experience. I focus on understanding problems, structuring user journeys, and shaping interfaces that help people and products move forward across SaaS, web and mobile applications, fintech, AI-powered products, healthcare, e-commerce, and administrative systems. Figma is my primary design tool; secondary tools include Adobe XD, Codex, Open code, Adobe Photoshop, Framer, Webflow, HTML5, CSS3, and JavaScript.\n\nAwards and recognition: Upwork Top Rated Plus — Top 1% of UI/UX talent with 100% Job Success Score. Awwwards Honorable Mention — Mobile App UX/UI Excellence, Everlane.\n\nSpeaking and mentoring: Lagos Design Week, Tech-In-Design Summit (Guest Speaker, October 2024) — Topic: "The Future of FinTech: Balancing Security with Seamless UX." CV-stated impact: Delivered a keynote presentation to 200+ aspiring designers and developers. UI/UX Design Bootcamp (Lead Mentor, June 2025 – December 2025) — CV-stated responsibilities: Mentored a cohort of 50+ junior designers on visual arts, color theory and high-fidelity prototyping; guided students through portfolio reviews and interview coaching. CV-stated outcome: 15+ students secured internships at Nigerian tech startups.',
    cards: [
      {
        label: 'T.01',
        title: 'Start with the problem, not the screen',
        desc: 'I work to understand who is affected, what they need, and what the product must achieve before defining flows or interface details.',
      },
      {
        label: 'T.02',
        title: 'Clarity helps people act with confidence',
        desc: 'In complex products, structure, hierarchy, and interaction choices should make information easier to understand and decisions easier to make.',
      },
      {
        label: 't.03',
        title: 'Design works best when teams stay aligned',
        desc: 'I aim to make decisions, states, and trade-offs clear so product managers, designers, and developers can build from the same understanding.',
      },
    ],
  },
  howLabel: { number: '04', text: 'How I work?' },
  cta: {
    // Phase 5: shortened from "Interested in working together on a product?" —
    // the first segment wrapped at the 600px column, forcing a 3-line heading.
    // "Want to work together on a" fits 1 line; <br> + accent "product?" = 2 lines.
    heading: 'Want to work together on a product?',
    headingHighlight: 'product', // rendered in accent color; <br> before it (verified markup)
    ctaLabel: 'get in touch',
  },
};

/** /about beliefs content (section 03) — verbatim from the live /about page. */
export const beliefs = aboutPage.beliefs;
