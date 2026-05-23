import Link from 'next/link';

const SERVICES = [
  {
    icon: 'flaticon-profit',
    title: 'Tax Planning & Preparation',
    href: '/services/tax-planning',
    share: '37%',
    desc: 'Federal and multi-state filing, quarterly estimates, and year-round planning for individuals, businesses, and trusts. ALFRED + ProConnect cuts routine returns from hours to minutes.',
  },
  {
    icon: 'flaticon-target',
    title: 'Tax Advisory',
    href: '/services/tax-planning',
    share: '3%',
    desc: 'Entity structuring, equity compensation strategy (RSUs, ISOs, NSOs, ESPPs), real estate planning, multi-entity / multi-state work, and international reporting.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Accounting & Bookkeeping',
    href: '/services/accounting-advisory',
    share: '45%',
    desc: 'Outsourced controllership, monthly close, financial reporting, payroll migration, ERP and QuickBooks support, and fractional CFO engagements.',
  },
  {
    icon: 'flaticon-piggy-bank',
    title: 'Financial Planning',
    href: '/services/financial-planning',
    share: '4%',
    desc: 'Holistic personal financial planning, retirement strategy, risk management, and investment advisory through Motta Wealth Management — led by a CFP®.',
  },
];

export default function Services3() {
  return (
    <>
      <section className="services__area-three services__bg-three">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title mb-50">
                <span className="sub-title">What we deliver</span>
                <h2 className="title">
                  Four practice areas, one integrated team.
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center cards-container">
            {SERVICES.map((s) => (
              <div className="col card-wrapper" key={s.title}>
                <div className="services__item-three">
                  <div className="services__item-top">
                    <div className="services__icon-three">
                      <i className={s.icon} />
                    </div>
                    <div className="services__item-top-title">
                      <h2 className="title">
                        <Link href={s.href}>{s.title}</Link>
                      </h2>
                      <span
                        style={{
                          display: 'inline-block',
                          marginTop: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: 'var(--motta-sage)',
                        }}
                      >
                        {s.share} of FY26 revenue
                      </span>
                    </div>
                  </div>
                  <div className="services__content-three">
                    <p>{s.desc}</p>
                    <Link href={s.href} className="btn btn-two">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
