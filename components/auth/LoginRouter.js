'use client';

import Link from 'next/link';
import { useState } from 'react';

const TEAM_DOMAINS = ['mottafinancial.com'];
const TEAM_HUB_URL = 'https://hub.motta.cpa/login';
const CLIENT_PORTAL_URL = 'https://clientlogin-us2.karbonhq.com/4mTyp9lLRWTC';

function isTeamEmail(email) {
  const at = email.lastIndexOf('@');
  if (at < 0) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  return TEAM_DOMAINS.includes(domain);
}

export default function LoginRouter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    const destination = isTeamEmail(trimmed) ? TEAM_HUB_URL : CLIENT_PORTAL_URL;
    window.location.href = destination;
  };

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
          maxWidth: 460,
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
            margin: '0 0 24px',
            color: '#5b6256',
            fontSize: 15,
            lineHeight: 1.55,
          }}
        >
          Enter the email you use with Motta. We&apos;ll send you to the right
          place &mdash; the team hub for staff, or the client portal for everyone
          else.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="login-email"
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#6b745d',
              marginBottom: 8,
            }}
          >
            Email address
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 10,
              border: error
                ? '1px solid #c0533f'
                : '1px solid rgba(107, 116, 93, 0.32)',
              background: '#FBF8F2',
              fontSize: 16,
              color: '#2b2f24',
              outline: 'none',
              transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8e9b79';
              e.currentTarget.style.boxShadow =
                '0 0 0 3px rgba(142, 155, 121, 0.18)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error
                ? '#c0533f'
                : 'rgba(107, 116, 93, 0.32)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          {error ? (
            <p
              role="alert"
              style={{
                margin: '8px 0 0',
                color: '#c0533f',
                fontSize: 13,
              }}
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: 20,
              width: '100%',
              padding: '13px 20px',
              borderRadius: 999,
              border: 'none',
              background: submitting ? '#6b745d' : '#8e9b79',
              color: '#FBF8F2',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: submitting ? 'progress' : 'pointer',
              transition: 'background 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              if (!submitting) e.currentTarget.style.background = '#6b745d';
            }}
            onMouseLeave={(e) => {
              if (!submitting) e.currentTarget.style.background = '#8e9b79';
            }}
          >
            {submitting ? 'Redirecting\u2026' : 'Continue'}
          </button>
        </form>

        <div
          style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid rgba(107, 116, 93, 0.14)',
            fontSize: 13,
            color: '#5b6256',
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: 6 }}>
            <strong style={{ color: '#2b2f24', fontWeight: 600 }}>
              Team member?
            </strong>{' '}
            Use your{' '}
            <span style={{ color: '#2b2f24' }}>@mottafinancial.com</span>{' '}
            address.
          </div>
          <div>
            <strong style={{ color: '#2b2f24', fontWeight: 600 }}>
              Client?
            </strong>{' '}
            Any other email goes to the{' '}
            <a
              href={CLIENT_PORTAL_URL}
              style={{ color: '#6b745d', fontWeight: 600 }}
            >
              client portal
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
