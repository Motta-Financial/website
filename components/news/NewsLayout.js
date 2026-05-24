'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    href: '/news',
    eyebrow: 'Overview',
    title: 'All News',
    desc: 'Press releases, blog posts, and announcements.',
    exact: true,
  },
  {
    href: '/news/press',
    eyebrow: 'Press Releases',
    title: 'Press',
    desc: 'Official firm announcements and media releases.',
  },
  {
    href: '/news/blog',
    eyebrow: 'From the Blog',
    title: 'Blog',
    desc: 'Notes from our team on the work and the world around it.',
  },
  {
    href: '/news/community',
    eyebrow: 'In the Community',
    title: 'Community',
    desc: 'Sponsorships, volunteering, and local impact.',
  },
  {
    href: '/news/media',
    eyebrow: 'Podcasts & Media',
    title: 'Media',
    desc: 'Podcast appearances, interviews, and guest features.',
  },
];

export default function NewsLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="motta-news-shell">
      <div className="container">
        <div className="row">
          <aside className="col-lg-3">
            <nav className="motta-news-side" aria-label="News navigation">
              <span className="motta-news-side__label">Newsroom</span>
              <ul className="motta-news-side__list">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname?.startsWith(item.href + '/');
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={
                          'motta-news-side__link' +
                          (isActive ? ' is-active' : '')
                        }
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="motta-news-side__eyebrow">
                          {item.eyebrow}
                        </span>
                        <span className="motta-news-side__title">
                          {item.title}
                        </span>
                        <span className="motta-news-side__desc">
                          {item.desc}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
          <div className="col-lg-9">
            <div className="motta-news-content">{children}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .motta-news-shell {
          padding: 70px 0 90px;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-news-side {
          position: sticky;
          top: 100px;
          padding: 28px 22px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.16);
          box-shadow: 0 14px 38px -28px rgba(15, 19, 16, 0.28);
        }
        @media (max-width: 991px) {
          .motta-news-side {
            position: static;
            margin-bottom: 32px;
          }
        }
        .motta-news-side__label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--motta-sage-deep, #6b745d);
          margin-bottom: 14px;
        }
        .motta-news-side__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .motta-news-side__list li + li {
          margin-top: 6px;
        }
        .motta-news-side__link {
          display: block;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid transparent;
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease,
            transform 0.2s ease;
        }
        .motta-news-side__link:hover {
          background: var(--motta-warm, #f4f1eb);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-side__link.is-active {
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          border-color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-side__link.is-active .motta-news-side__eyebrow {
          color: var(--motta-sage-light, #b8c19f);
        }
        .motta-news-side__link.is-active .motta-news-side__desc {
          color: rgba(244, 241, 235, 0.78);
        }
        .motta-news-side__eyebrow {
          display: block;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
          margin-bottom: 4px;
        }
        .motta-news-side__title {
          display: block;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 4px;
        }
        .motta-news-side__desc {
          display: block;
          font-size: 12px;
          line-height: 1.45;
          color: rgba(43, 47, 36, 0.7);
        }
        .motta-news-content {
          padding: 48px 48px 56px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.14);
          box-shadow: 0 24px 60px -36px rgba(15, 19, 16, 0.3);
        }
        @media (max-width: 767px) {
          .motta-news-content {
            padding: 32px 22px 40px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
