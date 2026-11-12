/**
 * About.jsx — /about page.
 *
 * Verified layout (live /about, 1168 + full-page captures; base 1280):
 *   root: col gap 100 (80/60), padding 138/40/0, align center, justify start.
 *   header: label (01 — About me, inline rule, no bottom divider) + h1.
 *   CV section: label block + heading row (h2 + Download Resume) > rows list (row +
 *     light rules + closing dark) + education block.
 *   beliefs → how → CTA → footer (same gap rhythm).
 */
import SiteNav from '@/components/navigation/SiteNav.jsx';
import SiteFooter from '@/components/footer/SiteFooter.jsx';
import AccentText from '@/components/sections/AccentText.jsx';
import SectionLabel from '@/components/sections/SectionLabel.jsx';
import Rule from '@/components/sections/Rule.jsx';
import Beliefs from '@/components/sections/Beliefs.jsx';
import HowIWork from '@/components/sections/HowIWork.jsx';
import CTASection from '@/components/sections/CTASection.jsx';
import Button from '@/components/buttons/Button.jsx';
import { aboutPage } from '@/data/site.js';

export default function About() {
  const cv = aboutPage.cv;
  const accentIndex = cv.heading.toLowerCase().indexOf(cv.headingAccent.toLowerCase());
  const cvBefore = cv.heading.slice(0, accentIndex);
  const cvAfter = cv.heading.slice(accentIndex + cv.headingAccent.length);

  return (
    <>
      <SiteNav />
      <main className="about-page">
        <header className="about-page__intro">
          <SectionLabel number={aboutPage.headerLabel.number} text={aboutPage.headerLabel.text} divider={false} />
          <h1 className="about-page__h1">
            <AccentText text={aboutPage.h1} accents={aboutPage.accentWords} />
          </h1>
        </header>

        <section className="about-page__cv">
          <div className="about-cv__header">
            <div className="about-cv__label">
              <div className="about-cv__label-row">
                <p className="section-label__number">{cv.label.number}</p>
                <span className="label-rule" aria-hidden="true" />
                <p className="section-label__text">{cv.label.text}</p>
              </div>
              <Rule />
            </div>

            <div className="about-cv__heading-row">
              <div className="about-cv__heading-block">
                <div className="about-cv__heading">
                  <h2>
                    {cvBefore}
                    <span className="accent">{cv.headingAccent}</span>
                    {cvAfter}
                  </h2>
                </div>
              </div>
              <Button
                href="https://drive.google.com/file/d/12TNnqEgK5kSCVRR4zy6iAwqIb38LTyrU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                label={aboutPage.cv.downloadResumeLabel}
                variant="ghost"
              />
            </div>
            <Rule tone="light" />
          </div>

          <div className="about-page__cv-rows">
            <div className="about-cv__list">
              {cv.rows.map((row, index) => (
                <div className="about-cv__group" key={`${row.year}-${row.company}`}>
                  <div className="about-cv__row">
                    <div className="about-cv__year">
                      <p>{row.year}</p>
                    </div>
                    <div className="about-cv__company">
                      <h6>{row.company}</h6>
                      <p>{row.role}</p>
                    </div>
                    <div className="about-cv__desc">
                      {Array.isArray(row.desc) ? (
                        <ul className="about-cv__desc-list">
                          {row.desc.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{row.desc}</p>
                      )}
                    </div>
                  </div>
                  {index < cv.rows.length - 1 ? <Rule tone="light" /> : <Rule tone="dark" />}
                </div>
              ))}
            </div>

            <section className="about-page__cv-education">
              <div className="about-cv__education-label">
                <p className="section-label__text">EDUCATION</p>
              </div>
              <div className="about-cv__education-rows">
                {(Array.isArray(cv.education) ? cv.education : [cv.education]).map((edu, index, arr) => (
                  <div className="about-cv__education-group" key={`${edu.year}-${edu.org}`}>
                    <div className="about-cv__row">
                      <div className="about-cv__year">
                        <p>{edu.year}</p>
                      </div>
                      <div className="about-cv__company">
                        <h6>{edu.org}</h6>
                        <p>{edu.role}</p>
                      </div>
                    </div>
                    {index < arr.length - 1 ? <Rule tone="light" /> : <Rule />}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <Beliefs />

        <HowIWork />

        <CTASection
          heading={aboutPage.cta.heading}
          headingHighlight={aboutPage.cta.headingHighlight}
          lineBreakBefore
          headClassName="about-cta"
        />

        <SiteFooter />
      </main>
    </>
  );
}
