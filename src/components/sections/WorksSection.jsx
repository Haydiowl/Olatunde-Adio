/**
 * WorksSection.jsx — "selected work" rows, reused by the homepage (section 02)
 * and the /work list page.
 *
 * Verified homepage DOM: 1r8a8js (col gap 30; tablet 24, mobile 20) >
 *   [label 1iasy21, v20nff (col gap 20, centered) > four groups
 *    mi2v37/z25d26/1aw8lux/xevhd8 (col gap 20; mobile 16) > sticky wrapper
 *    188aq46/… (col gap 20; mobile 24) > [ProjectRow, light divider t4jlxn]].
 *
 * Verified /work DOM: 1if0bq6#selected (col gap 30; tablet 24, mobile 20) >
 *   [label 31lqlo, hz68q9 (col gap 20) > row sections zr2lxu (col gap 20;
 *    mobile 16) > sticky kh8lna (col gap 20; mobile 24) > [ProjectRow, light
 *    divider]]. Reuses the same group/sticky classes; the /work shells live in
 * pages.css.
 *
 * The light divider is INSIDE the sticky wrapper (depth-verified).
 */
import { projects, getProject } from '@/data/projects.js';
import { selectedSlugs } from '@/data/home.js';
import SectionLabel from './SectionLabel.jsx';
import Rule from './Rule.jsx';
import ProjectRow from '@/components/projects/ProjectRow.jsx';

export default function WorksSection({ variant = 'home', label, items }) {
  // /work renders the first 5 projects (P.01–P.05) under "02 — Selected"; the rest
  // (P.06–P.11) move to the "03 — Archived" section. Homepage keeps 4 rows (P.02–P.05)
  // behind the featured case (P.01).
  const rows =
    items ||
    (variant === 'work'
      ? projects.slice(0, 5)
      : selectedSlugs.map((slug) => getProject(slug)).filter(Boolean));

  const isWork = variant === 'work';

  return (
    <section className={isWork ? 'work-page__selected' : 'works-section'} id="selected">
      <SectionLabel number={label.number} text={label.text} />

      <div className={isWork ? 'work-page__rows' : 'works-section__body'}>
        {rows.map((project) => (
          <section className="works-section__group" key={project.slug}>
            <div className="works-section__sticky">
              <ProjectRow project={project} />
              <Rule tone="light" />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
