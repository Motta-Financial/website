'use client';
import Image from 'next/image';

/**
 * Official ALFRED Ai logo mark.
 * Renders the canonical butler-with-orb icon with optional sage halo glow.
 *
 * Props:
 *   size  – px, default 48
 *   glow  – render an animated sage halo behind the logo
 *   className – passthrough
 */
export default function AlfredLogo({
  size = 48,
  glow = false,
  className = '',
  alt = 'ALFRED Ai',
  priority = false,
}) {
  return (
    <span
      className={`alfred-logo ${glow ? 'alfred-logo--glow' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      {glow ? <span className="alfred-logo__halo" aria-hidden="true" /> : null}
      <Image
        src="/assets/img/brand/alfred-ai.png"
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="alfred-logo__img"
      />
    </span>
  );
}
