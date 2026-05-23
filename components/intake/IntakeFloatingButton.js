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
      aria-label="Open new client intake"
    >
      <span className="motta-intake-fab__glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </span>
      <span className="motta-intake-fab__label">Become a client</span>
      <span className="motta-intake-fab__hint">Skip the small talk</span>
    </button>
  );
}
