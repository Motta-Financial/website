import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

/**
 * Other Services, organized by the firm's four core practice areas:
 * Tax, Accounting, Business Advisory, and Wealth Management.
 * Mergers & Acquisitions and SaaS & Technology Advisory live under
 * Business Advisory.
 */
const SERVICE_GROUPS = [
  {
    area: 'Tax',
    items: [
      { href: '/services/tax', label: 'Tax Services' },
      { href: '/services/tax-planning', label: 'Tax Planning & Preparation' },
      { href: '/services/tax/small-business', label: 'Small Business Tax Advisory' },
      { href: '/services/tax/s-corp', label: 'S-Corp Elections & Compliance' },
    ],
  },
  {
    area: 'Accounting',
    items: [
      { href: '/services/accounting', label: 'Office of the CFO' },
      { href: '/services/accounting/procure-to-pay', label: 'Procure-to-Pay (Money Out)' },
      { href: '/services/accounting/order-to-cash', label: 'Order-to-Cash (Money In)' },
      { href: '/services/accounting/record-to-report', label: 'Record-to-Report (The Numbers)' },
      { href: '/services/accounting/cfo-controller', label: 'CFO & Controller Services' },
      { href: '/services/accounting/business-infrastructure', label: 'Business Infrastructure' },
      { href: '/services/accounting/bookkeeping', label: 'Bookkeeping' },
      { href: '/services/accounting/financial-reporting', label: 'Financial Reporting' },
      { href: '/services/accounting/payroll', label: 'Payroll Services' },
      { href: '/services/accounting/forensic-accounting', label: 'Forensic Accounting' },
    ],
  },
  {
    area: 'Business Advisory',
    items: [
      { href: '/services/business-advisory', label: 'Business Advisory' },
      { href: '/services/ma', label: 'Mergers & Acquisitions' },
      { href: '/services/ma/business-valuations', label: 'Business Valuations' },
      { href: '/services/ma/due-diligence', label: 'M&A Due Diligence' },
      { href: '/services/ma/buy-sell-advisory', label: 'Buy-Side & Sell-Side Advisory' },
      { href: '/services/ma/quality-of-earnings', label: 'Quality of Earnings (QofE)' },
      { href: '/services/ma/financial-modeling', label: 'Financial Modeling & Investment Memos' },
      { href: '/services/ma/integration', label: 'Post-Close Integration & Synergy' },
      { href: '/services/saas-tech-advisory', label: 'SaaS & Technology Advisory' },
    ],
  },
  {
    area: 'Wealth Management',
    items: [
      { href: '/services/wealth-management', label: 'Wealth Management' },
    ],
  },
];

/**
 * ServiceDetailLayout — shared layout for all /services/* sub-pages.
 *
 * Props:
 *  - currentHref: string
 *  - title: string
 *  - lede: string
 *  - sections: Array<{ heading: string, body: React.ReactNode }>
 *  - bullets: Array<{ icon: string, title: string, desc: string }>
 *  - heroImage?: string
 */
export default function ServiceDetailLayout({
  currentHref,
  title,
  lede,
  sections = [],
  bullets = [],
  heroImage,
}) {
  return (
    <section className="services__details-area">
      <div className="container">
        <div className="services__details-wrap">
          <div className="row">
            <div className="col-70 order-0 order-lg-2">
              {heroImage ? (
                <div className="services__details-thumb">
                  <img
                    src={heroImage}
                    alt={title}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              ) : null}
              <div className="services__details-content">
                <h2 className="title">{title}</h2>
                <p>{lede}</p>

                {bullets.length > 0 ? (
                  <div className="services__details-list">
                    <div className="row">
                      {bullets.map((b) => (
                        <div className="col-md-6" key={b.title}>
                          <div className="services__details-list-box">
                            <div className="icon">
                              <i className={b.icon} />
                            </div>
                            <div className="content">
                              <h4 className="title">{b.title}</h4>
                              <p>{b.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {sections.map((s) => (
                  <div key={s.heading} style={{ marginTop: 28 }}>
                    <h3
                      className="title-two"
                      style={{ fontSize: 24, marginBottom: 12 }}
                    >
                      {s.heading}
                    </h3>
                    {typeof s.body === 'string' ? <p>{s.body}</p> : s.body}
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 40,
                    padding: '28px 32px',
                    background: 'var(--motta-cream, #f7f5f1)',
                    border: '1px solid rgba(107,116,93,0.18)',
                    borderRadius: 10,
                  }}
                >
                  <h4 className="title" style={{ marginBottom: 8 }}>
                    Ready to talk this through with a CPA?
                  </h4>
                  <p style={{ marginBottom: 18 }}>
                    Tell us a little about your situation and we&apos;ll get
                    back to you — usually within one business day.
                  </p>
                  <IntakeButton className="btn mr-10" source={`service: ${title}`}>
                    Become a Client
                  </IntakeButton>
                  <Link href="/contact" className="btn border-btn border-btn--ink">
                    Send Us a Message
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-30">
              <aside className="services__sidebar">
                <div className="sidebar__widget sidebar__widget-two">
                  <div className="sidebar__cat-list-two">
                    <h4 className="sidebar__widget-title">Other Services</h4>
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.area} className="sidebar__cat-group">
                        <h5 className="sidebar__cat-group-title">
                          {group.area}
                        </h5>
                        <ul className="list-wrap">
                          {group.items.map((s) => {
                            const isActive = s.href === currentHref;
                            return (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  className={isActive ? 'is-active' : undefined}
                                  aria-current={isActive ? 'page' : undefined}
                                >
                                  {s.label}{' '}
                                  <i className="flaticon-arrow-button" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar__widget sidebar__widget-two">
                  <div
                    className="sidebar__contact"
                    style={{ padding: 28, borderRadius: 10 }}
                  >
                    <h2 className="title" style={{ marginBottom: 16 }}>
                      Talk to a Motta CPA
                    </h2>
                    <a
                      href="tel:+17025146055"
                      className="btn"
                      style={{ marginBottom: 10 }}
                    >
                      <i className="flaticon-phone-call" /> (702) 514&#8209;6055
                    </a>
                    <a
                      href="mailto:Info@MottaFinancial.com"
                      className="btn border-btn"
                    >
                      <i className="flaticon-mail" /> Info@MottaFinancial.com
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
