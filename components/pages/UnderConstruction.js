'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes alfredPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }
        @keyframes alfredGlow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(142, 155, 121, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(142, 155, 121, 0.6));
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 20px',
          background:
            'radial-gradient(ellipse 800px 600px at 50% 20%, rgba(142,155,121,0.22) 0%, transparent 60%), radial-gradient(ellipse 600px 400px at 80% 80%, rgba(107,116,93,0.12) 0%, transparent 50%), linear-gradient(180deg, #1f261c 0%, #14180f 100%)',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(142, 155, 121, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(142, 155, 121, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        {/* Pulsing ALFRED logo */}
        <div
          style={{
            marginBottom: 40,
            animation: mounted
              ? 'alfredPulse 3s ease-in-out infinite, alfredGlow 3s ease-in-out infinite, float 4s ease-in-out infinite'
              : 'none',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <img
            src="/assets/img/alfred/alfred-logo.png"
            alt="ALFRED Ai"
            style={{
              height: 180,
              width: 'auto',
              maxWidth: '80vw',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 520,
            animation: mounted ? 'fadeInUp 0.6s ease 0.2s both' : 'none',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(142, 155, 121, 0.15)',
              border: '1px solid rgba(142, 155, 121, 0.3)',
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#8e9b79',
                animation: 'alfredPulse 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8e9b79',
              }}
            >
              Coming Soon
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
              margin: '0 0 16px',
              fontWeight: 700,
              color: '#F4F1EB',
              letterSpacing: '-0.02em',
            }}
          >
            Partner Portal
          </h1>

          <p
            style={{
              margin: '0 0 32px',
              color: 'rgba(244, 241, 235, 0.7)',
              fontSize: 17,
              lineHeight: 1.6,
              maxWidth: 420,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            ALFRED is hard at work building something great for our referral partners, 
            attorneys, and financial advisors. Check back soon.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 999,
                background: '#8e9b79',
                color: '#14180f',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.15s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6b745d';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#8e9b79';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Login
            </Link>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 999,
                background: 'transparent',
                border: '1px solid rgba(142, 155, 121, 0.5)',
                color: '#F4F1EB',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                transition:
                  'background 0.15s ease, border-color 0.15s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(142, 155, 121, 0.15)';
                e.currentTarget.style.borderColor = '#8e9b79';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(142, 155, 121, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer attribution */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'rgba(244, 241, 235, 0.4)',
          }}
        >
          <span>Powered by</span>
          <span style={{ fontWeight: 600, color: 'rgba(244, 241, 235, 0.6)' }}>
            ALFRED Ai
          </span>
          <span>&middot;</span>
          <Link
            href="/"
            style={{
              color: 'rgba(244, 241, 235, 0.5)',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8e9b79';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(244, 241, 235, 0.5)';
            }}
          >
            Motta Financial
          </Link>
        </div>
      </main>
    </>
  );
}
