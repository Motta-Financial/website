'use client';

/**
 * IntakeButton — a click target that opens the global intake modal.
 *
 * Usage:
 *   <IntakeButton className="btn">Boot up an engagement</IntakeButton>
 *   <IntakeButton as="a" className="btn">Hire Motta</IntakeButton>
 *
 * The dispatch is a window CustomEvent so this component stays usable from
 * server components — only the button itself is client.
 */
export default function IntakeButton({
  children,
  className,
  style,
  source,
  as = 'button',
  ariaLabel,
  ...rest
}) {
  const onActivate = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('motta:open-intake', {
          detail: { source: source || null },
        })
      );
    }
  };

  if (as === 'a') {
    return (
      <a
        href="#intake"
        className={className}
        style={style}
        onClick={onActivate}
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
      onClick={onActivate}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
