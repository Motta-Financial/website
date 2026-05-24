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
    imagePosition: 'center 22%',
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
    imagePosition: 'center 28%',
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

      <h3 className="motta-community__subhead">Programs We Sponsor</h3>
      <div className="motta-community__list">
        {COMMUNITY_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="motta-community__card">
            {item.imageBg ? (
              <div
                className="motta-community__card-img"
                style={{ background: item.imageBg }}
              >
                <img src={item.image} alt={`${item.org} logo`} />
              </div>
            ) : (
              <div
                className="motta-community__card-img motta-community__card-img--photo"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.imagePosition || 'center',
                }}
                aria-hidden="true"
              />
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
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
      </div>

      <style jsx>{`
        .motta-community__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0 0 32px;
        }
        .motta-community__subhead {
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--motta-sage-deep, #6b745d);
          margin: 0 0 14px;
        }
        .motta-community__list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 40px;
        }
        .motta-community__card {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 24px;
          padding: 22px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }
        @media (max-width: 767px) {
          .motta-community__card {
            grid-template-columns: 1fr;
          }
        }
        .motta-community__card:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 16px 40px -22px rgba(15, 19, 16, 0.28);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-community__card-img {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          border-radius: 10px;
          min-height: 130px;
        }
        .motta-community__card-img--photo {
          padding: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 220px;
        }
        @media (min-width: 768px) {
          .motta-community__card-img--photo {
            min-height: 200px;
          }
        }
        .motta-community__card-img img {
          max-width: 100%;
          max-height: 110px;
          height: auto;
          display: block;
        }
        .motta-community__card-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-community__card-title {
          font-size: 22px;
          margin: 8px 0 8px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-community__card-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.8);
          margin: 0 0 10px;
        }
        .motta-community__card-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
      `}</style>
    </article>
  );
}
