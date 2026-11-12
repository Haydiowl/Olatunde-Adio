/**
 * ArchivedSection.jsx — /work "03 — Archived" section: label + sticky archived
 * rows (P.06–P.11), each with a light separator (verified /work geometry).
 *
 * Structure: section.archived (col gap 20 > [label block, rows]) >
 *   [section.archived__row > div.archived__sticky > [ArchivedRow, light Rule]].
 * The sticky wrapper carries the scroll-reveal (opacity 0 / translateY(20px) until
 * revealed — sampled ≈400ms, ease [0.58,0.02,0.37,0.99]; see animations/Appear).
 *
 * Case studies have no footer; /work keeps the CTA card + footer (page shell).
 */
import { archivedProjects } from '@/data/projects.js';
import SectionLabel from './SectionLabel.jsx';
import Rule from './Rule.jsx';
import ArchivedRow from '@/components/projects/ArchivedRow.jsx';
import Appear from '@/animations/Appear.jsx';
import { appearBlock } from '@/animations/presets.js';

export default function ArchivedSection() {
  const archivedLabel = { number: '03', text: 'Archived' };

  return (
    <section className="archived" id="archived">
      <SectionLabel number={archivedLabel.number} text={archivedLabel.text} />

      {archivedProjects.map((project) => (
        <section className="archived__row" key={project.slug}>
          <Appear preset={appearBlock} className="archived__sticky">
            <ArchivedRow project={project} />
            <Rule tone="light" />
          </Appear>
        </section>
      ))}
    </section>
  );
}
