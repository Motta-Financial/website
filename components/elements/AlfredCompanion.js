'use client';
import { useEffect, useState } from 'react';
import AlfredLogo from './AlfredLogo';

/**
 * Animated ALFRED companion that reacts to scroll.
 * Clicking opens the global new-client intake modal so the floating
 * personality and the conversion CTA share the same surface.
 *
 * Visual: bare ALFRED Ai mark (transparent PNG) with the same pulsing
 * sage halo used in the page preloader — no surrounding tile/box.
 */
export default function AlfredCompanion() {
  const [visible, setVisible] = useState(false);
  const [excited, setExcited] = useState(false);
  const [tip, setTip] = useState('Tap to chat with ALFRED');

  useEffect(() => {
    let lastY = 0;
    let crossings = 0;
    const tips = [
      'Tap to chat with ALFRED',
      'ALFRED reads ProConnect data live',
      'Tax prep drafted in minutes, not hours',
      'ALFRED is here. Need a hand?',
    ];

    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 280);

      const bucket = Math.floor(y / 600);
      const lastBucket = Math.floor(lastY / 600);
      if (bucket !== lastBucket) {
        crossings += 1;
        setTip(tips[crossings % tips.length]);
        setExcited(true);
        setTimeout(() => setExcited(false), 800);
      }
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function open() {
    window.dispatchEvent(
      new CustomEvent('motta:open-intake', {
        detail: { source: 'ALFRED' },
      })
    );
  }

  return (
    <button
      type="button"
      onClick={open}
      className="alfred-companion"
      data-visible={visible}
      data-state={excited ? 'excited' : 'idle'}
      aria-label="Chat with ALFRED — Motta's AI assistant"
    >
      <AlfredLogo size={64} glow className="alfred-companion__mark" />
      <span className="alfred-companion__tooltip">{tip}</span>
    </button>
  );
}
