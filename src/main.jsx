/**
 * main.jsx — application entry (Phase 2).
 *
 * CSS order mirrors the ownership map in ARCHITECTURE.md:
 *   fonts → tokens → typography → global → nav → buttons → sections →
 *   projects → footer → responsive → keyframes → pages
 * (responsive last among the component sheets so tier overrides can step down
 * the base values; keyframes are global-only; pages.css owns page shells).
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/fonts.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/global.css';
import './styles/nav.css';
import './styles/buttons.css';
import './styles/sections.css';
import './styles/projects.css';
import './styles/footer.css';
import './styles/responsive.css';
import './animations/keyframes.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
