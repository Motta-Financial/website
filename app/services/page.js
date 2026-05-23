import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'All Services | Motta Financial',
  description:
    'Tax planning, accounting advisory, entity structuring, financial planning, management consulting, and financial statement analysis from Motta Financial — a tech-forward CPA firm powered by ALFRED Ai.',
};

const SERVICES = [
  {
    icon: 'flaticon-profit',
    title: 'Tax Planning & Preparation',
    href: '/services/tax-planning',
    desc: 'Federal and multi-state filing, quarterly estimates, equity-comp planning (RSUs, ISOs, NSOs, ESPPs), real estate, and year-round strategy for individuals and businesses.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Accounting Advisory & Payroll',
    href: '/services/accounting-advisory',
    desc: 'Outsourced controllership, monthly close, GAAP-compliant reporting, payroll migration, and ERP / QuickBooks support delivered with ALFRED Ai integrated into the workflow.',
  },
  {
    icon: 'flaticon-investment',
    title: 'Business Entity Structuring',
    href: '/services/business-entity-structuring',
    desc: 'Entity selection, multi-entity / multi-state structures, holding-company design, and reorganizations — coordinated with tax, accounting, and legal counsel.',
  },
  {
    icon: 'flaticon-piggy-bank',
    title: 'Financial Planning & Advisory',
    href: '/services/financial-planning',
    desc: 'Holistic personal financial planning, retirement strategy, risk management, and investment advisory through Motta Wealth Management — led by a CFP®.',
  },
  {
    icon: 'flaticon-light-bulb',
    title: 'Management Consulting',
    href: '/services/management-consulting',
    desc: 'Operating-model design, KPI dashboards, AI workflow integration, and fractional CFO / FP&A support for owner-led businesses ready to scale.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Financial Statement Analysis',
    href: '/services/financial-statement-analysis',
    desc: 'Board-ready financial reporting, performance analytics, diligence packages, and M&A advisory across the lower-middle market.',
  },
];

export default function Services() {
  return (
    <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="All Services">
      <section className="services__area-three services__bg-three">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="section-title mb-50">
                <span className="sub-title">What We Deliver</span>
                <h2 className="title">
                  Six practice areas. One integrated team.
                </h2>
                <p className="mt-3">
                  Most firms make you choose between a bookkeeper, a tax
                  preparer, a financial advisor, and a transaction shop. At
                  Motta, all of them sit under one roof — looking at the same
                  data and planning toward the same goals, with ALFRED Ai
                  removing the administrative drag.
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
                Ready to talk to our team about what the right engagement looks
                like?
              </p>
              <IntakeButton className="btn mr-10" source="services">
                Boot up an engagement
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
