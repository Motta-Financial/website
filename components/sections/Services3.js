import Link from 'next/link';

const SERVICES = [
  {
    icon: 'flaticon-profit',
    title: 'Tax Planning & Preparation',
    href: '/services/tax-planning',
    desc: 'Year-round tax strategy and stress-free filing for individuals, families, and business owners. ALFRED Ai drafts your return in minutes so your CPA can focus on saving you money.',
  },
  {
    icon: 'flaticon-target',
    title: 'Tax Advisory',
    href: '/services/tax-planning',
    desc: 'Practical advice for the moments that matter: starting a business, picking the right entity, navigating stock options (RSUs, ISOs, ESPPs), buying real estate, or operating across state lines.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Accounting & Bookkeeping',
    desc: 'Clean books, on-time payroll, monthly reporting, and a fractional CFO when you need one — so you always know where your business stands.',
    href: '/services/accounting-advisory',
  },
  {
    icon: 'flaticon-light-bulb',
    title: 'Business AI Transformation',
    href: '/services/business-ai-transformation',
    desc: 'Our AI-certified team rebuilds the way your business runs — replacing manual work with smart automation so your people focus on the things that actually grow the company.',
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
                  Four practice areas, one team that talks to each other.
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center cards-container">
            {SERVICES.map((s) => (
              <div className="col card-wrapper" key={s.title}>
                <div className="services__item-three">
                  <div className="services__item-top">
                    <div className="services__item-top-title">
                      <h2 className="title">
                        <Link href={s.href}>{s.title}</Link>
                      </h2>
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
