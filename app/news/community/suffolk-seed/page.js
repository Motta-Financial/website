'use client';

import Link from 'next/link';

export default function CommunitySeedPage() {
  return (
    <article className="motta-community-seed">
      <Link href="/news/community" className="motta-community-seed__back">
        &larr; Back to In the Community
      </Link>

      <span className="motta-eyebrow">Sponsorship</span>
      <h1 className="motta-section-title" style={{ marginBottom: 12 }}>
        Suffolk University SEED Program
      </h1>
      <p className="motta-community-seed__meta">
        Founding Sponsor &middot; Boston, MA &middot; November 2025 &ndash; Present
      </p>

      <div className="motta-community-seed__hero">
        <img
          src="/assets/img/partnerships/seed/badges/seed-partner-badge-blue.png"
          alt="Suffolk University SEED Partner Badge"
        />
      </div>

      <p className="motta-community-seed__lead">
        Motta Financial is a proud sponsor of Suffolk University&apos;s SEED program
        &mdash; the Suffolk Entrepreneurship and Educational Development Collaborative
        &mdash; a first-of-its-kind, cross-functional consulting clinic that connects
        Suffolk faculty, alumni professionals, and talented students with local small
        businesses and entrepreneurs who need real strategic support.
      </p>

      <h2 className="motta-community-seed__h2">Why we sponsor SEED</h2>
      <p>
        SEED&apos;s mission lines up with how Motta Financial approaches our own work:
        treat every small business like it deserves the same caliber of advice a Fortune
        500 receives. The program brings together students from finance, accounting,
        marketing, advertising, and law to deliver coordinated, real-world consulting to
        Boston-area entrepreneurs &mdash; the same kind of multidisciplinary teamwork that
        makes great client work happen.
      </p>

      <h2 className="motta-community-seed__h2">What our sponsorship supports</h2>
      <ul className="motta-community-seed__list">
        <li>
          Funding and operational support for SEED&apos;s consulting engagements with
          local small businesses.
        </li>
        <li>
          Access to Motta&apos;s tax, accounting, and business advisory expertise for
          SEED&apos;s student teams and client matters.
        </li>
        <li>
          Mentorship and guest sessions with Suffolk students working through real client
          challenges.
        </li>
      </ul>

      <div className="motta-community-seed__callout">
        <p>
          Since launching in 2025, SEED has supported sixteen Boston-area businesses and
          organizations &mdash; the kind of measurable, hyper-local economic impact we
          want to keep investing in.
        </p>
      </div>

      <div className="motta-community-seed__links">
        <a
          href="https://www.suffolk.edu/seed"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit suffolk.edu/seed
        </a>
        <Link href="/partnerships/suffolk-seed" className="motta-community-seed__inline-cta">
          See Motta&apos;s full SEED partnership page
          <i className="flaticon-right-arrow" />
        </Link>
      </div>

      <style jsx>{`
        .motta-community-seed__back {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: none;
          margin-bottom: 18px;
        }
        .motta-community-seed__back:hover {
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-community-seed__meta {
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 600;
          margin: 0 0 28px;
        }
        .motta-community-seed__hero {
          background: #14213d;
          border-radius: 14px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }
        .motta-community-seed__hero img {
          max-width: 280px;
          height: auto;
          display: block;
        }
        .motta-community-seed__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.88);
          margin: 0 0 28px;
        }
        .motta-community-seed__h2 {
          font-size: 22px;
          color: var(--motta-charcoal, #2b2f24);
          margin: 28px 0 12px;
        }
        .motta-community-seed p {
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(43, 47, 36, 0.82);
        }
        .motta-community-seed__list {
          margin: 0 0 24px;
          padding-left: 22px;
        }
        .motta-community-seed__list li {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 8px;
        }
        .motta-community-seed__callout {
          background: var(--motta-warm, #f4f1eb);
          border-left: 4px solid var(--motta-sage, #8e9b79);
          padding: 20px 24px;
          border-radius: 8px;
          margin: 28px 0;
        }
        .motta-community-seed__callout p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
        }
        .motta-community-seed__links {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(107, 116, 93, 0.16);
        }
        .motta-community-seed__inline-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: none;
        }
        .motta-community-seed__inline-cta:hover {
          color: var(--motta-charcoal, #2b2f24);
        }
      `}</style>
    </article>
  );
}
