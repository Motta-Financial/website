'use client';

import { useRouter } from 'next/navigation';

/**
 * IntakeButton — sends prospects to Motta's native intake form.
 *
 * The intake now lives on the legacy site at
 * https://www.mottafinancial.com/intake-form. Every intake CTA across
 * the marketing site routes here so there is a single canonical form.
 *
 * Usage:
 *   <IntakeButton className="btn">Boot up an engagement</IntakeButton>
 *   <IntakeButton as="a" className="btn">Hire Motta</IntakeButton>
 *
 * Implementation notes:
 *  - We render an actual <a href> when `as="a"` so the browser's
 *    middle-click / cmd-click / "Open in new tab" all work natively.
 *  - The legacy form is a full external page, so we navigate the
 *    current tab to it (a real redirect) rather than a sized popup.
 *  - We still dispatch the `motta:open-intake` event so any listeners
 *    (analytics, ALFRED companion) keep firing before we leave.
 */
const INTAKE_URL = '/intake';

function buildHref() {
  return INTAKE_URL;
}

export default function IntakeButton({
  children,
  className,
  style,
  source,
  as = 'button',
  ariaLabel,
  ...rest
}) {
  const router = useRouter();
  const href = buildHref();

  const open = (e) => {
    // Allow modifier-clicks on anchors to fall through to native
    // "open in new tab" behavior.
    if (
      as === 'a' &&
      e &&
      (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)
    ) {
      return;
    }
    if (e?.preventDefault) e.preventDefault();

    if (typeof window === 'undefined') return;

    // Fire the event for any listeners that still care (analytics,
    // ALFRED companion etc.) before we navigate away.
    try {
      window.dispatchEvent(
        new CustomEvent('motta:open-intake', {
          detail: { source: source || null },
        })
      );
    } catch (_) {}

    // Client-side transition to the native intake route.
    router.push(href);
  };

  if (as === 'a') {
    return (
      <a
        href={href}
        className={className}
        style={style}
        onClick={open}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={open}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
