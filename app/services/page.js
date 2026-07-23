import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';
import { TechPartnersStrip } from '@/components/sections/IntuitCredentials';

export const metadata = {
  title: 'All Services | Motta Financial',
  description:
    'Tax, accounting, business advisory, and wealth management from Motta Financial — a modern CPA firm powered by ALFRED Ai.',
};

const SERVICE_CATEGORIES = [
  {
    title: 'Tax',
    href: '/services/tax-planning',
    icon: 'flaticon-profit',
    desc: 'Year-round tax planning and preparation for individuals, families, and businesses — with ALFRED Ai handling the heavy lifting so your CPA can focus on strategy.',
    services: [
      { title: 'Tax Planning & Preparation', href: '/services/tax-planning' },
      { title: 'Small Business Tax Advisory', href: '/services/tax/small-business' },
      { title: 'S-Corp Elections & Compliance', href: '/services/tax/s-corp' },
    ],
  },
  {
    title: 'Office of the CFO',
    href: '/services/accounting',
    icon: 'flaticon-financial-profit',
    desc: 'One team owns your whole finance function — Procure-to-Pay, Order-to-Cash, and Record-to-Report — on shared data, under one accountable partner.',
    services: [
      { title: 'Procure-to-Pay (Money Out)', href: '/services/accounting/procure-to-pay' },
      { title: 'Order-to-Cash (Money In)', href: '/services/accounting/order-to-cash' },
      { title: 'Record-to-Report (The Numbers)', href: '/services/accounting/record-to-report' },
      { title: 'CFO & Controller Services', href: '/services/accounting/cfo-controller' },
      { title: 'Bookkeeping', href: '/services/accounting/bookkeeping' },
      { title: 'Financial Reporting', href: '/services/accounting/financial-reporting' },
      { title: 'Forensic Accounting', href: '/services/accounting/forensic-accounting' },
    ],
  },
  {
    title: 'Mergers & Acquisitions',
    href: '/services/ma',
    icon: 'flaticon-investment',
    desc: 'Institutional-grade deal execution for the lower-middle market — valuations, due diligence, quality of earnings, buy-side and sell-side advisory, financial modeling, and post-close integration.',
    services: [
      { title: 'Business Valuations (409A & Transaction)', href: '/services/ma/business-valuations' },
      { title: 'M&A Due Diligence', href: '/services/ma/due-diligence' },
      { title: 'Buy-Side & Sell-Side Advisory', href: '/services/ma/buy-sell-advisory' },
      { title: 'Quality of Earnings (QofE)', href: '/services/ma/quality-of-earnings' },
      { title: 'Financial Modeling & Investment Memos', href: '/services/ma/financial-modeling' },
      { title: 'Post-Close Integration & Synergy', href: '/services/ma/integration' },
    ],
  },
  {
    title: 'Business Advisory',
    href: '/services/business-advisory',
    icon: 'flaticon-target',
    desc: 'Strategic advice for business owners — entity structuring, growth planning, M&A support, and the guidance you need to make confident decisions.',
    services: [],
  },
  {
    title: 'SaaS & Technology Advisory',
    href: '/services/saas-tech-advisory',
    icon: 'flaticon-startup',
    desc: 'Where finance meets go-to-market for SaaS and technology companies — AWS Marketplace launch, Quote-to-Cash transformation, and audit-ready ASC 606 revenue accounting.',
    services: [],
  },
  {
    title: 'Wealth Management',
    href: '/services/wealth-management',
    icon: 'flaticon-piggy-bank',
    desc: 'Comprehensive financial planning and investment management — retirement, estate planning, and tax-smart strategies to build and protect wealth.',
    services: [],
  },
];

export default function Services() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="All Services"
      breadcrumbEyebrow="What we do"
    >
      <section className="services__area-three motta-services-overview">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="section-title mb-50">
                <span className="sub-title">What We Deliver</span>
                <h2 className="title">
                  Specialized practices. One team that already talks to each
                  other.
                </h2>
                <p className="mt-3">
                  Most firms make you bounce between a bookkeeper, a tax
                  preparer, a financial advisor, and a business consultant. At
                  Motta, all of them sit on the same team — looking at the
                  same numbers and pulling toward the same goals — with
                  ALFRED Ai handling the busywork in the background.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center cards-container">
            {SERVICE_CATEGORIES.map((cat) => (
              <div className="col-lg-6 col-md-6 mb-30" key={cat.title}>
                <div className="services__item-three h-100">
                  <div className="services__item-top">
                    <div className="services__item-top-title">
                      <h2 className="title">
                        <Link href={cat.href}>{cat.title}</Link>
                      </h2>
                    </div>
                  </div>
                  <div className="services__content-three">
                    <p>{cat.desc}</p>
                    {cat.services.length > 0 && (
                      <ul style={{ margin: '16px 0', paddingLeft: 20 }}>
                        {cat.services.map((svc) => (
                          <li key={svc.href} style={{ marginBottom: 6 }}>
                            <Link
                              href={svc.href}
                              style={{ color: 'var(--motta-sage-deep, #6b745d)' }}
                            >
                              {svc.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link href={cat.href} className="btn btn-two">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center motta-services-cta">
            <div className="col-lg-8 text-center">
              <p>
                Not sure where you fit? Tell us a little about your situation
                and we&apos;ll point you to the right starting place.
              </p>
              <IntakeButton className="btn motta-cta mr-10" source="services">
                Become a Client
              </IntakeButton>
              <Link href="/contact" className="btn border-btn border-btn--ink">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TechPartnersStrip />
    </Layout>
  );
}
