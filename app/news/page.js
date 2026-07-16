'use client';

import Link from 'next/link';

const FEATURED = {
  href: '/news/press/proconnect-case-study',
  eyebrow: 'Intuit ProConnect Case Study',
  date: 'July 13, 2026',
  title:
    'How Motta Financial Built a Scalable Tax Practice with Intuit ProConnect Tax',
  desc:
    'Intuit featured Motta Financial in an official ProConnect Tax case study — the story of a firm built from day one on automation, a Books-to-Tax workflow, and ALFRED Ai, with a relentless focus on putting client dollars toward value, not admin.',
};

const RECENT = [
  {
    type: 'Press Release',
    href: '/news/press/ja-youth-summit-2026',
    date: 'May 24, 2026',
    title: 'Motta Financial Sponsors Inaugural JA Southern Massachusetts Youth Summit',
    desc:
      'Motta joined Milestone Mortgage Solutions, UMass Dartmouth, and dozens of community partners as a Connection Sponsor of Junior Achievement\u2019s first regional Youth Summit on AI, opportunity, and leadership.',
    image: '/assets/img/news/ja-youth-summit-2026.jpg',
    imagePosition: 'center 10%',
  },
  {
    type: 'Blog',
    href: '/news/blog/ja-youth-summit-why-we-showed-up',
    date: 'May 24, 2026',
    title: 'Why We Showed Up at the JA Youth Summit',
    desc:
      'Notes from a day spent with the people who will run everything in ten years \u2014 and why a growing firm should still write the check.',
  },
  {
    type: 'Media',
    href: '/news/media',
    date: 'November 2025',
    title: '\u201CAI Buys Time. Judgment Makes the Decision.\u201D',
    desc:
      'Dat Le joined Amanda Verner Thompson on the Madison Advisory AI Podcast to talk about responsible AI inside a real operating CPA firm \u2014 not the hype, the execution.',
    image: '/assets/img/news/madison-advisory-ai-podcast.jpg',
    imagePosition: 'center center',
  },
  {
    type: 'Community',
    href: '/news/community/suffolk-seed',
    date: 'November 2025',
    title: 'Motta Financial Joins Suffolk University SEED as Founding Sponsor',
    desc:
      'We are proud to support the Suffolk Entrepreneurship and Educational Development Collaborative \u2014 a cross-functional consulting clinic helping Boston small businesses grow.',
  },
  {
    type: 'Community',
    href: '/news/blog/paying-it-forward-suffolk-scholarship',
    date: 'January 2025',
    title: 'Paying It Forward: A Scholarship in Honor of the Professors Who Started It All',
    desc:
      'Dat Le joins fellow Suffolk alumni in a $225,000 surprise gift to honor Associate Dean Tracey Riley \u2014 establishing the Accounting Winternships Fund and the Tracey Riley Legacy Fund.',
    image: '/assets/img/news/suffolk-scholarship/hug.jpg',
    imagePosition: 'center 28%',
  },
  {
    type: 'Blog',
    href: '/news/blog/business-value',
    date: 'November 2024',
    title: 'Business Owners: There\u2019s No Better Time Than Now',
    desc:
      'With 70% of small business owners\u2019 wealth tied up in their companies, knowing your business\u2019s value is critical \u2014 here are eight reasons to get a valuation today.',
  },
];

const SECTIONS = [
  {
    type: 'Press',
    href: '/news/press',
    title: 'Press Releases',
    desc:
      'Official firm announcements, sponsorships, and media releases from Motta Financial.',
    count: '2 announcements',
  },
  {
    type: 'Blog',
    href: '/news/blog',
    title: 'From the Motta Blog',
    desc:
      'Practical tax, accounting, and business advisory insights from our team \u2014 written for founders, advisors, and operators.',
    count: '12 posts',
  },
  {
    type: 'Community',
    href: '/news/community',
    title: 'In the Community',
    desc:
      'Sponsorships, volunteering, and the local programs Motta Financial supports across Greater Boston and Southern Massachusetts.',
    count: '3 programs',
  },
  {
    type: 'Media',
    href: '/news/media',
    title: 'Podcasts & Media',
    desc:
      'Podcast appearances, press features, and media coverage of the Motta Financial team.',
    count: '2 appearances',
  },
];

