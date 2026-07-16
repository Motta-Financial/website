'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProConnectCaseStudy() {
  return (
    <div className="fi-wrap">
      {/* Breadcrumb */}
      <div className="fi-breadcrumb">
        <Link href="/news/press" className="fi-back">
          <i className="flaticon-left-arrow" /> All Press Releases
        </Link>
        <span className="fi-tag">Press</span>
      </div>

      {/* Open layout — no wrapping card */}
      <div className="fi-body">
        <div className="fi-label">Featured In</div>

        <div className="fi-logo">
          <Image
            src="/assets/img/partners/intuit-proconnect-logo.png"
            alt="Intuit ProConnect"
            width={152}
            height={38}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />
        </div>

        <h2 className="fi-headline">
          Motta Financial featured in Intuit&rsquo;s ProConnect Tax case study
        </h2>

        <p className="fi-context">
          Intuit selected Motta Financial as a ProConnect Tax case study, spotlighting
          how the firm paired automation and ALFRED Ai to build a scalable, low-overhead
          tax practice from day one.
        </p>

        <a
          href="https://accountants.intuit.com/taxprocenter/practice-management/motta-financial-case-study/"
          target="_blank"
          rel="noopener noreferrer"
          className="fi-cta"
        >
          Read the full case study &rarr;
        </a>
      </div>

      <style jsx>{`
        .fi-wrap {
          max-width: 640px;
          padding: 48px 24px 80px;
        }

        /* ── Breadcrumb ─────────────────────────── */
        .fi-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
        }
        .fi-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--motta-sage, #6b745d);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .fi-back:hover {
          color: var(--motta-charcoal, #333333);
        }
        .fi-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--motta-sage, #6b745d);
          border: 1px solid rgba(107, 116, 93, 0.35);
          border-radius: 999px;
          padding: 2px 9px;
        }

        /* ── Open body — left accent rule ──────── */
        .fi-body {
          border-left: 3px solid var(--motta-sage, #6b745d);
          padding-left: 28px;
        }

        .fi-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--motta-sage, #6b745d);
          margin-bottom: 14px;
        }

        .fi-logo {
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .fi-headline {
          font-size: clamp(19px, 2.4vw, 23px);
          font-weight: 700;
          line-height: 1.3;
          color: var(--motta-charcoal, #333333);
          letter-spacing: -0.015em;
          margin: 0 0 12px;
          text-wrap: balance;
        }

        .fi-context {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(51, 51, 51, 0.65);
          margin: 0 0 28px;
          max-width: 52ch;
        }

        /* Sage-filled pill — matches motta-button style */
        .fi-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          background: var(--motta-sage, #6b745d);
          border: none;
          border-radius: 999px;
          padding: 11px 24px;
          text-decoration: none;
          transition: background 0.18s ease, transform 0.15s ease;
        }
        .fi-cta:hover {
          background: var(--motta-sage-deep, #4f573f);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
