'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    href: '/partnerships',
    eyebrow: 'Overview',
    title: 'All Partnerships',
    exact: true,
  },
  {
    href: '/partnerships/financial-advisors',
    eyebrow: 'Professional',
    title: 'Financial Advisors',
  },
  {
    href: '/partnerships/white-label',
    eyebrow: 'Behind the Scenes',
    title: 'White Label Services',
  },
  {
    href: '/partnerships/suffolk-seed',
    eyebrow: 'Academic',
    title: 'Suffolk SEED',
  },
];

export default function PartnershipsLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="motta-partnerships-shell">
      <div className="container">
        <div className="row">
          <aside className="col-lg-3">
            <div className="services__sidebar">
              <div className="sidebar__widget sidebar__widget-two">
                <div className="sidebar__cat-list-two">
                  <h4 className="sidebar__widget-title">Partnerships</h4>
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
            <div className="motta-partnerships-content">{children}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .motta-partnerships-shell {
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
        /* Content card */
        .motta-partnerships-content {
          padding: 48px 48px 56px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.14);
          box-shadow: 0 24px 60px -36px rgba(15, 19, 16, 0.3);
        }
        @media (max-width: 767px) {
          .motta-partnerships-content {
            padding: 32px 22px 40px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
