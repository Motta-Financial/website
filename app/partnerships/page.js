'use client';

import Link from 'next/link';

const PARTNERSHIPS = [
  {
    href: '/partnerships/financial-advisors',
    eyebrow: 'Professional Partners',
    title: 'Financial Advisors',
    desc:
      'Tax planning and financial planning are the same conversation. We partner with advisors who want to deliver coordinated, holistic plans for shared clients.',
    cta: 'Explore the FA partnership',
  },
  {
    href: '/partnerships/white-label',
    eyebrow: 'Behind the Scenes',
    title: 'White Label Tax & Accounting',
    desc:
      'Motta-quality work delivered under your firm\u2019s brand \u2014 tax, accounting, equity comp, M&A, attestation, and due diligence.',
    cta: 'See what we deliver',
  },
  {
    href: '/partnerships/suffolk-seed',
    eyebrow: 'Academic Partners',
    title: 'Suffolk SEED Program',
    desc:
      'Sponsoring and teaching in Suffolk University\u2019s SEED Program \u2014 a multidisciplinary consulting clinic giving students real-world experience and small businesses real strategic support.',
    cta: 'Learn about Suffolk SEED',
  },
];

export default function PartnershipsOverview() {
  return (
    <article className="motta-partnerships-overview">
      <span className="motta-eyebrow">Our Partnerships</span>
      <h1 className="motta-section-title" style={{ marginBottom: 16 }}>
        Better Together
      </h1>
      <p className="motta-partnerships-overview__lead">
        Motta Financial believes the best client outcomes come from collaboration. We
        partner with financial advisors to deliver holistic planning, sit behind other
        firms&apos; brands to expand what they can offer, and invest in the next generation
        of professionals through education programs.
      </p>

      <div className="motta-partnerships-overview__list">
        {PARTNERSHIPS.map((p) => (
          <Link key={p.href} href={p.href} className="motta-partnerships-overview__card">
            <span className="motta-partnerships-overview__eyebrow">{p.eyebrow}</span>
            <h3 className="motta-partnerships-overview__title">{p.title}</h3>
            <p className="motta-partnerships-overview__desc">{p.desc}</p>
            <span className="motta-partnerships-overview__cta">
              {p.cta} <i className="flaticon-right-arrow" />
            </span>
          </Link>
        ))}
      </div>

      <div className="motta-partnerships-overview__cta-band">
        <div>
          <h2 className="motta-section-title" style={{ marginBottom: 8 }}>
            Want to partner with Motta?
          </h2>
          <p style={{ margin: 0, color: 'rgba(43,47,36,0.78)' }}>
            Tell us about your firm and how you&apos;d like to collaborate. We&apos;ll get
            back to you within two business days.
          </p>
        </div>
        <Link href="/contact" className="btn motta-cta">
          Get in Touch <i className="flaticon-arrow-button" />
        </Link>
      </div>

      <style jsx>{`
        .motta-partnerships-overview__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0 0 36px;
        }
        .motta-partnerships-overview__list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 40px;
        }
        .motta-partnerships-overview__card {
          display: block;
          padding: 26px 28px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }
        .motta-partnerships-overview__card:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 16px 40px -22px rgba(15, 19, 16, 0.28);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-partnerships-overview__eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-partnerships-overview__title {
          font-size: 22px;
          margin: 8px 0 8px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-partnerships-overview__desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0 0 12px;
        }
        .motta-partnerships-overview__cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .motta-partnerships-overview__cta-band {
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: space-between;
          padding: 28px;
          border-radius: 14px;
          background: var(--motta-warm, #f4f1eb);
          border: 1px solid rgba(107, 116, 93, 0.16);
        }
        @media (max-width: 767px) {
          .motta-partnerships-overview__cta-band {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </article>
  );
}
