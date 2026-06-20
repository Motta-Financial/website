import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Accounting Services | Motta Financial',
  description:
    'Full-service accounting for growing businesses — bookkeeping, financial reporting, payroll, and fractional CFO services.',
};

const SERVICES = [
  {
    href: '/services/accounting/cfo-controller',
    title: 'CFO & Controller Services',
    desc: 'Fractional financial leadership for growing businesses — strategic planning, fundraising support, and the senior oversight you need without a full-time hire.',
  },
  {
    href: '/services/accounting/business-infrastructure',
    title: 'Business Infrastructure Set Up & Optimization',
    desc: 'Get your financial systems set up right from the start — chart of accounts, integrations, and workflows that scale with your business.',
  },
  {
    href: '/services/accounting/bookkeeping',
    title: 'Bookkeeping',
    desc: 'Reliable monthly bookkeeping from senior accountants — categorized transactions, reconciled accounts, and books you can trust.',
  },
  {
    href: '/services/accounting/bookkeeping-small-business',
    title: 'Bookkeeping for Small Business',
    desc: 'Small-business bookkeeping from a Platinum-tier Certified QuickBooks ProAdvisor team — QuickBooks Online setup, clean monthly books, and owner-ready reports.',
  },
  {
    href: '/services/accounting/financial-reporting',
    title: 'Financial Reporting',
    desc: 'Clear, actionable financial reports that help you understand your business — KPI dashboards, monthly packages, and board-ready presentations.',
  },
  {
    href: '/services/accounting/payroll',
    title: 'Payroll Services',
    desc: 'Accurate payroll processing, multi-state compliance, contractor payments, and 1099s — so you can focus on running your business.',
  },
];

export default function AccountingServices() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Accounting"
      breadcrumbEyebrow="Services"
    >
      <section className="services-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Accounting Services</span>
                <h2 className="title">
                  The back office your business deserves
                </h2>
                <p style={{ maxWidth: '65ch', margin: '0 auto' }}>
                  Clean books, timely reports, and senior financial leadership — without the overhead of a full in-house team. Motta handles the accounting so you can focus on growing your business.
                </p>
              </div>

              <div className="row">
                {SERVICES.map((svc) => (
                  <div key={svc.href} className="col-md-6 mb-4">
                    <Link
                      href={svc.href}
                      className="motta-service-card"
                      style={{
                        display: 'block',
                        padding: '28px 24px',
                        borderRadius: '14px',
                        background: '#fff',
                        border: '1px solid rgba(107, 116, 93, 0.16)',
                        textDecoration: 'none',
                        height: '100%',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      }}
                    >
                      <h4 style={{ marginBottom: 10, color: 'var(--motta-charcoal, #2b2f24)' }}>
                        {svc.title}
                      </h4>
                      <p style={{ margin: 0, color: 'rgba(43, 47, 36, 0.78)', fontSize: 15, lineHeight: 1.6 }}>
                        {svc.desc}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
