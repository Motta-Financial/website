'use client';

/**
 * IntakeButton — opens the intake form in a separate browser window.
 *
 * Why a new window:
 *  - The intake is dense and benefits from a dedicated, distraction-free
 *    surface with full viewport width (especially on tablet / 13" laptop).
 *  - It also lets prospects keep the marketing site open in the original
 *    tab while they fill things out.
 *
 * Usage:
 *   <IntakeButton className="btn">Boot up an engagement</IntakeButton>
 *   <IntakeButton as="a" className="btn">Hire Motta</IntakeButton>
 *
 * Implementation notes:
 *  - We render an actual <a href="/intake"> when `as="a"` so the
 *    browser's middle-click / cmd-click / "Open in new tab" all work.
 *  - For <button>, we call window.open() with explicit popup features
 *    so the OS treats it as a proper detached window instead of a tab.
 *  - We also dispatch the legacy `motta:open-intake` event so any
 *    other listeners (analytics, ALFRED companion) keep firing.
 */
const POPUP_FEATURES = [
  'noopener',
  'noreferrer',
  'width=1080',
  'height=920',
  'menubar=no',
  'toolbar=no',
  'location=no',
  'status=no',
].join(',');

function buildHref(source) {
  if (!source) return '/intake';
  return `/intake?source=${encodeURIComponent(source)}`;
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
  const href = buildHref(source);

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

    // Fire the legacy event for any listeners that still care
    // (analytics, ALFRED companion etc.) — but it no longer opens
    // the in-page modal, that listener has been replaced.
    try {
      window.dispatchEvent(
        new CustomEvent('motta:open-intake', {
          detail: { source: source || null },
        })
      );
    } catch (_) {}

    const win = window.open(href, 'motta-intake', POPUP_FEATURES);
    // If the popup is blocked, fall back to a same-tab navigation so
    // the prospect still reaches the form.
    if (!win) window.location.assign(href);
    else win.focus();
  };

  if (as === 'a') {
    return (
      <a
        href={href}
        target="motta-intake"
        rel="noopener"
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
