'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    href: '/news',
    eyebrow: 'Overview',
    title: 'All News',
    exact: true,
  },
  {
    href: '/news/press',
    eyebrow: 'Press Releases',
    title: 'Press',
  },
  {
    href: '/news/blog',
    eyebrow: 'From the Blog',
    title: 'Blog',
  },
  {
    href: '/news/community',
    eyebrow: 'In the Community',
    title: 'Community',
  },
  {
    href: '/news/media',
    eyebrow: 'Podcasts & Media',
    title: 'Media',
  },
];

export default function NewsLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="motta-news-shell">
      <div className="container">
        <div className="row">
          <aside className="col-lg-3">
            <div className="services__sidebar">
              <div className="sidebar__widget sidebar__widget-two">
                <div className="sidebar__cat-list-two">
                  <h4 className="sidebar__widget-title">Newsroom</h4>
                  {NAV_ITEMS.map((item) => {
                    const isActive = item.exact
                      ? pathname === item.href
                      : pathname === item.href ||
                        pathname?.startsWith(item.href + '/');
                    return (
                      <div key={item.href} className="sidebar__cat-group">
                        <h5 className="sidebar__cat-group-title">
                          {item.eyebrow}
                        </h5>
                        <ul className="list-wrap">
                          <li>
                            <Link
                              href={item.href}
                              className={isActive ? 'is-active' : undefined}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              {item.title}{' '}
                              <i className="flaticon-arrow-button" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
          <div className="col-lg-9">
            <div className="motta-news-content">{children}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .motta-news-shell {
          padding: 70px 0 90px;
          background: var(--motta-cream, #f7f5f1);
        }
        .services__sidebar {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 991px) {
          .services__sidebar {
            position: static;
            margin-bottom: 32px;
          }
        }
        .motta-news-content {
          padding: 52px 56px 64px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.13);
          box-shadow: 0 20px 56px -32px rgba(15, 19, 16, 0.22);
        }
        @media (max-width: 767px) {
          .motta-news-content {
            padding: 32px 24px 44px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
