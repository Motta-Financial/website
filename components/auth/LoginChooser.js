'use client';

import Link from 'next/link';

const CLIENT_PORTAL_URL = 'https://clientlogin-us2.karbonhq.com/4mTyp9lLRWTC';
const TEAM_HUB_URL = 'https://hub.motta.cpa/login';
const PARTNER_PORTAL_URL = '/partners';

const PORTALS = [
  {
    id: 'client',
    label: 'Client',
    description: 'Access your documents, messages, and tax information.',
    href: CLIENT_PORTAL_URL,
    external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'partner',
    label: 'Partner',
    description: 'Referral partners, attorneys, and financial advisors.',
    href: PARTNER_PORTAL_URL,
    external: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'team',
    label: 'Team',
    description: 'Motta Financial staff and internal operations.',
    href: TEAM_HUB_URL,
    external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function LoginChooser() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
        background:
          'radial-gradient(900px 500px at 80% 0%, rgba(142,155,121,0.18) 0%, transparent 60%), linear-gradient(180deg, #FBF8F2 0%, #F4F1EB 100%)',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 520,
          background: '#FFFFFF',
          borderRadius: 16,
          border: '1px solid rgba(107, 116, 93, 0.16)',
          boxShadow: '0 30px 60px -32px rgba(15, 19, 16, 0.28)',
          padding: '40px 32px',
        }}
      >
        <Link
          href="/"
          aria-label="Motta Financial"
          style={{ display: 'inline-flex', marginBottom: 24 }}
        >
          <img
            src="/assets/img/logo/logo.png"
            alt="Motta Financial"
            style={{ height: 36, width: 'auto' }}
          />
        </Link>

        <h1
          style={{
            fontSize: 26,
            lineHeight: 1.2,
            margin: '0 0 8px',
            fontWeight: 700,
            color: '#2b2f24',
          }}
        >
          Log in to Motta
        </h1>
        <p
          style={{
            margin: '0 0 28px',
            color: '#5b6256',
            fontSize: 15,
            lineHeight: 1.55,
          }}
        >
          Select which portal you&apos;d like to access.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PORTALS.map((portal) => {
            const Component = portal.external ? 'a' : Link;
            const extraProps = portal.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Component
                key={portal.id}
                href={portal.href}
                {...extraProps}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 20px',
                  borderRadius: 12,
                  border: '1px solid rgba(107, 116, 93, 0.18)',
                  background: '#FBF8F2',
                  textDecoration: 'none',
                  color: '#2b2f24',
                  transition:
                    'background 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F4F1EB';
                  e.currentTarget.style.borderColor = '#8e9b79';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 24px -12px rgba(15, 19, 16, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FBF8F2';
                  e.currentTarget.style.borderColor = 'rgba(107, 116, 93, 0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    background:
                      'linear-gradient(135deg, #8e9b79 0%, #6b745d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FBF8F2',
                  }}
                >
                  {portal.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      marginBottom: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {portal.label}
                    {portal.external && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: 0.5 }}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: '#5b6256',
                      lineHeight: 1.4,
                    }}
                  >
                    {portal.description}
                  </div>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, color: '#8e9b79' }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Component>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid rgba(107, 116, 93, 0.14)',
            fontSize: 13,
            color: '#5b6256',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          Not sure which to choose?{' '}
          <Link
            href="/contact"
            style={{ color: '#6b745d', fontWeight: 600 }}
          >
            Contact us
          </Link>{' '}
          and we&apos;ll help you get set up.
        </div>
      </section>
    </main>
  );
}
