'use client';

import Link from 'next/link';

const COMMUNITY_ITEMS = [
  {
    href: '/news/community/ja-southern-massachusetts',
    org: 'Junior Achievement of Southern Massachusetts',
    role: 'Connection Sponsor \u00b7 2026 Youth Summit',
    date: 'May 2026',
    desc:
      'Motta Financial is a Connection Sponsor of JA Southern Massachusetts, supporting the inaugural 2026 Youth Summit at UMass Dartmouth and JA\u2019s year-round programs in financial literacy, entrepreneurship, and career readiness.',
    image: '/assets/img/news/ja-youth-summit-2026.jpg',
    imagePosition: 'center 10%',
  },
  {
    href: '/news/community/suffolk-seed',
    org: 'Suffolk University SEED',
    role: 'Founding Sponsor',
    date: 'November 2025 \u2013 Present',
    desc:
      'Motta Financial sponsors the Suffolk Entrepreneurship and Educational Development Collaborative, a cross-functional consulting clinic supporting small businesses across Greater Boston.',
    image: '/assets/img/partnerships/seed/badges/seed-partner-badge-blue.png',
    imageBg: '#14213d',
  },
  {
    href: '/news/blog/paying-it-forward-suffolk-scholarship',
    org: 'Suffolk University Accounting Scholarship Funds',
    role: 'Donor \u00b7 Accounting Winternships & Tracey Riley Legacy Funds',
    date: 'January 2025',
    desc:
      'Founder Dat Le joined fellow Suffolk alumni in a $225,000 surprise gift to honor Associate Dean Tracey Riley \u2014 establishing the Accounting Winternships Fund and the Tracey Riley Legacy Fund to support the next generation of accountants.',
    image: '/assets/img/news/suffolk-scholarship/group-four.jpg',
    imagePosition: 'center 12%',
  },
];

export default function CommunityOverview() {
  return (
    <article className="motta-community">
      <span className="motta-eyebrow">In the Community</span>
      <h1 className="motta-section-title" style={{ marginBottom: 16 }}>
        Investing in the Community Around Us
      </h1>
      <p className="motta-community__lead">
        Motta Financial is a Boston firm with deep roots in the businesses, schools, and
        nonprofits that make this region work. We sponsor programs, volunteer our time,
        and lend our expertise to organizations whose missions align with ours: helping
        people and small businesses build something that lasts.
      </p>

      <div className="motta-community__list">
        {COMMUNITY_ITEMS.map((item, i) => (
          <>
            {i > 0 && <hr key={`sep-${item.href}`} className="motta-community__sep" />}
          <Link key={item.href} href={item.href} className="motta-community__card">
            {item.image && (
              <div
                className={`motta-community__card-img${item.imageBg ? ' motta-community__card-img--logo' : ''}`}
                style={item.imageBg ? { background: item.imageBg } : undefined}
              >
                <img
                  src={item.image}
                  alt={item.org}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={
                    item.imageBg
                      ? { maxWidth: '70%', maxHeight: 100, objectFit: 'contain' }
                      : { objectPosition: item.imagePosition || 'center top' }
                  }
                />
              </div>
            )}
            <div className="motta-community__card-body">
              <span className="motta-community__card-eyebrow">
                {item.role} &middot; {item.date}
              </span>
              <h4 className="motta-community__card-title">{item.org}</h4>
              <p className="motta-community__card-desc">{item.desc}</p>
              <span className="motta-community__card-cta">
                Read more <i className="flaticon-right-arrow" />
              </span>
            </div>
          </Link>
          </>
        ))}
      </div>

      <div className="motta-community__cta-band">
        <div>
          <h2 className="motta-section-title" style={{ marginBottom: 8 }}>
            Run a program we should know about?
          </h2>
          <p style={{ margin: 0, color: 'rgba(43,47,36,0.78)' }}>
            We&apos;re always looking for thoughtful local programs to support. If your
            organization helps small businesses, founders, or students in Greater Boston,
            we&apos;d love to hear from you.
          </p>
        </div>
        <Link href="/contact" className="motta-community__get-in-touch">
          Get in Touch
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>

      <style jsx>{`
        .motta-community__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0;
        }
        .motta-community__list {
          display: flex;
          flex-direction: column;
          margin-top: 28px;
          margin-bottom: 40px;
        }
        .motta-community__sep {
          border: none;
          border-top: 1px solid rgba(107, 116, 93, 0.28);
          margin: 36px 0 0;
        }
        .motta-community__card {
          display: flex;
          flex-direction: column;
          border-radius: 0;
          overflow: visible;
          background: transparent;
          border: none;
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          padding: 36px 0 0;
          transition: color 0.2s ease;
        }
        .motta-community__card:hover {
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-community__card-img {
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 16px;
          width: 100%;
          height: 260px;
          flex-shrink: 0;
        }
        .motta-community__card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: 16px;
        }
        .motta-community__card-img--logo {
          height: 120px;
          padding: 20px;
          background: var(--motta-cream-50, #fbf8f2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
        }
        .motta-community__card-img--logo img {
          height: auto;
          width: auto;
          max-width: 70%;
          max-height: 80px;
          object-fit: contain;
          border-radius: 0;
        }
        .motta-community__card-body {
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .motta-community__card-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
        }
        .motta-community__card-title {
          font-size: 22px;
          line-height: 1.25;
          margin: 0 0 12px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-community__card-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.72);
          margin: 0;
          max-width: 72ch;
        }
        .motta-community__card-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
        .motta-community__cta-band {
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
          .motta-community__cta-band {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        .motta-community__get-in-touch {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          flex-shrink: 0;
          padding: 13px 22px;
          border-radius: 999px;
          background: var(--motta-sage, #8e9b79);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .motta-community__get-in-touch:hover {
          background: var(--motta-sage-deep, #6b745d);
          color: #fff;
          transform: translateY(-1px);
        }
      `}</style>
    </article>
  );
}
