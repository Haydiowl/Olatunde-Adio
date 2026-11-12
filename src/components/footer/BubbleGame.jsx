/**
 * BubbleGame.jsx — static footer bubble-game shell (13spitu / z85x0j).
 *
 * The reference renders the shell and controls server-side; the bubbles are
 * spawned by JS. Bubble physics, spawn timing and scoring are UNVERIFIED
 * (§A5/A6), so this component renders the verified resting DOM only — no
 * invented simulation.
 *
 * Verbatim shell inline styles live in footer.css (.footer__game-shell); the
 * two control SVGs below are transcribed from the reference markup (24 viewBox,
 * stroke currentColor, width/height 20, stroke-width 1, round caps/joins).
 */
import { footer } from '@/data/site.js';

function SpeakerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M16 8.5a5 5 0 0 1 0 7" />
      <path d="M18.6 6a8 8 0 0 1 0 12" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <polyline points="21 3 21 9 15 9" />
    </svg>
  );
}

export default function BubbleGame() {
  const { score, controls } = footer.game;

  return (
    <div className="footer__game">
      <div className="footer__game-shell">
        <div className="footer__game-layer" aria-hidden="true" />

        <div className="footer__game-score">
          <b>{score.score}</b> score &nbsp;·&nbsp; <b>{score.popped}</b> popped
        </div>

        <div className="footer__game-controls">
          {controls.map((control, index) => (
            <button
              className="footer__game-btn"
              key={control.ariaLabel}
              type="button"
              aria-label={control.ariaLabel}
            >
              {index === 0 ? <SpeakerIcon /> : <ResetIcon />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
