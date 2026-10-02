'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AlfredLogo from './AlfredLogo';

const MESSAGES = [
  {
    pill: 'ALFRED Ai',
    text: 'Routine tax prep, drafted in minutes — so our CPAs can spend their time on planning, not data entry. Powered by ALFRED, our proprietary AI.',
    cta: 'See how it works →',
    href: '/about',
  },
  {
    pill: 'Featured by Intuit',
    text: 'Intuit featured Motta in an official ProConnect Tax case study on how we built a scalable practice with automation and ALFRED Ai.',
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
  // Rotation pauses while the pointer is over the banner or keyboard focus is
  // inside it, and stays stopped once a visitor presses pause (or asks their
  // OS for reduced motion).
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const paused = hovered || focused || stopped;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setStopped(true);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const msg = MESSAGES[index];

  return (
    <div
      className="motta-topbanner"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      role="region"
      aria-label="Site announcements"
    >
      <div className="motta-topbanner__inner">
        <div key={index} className="motta-topbanner__track motta-topbanner__fade">
          <span className="motta-topbanner__pill">
            {msg.pill === 'ALFRED Ai' ? (
              <AlfredLogo size={16} className="alfred-logo--invert motta-topbanner__pill-logo" />
            ) : null}
            {msg.pill}
          </span>
          <span
            className="motta-topbanner__msg"
            dangerouslySetInnerHTML={{
              __html: `${msg.text}`,
            }}
          />
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
              {msg.cta}
            </a>
          ) : (
            <Link href={msg.href} className="motta-topbanner__cta">
              {msg.cta}
            </Link>
          )}
        </div>
        <div className="motta-topbanner__dots" role="group" aria-label="Announcements">
          <button
            type="button"
            className="motta-topbanner__pause"
            onClick={() => setStopped((value) => !value)}
            aria-label={stopped ? 'Resume announcement rotation' : 'Pause announcement rotation'}
          >
            <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
              {stopped ? (
                <path d="M2 1v8l7-4z" />
              ) : (
                <path d="M2 1h2.2v8H2zM5.8 1H8v8H5.8z" />
              )}
            </svg>
          </button>
          {MESSAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              className="motta-topbanner__dot"
              data-active={i === index}
              aria-label={`Show announcement ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
