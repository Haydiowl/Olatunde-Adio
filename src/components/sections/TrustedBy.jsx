/**
 * TrustedBy.jsx — homepage section 05 "Previously trusted by".
 *
 * Verified DOM: 1icoyqm (col gap 40, max-w 1200) > aa6jlb (mix-blend-mode
 * luminosity, border-radius 10px, row gap 50) > ul (row gap 50) >
 * 7 li.ticker-item. Each li carries the fixed width/height, blend mode,
 * opacity and (for logo 5) filter from home.js → trustedBy; the inner image
 * fills the li box. The row does NOT animate (no marquee keyframes in the
 * reference CSS).
 */
import { trustedBy } from '@/data/home.js';
import { trustedBySrc } from '@/data/media.js';
import SectionLabel from './SectionLabel.jsx';

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <SectionLabel number={trustedBy.label.number} text={trustedBy.label.text} />

      <div className="trusted-section__logos">
        <ul>
          {trustedBy.logos.map((logo, index) => (
            <li
              className="ticker-item"
              key={`${logo.src}-${index}`}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                mixBlendMode: logo.blend,
                opacity: logo.opacity,
                ...(logo.filter ? { filter: logo.filter } : {}),
              }}
            >
              <img
                src={trustedBySrc(logo)}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ width: '100%', height: '100%' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
