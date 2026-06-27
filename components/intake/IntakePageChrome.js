'use client';

import { useEffect } from 'react';

/**
 * IntakePageChrome — visual shell for the standalone /intake page.
 *
 * Layout choices:
 *  - Two-column on desktop: left rail with brand + supporting copy
 *    (what happens next, ALFRED Ai role, privacy posture); right
 *    column owns the form and gets the maximum legible width.
 *  - Single column on mobile.
 *  - Generous spacing, larger field rhythm than the modal had —
 *    the whole point of the new window is readability.
 *  - No site header/footer; this is a focused work surface.
 */
export default function IntakePageChrome({ source, children }) {
  useEffect(() => {
    // Tag <html> so we can scope page-only CSS overrides without
    // affecting the modal version of the form on other pages.
    if (typeof document === 'undefined') return undefined;
    document.documentElement.classList.add('motta-intake-page-active');
    return () => {
      document.documentElement.classList.remove('motta-intake-page-active');
    };
  }, []);

  return (
    <main className="motta-intake-page">
      <div className="motta-intake-page__grid">
        <aside className="motta-intake-page__rail">
          <a className="motta-intake-page__brand" href="https://motta.cpa">
            <span className="motta-intake-page__brand-mark" aria-hidden="true">M</span>
            <span className="motta-intake-page__brand-word">Motta</span>
          </a>

          <span className="motta-intake-page__eyebrow">
            <span className="motta-intake-page__eyebrow-dot" aria-hidden="true" />
            New Client Intake
            {source ? (
              <span className="motta-intake-page__source"> · from {source}</span>
            ) : null}
          </span>

          <h1 className="motta-intake-page__title">
            Let&apos;s scope your engagement.
          </h1>
          <p className="motta-intake-page__lede">
            Share a few details about your situation and our team — with a
            little help from <strong>ALFRED Ai</strong> — will follow up
            within one business day.
          </p>

          <ul className="motta-intake-page__bullets">
            <li>
              <span className="motta-intake-page__bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </span>
              <div>
                <strong>You submit.</strong> Three minutes, encrypted in
                transit.
              </div>
            </li>
            <li>
              <span className="motta-intake-page__bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.9 5.1L19 11l-5.1 1.9L12 18l-1.9-5L5 11l5.1-2.9z" />
                </svg>
              </span>
              <div>
                <strong>ALFRED preps.</strong> Your responses are routed to
                the right teammate with relevant context attached.
              </div>
            </li>
            <li>
              <span className="motta-intake-page__bullet-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
              </span>
              <div>
                <strong>Pick a time.</strong> Schedule a 30‑minute discovery
                call right after you submit.
              </div>
            </li>
          </ul>

          <p className="motta-intake-page__rail-foot">
            Prefer to talk first?{' '}
            <a href="mailto:hello@motta.cpa">hello@motta.cpa</a>
          </p>
        </aside>

        <section className="motta-intake-page__form">
          {children}
        </section>
      </div>

      <footer className="motta-intake-page__foot">
        <a href="https://motta.cpa" className="motta-intake-page__back-link">
          ← Back to motta.cpa
        </a>
        <span className="motta-intake-page__foot-meta">
          © {new Date().getFullYear()} Motta · Encrypted in transit
        </span>
      </footer>
    </main>
  );
}
