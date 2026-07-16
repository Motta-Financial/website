'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProConnectCaseStudy() {
  return (
    <div className="motta-featured-in-wrap">
      <div className="motta-featured-in-meta">
        <Link href="/news/press" className="motta-featured-in-back">
          <i className="flaticon-left-arrow" /> All Press Releases
        </Link>
        <span className="motta-featured-in-tag">Press</span>
      </div>

      <div className="motta-featured-in-card">
        <div className="motta-featured-in-label">Featured In</div>

        <div className="motta-featured-in-logo">
          <Image
            src="/assets/img/partners/intuit-proconnect-logo.png"
            alt="Intuit ProConnect"
            width={160}
            height={40}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />
        </div>

        <h2 className="motta-featured-in-headline">
          Motta Financial featured in Intuit&rsquo;s ProConnect Tax case study
        </h2>

        <p className="motta-featured-in-context">
          Intuit selected Motta Financial as a ProConnect Tax case study, spotlighting
          how the firm paired automation and ALFRED Ai to build a scalable, low-overhead
          tax practice from day one.
        </p>

        <a
          href="https://accountants.intuit.com/taxprocenter/practice-management/motta-financial-case-study/"
          target="_blank"
          rel="noopener noreferrer"
          className="motta-featured-in-cta"
        >
          Read the full case study &rarr;
        </a>
      </div>

      <style jsx>{`
        .motta-featured-in-wrap {
          max-width: 680px;
          padding: 48px 24px 80px;
        }
        .motta-featured-in-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .motta-featured-in-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: none;
        }
        .motta-featured-in-back:hover {
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-featured-in-tag {
          display: inline-flex;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          background: rgba(142, 155, 121, 0.12);
          border: 1px solid rgba(142, 155, 121, 0.28);
          border-radius: 999px;
          padding: 3px 10px;
        }
        .motta-featured-in-card {
          border: 1.5px solid rgba(142, 155, 121, 0.35);
          border-radius: 16px;
          padding: 32px 36px;
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-featured-in-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          margin-bottom: 16px;
        }
        .motta-featured-in-logo {
          margin-bottom: 24px;
          opacity: 0.85;
        }
        .motta-featured-in-headline {
          font-size: clamp(18px, 2.4vw, 22px);
          font-weight: 700;
          line-height: 1.3;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 12px;
          letter-spacing: -0.01em;
          text-wrap: balance;
        }
        .motta-featured-in-context {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.72);
          margin: 0 0 28px;
          max-width: 55ch;
        }
        .motta-featured-in-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--motta-charcoal, #2b2f24);
          border: 1.5px solid rgba(43, 47, 36, 0.25);
          border-radius: 8px;
          padding: 10px 20px;
          text-decoration: none;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }
        .motta-featured-in-cta:hover {
          background: var(--motta-charcoal, #2b2f24);
          border-color: var(--motta-charcoal, #2b2f24);
          color: #fff;
        }
      `}</style>
    </div>
  );
}
