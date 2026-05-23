'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Animated ALFRED companion that reacts to scroll.
 * - Hidden at the top of the page
 * - Slides in once the user starts scrolling
 * - Pulses periodically and "bounces" when crossing major sections
 */
export default function AlfredCompanion() {
  const [visible, setVisible] = useState(false);
  const [excited, setExcited] = useState(false);
  const [tip, setTip] = useState('Powered by ALFRED Ai');

  useEffect(() => {
    let lastY = 0;
    let crossings = 0;
    const tips = [
      'Powered by ALFRED Ai',
      'ALFRED reads ProConnect data live',
      'Tax prep in under 10 minutes',
      'ALFRED is here. Need a hand?',
    ];

    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 280);

      // Trigger an "excited" bounce every ~600px of scrolling
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

  return (
    <Link
      href="/contact"
      className="alfred-companion"
      data-visible={visible}
      data-state={excited ? 'excited' : 'idle'}
      aria-label="Chat with ALFRED — Motta&apos;s AI assistant"
    >
      <span className="alfred-companion__pulse" aria-hidden="true" />
      <span className="alfred-companion__ring" aria-hidden="true" />
      <span className="alfred-companion__core">
        <img src="/assets/img/brand/alfred-ai.png" alt="" aria-hidden="true" />
      </span>
      <span className="alfred-companion__tooltip">{tip}</span>
    </Link>
  );
}
