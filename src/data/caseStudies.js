/**
 * caseStudies.js — CONTENT ONLY for case-study pages.
 * Source of truth: live site captures (/tmp/cs-audit/*.html, .json, .txt) and
 * reference-audit/assets/images. no-code-data-builder retains its detailed
 * live-verified block structure from Phase 3; other slugs include extracted
 * hero/meta/facts/body/images/see-also content for routing + rendering.
 */
export const caseStudies = {
  'no-code-data-builder': {
    slug: 'no-code-data-builder',
    meta: ['Product Design', '2022-23', 'Crypto/Fintech'],
    title: 'Crypto No code Data Builder',
    lede:
      'The Delphi Chart builder is an intuitive no-code solution that allows users to explore and build widgets using datasets.',
    facts: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Duration', value: '2-3 Months' },
      { label: 'Status', value: 'Sunset' },
      {
        label: 'Project link',
        value: 'View Project',
        href: 'https://members.delphidigital.io/data/workspace',
      },
    ],
    heroImage: 'bin6vivTjf7oNqgZMr51mPIBpjk.jpg',
    sections: [
      {
        id: 'context',
        number: '03',
        label: 'Context',
        railLinks: [
          { label: 'THE PRODUCT', href: './#what' },
          { label: 'MY ROLE', href: './#my-role' },
        ],
        content: [
          {
            type: 'paragraphs',
            maxWidth: '90%',
            paragraphs: [
              'I was primarily responsible for designing the first version of the product, from early concepts and UX structure to high fidelity UI.',
              'I created initial mockups, mapped user journeys, and designed the core builder experience for charts, widgets, and dashboards. Working within strict brand constraints, I established a cohesive interface using the existing visual language while building a functional and scalable UI.',
              'After launch, I collaborated with the team to improve usability. This included restructuring the widget creation flow into clearer progressive stages so users could build charts and dashboards more easily and quickly. Later iterations and feature expansions were continued by the broader design and development team.',
              'This product is a no code data builder that allows users to create charts, widgets, and full dashboards using existing or custom datasets without writing code. Users can combine datasets, apply filters, build KPI widgets, organize projects, and share or publish dashboards with permission controls.',
              'The goal was to design an intuitive system that simplifies complex data visualization workflows while supporting customization, sharing, and scalable project organization.',
            ],
          },
          {
            type: 'quote',
            text: 'Making complex data visualization workflows feel simple enough to build without code.',
          },
          {
            type: 'subhead-block',
            title: 'My Role',
            intro:
              'Four distinct workstreams across the project lifecycle,  from defining the first product structure to improving it after launch.',
            introMaxWidth: '80%',
            afterIntroRule: 'mid',
            list: {
              padLeft: 60,
              gap: 16,
              badgeWidth: 60,
              badgePad: '5px 0px',
              rowGap: 30,
              titleTag: 'h5',
              descSize: '14',
              trailingRule: false,
              items: [
                {
                  n: '01',
                  title: 'Product structure',
                  desc: 'Defined how charts, widgets, dashboards, and projects would work together as one connected system from the first version.',
                },
                {
                  n: '02',
                  title: 'User journeys',
                  desc: 'Mapped journeys across dataset selection, chart creation, widget building, dashboard organization, and publishing.',
                },
                {
                  n: '03',
                  title: 'Design within constraints',
                  desc: 'Used layout, hierarchy, spacing, and interaction patterns to achieve clarity inside an existing visual language.',
                },
                {
                  n: '04',
                  title: 'Post-launch iteration',
                  desc: 'Restructured the widget creation flow into progressive stages to reduce setup friction after the initial launch.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'users',
        number: '02',
        label: 'Users & Problem',
        railLinks: [
          { label: 'CORE PROBLEM', href: './#No opinion' },
          { label: 'FOUR CHALLENGES', href: './#pricing' },
        ],
        content: [
          {
            type: 'heading',
            tag: 'h2',
            text: 'Making complex crypto data workflows easy to build without code.',
            maxWidth: '86%',
          },
          { type: 'rule', tone: 'light' },
          {
            type: 'intro',
            title: 'Complex data workflows were powerful, but too difficult to structure without a clear builder experience.',
            titleTag: 'h3',
            body: 'Users needed to move from datasets to charts, widgets, and dashboards, but the workflow involved too many decisions at once. They had to choose data sources, combine datasets, select visualization types, apply filters, configure values, customize outputs, and manage sharing or publishing settings. The challenge was to reduce this complexity without removing the flexibility advanced users needed.',
            maxWidth: '80%',
          },
          { type: 'rule', tone: 'light' },
          { type: 'image', src: 'vOjQPFNzO4h9JA5DzHtvoTygBtE.jpg' },
          {
            type: 'list',
            gap: 16,
            badgeWidth: 100,
            badgePad: '6px',
            rowGap: 40,
            titleTag: 'h4',
            descSize: '16',
            trailingRule: false,
            items: [
              {
                n: '01',
                title: 'Too many decisions in one flow',
                desc: 'Users had to choose data sources, combine datasets, select visualization types, apply filters, configure values, customize labels, and manage outputs. Without a clear structure, the builder could feel overwhelming.',
              },
              {
                n: '02',
                title: 'Complex data needed a simpler mental model',
                desc: 'The product supported powerful workflows, but users needed a clearer way to understand how raw datasets turned into charts, widgets, and dashboards.',
              },
              {
                n: '03',
                title: 'Existing brand constraints limited flexibility',
                desc: 'The interface had to stay consistent with the existing visual language, which meant the design couldn’t rely on a completely new system to solve usability problems.',
              },
              {
                n: '04',
                title: 'Sharing and publishing needed clearer paths',
                desc: 'Dashboards were not only meant to be created, but also previewed, shared, published, and controlled through permissions. These paths needed to feel connected to the core workflow.',
              },
            ],
          },
          { type: 'rule', tone: 'mid' },
          {
            type: 'challenges',
            title: 'UX Challenges',
            list: {
              gap: 16,
              badgeWidth: 100,
              badgePad: '6px',
              rowGap: 24,
              titleTag: 'h5',
              descSize: '14',
              trailingRule: true,
              items: [
                {
                  n: '01',
                  title: 'Structuring a complex builder journey',
                  desc: 'Users needed to move from datasets to charts, widgets, and dashboards, but the workflow involved many decisions across data selection, visualization, filtering, customization, and publishing.',
                },
                {
                  n: '02',
                  title: 'Reducing cognitive load',
                  desc: 'Crypto data can be dense and technical, so the experience needed to simplify configuration without making the product feel limited or too basic.',
                },
                {
                  n: '03',
                  title: 'Designing within existing constraints',
                  desc: 'The interface had to work within an established brand and product system, which limited how much the layout, visual language, and interaction patterns could change.',
                },
                {
                  n: '04',
                  title: 'Balancing power and simplicity',
                  desc: 'The product needed to support advanced use cases like custom datasets, combined data sources, KPI widgets, and permission controls, while still feeling usable for non-technical users.',
                },
                {
                  n: '05',
                  title: 'Creating a scalable workspace model',
                  desc: 'Charts, widgets, dashboards, projects, sharing, and publishing all needed to feel connected, so the product could grow without becoming fragmented.',
                },
                {
                  n: '06',
                  title: 'Making customization feel manageable',
                  desc: 'Users needed control over labels, values, filters, and presentation settings, but those controls had to be organized clearly to avoid overwhelming the creation flow.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'process',
        number: '03',
        label: 'Process',
        railLinks: [
          { label: 'UX DIRECTION', href: './#phases' },
          { label: 'KEY DECISIONS', href: './#reqs-→-decisions' },
        ],
        content: [
          {
            type: 'header-block',
            title: 'Structure before polish',
            body: 'The major UX decisions revolved around simplifying the builder flow and giving users a clearer path from data source to final dashboard without limiting what they could do.',
            bodyMaxWidth: '90%',
            titleBodyGap: 8,
            afterRule: 'light',
          },
          {
            type: 'subhead-block',
            title: 'How the builder was shaped',
            intro: ' Four core decisions drove the experience,  each one reducing friction without reducing capability.',
            introMaxWidth: '80%',
            titleIntroGap: 8,
            afterIntroRule: 'mid',
            list: {
              gap: 16,
              badgeWidth: 80,
              badgePad: '6px',
              rowGap: 24,
              titleTag: 'h5',
              descSize: '14',
              trailingRule: true,
              items: [
                {
                  n: '01',
                  title: 'Progressive creation flow',
                  desc: 'Broke the builder into smaller stages so users make decisions in sequence and not all at once. Reduced cognitive load without removing any options.',
                },
                {
                  n: '02',
                  title: 'Clear data-to-output structure',
                  desc: 'Organized the flow around a simple sequence: select data → choose visualization → apply filters → configure values → customize → publish. That sequence became the spine of the whole experience.',
                },
                {
                  n: '03',
                  title: 'Clarity over visual complexity',
                  desc: 'Prioritized function over decoration. Users were already navigating complex data decisions and adding visual complexity on top would have made the cognitive load worse, not better.',
                },
                {
                  n: '04',
                  title: 'Scalable workspace model',
                  desc: 'Treated charts, widgets, dashboards, projects, sharing, and permissions as parts of one connected workspace from the start so the product could scale beyond v1 without a structural redesign.',
                },
              ],
            },
          },
          {
            type: 'image-block',
            gap: 20,
            topSpacer: 60,
            src: 'o8UtT22B8yQyQIlEcdP0Eu4.jpg',
          },
        ],
      },
      {
        id: 'solution',
        number: '04',
        label: 'Solution',
        railLinks: [
          { label: 'OVERVIEW', href: './#01.-onboarding' },
          { label: 'CREATION FLOW', href: './#02.-dashboard' },
          { label: 'WORKSPACE MODEL', href: './#03.-context' },
        ],
        content: [
          {
            type: 'header-block',
            title: 'A guided builder that reduces decisions',
            titleMaxWidth: '80%',
            body: 'A clearer path from raw datasets to visual outputs. Create, organize, and share from one structured workspace.',
            bodyMaxWidth: '80%',
            bodyNested: true,
            titleBodyGap: 12,
            afterRule: 'light',
          },
          {
            type: 'group',
            name: 'flow',
            badge: 'FLOW',
            title: 'The creation sequence',
            intro: 'Six steps. Each one narrows the decision space before the next one opens. The sequence is the UX.',
            image: 'v0DsYcLqvfL1OQVDju2L2D6SfXs.jpg',
            listPadLeft: 4,
            listLeadingSpacer: 24,
            items: [
              {
                n: '01',
                title: 'Select the data source',
                desc: 'Connect an existing dataset or bring your own. The entry point is always the data not the visualization type.',
                image: '3PRZ4oOCg1PUBZJ6x2W1TT3nhc.jpg',
              },
              {
                n: '02',
                title: 'Choose the visualization type',
                desc: 'Bar, line, pie, KPI widget, pick the output format before configuring it. Type informs configuration, not the other way around.',
                image: 'RDh73OsVezrntZgnYtqzW8AOZtU.jpg',
              },
              {
                n: '03',
                title: 'Apply filters',
                desc: 'Narrow the dataset to the relevant range, segment, or condition. Filters are a dedicated step, not buried in settings.',
                image: 'vr1FXxbosUfqSkkhKtA1iR3kxw.jpg',
              },
              {
                n: '04',
                title: 'Configure values and labels',
                desc: 'Set axes, metrics, units, and display options with the chart visible so configuration and output are always in view together.',
                image: 'vr1FXxbosUfqSkkhKtA1iR3kxw.jpg',
              },
              {
                n: '05',
                title: 'Customize the output',
                desc: 'Adjust styling and layout within the brand system constraints. Customization is last after the data is right.',
                image: 'AqijvuCeD4hWp9zUciUKULepgcE.jpg',
              },
              {
                n: '06',
                title: 'Preview, share, or publish',
                desc: 'Preview before committing. Share a link directly, or publish with permission controls. Distribution is part of the builder, not an afterthought.',
                image: 'TjNkNnC1P5BQkK2rQ14TE4nl44.jpg',
              },
            ],
          },
          { type: 'rule', tone: 'dark', className: 'cs-solution-divider' },
          {
            type: 'group',
            name: 'workspace',
            badge: 'WORKSPACE',
            title: 'One system for everything',
            intro: 'Charts, widgets, dashboards, projects, sharing, and permissions were designed as parts of one connected workspace not a set of loosely linked features.',
            image: '9QSb6jWu0m2C5S6eYBG8ppzFB8o.jpg',
            listPadLeft: 4,
            items: [
              {
                n: '01',
                title: 'Charts',
                desc: 'Individual visualizations built from a single dataset. The atomic unit of the builder everything else is composed from charts.',
              },
              {
                n: '02',
                title: 'Widgets',
                desc: 'Configured chart outputs including KPI cards and summary views. Widgets are charts with a defined display format and  ready to be placed in a dashboard.',
              },
              {
                n: '03',
                title: 'Dashboards',
                desc: 'Collections of widgets organized into a shareable view. Dashboards are the final deliverable the thing that gets previewed, shared, or published.',
              },
              {
                n: '04',
                title: 'Projects',
                desc: 'Organizational containers for charts, widgets, and dashboards. Projects allow teams to keep work scoped without fragmenting the workspace.',
              },
              {
                n: '05',
                title: 'Permissions',
                desc: 'Sharing and publishing controls built into the dashboard workflow. View, comment, or edit access configured at the dashboard level.',
              },
            ],
          },
        ],
      },
      {
        id: 'impact',
        number: '05',
        label: 'Impact & Learnings',
        railLinks: [
          { label: 'OUTCOMES', href: './#outcomes' },
          { label: 'LEARNINGS', href: './#learnings' },
        ],
        content: [
          {
            type: 'header-block',
            title: 'What the first version established',
            titleBodyGap: 20,
            afterRule: 'light',
          },
          {
            type: 'impact-block',
            title: 'Impact',
            cards: [
              {
                label: 'FOUNDATION',
                heading: 'A scalable no-code data visualization product.',
                body: 'The first version established the structural foundation for charts, widgets, dashboards, projects, sharing, and permissions to scale together as one system  not a set of loosely connected features.',
              },
              {
                label: 'BUILDER EXPERIENCE',
                heading: 'Complex configuration made navigable',
                body: 'A process involving multiple data sources, visualization types, filters, and configuration steps was reorganized into a progressive flow that reduced cognitive load without reducing capability.',
              },
              {
                label: 'POST-LAUNCH',
                heading: 'Widget flow restructured into progressive stages',
                body: 'After launch, the widget creation flow was revised to break setup into sequential steps making the product easier to understand on first use and easier to trust on repeat use.',
              },
            ],
          },
          {
            type: 'learnings-block',
            title: 'Learnings',
            afterTitleRule: 'mid',
            items: [
              {
                n: 'L.01',
                title: 'Complex tools need structure before visual polish',
                desc: 'The temptation was to make the builder feel powerful. The right move was to make it feel clear. Structure came first and polish followed where it earned its place.',
              },
              {
                n: 'L.02',
                title: 'Progressive flows work when users face many configuration decisions',
                desc: 'Exposing everything at once creates anxiety, not capability. Sequencing decisions even the same decisions transformed how the builder felt to use.',
              },
              {
                n: 'L.03',
                title: 'Clarity within constraints comes from layout, not a new system',
                desc: 'Working inside an existing brand forced better structural decisions. Hierarchy, spacing, and interaction patterns did the work that a new design system would have done elsewhere.',
              },
            ],
          },
        ],
      },
    ],
    seeAlso: {
      number: '02',
      label: 'See Also',
      items: [
        {
          title: 'Making direct mail campaigns easier to launch, manage, and measure',
          year: '2026',
          category: 'Design concept',
          slug: 'making-direct-mail-campaigns-easier-to-launch-manage-and-measure.',
        },
        {
          title: 'CoreStack: Enterprise Control Panel',
          year: '2026',
          category: 'Design concept',
          slug: 'corestack-enterprise-control-panel',
        },
        {
          title: 'Herd - Simplifying Blockchain with AI',
          year: '2025-26',
          category: 'Product design',
          slug: 'herd-simplifying-blockchain-with-ai',
        },
        {
          title: 'Zenrock Webapp Design',
          year: '2024-25',
          category: 'Product design',
          slug: 'zenrock-webapp-design',
        },
        {
          title: 'Offx: Deal Discovery & Creation Flow',
          year: '2024-25',
          category: 'Product design',
          slug: 'offx-redesign',
        },
        {
          title: 'Zenrock Website Design(MVP)',
          year: '2024-25',
          category: 'UI/UX',
          slug: 'zenrock-website-design(mvp)',
        },
        {
          title: 'Swoop Mobile App',
          year: '2021',
          category: 'UI/UX',
          slug: 'swoop',
        },
        {
          title: 'Mindlantic',
          year: '2021',
          category: 'UI/UX',
          slug: 'mindlantic',
        },
        {
          title: 'Getlit Webapp',
          year: '2021',
          category: 'UI/UX',
          slug: 'getlit-webapp',
        },
        {
          title: 'Houzecheck Webapp and Website',
          year: '2022',
          category: 'UI/UX',
          slug: 'houzecheck-webapp',
        },
      ],
    },
  },
  'offx-redesign': {
    "slug": "offx-redesign",
    "layout": "rich-basic",
    "meta": [
      "Product Design",
      "2024-25",
      "Crypto/Fintech"
    ],
    "title": "Offx: Deal Discovery & Creation Flow",
    "lede": "Turning a fragmented multi-asset OTC platform into a trusted workflow for buy-side traders, while keeping the technical depth they relied on.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "3-4 Months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://offx.tech/"
      }
    ],
    "heroImage": "RyTIDibqosLDiLqwTKVG5WoKhfs.jpg",
    "introParagraphs": [
      "Offx is a private market liquidity platform that helps traders, investors, and market makers discover and create OTC/secondary market deals for crypto assets. Since deal sizes are large and trust matters, the product needed to make information, pricing, and actions feel clear and reliable.",
      "I worked on the product experience, UX flows, interface design, and visual system. My focus was on simplifying deal discovery, improving the create deal flow, and making key deal information easier to understand before users took action.",
      "Mapped the deal lifecycle, identified hesitation points, and rebuilt the create-deal flow around trust moments."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "What is offx?"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "What is offx?"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "h2",
        "text": "What is Offx?"
      },
      {
        "tag": "p",
        "text": "High-stakes transactions"
      },
      {
        "tag": "h6",
        "text": "Six- and seven-figure deal sizes mean small UX failures translate directly to lost trades and lost trust."
      },
      {
        "tag": "p",
        "text": "Private-market workflows"
      },
      {
        "tag": "h6",
        "text": "Pricing, availability, and counterparty terms live outside public order books, discovery is the hardest part."
      },
      {
        "tag": "p",
        "text": "Professional users"
      },
      {
        "tag": "h6",
        "text": "Traders, market makers, and liquidity providers who need speed but cannot afford to act on incomplete context."
      },
      {
        "tag": "p",
        "text": "Highlighted Problem"
      },
      {
        "tag": "h4",
        "text": "Users had to work too hard to understand a deal, and in high-value system, that hesitation costs deals."
      },
      {
        "tag": "h3",
        "text": "My Role"
      },
      {
        "tag": "p",
        "text": "A 01."
      },
      {
        "tag": "h5",
        "text": "UX Research"
      },
      {
        "tag": "p",
        "text": "A 02."
      },
      {
        "tag": "h5",
        "text": "Information architecture"
      },
      {
        "tag": "p",
        "text": "Restructured what gets surfaced, when, and how, so traders see what they need at the point of decision."
      },
      {
        "tag": "p",
        "text": "A 03."
      },
      {
        "tag": "h5",
        "text": "Interface design"
      },
      {
        "tag": "p",
        "text": "Designed every screen in the deal flow with attention to scannability, hierarchy, and high-trust patterns."
      },
      {
        "tag": "p",
        "text": "A 04."
      },
      {
        "tag": "h5",
        "text": "Visual system"
      },
      {
        "tag": "p",
        "text": "Built a typographic and component system the team can extend to onboarding, new deal types, and future workflows."
      },
      {
        "tag": "p",
        "text": "Users & Problem"
      },
      {
        "tag": "p",
        "text": "No opinion"
      },
      {
        "tag": "p",
        "text": "Fragmented context"
      },
      {
        "tag": "p",
        "text": "Pricing too late"
      },
      {
        "tag": "p",
        "text": "Create flow"
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Challenges"
      },
      {
        "tag": "p",
        "text": "Users & Problem"
      },
      {
        "tag": "p",
        "text": "No opinion"
      },
      {
        "tag": "p",
        "text": "Fragmented context"
      },
      {
        "tag": "p",
        "text": "Pricing too late"
      },
      {
        "tag": "p",
        "text": "Create flow"
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Challenges"
      },
      {
        "tag": "p",
        "text": "The question"
      },
      {
        "tag": "h2",
        "text": "How do you make a complex OTC/private market workflow feel trustworthy, clear, and easy to act on?"
      },
      {
        "tag": "p",
        "text": "Approach"
      },
      {
        "tag": "h3",
        "text": "Making private-market deal discovery feel clearer and safer"
      },
      {
        "tag": "p",
        "text": "Offx had a strong marketplace idea, but the product experience did not give users enough context, guidance, or confidence to act. Users landed directly into the Deals page with little onboarding, unclear navigation, limited personalization, and not enough decision-making support. For a high-value OTC marketplace where deal sizes could be significant, the flow needed to feel more trustworthy, structured, and informed."
      },
      {
        "tag": "p",
        "text": "02 A."
      },
      {
        "tag": "h4",
        "text": "The product had no opinion about why you were there"
      },
      {
        "tag": "p",
        "text": "A new user landed on every deal Offx had ever listed. Buyer or seller, $100k or $10M, BTC or some obscure token, same view for everyone. The product didn't know you, so it couldn't help you start."
      },
      {
        "tag": "p",
        "text": "Fig 01."
      },
      {
        "tag": "p",
        "text": "Legacy deal table — pre-redesign"
      },
      {
        "tag": "p",
        "text": "Fig 01."
      },
      {
        "tag": "p",
        "text": "Legacy deal table with a flat view that left discovery and prioritization to the user."
      },
      {
        "tag": "p",
        "text": "02 B."
      },
      {
        "tag": "h4",
        "text": "Fragmented context"
      },
      {
        "tag": "p",
        "text": "Critical deal details lived in different places. Users jumped between sections just to assemble a basic picture of an opportunity."
      },
      {
        "tag": "p",
        "text": "Fig. 04"
      },
      {
        "tag": "p",
        "text": "Create deal flow— pre-redesign"
      },
      {
        "tag": "p",
        "text": "Fig. 04"
      },
      {
        "tag": "p",
        "text": "Legacy create flow with limited guidance for high-stakes deal inputs."
      },
      {
        "tag": "p",
        "text": "02 C."
      },
      {
        "tag": "h4",
        "text": "Pricing surfaced too late"
      },
      {
        "tag": "p",
        "text": "Live pricing context wasn't visible at decision points. Traders were forced to compare in their heads. Create offer modal was present on all deal pages, even if someone just want to read thi"
      },
      {
        "tag": "p",
        "text": "Fig 02."
      },
      {
        "tag": "p",
        "text": "Legacy deal page — pre-redesign"
      },
      {
        "tag": "p",
        "text": "Fig 02."
      },
      {
        "tag": "p",
        "text": "Legacy deal page showing how critical deal context was scattered across the interface."
      },
      {
        "tag": "p",
        "text": "02 D."
      },
      {
        "tag": "h4",
        "text": "Create flow lacked guidance"
      },
      {
        "tag": "p",
        "text": "The create-deal flow asked for information without explaining stakes. For a six- or seven-figure transaction, that felt risky."
      },
      {
        "tag": "p",
        "text": "Fig 03."
      },
      {
        "tag": "p",
        "text": "Legacy deal page — pre-redesign"
      },
      {
        "tag": "p",
        "text": "Fig 03."
      },
      {
        "tag": "p",
        "text": "Legacy deal page with pricing context pushed too far from the decision point."
      },
      {
        "tag": "h3",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Professionals moving quickly on large positions."
      },
      {
        "tag": "h5",
        "text": "Traders"
      },
      {
        "tag": "p",
        "text": "Care about pricing, availability, and whether the opportunity is worth pursuing right now."
      },
      {
        "tag": "h5",
        "text": "Market makers"
      },
      {
        "tag": "p",
        "text": "Need fast, structured deal creation with enough rigor to support serious counterparty conversations."
      }
    ],
    "contentImages": [
      "7ggofMFsJRh3SN64yn3hGnTmAs.png",
      "LzJuKhu0iKOwl9XjSk35BiVhnQg.png",
      "BBKIE883HOy4iEVqdC0FxrmQM.png",
      "TKBUcKGhJP3sOU92gZhDcsG1jlw.png",
      "Iw35VY0yWclHzpoASLoZOukWU.png",
      "hKxuTSOIpz5FOWDkBia3OOdy2g.png",
      "6aOSPjNTg5MvRqqzid0IVuFh1Q.png",
      "Jt8qZNYXokMUYwEP1J9OFkl2k.png",
      "LS6dB3qD8KsH8QeCrUZT0sMQAs.png",
      "8RVZrOfL9OizR3hF2MHfNcyt4.png",
      "ElK9VCY8451XVVrPfeObyVLZEHs.jpg",
      "g7cS1MmuLK3gBM0JjBkUwUhs.jpg",
      "hcq52ADLB0siLKT6VH2YM8ZQAg.jpg",
      "e1hMwyHXBMmr47rlrYEK01ai5s.jpg",
      "pLBX5pc7XEiTyMtASMXiWUIt90.jpg",
      "uRyjagOVqyrhurMKLpuHaliIB7Q.jpg",
      "RtJK8HsTbfVsCZcheruWFMYDyKI.jpg",
      "mTB35lF8jJQmN33VchdHxt23saA.jpg",
      "zlOx7c1isb8BPBK2ScuMMkrehXw.jpg",
      "mn724Bfz268nlXOladP9OAUDpQ.jpg",
      "Bm2uteGrVn1XEBEbGM5Lxx8A.jpg",
      "PqWB7i8Z3fZwoKQTGiimWNYk.jpg",
      "f2Obk3MLkjgkyLx17NbiLSREyTQ.jpg",
      "J1XIaTlOxLbHoY6FHWgPab5q9TI.jpg",
      "SYtozAW8SSwmGJfcEYpO5m142fQ.jpg",
      "DwcprmfsRFAG5QDLxOcqz3uS2xQ.jpg",
      "upncO6I8coqVyl13FiyxeXoPE.jpg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'herd-simplifying-blockchain-with-ai': {
    "slug": "herd-simplifying-blockchain-with-ai",
    "layout": "rich-basic",
    "meta": [
      "Product Design",
      "2025-26",
      "AI"
    ],
    "title": "Herd - Simplifying Blockchain with AI",
    "lede": "Herd.eco is a collaborative platform designed to help users search, understand, and act on blockchain data with the assistance of AI agents.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "5-6 Months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://herd.eco/explorer"
      }
    ],
    "heroImage": "WfDIJ0KRJ019FAQYHr30yJGl0c.jpg",
    "introParagraphs": [
      "Herd is an AI-assisted smart contract exploration platform that helps users search, understand, and work with onchain contracts in one shared workspace. Crypto is built on composability, but most interfaces still make users explore it through fragmented tools, raw contract data, and technical block explorers. Herd turns that experience into a guided coterminal where users can move from search to context to action with the help of AI agents.",
      "Smart contracts power deep interactions across protocols, but those relationships are difficult to understand through raw explorer data alone.",
      "Users often jump between explorers, docs, dashboards, and social sources just to understand what a contract does."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "What is Herd?"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "What is Herd?"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "h2",
        "text": "What is Herd?"
      },
      {
        "tag": "p",
        "text": "COMPLEX CONTRACT SYSTEMS"
      },
      {
        "tag": "p",
        "text": "FRAGMENTED ONCHAIN CONTEXT"
      },
      {
        "tag": "p",
        "text": "AGENT-ASSISTED WORKFLOWS"
      },
      {
        "tag": "p",
        "text": "Herd brings contract data, AI chat, visual context, and actions into one workspace so users can explore onchain systems more naturally."
      },
      {
        "tag": "h4",
        "text": "Users had access to contract data, but had to work too hard to understand what it meant, how it connected, and what they could do next."
      },
      {
        "tag": "h3",
        "text": "My Role"
      },
      {
        "tag": "p",
        "text": "I worked on the product experience, UX flows, interface design, and visual system for the Herd coterminal. My focus was turning a complex contract exploration product into a clearer, more structured, and more usable interface."
      },
      {
        "tag": "p",
        "text": "A 01."
      },
      {
        "tag": "h5",
        "text": "UX Flows"
      },
      {
        "tag": "p",
        "text": "Mapped how users move from contract search to understanding, function exploration, transaction context, and AI-assisted actions."
      },
      {
        "tag": "p",
        "text": "A 02."
      },
      {
        "tag": "h5",
        "text": "Interface Design"
      },
      {
        "tag": "p",
        "text": "Designed core coterminal screens across chat, contract views, function details, visualizer, and transaction surfaces."
      },
      {
        "tag": "p",
        "text": "A 03."
      },
      {
        "tag": "h5",
        "text": "Information Architecture"
      },
      {
        "tag": "p",
        "text": "Structured complex contract data so users could understand what matters without being overwhelmed by technical depth."
      },
      {
        "tag": "p",
        "text": "A 04."
      },
      {
        "tag": "h5",
        "text": "Design System"
      },
      {
        "tag": "p",
        "text": "Created and maintained reusable components, states, and patterns to keep the product consistent across advanced workflows."
      },
      {
        "tag": "p",
        "text": "Users & Problem"
      },
      {
        "tag": "p",
        "text": "PROBLEM"
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Key UX Challenges"
      },
      {
        "tag": "p",
        "text": "Users & Problem"
      },
      {
        "tag": "p",
        "text": "PROBLEM"
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Key UX Challenges"
      },
      {
        "tag": "h2",
        "text": "How do you make smart contract exploration feel less technical, more contextual, and easier to act on?"
      },
      {
        "tag": "h3",
        "text": "Smart contract exploration was powerful, but too fragmented to use confidently."
      },
      {
        "tag": "p",
        "text": "Users could access contract data, transactions, and protocol information, but understanding how everything connected took too much manual work."
      },
      {
        "tag": "p",
        "text": "The challenge was to design a workspace that helped users search, understand, and act on complex onchain interactions without removing the technical depth advanced users needed."
      },
      {
        "tag": "p",
        "text": "02 A."
      },
      {
        "tag": "h4",
        "text": "Smart contract exploration was still too manual"
      },
      {
        "tag": "p",
        "text": "Most users could look up a contract, address, or transaction, but understanding the actual meaning required too much effort. The product space was full of raw data, technical labels, scattered references, and disconnected tools."
      },
      {
        "tag": "p",
        "text": "The problem was not access to information. The problem was turning that information into context."
      },
      {
        "tag": "p",
        "text": "02 B."
      },
      {
        "tag": "h4",
        "text": "Technical entry points"
      },
      {
        "tag": "p",
        "text": "Contracts are usually explored through addresses, ABIs, functions, logs, and transactions. For many users, the starting point itself feels too technical."
      },
      {
        "tag": "p",
        "text": "02 C."
      },
      {
        "tag": "h4",
        "text": "Fragmented context"
      },
      {
        "tag": "p",
        "text": "Important information lives across block explorers, docs, dashboards, protocol websites, and community discussions. Users have to assemble the full picture themselves."
      },
      {
        "tag": "p",
        "text": "02 D."
      },
      {
        "tag": "h4",
        "text": "Hidden relationships"
      },
      {
        "tag": "p",
        "text": "Crypto is composable, but the connections between contracts, protocols, functions, and flows are rarely visible in the interface."
      },
      {
        "tag": "p",
        "text": "02 E."
      },
      {
        "tag": "h4",
        "text": "Exploration and action are separated"
      },
      {
        "tag": "p",
        "text": "Users can inspect data in one place, ask questions somewhere else, and take action through another tool. The workflow breaks at every step."
      },
      {
        "tag": "h3",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Professionals trying to understand and act on onchain systems faster."
      },
      {
        "tag": "h5",
        "text": "Developers"
      },
      {
        "tag": "p",
        "text": "Need to inspect contracts, understand functions, and explore how different contracts interact."
      },
      {
        "tag": "h5",
        "text": "Analysts"
      },
      {
        "tag": "p",
        "text": "Care about contract behavior, protocol relationships, transaction patterns, and ecosystem-level insights."
      },
      {
        "tag": "h5",
        "text": "Power users"
      },
      {
        "tag": "p",
        "text": "Want to understand advanced onchain workflows without reading raw contract data or switching between multiple tools."
      },
      {
        "tag": "h5",
        "text": "Teams"
      },
      {
        "tag": "p",
        "text": "Need shared context for monitoring contracts, generating reports, and coordinating onchain activity."
      },
      {
        "tag": "h3",
        "text": "Key UX Challenges"
      },
      {
        "tag": "h5",
        "text": "Discovery"
      },
      {
        "tag": "p",
        "text": "Make smart contract exploration feel approachable without hiding the technical depth advanced users need."
      },
      {
        "tag": "h5",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "Keep contract data, AI explanations, functions, and transactions close together so users do not lose the thread."
      },
      {
        "tag": "h5",
        "text": "Composability"
      },
      {
        "tag": "p",
        "text": "Reveal relationships between contracts and protocols in a way that feels visual, understandable, and useful."
      },
      {
        "tag": "h5",
        "text": "Action"
      },
      {
        "tag": "p",
        "text": "Help users move from asking questions to generating insights, monitoring activity, or preparing actions inside one workflow."
      },
      {
        "tag": "p",
        "text": "Process"
      },
      {
        "tag": "p",
        "text": "Phases"
      },
      {
        "tag": "p",
        "text": "design decision"
      },
      {
        "tag": "p",
        "text": "Process"
      },
      {
        "tag": "p",
        "text": "Phases"
      },
      {
        "tag": "p",
        "text": "design decision"
      },
      {
        "tag": "h2",
        "text": "Turning a technical product idea into a structured coterminal experience."
      }
    ],
    "contentImages": [
      "68hRhGTZIg4BCKTkaEYHnh4z7A.png",
      "L4e6YzVhvbNdUbceQny71K0Npw.png",
      "NIinApzdK3XU0yliEv9fy3CtxU.png",
      "tnb7IzytV9XvsnxfILUyquyNyk.png",
      "uAVapywthCvnQOF39HesON2Ykw.png",
      "PGhbXFVUREO41fHPZOGUHzJhc0.png",
      "ZPoTtu2fI57HGWvui6Qu1XYwr5A.png",
      "KXozwjMcR1rVjwUktGAIeP4p5I.png",
      "2D6Fazz3lDPFtk3a2HQlw0XoxdA.png",
      "FuGF3ZAwBbV9MdUjn4M9g9pRs8Y.png",
      "kjszqWN8j7WhabAlghEI2KOE3Zw.png",
      "ZIpaWSvCFoUGXvOBYogEwos8Kl0.png",
      "07jYVpSmar4ifZlA6LxOU1TCkjc.png",
      "34OC97lgMfLQTmfzHMPNRJ5csDo.png",
      "IMYjrRXmo7LH6JB9A3s0zEY2IM.png",
      "Iy5NUrKMUA4nxLneUJyRhuL3aHw.png",
      "ZpiO1mmhYzwlEZ99nrK67yZMVJQ.png",
      "sDi6RW0AuVNX32LCMbnPRq7SHDM.png",
      "oSQcaHOUQHpFg8TgRjJvaJPhW7A.png",
      "0isj5JVL8we3CKcQ1he1UI2zkIs.png",
      "tOQcDC3QFdxrYQvWClXV7PnpNpE.png"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'corestack-enterprise-control-panel': {
    "slug": "corestack-enterprise-control-panel",
    "layout": "rich-basic",
    "meta": [
      "Design concept",
      "2026",
      "B2B SaaS"
    ],
    "title": "CoreStack: Enterprise Control Panel",
    "lede": "A full redesign of a cloud-hosting control panel turning years of feature growth into a product that infrastructure, support, sales, billing teams, and clients could navigate with confidence.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "2-4 weeks"
      },
      {
        "label": "Status",
        "value": "Design concept"
      }
    ],
    "heroImage": "9tIFy4oKAd2vcgl4koydzlYQ8.png",
    "introParagraphs": [
      "The product belongs to a fully managed hosting provider focused on infrastructure, reliability, performance, and expert support. Its control panel is where customers do the real work: managing services, running deployments, raising support tickets, and controlling access to their environments. It’s where the company’s promise of reliability becomes a real product experience.",
      "They were mid-way through modernising the brand and the wider digital presence. A new marketing site was in development and set the visual direction. The control panel the thing customers actually live in was still wearing the old one.",
      "Infrastructure engineers, support staff, CRM and sales teams, billing teams, and external clients all shared the same interface. Navigation did not meaningfully adapt to their work, operational actions changed from screen to screen, and backend language leaked directly into user-facing states."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Context, Role & Scope"
      },
      {
        "tag": "p",
        "text": "The product"
      },
      {
        "tag": "p",
        "text": "The problem"
      },
      {
        "tag": "p",
        "text": "The goal"
      },
      {
        "tag": "p",
        "text": "What I owned"
      },
      {
        "tag": "p",
        "text": "v1.0 scope"
      },
      {
        "tag": "p",
        "text": "Context, Role & Scope"
      },
      {
        "tag": "p",
        "text": "The product"
      },
      {
        "tag": "p",
        "text": "The problem"
      },
      {
        "tag": "p",
        "text": "The goal"
      },
      {
        "tag": "p",
        "text": "What I owned"
      },
      {
        "tag": "p",
        "text": "v1.0 scope"
      },
      {
        "tag": "h2",
        "text": "A control panel for people who actually run infrastructure"
      },
      {
        "tag": "p",
        "text": "The problem"
      },
      {
        "tag": "p",
        "text": "The redesign goal"
      },
      {
        "tag": "p",
        "text": "Reduce cognitive and operational friction without flattening the technical depth expert users rely on. The interface needed to make structure, health, and available actions obvious while keeping detailed infrastructure data accessible."
      },
      {
        "tag": "h5",
        "text": "Density was not the problem. Density without hierarchy was."
      },
      {
        "tag": "h3",
        "text": "What I owned"
      },
      {
        "tag": "p",
        "text": "I was accountable end to end: understanding the product, finding the recurring problems, restructuring the system, and translating it into a high-fidelity concept."
      },
      {
        "tag": "h5",
        "text": "Research & discovery"
      },
      {
        "tag": "p",
        "text": "Learned the product, the operational model, and the teams using it."
      },
      {
        "tag": "h5",
        "text": "Problem analysis"
      },
      {
        "tag": "p",
        "text": "Turned scattered screen-level issues into a small set of root causes."
      },
      {
        "tag": "h5",
        "text": "Information architecture"
      },
      {
        "tag": "p",
        "text": "Restructured a 40+ item navigation and a fourteen-tab environment."
      },
      {
        "tag": "h5",
        "text": "Design system"
      },
      {
        "tag": "p",
        "text": "Built tokens, typography, status language, and reusable components."
      },
      {
        "tag": "h5",
        "text": "High-fidelity design"
      },
      {
        "tag": "p",
        "text": "Designed nine core screens across the product."
      },
      {
        "tag": "p",
        "text": "Designed in v1.0"
      },
      {
        "tag": "p",
        "text": "Design system and information architecture; environment overview, runtime, and configuration; deployments and pipelines; pods, nodes, and monitors; profile and account security; and support tickets. Billing internals, CRM data models, mobile breakpoints, full dark mode, and engineering implementation were deliberately deferred."
      },
      {
        "tag": "p",
        "text": "The Audit"
      },
      {
        "tag": "p",
        "text": "Audit"
      },
      {
        "tag": "p",
        "text": "Broken journeys"
      },
      {
        "tag": "p",
        "text": "The diagnosis"
      },
      {
        "tag": "p",
        "text": "The Audit"
      },
      {
        "tag": "p",
        "text": "Audit"
      },
      {
        "tag": "p",
        "text": "Broken journeys"
      },
      {
        "tag": "p",
        "text": "The diagnosis"
      },
      {
        "tag": "h3",
        "text": "Before designing anything, I catalogued what was wrong"
      },
      {
        "tag": "p",
        "text": "I went through every supplied screen deployment detail, deployment info, tickets, profile and wrote down each specific failure rather than a general impression. Four patterns emerged, and every later decision traces back to one of them."
      },
      {
        "tag": "h4",
        "text": "A flat wall of navigation"
      },
      {
        "tag": "p",
        "text": "Dashboard, Infrastructure, CRM, Internal, Support, Sales, Billing each with many sub-items, all expanded into one long list. Everything was reachable and nothing was findable."
      },
      {
        "tag": "h4",
        "text": "Density without hierarchy"
      },
      {
        "tag": "p",
        "text": "The screens were dense because the data is dense that part is legitimate. But nothing was ranked. Every row weighed the same, so the eye had nowhere to land first."
      },
      {
        "tag": "h4",
        "text": "An action model with no primary"
      },
      {
        "tag": "p",
        "text": "Deployments offered a \"Select Action\" dropdown, a submit button, and three unlabelled icons (run, delete, edit) side by side. Destructive and routine actions had equal visual weight on a page where the wrong click is expensive."
      },
      {
        "tag": "h4",
        "text": "Context the user needed, absent"
      },
      {
        "tag": "p",
        "text": "Tickets didn't show the company, agency or website of the person who raised them. Deployments showed a status but no commit range no answer to \"what actually changed?\" The data existed; the interface didn't ask for it."
      },
      {
        "tag": "p",
        "text": "Everyday journeys that stalled"
      },
      {
        "tag": "p",
        "text": "Recover a failed deploy"
      },
      {
        "tag": "p",
        "text": "→"
      },
      {
        "tag": "h6",
        "text": "Rollback and retry lived in different controls"
      },
      {
        "tag": "p",
        "text": "Check environment health"
      },
      {
        "tag": "p",
        "text": "→"
      },
      {
        "tag": "h6",
        "text": "Required moving across General, Pods, Nodes, and Monitors"
      },
      {
        "tag": "p",
        "text": "Grant IP access"
      },
      {
        "tag": "p",
        "text": "→"
      },
      {
        "tag": "h6",
        "text": "Users had to guess between four firewall surfaces"
      },
      {
        "tag": "p",
        "text": "The diagnosis"
      },
      {
        "tag": "p",
        "text": "A visual refresh alone would have produced a cleaner version of the same confusion. The product needed a hierarchy, a consistent action model, and one semantic language for health and state."
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Four disciplines"
      },
      {
        "tag": "p",
        "text": "Shared interface"
      },
      {
        "tag": "p",
        "text": "Users"
      },
      {
        "tag": "p",
        "text": "Four disciplines"
      },
      {
        "tag": "p",
        "text": "Shared interface"
      },
      {
        "tag": "h3",
        "text": "Different jobs inside one panel"
      },
      {
        "tag": "p",
        "text": "The product’s own navigation revealed the audience: whole departments, each working from a different corner of the same system."
      },
      {
        "tag": "h6",
        "text": "Infrastructure"
      },
      {
        "tag": "p",
        "text": "Ships deployments and keeps clusters and environments healthy. Needs to read health quickly and recover a failed deployment without hunting."
      },
      {
        "tag": "h6",
        "text": "Support"
      },
      {
        "tag": "p",
        "text": "Runs the ticket queue for client environments. Needs customer, environment, and infrastructure context together."
      },
      {
        "tag": "h6",
        "text": "CRM & Sales"
      },
      {
        "tag": "p",
        "text": "Manages companies, users, permissions, and relationships. Needs account structure without infrastructure noise."
      },
      {
        "tag": "h6",
        "text": "Billing & Clients"
      },
      {
        "tag": "p",
        "text": "Reconciles cost and usage; clients view their own environments. Needs a smaller, safer surface than the internal toolset."
      },
      {
        "tag": "p",
        "text": "The shared-interface conflict"
      },
      {
        "tag": "p",
        "text": "The same sidebar was presented to infrastructure engineers and client managers alike. Everyone scrolled past everyone else’s tools. The product served the organisation chart rather than the person in front of the screen."
      },
      {
        "tag": "p",
        "text": "Solution"
      }
    ],
    "contentImages": [
      "JDHiigaCVbCsF3DBdtkAk6BeOU.png",
      "cJJJMJZbKVp0wNSCNI0LUWuXAR4.png",
      "5s0xYD0ggm2G6D5IIeb7QPF3iI.png",
      "tqETsdqwaYzbswyeHKJyZXALJfg.png",
      "mJdgEamhHG5SioZyikEWOx2D2g.png",
      "685ZFLbuwwCd0RgQ5QrCcCoSEu4.png"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'making-direct-mail-campaigns-easier-to-launch-manage-and-measure.': {
    "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure.",
    "layout": "rich-basic",
    "meta": [
      "Design concept",
      "2026",
      "SaaS"
    ],
    "title": "Making direct mail campaigns easier to launch, manage, and measure",
    "lede": "A redesign of an established direct-mail platform for roofers, real-estate agents, and home-service businesses. I turned an engineer-built dashboard into a guided product that helps non-technical owners understand the platform and reach their first campaign with confidence.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "2 weeks"
      },
      {
        "label": "Status",
        "value": "Design concept"
      }
    ],
    "heroImage": "lv3wcLxp8pEqp1ULaO7iCuw1yY.png",
    "introParagraphs": [
      "The platform already handled targeted postcards, automated mail, audience lists, tracking, and printing. The challenge was helping a busy local-business owner understand what to do with all of it.",
      "The existing dashboard was functional, but features, empty metrics, onboarding tasks, campaign strategies, and sales prompts all competed for attention. It reflected the system behind the product more than the mental model of the people using it.",
      "New users needed guidance, not a catalogue. Active users needed campaign health and performance, not the same setup-heavy hierarchy. The product also needed to support customers who skipped onboarding without leaving them stranded."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Overview"
      },
      {
        "tag": "p",
        "text": "The product"
      },
      {
        "tag": "p",
        "text": "The problem"
      },
      {
        "tag": "p",
        "text": "The goal"
      },
      {
        "tag": "p",
        "text": "Overview"
      },
      {
        "tag": "p",
        "text": "The product"
      },
      {
        "tag": "p",
        "text": "The problem"
      },
      {
        "tag": "p",
        "text": "The goal"
      },
      {
        "tag": "h2",
        "text": "A capable product that did not yet feel approachable"
      },
      {
        "tag": "p",
        "text": "The actual problem"
      },
      {
        "tag": "p",
        "text": "The redesign goal"
      },
      {
        "tag": "p",
        "text": "Create an activation-focused experience that changes with the account: establish trust at entry, collect only the context needed for personalization, lead users toward a first campaign, and prioritize live work once they become active."
      },
      {
        "tag": "h5",
        "text": "The product did not need fewer capabilities. It needed a clearer sequence."
      },
      {
        "tag": "p",
        "text": "Problems & Challenges"
      },
      {
        "tag": "p",
        "text": "Core problems"
      },
      {
        "tag": "p",
        "text": "UX challenges"
      },
      {
        "tag": "p",
        "text": "Inherited UI"
      },
      {
        "tag": "p",
        "text": "Reframe"
      },
      {
        "tag": "p",
        "text": "Problems & Challenges"
      },
      {
        "tag": "p",
        "text": "Core problems"
      },
      {
        "tag": "p",
        "text": "UX challenges"
      },
      {
        "tag": "p",
        "text": "Inherited UI"
      },
      {
        "tag": "p",
        "text": "Reframe"
      },
      {
        "tag": "h3",
        "text": "The dashboard showed everything except the next step"
      },
      {
        "tag": "p",
        "text": "What looked like visual clutter was a deeper problem of hierarchy, sequencing, and state."
      },
      {
        "tag": "p",
        "text": "Hierarchy"
      },
      {
        "tag": "h4",
        "text": "Competing priorities above the fold"
      },
      {
        "tag": "p",
        "text": "A CRM banner, progress panel, empty metrics, strategies, and navigation all asked for attention at once."
      },
      {
        "tag": "p",
        "text": "Activation"
      },
      {
        "tag": "h4",
        "text": "Onboarding existed beside the product"
      },
      {
        "tag": "p",
        "text": "A percentage showed progress, but the experience did not create a natural path through setup."
      },
      {
        "tag": "p",
        "text": "Comprehension"
      },
      {
        "tag": "h4",
        "text": "Internal names came before customer outcomes"
      },
      {
        "tag": "p",
        "text": "Campaign strategies assumed that a first-time user already understood the platform vocabulary."
      },
      {
        "tag": "p",
        "text": "Relevance"
      },
      {
        "tag": "h4",
        "text": "New and active accounts shared the same structure"
      },
      {
        "tag": "p",
        "text": "The dashboard did not change enough as a user progressed from setup to running campaigns."
      },
      {
        "tag": "h3",
        "text": "The UX challenges underneath"
      },
      {
        "tag": "h5",
        "text": "Guide without blocking"
      },
      {
        "tag": "p",
        "text": "Create a strong happy path without forcing every user through onboarding before they can explore."
      },
      {
        "tag": "h5",
        "text": "Simplify without hiding consequence"
      },
      {
        "tag": "p",
        "text": "Keep campaign creation easy while making audience size, cost, timing, and delivery explicit."
      },
      {
        "tag": "h5",
        "text": "Serve different account states"
      },
      {
        "tag": "p",
        "text": "Make the same dashboard useful before setup, during activation, and after campaigns become active."
      },
      {
        "tag": "h5",
        "text": "Translate product language"
      },
      {
        "tag": "p",
        "text": "Explain unfamiliar campaign strategies through outcomes a local-business owner already understands."
      },
      {
        "tag": "p",
        "text": "Fig. 01"
      },
      {
        "tag": "p",
        "text": "New account · inherited UI"
      },
      {
        "tag": "p",
        "text": "Fig. 01"
      },
      {
        "tag": "p",
        "text": "Empty performance, setup, promotion, and discovery compete for the same attention."
      },
      {
        "tag": "p",
        "text": "Fig. 02"
      },
      {
        "tag": "p",
        "text": "Active account · inherited UI"
      },
      {
        "tag": "p",
        "text": "Fig. 02"
      },
      {
        "tag": "p",
        "text": "Real activity appears, but onboarding still controls much of the hierarchy."
      },
      {
        "tag": "p",
        "text": "Users & Journey"
      },
      {
        "tag": "p",
        "text": "Primary users"
      },
      {
        "tag": "p",
        "text": "Original journey"
      },
      {
        "tag": "p",
        "text": "Happy path"
      },
      {
        "tag": "p",
        "text": "Users & Journey"
      },
      {
        "tag": "p",
        "text": "Primary users"
      },
      {
        "tag": "p",
        "text": "Original journey"
      },
      {
        "tag": "p",
        "text": "Happy path"
      },
      {
        "tag": "h3",
        "text": "Built for owners who need marketing to feel manageable"
      },
      {
        "tag": "p",
        "text": "The core audience was not a team of campaign specialists. It was local-business operators trying to grow while also running the business itself."
      },
      {
        "tag": "p",
        "text": "Primary"
      },
      {
        "tag": "h5",
        "text": "Owner / operator"
      },
      {
        "tag": "p",
        "text": "Time-poor and often non-technical. Needs to know what to do next, what it will cost, and what result to expect."
      },
      {
        "tag": "p",
        "text": "Secondary"
      },
      {
        "tag": "h5",
        "text": "Growth lead"
      },
      {
        "tag": "p",
        "text": "Runs repeat campaigns and compares performance. Needs campaign status, responses, spend, and clear opportunities to act."
      },
      {
        "tag": "p",
        "text": "Entry segment"
      },
      {
        "tag": "h5",
        "text": "Print customer"
      },
      {
        "tag": "p",
        "text": "May receive platform access through the print service. Needs a clear bridge from ordering materials to running a targeted campaign."
      },
      {
        "tag": "h3",
        "text": "The inherited journey"
      },
      {
        "tag": "p",
        "text": "After account creation, users landed in a dashboard containing setup tasks, empty analytics, campaign strategies, CRM prompts, and product navigation. The intended route existed, but the interface did not establish which parts were required, optional, or useful later."
      },
      {
        "tag": "p",
        "text": "Fig. 03"
      },
      {
        "tag": "p",
        "text": "Old user flow"
      },
      {
        "tag": "p",
        "text": "Fig. 03"
      },
      {
        "tag": "p",
        "text": "Old user flow"
      },
      {
        "tag": "h3",
        "text": "The redesigned happy path"
      }
    ],
    "contentImages": [
      "dFcfHFBKYfLSwGry9DoZOOPrjA.png",
      "mYUvYEgwdH4BoUR4Px5pIpEgw.png",
      "J5KI9joaNc3dmK1b0TGZbA8sELw.png",
      "nlJyD8AW1vrfA5TK67mEO3vYsYc.png",
      "VfbU5x6uhHI6wbHb8xDch3I3FA.png",
      "CA2ilDuLBFGhmAp8oKIAU6ODzjA.png",
      "OHoIvH4eVrZiZwJHsoSyBuG4K4.png",
      "bgevLnRv4XmBsVRAQiplgVYxvY.png",
      "PnUZOcSeSUN64bQ4fCOKfcV3J1Q.png",
      "CeyUdB5SoPeSKWXjIjUmQZKlD3g.png",
      "J2HTU88swaybgiw5ShjwvRNUaM8.png",
      "Rci9kTSsTeNLTiaJkbzu71q5nM.png"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'zenrock-website-design(mvp)': {
    "slug": "zenrock-website-design(mvp)",
    "layout": "simple",
    "meta": [
      "UI/UX",
      "2024-25",
      "Crypto/Fintech"
    ],
    "title": "Zenrock Website Design(MVP)",
    "lede": "Zenrock enables decentralized key management for builders of cross-chain protocols and wallets to unlock omnichain security.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "1-2 Months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://www.zenrocklabs.io/"
      }
    ],
    "heroImage": "I83GiBzRWojsWdPiJb07EL4GQs.jpg",
    "introParagraphs": [
      "I was responsible for the full website redesign, from early UX structure to final implementation.",
      "I created wireframes to organize the core content, define page hierarchy, and improve how users moved through the website.",
      "I designed polished UI screens using Zenrock’s brand direction, focusing on typography, layout, visual consistency, and product credibility."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Overview"
      },
      {
        "tag": "p",
        "text": "Product"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "p",
        "text": "Overview"
      },
      {
        "tag": "p",
        "text": "Product"
      },
      {
        "tag": "p",
        "text": "My Role"
      },
      {
        "tag": "h3",
        "text": "My Role"
      },
      {
        "tag": "h5",
        "text": "End-to-end Website Design"
      },
      {
        "tag": "h5",
        "text": "UX & Content Structure"
      },
      {
        "tag": "h5",
        "text": "High-fidelity UI Design"
      },
      {
        "tag": "h5",
        "text": "Framer Development"
      },
      {
        "tag": "p",
        "text": "After design approval, I built the full website in Framer, including responsive layouts, interactions, and visual details across the main pages."
      },
      {
        "tag": "p",
        "text": "Problems"
      },
      {
        "tag": "p",
        "text": "Problems"
      },
      {
        "tag": "h3",
        "text": "Problems"
      },
      {
        "tag": "h4",
        "text": "Weak First Impression"
      },
      {
        "tag": "p",
        "text": "The existing landing page was overly simple, with limited content and low engagement."
      },
      {
        "tag": "h4",
        "text": "Inconsistent Brand Presence"
      },
      {
        "tag": "p",
        "text": "The site lacked a clear visual identity, which made it harder to build recognition and trust."
      },
      {
        "tag": "h4",
        "text": "Limited Product Credibility"
      },
      {
        "tag": "p",
        "text": "Sparse layouts and minimal visual structure made the product feel less mature than the technology behind it."
      },
      {
        "tag": "p",
        "text": "Design Decisions"
      },
      {
        "tag": "p",
        "text": "Design Decisions"
      },
      {
        "tag": "h3",
        "text": "Design Decisions"
      },
      {
        "tag": "h5",
        "text": "Stronger Visual Identity"
      },
      {
        "tag": "p",
        "text": "I created a more cohesive branded experience using consistent typography, colors, layout patterns, and visual direction."
      },
      {
        "tag": "h5",
        "text": "Clearer Page Structure"
      },
      {
        "tag": "p",
        "text": "I structured key pages such as Homepage, About, and Contact to better communicate Zenrock’s value and improve navigation."
      },
      {
        "tag": "h5",
        "text": "More Engaging Web Experience"
      },
      {
        "tag": "p",
        "text": "I introduced richer visuals, responsive layouts, and subtle interactions to make the website feel more modern, credible, and polished."
      },
      {
        "tag": "p",
        "text": "Homepage wireframe"
      },
      {
        "tag": "p",
        "text": "About us wireframe"
      },
      {
        "tag": "p",
        "text": "Contact us wireframe"
      },
      {
        "tag": "p",
        "text": "Homepage High Fidelity"
      },
      {
        "tag": "p",
        "text": "About us High Fidelity"
      },
      {
        "tag": "p",
        "text": "Contact us High Fidelity"
      }
    ],
    "contentImages": [
      "F5TYP92d4QIPlFS1u13qv6T8GE.png",
      "NPQMjEXpbC0kuCkKN2J6hgLGhKU.png",
      "VedQBSPyyANLOFZDoFdXchga8.png",
      "nthnCoMcg1b0wa0QdeoSoG82CM.png",
      "fZlFdX1dkWSMxBw2Ug2PwKrIlI.png",
      "ysjKosNx8c3mJnw3L2pVJwosGw.png"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'zenrock-webapp-design': {
    "slug": "zenrock-webapp-design",
    "layout": "rich-basic",
    "meta": [
      "Product Design",
      "2024-25",
      "Crypto/Fintech"
    ],
    "title": "Zenrock Webapp Design",
    "lede": "A full web app redesign for Zenrock, a decentralised key management platform for builders of cross-chain protocols and wallets, covering UX, interface, and design system.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "2-3 Months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      }
    ],
    "heroImage": "R7rQf0AvfN1p4v7gOUF2CeAQcTU.jpg",
    "introParagraphs": [
      "I worked with the team to understand the product direction and translate it into a clear, usable interface.",
      "I designed the full website experience in Figma, including user flows, high-fidelity screens, and the component-based design system. After finalizing the design, I built the live website in Framer, ensuring the layout, visuals, and interactions matched the intended experience.",
      "My focus was on turning product and branding requirements into a cohesive design and delivering a production-ready implementation."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "The Product"
      },
      {
        "tag": "p",
        "text": "The Engagement"
      },
      {
        "tag": "p",
        "text": "Context"
      },
      {
        "tag": "p",
        "text": "The Product"
      },
      {
        "tag": "p",
        "text": "The Engagement"
      },
      {
        "tag": "p",
        "text": "Zenrock enables builders of cross-chain protocols and wallets to manage keys in a decentralised way, removing the fragmented, chain-by-chain approach that every multi-chain product runs into."
      },
      {
        "tag": "p",
        "text": "The Product"
      },
      {
        "tag": "p",
        "text": "A decentralised key management platform targeting protocol engineers and wallet builders. The core value proposition is omnichain security, one system for managing keys across chains, rather than a different solution per chain."
      },
      {
        "tag": "p",
        "text": "The Engagement"
      },
      {
        "tag": "p",
        "text": "The team needed a redesign of the full web app experience and not a cosmetic refresh, but a structured rethink of the interface, navigation, and visual language. I worked with them to understand the product direction, then led the redesign from UX through high-fidelity screens to a component-based design system."
      },
      {
        "tag": "p",
        "text": "Deliverables"
      },
      {
        "tag": "p",
        "text": "User flows, information architecture, high-fidelity Figma screens, and a scalable design system with reusable components and documented guidelines."
      },
      {
        "tag": "h4",
        "text": "In a high-trust, infrastructure category, the interface is part of the product's credibility. What we found was working against it."
      },
      {
        "tag": "p",
        "text": "The Audit"
      },
      {
        "tag": "p",
        "text": "What we found"
      },
      {
        "tag": "p",
        "text": "The Audit"
      },
      {
        "tag": "p",
        "text": "What we found"
      },
      {
        "tag": "h2",
        "text": "Decentralised key management for omnichain builders"
      },
      {
        "tag": "h3",
        "text": "Things working against the product"
      },
      {
        "tag": "p",
        "text": "Before designing anything, we evaluated what existed. The problems weren't isolated; they compounded. A fragmented interface, no system, and unclear journeys made a technically strong product harder to trust."
      },
      {
        "tag": "h4",
        "text": "Inconsistent branding fragmented the experience"
      },
      {
        "tag": "p",
        "text": "Visual inconsistencies across pages created a disjointed product feel. The interface didn't read as a single, coherent thing and it read as several things built at different times, which undermined the product's credibility with a technical audience that notices that."
      },
      {
        "tag": "h4",
        "text": "Navigation made task completion harder than it needed to be"
      },
      {
        "tag": "p",
        "text": "User journeys were unclear and the information architecture didn't reflect how users actually moved through the product. Visitors couldn't quickly reach what they needed, and there was no hierarchy guiding them through the product's value."
      },
      {
        "tag": "h4",
        "text": "The interface was behind on usability standards"
      },
      {
        "tag": "p",
        "text": "Visual inconsistency extended to the component level, with typography, spacing, and interaction patterns applied unevenly. The product had matured; the interface hadn't kept pace, and the gap was visible."
      },
      {
        "tag": "h4",
        "text": "No design system meant no path to consistency"
      },
      {
        "tag": "p",
        "text": "Without shared components or documented patterns, every new surface required making the same decisions again. There was no foundation to build on, which meant consistency was impossible to maintain as the product grew."
      },
      {
        "tag": "p",
        "text": "Approach"
      },
      {
        "tag": "p",
        "text": "How I worked"
      },
      {
        "tag": "p",
        "text": "Approach"
      },
      {
        "tag": "p",
        "text": "How I worked"
      },
      {
        "tag": "h2",
        "text": "Understand the product, then fix the experience"
      },
      {
        "tag": "p",
        "text": "The process moved through four phases each one building directly on the last, from diagnosis to a production-ready design system."
      },
      {
        "tag": "h5",
        "text": "Discovery"
      },
      {
        "tag": "p",
        "text": "Worked with the team to understand business goals, product direction, and where the current experience was failing. Audit findings shaped every subsequent decision."
      },
      {
        "tag": "h5",
        "text": "UX & IA"
      },
      {
        "tag": "p",
        "text": "Defined user flows and information architecture before touching the visual layer. Getting navigation and structure right first meant the visual design had something solid to build on."
      },
      {
        "tag": "h5",
        "text": "High-fidelity design"
      },
      {
        "tag": "p",
        "text": "Translated the UX structure into high-fidelity Figma screens, applying a unified visual language across every surface, built from the design system up."
      },
      {
        "tag": "h5",
        "text": "Design system"
      },
      {
        "tag": "p",
        "text": "Built the component library and documented guidelines in parallel with the screens so the system emerged from real design decisions rather than being retrofitted afterwards."
      },
      {
        "tag": "p",
        "text": "The Redesign"
      },
      {
        "tag": "p",
        "text": "Brand"
      },
      {
        "tag": "p",
        "text": "UX"
      },
      {
        "tag": "p",
        "text": "Interface"
      },
      {
        "tag": "p",
        "text": "Design system"
      },
      {
        "tag": "p",
        "text": "The Redesign"
      },
      {
        "tag": "p",
        "text": "Brand"
      },
      {
        "tag": "p",
        "text": "UX"
      },
      {
        "tag": "p",
        "text": "Interface"
      },
      {
        "tag": "p",
        "text": "Design system"
      },
      {
        "tag": "h2",
        "text": "What changed, and why"
      },
      {
        "tag": "p",
        "text": "Each of the four audit findings had a direct design response. The redesign addressed them together, not as isolated fixes, but as a single coherent system."
      },
      {
        "tag": "p",
        "text": "Brand"
      },
      {
        "tag": "h4",
        "text": "Brand - One visual language, applied everywhere."
      },
      {
        "tag": "h6",
        "text": "Color"
      },
      {
        "tag": "p",
        "text": "Inconsistent usage across pages replaced with a defined token-based palette applied consistently site-wide."
      },
      {
        "tag": "h6",
        "text": "Typography"
      },
      {
        "tag": "p",
        "text": "Mixed typefaces and weights were replaced with a single type scale, documenting sizes, weights, and spacing rules applied across every surface."
      },
      {
        "tag": "h6",
        "text": "Spacing"
      },
      {
        "tag": "p",
        "text": "Ad-hoc spacing decisions replaced with an 8px grid and defined spacing tokens applied consistently across every component and layout."
      },
      {
        "tag": "h6",
        "text": "Identity"
      },
      {
        "tag": "p",
        "text": "An interface that read as early-stage now presents with the coherence and credibility the product's technical depth deserves."
      },
      {
        "tag": "p",
        "text": "UX"
      },
      {
        "tag": "h4",
        "text": "Clearer paths through the product."
      },
      {
        "tag": "p",
        "text": "The information architecture was restructured around how users actually move through the product and not how the product happened to be organised. Navigation was simplified and the hierarchy of content was made explicit."
      },
      {
        "tag": "h6",
        "text": "Navigation"
      },
      {
        "tag": "p",
        "text": "IA restructured around primary user tasks, with key actions surfaced at the right point, not buried in secondary menus."
      },
      {
        "tag": "h6",
        "text": "Hierarchy"
      },
      {
        "tag": "p",
        "text": "Every page now has a defined reading sequence. Content is prioritised, not flattened, so users know where to look first."
      },
      {
        "tag": "h6",
        "text": "User journey"
      },
      {
        "tag": "p",
        "text": "Logical flow from value proposition to technical depth, matched to how builders actually evaluate infrastructure products."
      },
      {
        "tag": "h6",
        "text": "Task completion"
      },
      {
        "tag": "p",
        "text": "Reduced friction across core journeys, users reach what they need faster, with fewer dead ends and less backtracking."
      },
      {
        "tag": "p",
        "text": "Interface"
      },
      {
        "tag": "h4",
        "text": "Modern, consistent UI across every screen"
      },
      {
        "tag": "p",
        "text": "The visual overhaul went beyond aesthetics it was about applying consistent interaction patterns, spacing logic, and component behaviour across every surface. The interface now matches the maturity of the product it represents."
      },
      {
        "tag": "h6",
        "text": "Typography"
      }
    ],
    "contentImages": [
      "YpmhpATYjphGb9m0H4ETB26pXd0.png",
      "HIKSkZY1Yxbut3Ve3kyzpFZQSUM.png",
      "XLL6g2RyObdhkR0bdeQwos3yuBs.jpg",
      "jBcD3MLtHNWcmSkUXCSKCS6gk.png",
      "owSbHM3jeu6Gx6laW0uMVx4DbA.jpg",
      "WzMSD3FcUnl94oMTqQJ9JDPrCo.png",
      "5R9ZvWqJOX2zn3b05zOckUCgrAA.png",
      "nHgrC81JPyog1gBOpqDhSuvhM.jpg",
      "PRTcQna1MwLEGmXuz5bnHyVoUr4.png",
      "F6WdeS8H16vN8MNXIrcOKMoUM4o.jpg",
      "2Ja7uqIb1NyPzJztc7yuK2oAbg4.png",
      "eZfyOaximLZxvlPJpJ9myr826Ws.jpg",
      "sKiBvFzDs150WDXtv7iv2g3eVr0.png",
      "INcjo9risToTLV1Cy5Wyz8FSKvs.png",
      "964fh0jCyjYlVDk5s1WNIFHObg0.png",
      "QAOt3fwhoTShV9SSqNgtup3oQ8g.png",
      "SGNJV8FZBZRAkYrHs5ZPhPtimA.jpg",
      "R1qma76q3QZDsOqSW5faNuwej2M.jpg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'getlit-webapp': {
    "slug": "getlit-webapp",
    "layout": "simple",
    "meta": [
      "UI/UX",
      "2021",
      "Edtech"
    ],
    "title": "Getlit Webapp",
    "lede": "A learning and collaborative web app to learn and collaborate poetry.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "8-12 Weeks"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://getlit.org/"
      }
    ],
    "heroImage": "oAoXRhotsUEqkLRTjCd33QfW7AQ.png",
    "introParagraphs": [
      "GetLit is an education technology platform designed to teach poetry through collaboration. It serves middle and high school students, teachers, and administrators by bringing an in-school poetry curriculum into a digital environment.",
      "The platform includes a teacher portal, online curriculum, poetry collaboration community, and administrative dashboards. Its goal is to improve literacy, support structured learning, and enable collaboration between teachers and students at scale.",
      "This project focused on designing a complete learning platform that supports different user roles while keeping the experience intuitive and easy to navigate."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Final designs"
      },
      {
        "tag": "p",
        "text": "Mobile 02"
      },
      {
        "tag": "p",
        "text": "Wireframe 01"
      },
      {
        "tag": "p",
        "text": "Wireframe 02"
      },
      {
        "tag": "p",
        "text": "Wireframe 03"
      },
      {
        "tag": "p",
        "text": "Wireframe 04"
      },
      {
        "tag": "p",
        "text": "High fidelity 01"
      },
      {
        "tag": "p",
        "text": "High fidelity 02"
      },
      {
        "tag": "p",
        "text": "High fidelity 03"
      },
      {
        "tag": "p",
        "text": "High fidelity 04"
      },
      {
        "tag": "p",
        "text": "High fidelity 05"
      }
    ],
    "contentImages": [
      "GiQiGlghktGsSDIZ8A6dqzFMhdw.jpeg",
      "OS2W1eIUfNndUrRlVVt3xDezsE.jpg",
      "pPmxBMf8iAAd6qmdeSv8CJmk.jpg",
      "3oHsJGHjH94FwIrJBG6hQdUnaU.jpg",
      "megW5ssQTyCr50qulHeJ8O7R7w.jpg",
      "TYt8f1F3QfPZomgu5Ed6y6cOPA.jpg",
      "qi9dV7vELcTaZQc5iqwcHfh2sIQ.jpg",
      "MCKYKOpCCjWkZw7KaWfYdiaZn0.jpg",
      "A3l43SmnH6N81ZXZfR8to3PL19U.jpg",
      "2dtvH5TAOxZgmFk9ZW7R0IvEY.jpg",
      "RjcBXmMKtcjYhvv3xzL7x0GhNE.jpg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'houzecheck-webapp': {
    "slug": "houzecheck-webapp",
    "layout": "simple",
    "meta": [
      "UI/UX",
      "2022",
      "Real Estate"
    ],
    "title": "Houzecheck Webapp and Website",
    "lede": "I worked to solve different problems Houzecheck.com was facing including old design, product discovery and improving the UX of the whole website and finally a web app for surveyors to book surveys online.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "5-6 months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://www.houzecheck.com/"
      }
    ],
    "heroImage": "0HVYUWJokoUFdCX48O2kjB4QiJA.png",
    "introParagraphs": [
      "Houzecheck is a UK based property survey company that provides home valuations and homebuyer surveys for people purchasing or investing in property. The goal of the project was to redesign their website and create an online booking experience that clearly communicates the value of their services while increasing trust and conversions.",
      "Since survey costs are significant, the website needed to position the service as a valuable investment rather than just a purchase. The business also wanted to reduce reliance on phone based bookings and create a streamlined digital ordering flow that could convert paid traffic into customers more efficiently."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Problem identification"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform 01"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform 02"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform 03"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform 04"
      },
      {
        "tag": "p",
        "text": "Houzecheck website 01"
      },
      {
        "tag": "p",
        "text": "Houzecheck website 02"
      },
      {
        "tag": "p",
        "text": "Houzecheck website services page"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform 05"
      },
      {
        "tag": "p",
        "text": "Surveyor booking platform all screens"
      }
    ],
    "contentImages": [
      "4Rbi1hKHJ0h25ibaAAWjkttv15Q.jpeg",
      "SZ1J1oIFClhLRbda4hn8uvXqBk.jpg",
      "mWVucGQqeh3c5cnZ3JBSX4aYFUo.jpg",
      "mPICsxWI1GlH4WwHjS2026D7a0.jpg",
      "4PsZtxJMh9pkEmURrbc1adz3mrA.jpg",
      "kA4Pi2YQp4xzYYrLZRpcRyxqrE.jpg",
      "bBC74rdN5bYhQZgAdbYSLNEFFKU.jpg",
      "FK5LrakcpTMcWQEhXswyCCQPBsY.jpg",
      "glpz3GgpWPqQbXAfF8bzk9lEVs.jpg",
      "MufuhRXjgBqjTNePPoGP8SJgyII.jpg",
      "Qk9diWiDYYsRBxja1wXoiAenSA.jpeg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        }
      ]
    }
  },
  'mindlantic': {
    "slug": "mindlantic",
    "layout": "simple",
    "meta": [
      "UI/UX",
      "2021",
      "Productivity"
    ],
    "title": "Mindlantic",
    "lede": "A solution to the soft skills development platform. Improve your soft skills with daily 5 minutes learning bites.",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "5-6 months"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "https://mindlantic.com/"
      }
    ],
    "heroImage": "KP9PFiT6LM2hIfGv1QlkurqRGc.png",
    "introParagraphs": [
      "Mindlantic is a soft skills learning platform designed around short, daily learning bites. Instead of long courses, it helps users improve gradually through small, consistent lessons that are easy to consume and fit into busy schedules.",
      "The platform focuses on long-term habit building, encouraging users to learn a little each day over weeks or months rather than completing intensive training sessions. The goal was to design a simple, distraction-free experience that makes learning feel effortless and sustainable.",
      "When I joined the project, the team had already conducted interviews and gathered textual research. My role was to translate those insights into a clear product experience and bring the learning model to life through design."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "Final screens"
      },
      {
        "tag": "p",
        "text": "Problems and solution"
      },
      {
        "tag": "p",
        "text": "Wireframe 01"
      },
      {
        "tag": "p",
        "text": "Version 2.0 problems"
      },
      {
        "tag": "p",
        "text": "First tour cards"
      },
      {
        "tag": "p",
        "text": "Version 2.0 Homepage/Dashboard"
      },
      {
        "tag": "p",
        "text": "High fidelity 01"
      },
      {
        "tag": "p",
        "text": "High fidelity 02"
      },
      {
        "tag": "p",
        "text": "High fidelity 03"
      },
      {
        "tag": "p",
        "text": "High fidelity 04"
      }
    ],
    "contentImages": [
      "rH1afs6NmR6U5Q7bdrph68F0MMk.jpg",
      "dGJ9MTaY9qPSJOqvCUN4cMsLwQ.jpeg",
      "ACoLajtCzyKd0amdloaOcTowicI.jpg",
      "o4hupICSJ5sW8EDkPwbfosp8LRw.jpg",
      "cefHhtZ3oZygyHEeSWw8Mdimljg.jpg",
      "kZqxQPhKTNCAT64zLEwTb7mIks.jpg",
      "Aj5LkNsZ1fmdSva59wUwKpizmw4.jpg",
      "CK1X0T2MmUjpS1zfj0KNVHtHlk.jpg",
      "MD0NHbYkmpq90EbuqZcFhZh8bQ.jpg",
      "fNtiXZaHrilCtcTs6V6FxIIpvho.jpg",
      "5VUolbukRXe3voYWXzNN9RPiN40.jpg",
      "Q6fGp87l9NTe8WtsNBf1ur67pg.jpg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Swoop Mobile App",
          "year": "2021",
          "category": "UI/UX",
          "slug": "swoop"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
  'swoop': {
    "slug": "swoop",
    "layout": "simple",
    "meta": [
      "UI/UX",
      "2021",
      "Restaurant"
    ],
    "title": "Swoop Mobile App",
    "lede": "A social app for restaurants to help users meet and order food. ‍",
    "facts": [
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Duration",
        "value": "8 Weeks"
      },
      {
        "label": "Status",
        "value": "Shipped"
      },
      {
        "label": "Project link",
        "value": "View Project",
        "href": "../../"
      }
    ],
    "heroImage": "XFCcAHWT01IfOD6nXF7xn2DFdM.png",
    "introParagraphs": [
      "The project involved designing a food ordering and dining experience app that allows users to order and share food, split bills, call staff to the table, and send food as gifts to friends or family.",
      "The client provided initial wireframes, but several flows and features were missing. To fully understand the product vision, I scheduled working sessions with the client to clarify functionality, user behavior, and interaction expectations.",
      "Since I was not involved in the early product planning, I rebuilt the user flow from the ground up. I started by mapping user scenarios, then created wireframes informed by competitor research and similar apps. After validating the direction with the client, I moved into detailed design and refinement."
    ],
    "bodyItems": [
      {
        "tag": "p",
        "text": "High fidelity design"
      },
      {
        "tag": "p",
        "text": "Wireframe 01"
      },
      {
        "tag": "p",
        "text": "Wireframe 02"
      },
      {
        "tag": "p",
        "text": "Wireframe 03"
      },
      {
        "tag": "p",
        "text": "High Fidelity 01"
      },
      {
        "tag": "p",
        "text": "High Fidelity 02"
      },
      {
        "tag": "p",
        "text": "High Fidelity 03"
      },
      {
        "tag": "p",
        "text": "High Fidelity 04"
      },
      {
        "tag": "p",
        "text": "High Fidelity 05"
      },
      {
        "tag": "p",
        "text": "High Fidelity 06"
      }
    ],
    "contentImages": [
      "bEpCa3XW7wCB7hHtqoySJGVYM8E.jpeg",
      "yrAJfwTGyTomd5TgaGAErEjWn8.jpeg",
      "pelGva4dLZFzlwNgUtbzVH2uU8.jpeg",
      "MVSzB4zgOVZmSOB9UVNCpSAJvo.jpeg",
      "MMe9Y6HPhAam6kWVbPyPhmfZw4.jpeg",
      "rhkz4TWEujUph6tdSzfYnrvPGc.jpeg",
      "Glvi7LeIJK1Ceeb05cvZtNc5uW4.jpeg",
      "wCghvxetwPycgi3rFyvXOTEE4.jpeg",
      "e5SKQZcb7BxAogLgNgygNaXKPw.jpeg",
      "lBNMj9TCA9UIwT90FxTDafQDEKc.jpeg",
      "prfK0IDXciU6ukf3dkXsqstRps.jpeg"
    ],
    "seeAlso": {
      "number": "02",
      "label": "See Also",
      "items": [
        {
          "title": "Making direct mail campaigns easier to launch, manage, and measure",
          "year": "2026",
          "category": "Design concept",
          "slug": "making-direct-mail-campaigns-easier-to-launch-manage-and-measure."
        },
        {
          "title": "CoreStack: Enterprise Control Panel",
          "year": "2026",
          "category": "Design concept",
          "slug": "corestack-enterprise-control-panel"
        },
        {
          "title": "Herd - Simplifying Blockchain with AI",
          "year": "2025-26",
          "category": "Product Design",
          "slug": "herd-simplifying-blockchain-with-ai"
        },
        {
          "title": "Zenrock Webapp Design",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "zenrock-webapp-design"
        },
        {
          "title": "Offx: Deal Discovery & Creation Flow",
          "year": "2024-25",
          "category": "Product Design",
          "slug": "offx-redesign"
        },
        {
          "title": "Zenrock Website Design(MVP)",
          "year": "2024-25",
          "category": "UI/UX",
          "slug": "zenrock-website-design(mvp)"
        },
        {
          "title": "Crypto No code Data Builder",
          "year": "2022-23",
          "category": "Product Design",
          "slug": "no-code-data-builder"
        },
        {
          "title": "Mindlantic",
          "year": "2021",
          "category": "UI/UX",
          "slug": "mindlantic"
        },
        {
          "title": "Getlit Webapp",
          "year": "2021",
          "category": "UI/UX",
          "slug": "getlit-webapp"
        },
        {
          "title": "Houzecheck Webapp and Website",
          "year": "2022",
          "category": "UI/UX",
          "slug": "houzecheck-webapp"
        }
      ]
    }
  },
};

export function getCaseStudy(slug) {
  return caseStudies[slug] || null;
}
