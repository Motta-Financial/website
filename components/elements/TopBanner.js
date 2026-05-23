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
    pill: 'ProConnect Partner',
    text: 'Motta is one of a handful of firms with partner-grade access to Intuit&apos;s ProConnect Open API.',
    cta: 'Read the case study →',
    href: '/about',
  },
  {
    pill: 'Now booking',
    text: 'Now booking TY2026 planning conversations from our Boston and Las Vegas offices.',
    cta: 'Request a call back →',
    href: '/contact',
  },
];

export default function TopBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const msg = MESSAGES[index];

  return (
    <div
      className="motta-topbanner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
          <Link href={msg.href} className="motta-topbanner__cta">
            {msg.cta}
          </Link>
        </div>
        <div className="motta-topbanner__dots" role="tablist" aria-label="Announcement selector">
          {MESSAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              className="motta-topbanner__dot"
              data-active={i === index}
              aria-label={`Show announcement ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
