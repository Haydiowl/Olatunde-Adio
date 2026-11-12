/**
 * FeaturedSection.jsx — homepage section 01 "featured case".
 *
 * Verified DOM: 1d2ga08 (col gap 40; tablet 24, mobile 16; appear id truncated
 * §A1 → static) > [label wrapper 1ywsj7j, 308svi (gap 60; mobile 40) >
 * 83urhf (gap 40; tablet 20, mobile 24) > FeaturedCaseCard].
 */
import { featuredCase } from '@/data/projects.js';
import SectionLabel from './SectionLabel.jsx';
import FeaturedCaseCard from '@/components/projects/FeaturedCaseCard.jsx';

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <SectionLabel number={featuredCase.label.number} text={featuredCase.label.text} />
      <div className="featured-section__content">
        <div className="featured-section__inner">
          <FeaturedCaseCard />
        </div>
      </div>
    </section>
  );
}
