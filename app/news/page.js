'use client';

import Link from 'next/link';

const FEATURED = {
  href: '/news/press/proconnect-case-study',
  eyebrow: 'Intuit ProConnect Case Study',
  date: 'Featured by Intuit',
  title:
    'How Motta Financial Built a Scalable Tax Practice with Intuit ProConnect Tax',
  desc:
    'Intuit featured Motta Financial in an official ProConnect Tax case study \u2014 the story of a firm built from day one on automation, a Books-to-Tax workflow, and ALFRED Ai, with a relentless focus on putting client dollars toward value, not admin.',
  image: '/assets/img/news/proconnect-case-study.png',
};

const RECENT = [
  {
    type: 'Press Release',
    href: '/news/press/ja-youth-summit-2026',
    date: 'May 24, 2026',
    title:
      'Motta Financial Sponsors Inaugural JA Southern Massachusetts Youth Summit',
    desc:
      'Motta joined Milestone Mortgage Solutions, UMass Dartmouth, and dozens of community partners as a Connection Sponsor of Junior Achievement\u2019s first regional Youth Summit on AI, opportunity, and leadership.',
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
    type: 'Community',
    href: '/news/community/suffolk-seed',
    date: 'November 2025',
    title:
      'Motta Financial Joins Suffolk University SEED as Founding Sponsor',
    desc:
      'We are proud to support the Suffolk Entrepreneurship and Educational Development Collaborative \u2014 a cross-functional consulting clinic helping Boston small businesses grow.',
  },
];

const SECTIONS = [
  {
    type: 'Press',
    href: '/news/press',
    title: 'Press Releases',
    desc:
      'Official firm announcements, sponsorships, and media releases from Motta Financial.',
  },
  {
    type: 'Blog',
    href: '/news/blog',
    title: 'From the Motta Blog',
    desc:
      'Practical tax, accounting, and business advisory insights from our team \u2014 written for founders, advisors, and operators.',
  },
  {
    type: 'Community',
    href: '/news/community',
    title: 'In the Community',
    desc:
      'Sponsorships, volunteering, and the local programs Motta Financial supports across Greater Boston and Southern Massachusetts.',
  },
];

export default function NewsOverview() {
  return (
    <article className="motta-news-overview">
      <span className="motta-eyebrow">Newsroom</span>
      <h1 className="motta-section-title" style={{ marginBottom: 16 }}>
        News &amp; Announcements
      </h1>
      <p className="motta-news-overview__lead">
        Press releases, blog posts, partnership announcements, and stories from the Motta
        community. This is where we share what we&apos;re building, who we&apos;re working
        with, and how we&apos;re investing in the businesses and neighborhoods around us.
      </p>

      <Link href={FEATURED.href} className="motta-news-overview__featured">
        <div
          className="motta-news-overview__featured-img"
          style={{ backgroundImage: `url(${FEATURED.image})` }}
          aria-hidden="true"
        />
        <div className="motta-news-overview__featured-body">
          <span className="motta-news-overview__featured-eyebrow">
            {FEATURED.eyebrow} &middot; {FEATURED.date}
          </span>
          <h2 className="motta-news-overview__featured-title">{FEATURED.title}</h2>
          <p className="motta-news-overview__featured-desc">{FEATURED.desc}</p>
          <span className="motta-news-overview__featured-cta">
            Read the announcement <i className="flaticon-right-arrow" />
          </span>
        </div>
      </Link>

      <h3 className="motta-news-overview__subhead">Recent</h3>
      <div className="motta-news-overview__list">
        {RECENT.map((item) => (
          <Link key={item.href} href={item.href} className="motta-news-overview__card">
            <span className="motta-news-overview__card-eyebrow">
              {item.type} &middot; {item.date}
            </span>
            <h4 className="motta-news-overview__card-title">{item.title}</h4>
            <p className="motta-news-overview__card-desc">{item.desc}</p>
            <span className="motta-news-overview__card-cta">
              Read more <i className="flaticon-right-arrow" />
            </span>
          </Link>
        ))}
      </div>

      <h3 className="motta-news-overview__subhead">Browse by Section</h3>
      <div className="motta-news-overview__list motta-news-overview__list--three">
        {SECTIONS.map((item) => (
          <Link key={item.href} href={item.href} className="motta-news-overview__card">
            <span className="motta-news-overview__card-eyebrow">{item.type}</span>
            <h4 className="motta-news-overview__card-title">{item.title}</h4>
            <p className="motta-news-overview__card-desc">{item.desc}</p>
            <span className="motta-news-overview__card-cta">
              Explore <i className="flaticon-right-arrow" />
            </span>
          </Link>
        ))}
      </div>

      <div className="motta-news-overview__cta-band">
        <div>
          <h2 className="motta-section-title" style={{ marginBottom: 8 }}>
            Press inquiries
          </h2>
          <p style={{ margin: 0, color: 'rgba(43,47,36,0.78)' }}>
            For interview requests, speaking opportunities, or media questions, get in
            touch and we&apos;ll respond within two business days.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Contact Us
        </Link>
      </div>

      <style jsx>{`
        .motta-news-overview__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0 0 32px;
        }
        .motta-news-overview__featured {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          border-radius: 16px;
          overflow: hidden;
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          text-decoration: none;
          margin-bottom: 36px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        @media (max-width: 767px) {
          .motta-news-overview__featured {
            grid-template-columns: 1fr;
          }
        }
        .motta-news-overview__featured:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 44px -22px rgba(15, 19, 16, 0.5);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-news-overview__featured-img {
          background-size: cover;
          background-position: center top;
          min-height: 320px;
        }
        .motta-news-overview__featured-body {
          padding: 30px 32px;
        }
        .motta-news-overview__featured-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--motta-sage-light, #b8c19f);
          margin-bottom: 10px;
        }
        .motta-news-overview__featured-title {
          font-size: 24px;
          line-height: 1.25;
          margin: 0 0 10px;
          color: inherit;
        }
        .motta-news-overview__featured-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(244, 241, 235, 0.82);
          margin: 0 0 14px;
        }
        .motta-news-overview__featured-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-light, #b8c19f);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .motta-news-overview__subhead {
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--motta-sage-deep, #6b745d);
          margin: 0 0 14px;
        }
        .motta-news-overview__list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 40px;
        }
        .motta-news-overview__list--three {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 991px) {
          .motta-news-overview__list,
          .motta-news-overview__list--three {
            grid-template-columns: 1fr;
          }
        }
        .motta-news-overview__card {
          display: block;
          padding: 24px 26px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }
        .motta-news-overview__card:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 16px 40px -22px rgba(15, 19, 16, 0.28);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-overview__card-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-news-overview__card-title {
          font-size: 19px;
          margin: 8px 0 6px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-overview__card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0 0 10px;
        }
        .motta-news-overview__card-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .motta-news-overview__cta-band {
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
          .motta-news-overview__cta-band {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </article>
  );
}
