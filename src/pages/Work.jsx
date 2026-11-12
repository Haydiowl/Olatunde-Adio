/**
 * Work.jsx — /work list page.
 *
 * Verified root (SpEaX): padding 138px 40px 0 (tablet 92px 32px 0, mobile 80px 16px
 * 0), column gap 100 (80/60), children centered, justify-content: center.
 *
 * Header 1lleg (col gap 20, max-w 1200) > ["01 — Work" label WITHOUT a divider,
 * h1 preset-1q86rep (tablet 76/1em, mobile 54/0.9em, max-width 342)].
 * Content v1w5in (col gap 40, max-w 1200) >
 *   [selected 1if0bq6#selected col gap 30 > label + rows (5 rows P.01–P.05),
 *    archived ylxg70 col gap 20 > label + rows (6 rows P.06–P.11)].
 * How i work + CTA + footer (root-level children, gap 80 at tablet).
 */
import SiteNav from '@/components/navigation/SiteNav.jsx';
import SectionLabel from '@/components/sections/SectionLabel.jsx';
import AccentText from '@/components/sections/AccentText.jsx';
import WorksSection from '@/components/sections/WorksSection.jsx';
import ArchivedSection from '@/components/sections/ArchivedSection.jsx';
import HowIWork from '@/components/sections/HowIWork.jsx';
import CTASection from '@/components/sections/CTASection.jsx';
import SiteFooter from '@/components/footer/SiteFooter.jsx';
import { projects } from '@/data/projects.js';
import { workPage } from '@/data/site.js';

export default function Work() {
  return (
    <>
      <SiteNav />
      <main className="work-page">
        <header className="work-page__intro">
          <SectionLabel number={workPage.headerLabel.number} text={workPage.headerLabel.text} divider={false} />
          <h1 className="work-page__h1">
            <AccentText text={workPage.h1} accents={workPage.accentWords} />
          </h1>
        </header>

        <div className="work-page__content">
          <WorksSection variant="work" label={workPage.sectionLabel} items={projects.slice(0, 5)} />

          <ArchivedSection />
        </div>

        <HowIWork label={workPage.howLabel} />

        <CTASection />

        <SiteFooter />
      </main>
    </>
  );
}
