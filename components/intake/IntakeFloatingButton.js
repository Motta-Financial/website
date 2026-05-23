'use client';

import { useEffect, useState } from 'react';

/**
 * IntakeFloatingButton — persistent bottom-left CTA that opens the intake
 * modal from any page. Sits opposite ALFRED (bottom-right) so the two
 * floating elements never collide. Hidden until the user has scrolled
 * past the hero.
 */
export default function IntakeFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function open() {
    window.dispatchEvent(
      new CustomEvent('motta:open-intake', {
        detail: { source: 'floating button' },
      })
    );
  }

  return (
    <button
      type="button"
      className="motta-intake-fab"
      data-visible={visible}
      onClick={open}
      aria-label="Become a client — open intake form"
    >
      <span className="motta-intake-fab__label">Become a client</span>
      <span className="motta-intake-fab__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </span>
    </button>
  );
}
