import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

const OTHER_SERVICES = [
  { href: '/services/tax-planning', label: 'Tax Planning & Preparation' },
  {
    href: '/services/accounting-advisory',
    label: 'Accounting Advisory & Payroll',
  },
  {
    href: '/services/business-entity-structuring',
    label: 'Business Entity Structuring',
  },
  {
    href: '/services/financial-planning',
    label: 'Financial Planning & Advisory',
  },
  { href: '/services/management-consulting', label: 'Management Consulting' },
  {
    href: '/services/financial-statement-analysis',
    label: 'Financial Statement Analysis',
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
                  <img src={heroImage} alt={title} />
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
                    Ready to engage Motta on this?
                  </h4>
                  <p style={{ marginBottom: 18 }}>
                    Tell us about your situation and we&apos;ll scope the right
                    engagement — usually within one business day.
                  </p>
                  <IntakeButton className="btn mr-10" source={`service: ${title}`}>
                    Boot up an engagement
                  </IntakeButton>
                  <Link href="/contact" className="btn border-btn">
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
                    <ul className="list-wrap">
                      {OTHER_SERVICES.filter(
                        (s) => s.href !== currentHref
                      ).map((s) => (
                        <li key={s.href}>
                          <Link href={s.href}>
                            {s.label} <i className="flaticon-arrow-button" />
                          </Link>
                        </li>
                      ))}
                    </ul>
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
