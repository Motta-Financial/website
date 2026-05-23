import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'All Services | Motta Financial',
  description:
    'Tax planning, accounting, business entity setup, financial planning, business AI transformation, management consulting, and financial statement analysis from Motta Financial — a modern CPA firm powered by ALFRED Ai.',
};

const SERVICES = [
  {
    icon: 'flaticon-profit',
    title: 'Tax Planning & Preparation',
    href: '/services/tax-planning',
    desc: 'Year-round tax strategy and stress-free filing for individuals, families, and business owners — including stock options, real estate, and multi-state situations.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Accounting & Payroll',
    href: '/services/accounting-advisory',
    desc: 'Clean books, on-time payroll, monthly reporting, and ERP / QuickBooks help — handled by senior accountants with ALFRED Ai doing the heavy lifting in the background.',
  },
  {
    icon: 'flaticon-investment',
    title: 'Business Entity Setup',
    href: '/services/business-entity-structuring',
    desc: 'Pick the right entity from day one — LLC, S-Corp, C-Corp, or partnership — and structure things so taxes, liability, and future growth all line up.',
  },
  {
    icon: 'flaticon-piggy-bank',
    title: 'Financial Planning',
    href: '/services/financial-planning',
    desc: 'A single plan that connects your taxes, investments, retirement, and estate — led by a CFP through Motta Wealth Management.',
  },
  {
    icon: 'flaticon-light-bulb',
    title: 'Business AI Transformation',
    href: '/services/business-ai-transformation',
    desc: 'Our AI-certified team rebuilds the way your business runs — replacing manual work with smart automation so your team focuses on the things that grow the company.',
  },
  {
    icon: 'flaticon-target',
    title: 'Management Consulting',
    href: '/services/management-consulting',
    desc: 'Operating-model design, simple KPI dashboards, and fractional CFO support for owner-led businesses ready for the next stage of growth.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Financial Statement Analysis',
    href: '/services/financial-statement-analysis',
    desc: 'Board-ready reporting, performance analytics, and the diligence packages lenders, investors, and buyers actually want to see.',
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
      <section className="services__area-three services__bg-three">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="section-title mb-50">
                <span className="sub-title">What We Deliver</span>
                <h2 className="title">
                  Seven services. One team that already talks to each other.
                </h2>
                <p className="mt-3">
                  Most firms make you bounce between a bookkeeper, a tax
                  preparer, a financial advisor, and an IT consultant. At
                  Motta, all of them sit on the same team — looking at the
                  same numbers and pulling toward the same goals — with
                  ALFRED Ai handling the busywork in the background.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center cards-container">
            {SERVICES.map((s) => (
              <div className="col-lg-4 col-md-6 mb-30" key={s.title}>
                <div className="services__item-three h-100">
                  <div className="services__item-top">
                    <div className="services__icon-three">
                      <i className={s.icon} />
                    </div>
                    <div className="services__item-top-title">
                      <h2 className="title">
                        <Link href={s.href}>{s.title}</Link>
                      </h2>
                    </div>
                  </div>
                  <div className="services__content-three">
                    <p>{s.desc}</p>
                    <Link href={s.href} className="btn btn-two">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center mt-30">
            <div className="col-lg-8 text-center">
              <p>
                Not sure where you fit? Tell us a little about your situation
                and we&apos;ll point you to the right starting place.
              </p>
              <IntakeButton className="btn mr-10" source="services">
                Become a Client
              </IntakeButton>
              <Link href="/contact" className="btn border-btn">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
