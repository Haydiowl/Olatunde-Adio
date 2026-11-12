/**
 * SiteNav.jsx — shared fixed navigation (Phase 2, tasks 4 + 6).
 *
 * SOURCE: reference DOM (.dgmr2u-container) — structure, copy and hrefs are
 * transcribed from site.js (content layer). Present on ALL 14 routes
 * (dom-structure.md: "fixed nav (same shell)" on every page shell).
 *
 * Motion: appear id `dgmr2u` (opacity 0.001 → 1, 0.4s, delay 0.1s, ease
 * [0.36,0.02,0.14,0.96] — animation-inventory §1) via the Appear preset.
 *
 * Mobile (<=809): links + BOOK A CALL are hidden and a MENU trigger renders
 * (verified probe). Open-menu panel was previously unverified (D2) and is now
 * implemented functionally for mobile use (links + contact CTA), styled to
 * match the site's existing tokens/typography.
 */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '@/data/site.js';
import Appear, { useAppear } from '@/animations/Appear.jsx';
import { appearNav } from '@/animations/presets.js';
import MobileMenuPanel from './MobileMenuPanel.jsx';

function MenuIcon({ open }) {
  return (
    <span className={`site-nav__menu-icon${open ? ' is-open' : ''}`} aria-hidden="true">
      <span className="site-nav__menu-bar site-nav__menu-bar--top" />
      <span className="site-nav__menu-bar site-nav__menu-bar--bottom" />
    </span>
  );
}

export default function SiteNav() {
  const { ref, style } = useAppear(appearNav);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={ref} className={`site-nav${menuOpen ? ' is-menu-open' : ''}`} style={style} aria-label="Navigation">
        <div className="site-nav__inner">
          <Link className="site-nav__logo logo-text" to={nav.logoHref}>
            {nav.logoText}
          </Link>

          <div className="site-nav__links">
            {nav.links.map((link) => (
              <Link key={link.href} className="site-nav__link" to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <a className="site-nav__cta" href={nav.bookACall.href} target="_blank" rel="noreferrer">
            <span className="site-nav__cta-label">{nav.bookACall.label}</span>
            <svg
              className="site-nav__cta-arrow"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              {/* arrow: 20×20 container, inner 13×13 glyph (measured) */}
              <path d="M4 16L16 4M16 4H7M16 4V13" />
            </svg>
            <span className="site-nav__cta-bar" aria-hidden="true" />
          </a>

          <button
            className="site-nav__menu"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="site-nav__menu-label">{menuOpen ? 'close' : nav.menuTrigger.label}</span>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
        <div className="site-nav__rule" aria-hidden="true" />
      </nav>

      <MobileMenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

/** Re-export for pages that want the appear-wrapped variant (unused shell). */
export { Appear };
