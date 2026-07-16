'use client';

/**
 * Shared contact row for team member cards on /team and /about/team.
 * Renders only the channels a member actually has — email, LinkedIn,
 * and Calendly. Email/LinkedIn are icon-only circles; Calendly is a
 * small sage pill so "book a call" reads as the primary action.
 *
 * NOTE: these are real anchors, so on pages where the whole card is
 * wrapped in a <Link> (e.g. Dat Le on /team) this component MUST be
 * rendered OUTSIDE that wrapper to avoid invalid nested anchors.
 */
function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 24px 20px',
  borderTop: '1px solid #E2DDD6',
  marginTop: 'auto',
};

const iconBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1.5px solid #D6D2CB',
  background: 'transparent',
  color: '#4A4843',
  textDecoration: 'none',
  flexShrink: 0,
  transition: 'border-color 0.2s, color 0.2s',
};

const calBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 16px',
  borderRadius: '6px',
  background: '#6B745D',
  color: '#FFFFFF',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '13px',
  fontWeight: 500,
  textDecoration: 'none',
  letterSpacing: '0.01em',
  marginLeft: 'auto',
  flexShrink: 0,
};

export default function TeamContactLinks({ member }) {
  const { email, linkedin, calendly, name } = member || {};
  if (!email && !linkedin && !calendly) return null;

  return (
    <div style={rowStyle}>
      {email && (
        <a
          style={iconBtnStyle}
          href={`mailto:${email}`}
          title={email}
          aria-label={`Email ${name}`}
        >
          <EmailIcon />
        </a>
      )}
      {linkedin && (
        <a
          style={iconBtnStyle}
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
        >
          <LinkedInIcon />
        </a>
      )}
      {calendly && (
        <a
          style={calBtnStyle}
          href={calendly}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book a call with ${name}`}
        >
          <CalendarIcon />
          <span>Book a call</span>
        </a>
      )}
    </div>
  );
}
