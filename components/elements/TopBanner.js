'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AlfredLogo from './AlfredLogo';

const MESSAGES = [
  {
    pill: 'ALFRED Ai',
    text: 'Routine tax prep, drafted in minutes — so our CPAs can spend their time on planning, not data entry.',
    cta: 'See how it works →',
    href: '/about',
  },
  {
    pill: 'Featured by Intuit',
    text: 'Intuit featured Motta in an official ProConnect Tax case study on how we built a scalable practice with automation.',
    cta: 'Read the case study →',
    href: '/news/press/proconnect-case-study',
  },
  {
    pill: 'Now booking',
    text: 'Now booking TY2026 planning conversations from our Boston and Las Vegas offices.',
    cta: 'Boot up your engagement →',
    href: '#intake',
    intake: true,
    source: 'top banner',
  },
];

export default function TopBanner() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const advance = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
      setAnimating(false);
    }, 400); // matches CSS slide-out duration
  };

  const goTo = (i) => {
    if (i === index) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(i);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    // Match the marquee CSS duration (28s) so the full sentence always
    // completes one pass before we swap to the next message.
    timerRef.current = setInterval(advance, 28000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  const msg = MESSAGES[index];

  return (
    <div
      className="motta-topbanner"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() => {
        timerRef.current = setInterval(advance, 28000);
      }}
      role="region"
      aria-label="Site announcements"
    >
      <div className="motta-topbanner__inner">
        <div className={`motta-topbanner__track${animating ? ' motta-topbanner--slide-out' : ' motta-topbanner--slide-in'}`}>
          {/* Pill badge — fixed left, never scrolls */}
          <span className="motta-topbanner__pill">
            {msg.pill === 'ALFRED Ai' ? (
              <AlfredLogo size={12} className="alfred-logo--invert motta-topbanner__pill-logo" />
            ) : null}
            {msg.pill}
          </span>

          {/* Scrolling region — msg + cta marquee together */}
          <span className="motta-topbanner__scroll-region">
            <span className="motta-topbanner__scroll-inner" key={index}>
              <span className="motta-topbanner__msg">{msg.text}</span>
              {msg.intake ? (
                <a
                  href="#intake"
                  className="motta-topbanner__cta"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(
                      new CustomEvent('motta:open-intake', {
                        detail: { source: msg.source || 'top banner' },
                      })
                    );
                  }}
                >
                  &nbsp;&nbsp;{msg.cta}
                </a>
              ) : (
                <Link href={msg.href} className="motta-topbanner__cta">
                  &nbsp;&nbsp;{msg.cta}
                </Link>
              )}
              {/* Duplicate for seamless loop */}
              <span className="motta-topbanner__msg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{msg.text}</span>
              {msg.intake ? (
                <a
                  href="#intake"
                  className="motta-topbanner__cta"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(
                      new CustomEvent('motta:open-intake', {
                        detail: { source: msg.source || 'top banner' },
                      })
                    );
                  }}
                >
                  &nbsp;&nbsp;{msg.cta}
                </a>
              ) : (
                <Link href={msg.href} className="motta-topbanner__cta">
                  &nbsp;&nbsp;{msg.cta}
                </Link>
              )}
            </span>
          </span>
        </div>


      </div>
    </div>
  );
}
