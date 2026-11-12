/**
 * AccentText.jsx — shared helper for accent-colored words inside headings.
 *
 * The reference marks accent spans in the markup (hero "Product design", s03
 * "strategy & craft" / "rare", CTA "complex product") and colors them with
 * --token-b86dbd64 (#e5341b). This helper splits a verified string on the
 * verified accent words — it does not invent emphasis.
 */

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function renderWithAccents(text, accents = [], accentClassName = 'accent') {
  if (!accents.length) return text;

  const pattern = new RegExp(`(${accents.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(pattern);
  const lowered = accents.map((a) => a.toLowerCase());

  return parts.map((part, index) =>
    lowered.includes(part.toLowerCase()) ? (
      <span key={`accent-${index}`} className={accentClassName}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function AccentText({ text, accents, accentClassName }) {
  return <>{renderWithAccents(text, accents, accentClassName)}</>;
}