export default function NewsOverview() {
  return (
    <article className="motta-news-overview">
      <header className="motta-news-overview__header">
        <span className="motta-eyebrow">Newsroom</span>
        <h1 className="motta-section-title" style={{ marginBottom: 12 }}>
          News &amp; Announcements
        </h1>
        <p className="motta-news-overview__lead">
          Press releases, blog posts, partnership announcements, and stories from the
          Motta community. This is where we share what we&apos;re building, who we&apos;re
          working with, and how we&apos;re investing in the businesses and neighborhoods
          around us.
        </p>
      </header>

      {/* Featured story */}
      <Link href={FEATURED.href} className="motta-news-overview__featured">
        <div className="motta-news-overview__featured-body">
          <div className="motta-news-overview__featured-left">
            <span className="motta-news-overview__featured-eyebrow">
              {FEATURED.eyebrow} &middot; {FEATURED.date}
            </span>
            <h2 className="motta-news-overview__featured-title">{FEATURED.title}</h2>
          </div>
          <div className="motta-news-overview__featured-right">
            <p className="motta-news-overview__featured-desc">{FEATURED.desc}</p>
            <span className="motta-news-overview__featured-cta">
              Read the announcement <i className="flaticon-right-arrow" />
            </span>
          </div>
        </div>
      </Link>

      {/* Recent articles */}
      <div className="motta-news-overview__section-head">
        <h3 className="motta-news-overview__subhead">Recent</h3>
        <Link href="/news/blog" className="motta-news-overview__see-all">
          See all posts <i className="flaticon-right-arrow" />
        </Link>
      </div>

      <div className="motta-news-overview__grid">
        {RECENT.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`motta-news-overview__card${item.image ? ' motta-news-overview__card--has-image' : ''}`}
          >
            {item.image && (
              <div
                className="motta-news-overview__card-img"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.imagePosition || 'center center',
                }}
                aria-hidden="true"
              />
            )}
            <div className="motta-news-overview__card-body">
              <span className="motta-news-overview__card-eyebrow">
                <span className={`motta-news-overview__card-tag motta-news-overview__card-tag--${item.type.toLowerCase().replace(/\s/g, '-')}`}>
                  {item.type}
                </span>
                {item.date && (
                  <span className="motta-news-overview__card-date">{item.date}</span>
                )}
              </span>
              <h4 className="motta-news-overview__card-title">{item.title}</h4>
              <p className="motta-news-overview__card-desc">{item.desc}</p>
              <span className="motta-news-overview__card-cta">
                Read more <i className="flaticon-right-arrow" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Browse by section */}
      <h3 className="motta-news-overview__subhead" style={{ marginTop: 8 }}>
        Browse by Section
      </h3>
      <div className="motta-news-overview__sections">
        {SECTIONS.map((item) => (
          <Link key={item.href} href={item.href} className="motta-news-overview__section-card">
            <div className="motta-news-overview__section-card-inner">
              <span className="motta-news-overview__section-type">{item.type}</span>
              <h4 className="motta-news-overview__section-title">{item.title}</h4>
              <p className="motta-news-overview__section-desc">{item.desc}</p>
            </div>
            <span className="motta-news-overview__section-footer">
              <span className="motta-news-overview__section-count">{item.count}</span>
              <span className="motta-news-overview__section-cta">
                Explore <i className="flaticon-right-arrow" />
              </span>
            </span>
          </Link>
        ))}
      </div>

      {/* Press inquiry CTA */}
      <div className="motta-news-overview__cta-band">
        <div>
          <h2 className="motta-section-title" style={{ marginBottom: 8 }}>
            Press inquiries
          </h2>
          <p style={{ margin: 0, color: 'rgba(43,47,36,0.78)', fontSize: 15, lineHeight: 1.6 }}>
            For interview requests, speaking opportunities, or media questions, get in
            touch and we&apos;ll respond within two business days.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Contact Us
        </Link>
      </div>

      <style jsx global>{`
        .motta-news-overview {
          background: var(--motta-charcoal, #333333);
          min-height: 100vh;
        }
        .motta-news-overview__header {
          margin-bottom: 28px;
        }
        .motta-news-overview__header .motta-eyebrow {
          color: #8e9b79;
        }
        .motta-news-overview__header .motta-section-title {
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(234, 230, 225, 0.72);
          max-width: 66ch;
          margin: 0;
        }

        /* ---- Featured ---- */
        .motta-news-overview__featured {
          display: block;
          border-radius: 16px;
          overflow: hidden;
          background: var(--motta-charcoal, #333333);
          color: var(--motta-warm, #eae6e1);
          text-decoration: none;
          margin-bottom: 36px;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .motta-news-overview__featured:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 52px -24px rgba(15, 19, 16, 0.55);
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__featured-body {
          padding: 36px 40px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .motta-news-overview__featured-left {
          flex: 0 0 44%;
        }
        .motta-news-overview__featured-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 48px;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 860px) {
          .motta-news-overview__featured-body {
            flex-direction: column;
            gap: 16px;
            padding: 28px 28px 32px;
          }
          .motta-news-overview__featured-right {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 16px;
          }
        }
        .motta-news-overview__featured-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: #8e9b79;
          margin-bottom: 12px;
        }
        .motta-news-overview__featured-title {
          font-size: clamp(20px, 2.4vw, 30px);
          line-height: 1.22;
          margin: 0;
          color: inherit;
        }
        .motta-news-overview__featured-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(234, 230, 225, 0.82);
          margin: 0 0 20px;
        }
        .motta-news-overview__featured-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #8e9b79;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* ---- Section head row ---- */
        .motta-news-overview__section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }
        .motta-news-overview__subhead {
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: #8e9b79;
          margin: 0;
        }
        .motta-news-overview__see-all {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(234, 230, 225, 0.55);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .motta-news-overview__see-all:hover {
          color: var(--motta-warm, #eae6e1);
        }

        /* ---- Recent grid ---- */
        .motta-news-overview__grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .motta-news-overview__grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .motta-news-overview__grid {
            grid-template-columns: 1fr;
          }
        }

        .motta-news-overview__card {
          display: flex;
          flex-direction: column;
          border-radius: 13px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--motta-warm, #eae6e1);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .motta-news-overview__card:hover {
          transform: translateY(-3px);
          border-color: rgba(142, 155, 121, 0.5);
          box-shadow: 0 16px 40px -20px rgba(0, 0, 0, 0.4);
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__card-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          background-size: cover;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }
        .motta-news-overview__card-body {
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .motta-news-overview__card-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .motta-news-overview__card-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(142, 155, 121, 0.18);
          color: #b5c4a0;
          border: 1px solid rgba(142, 155, 121, 0.28);
          white-space: nowrap;
        }
        .motta-news-overview__card-tag--press-release {
          background: rgba(142, 155, 121, 0.18);
          color: #b5c4a0;
          border-color: rgba(142, 155, 121, 0.3);
        }
        .motta-news-overview__card-tag--blog {
          background: rgba(234, 230, 225, 0.1);
          color: rgba(234, 230, 225, 0.7);
          border-color: rgba(234, 230, 225, 0.16);
        }
        .motta-news-overview__card-tag--community {
          background: rgba(142, 155, 121, 0.18);
          color: #b5c4a0;
          border-color: rgba(142, 155, 121, 0.3);
        }
        .motta-news-overview__card-tag--media {
          background: rgba(234, 230, 225, 0.08);
          color: rgba(234, 230, 225, 0.6);
          border-color: rgba(234, 230, 225, 0.14);
        }
        .motta-news-overview__card-date {
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(234, 230, 225, 0.38);
          font-weight: 500;
        }
        .motta-news-overview__card-title {
          font-size: 17px;
          line-height: 1.3;
          margin: 0 0 7px;
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__card-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(234, 230, 225, 0.62);
          margin: 0 0 10px;
          flex: 1;
        }
        .motta-news-overview__card-cta {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #8e9b79;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
        }

        /* ---- Browse by section ---- */
        .motta-news-overview__sections {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin: 14px 0 36px;
        }
        @media (max-width: 1100px) {
          .motta-news-overview__sections {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 575px) {
          .motta-news-overview__sections {
            grid-template-columns: 1fr 1fr;
          }
        }
        .motta-news-overview__section-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          padding: 20px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--motta-warm, #eae6e1);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          min-height: 180px;
        }
        .motta-news-overview__section-card:hover {
          transform: translateY(-3px);
          border-color: rgba(142, 155, 121, 0.5);
          box-shadow: 0 14px 38px -18px rgba(0, 0, 0, 0.4);
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__section-card-inner {
          display: flex;
          flex-direction: column;
        }
        .motta-news-overview__section-type {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8e9b79;
          margin-bottom: 6px;
          display: block;
        }
        .motta-news-overview__section-title {
          font-size: 16px;
          line-height: 1.3;
          margin: 0 0 6px;
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__section-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(234, 230, 225, 0.58);
          margin: 0;
        }
        .motta-news-overview__section-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .motta-news-overview__section-count {
          font-size: 11px;
          color: rgba(234, 230, 225, 0.38);
          font-weight: 500;
        }
        .motta-news-overview__section-cta {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #8e9b79;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* ---- Press CTA band ---- */
        .motta-news-overview__cta-band {
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: space-between;
          padding: 28px 30px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .motta-news-overview__cta-band .motta-section-title {
          color: var(--motta-warm, #eae6e1);
        }
        .motta-news-overview__cta-band p {
          color: rgba(234, 230, 225, 0.62) !important;
        }
        @media (max-width: 767px) {
          .motta-news-overview__cta-band {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </article>
  );
}
