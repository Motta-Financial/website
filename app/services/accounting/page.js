import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'Office of the CFO | Outsourced CFO & Accounting | Motta Financial',
  description:
    'One team owns your whole finance function — Procure-to-Pay, Order-to-Cash, and Record-to-Report. Outsourced CFO, controller, bookkeeping, and reporting on one shared data room.',
};

const CYCLES = [
  {
    href: '/services/accounting/procure-to-pay',
    number: '01',
    eyebrow: 'Money Out',
    title: 'Procure-to-Pay',
    desc: 'Every dollar that leaves the business — requisition to PO to a reconciled, on-time payment, with the controls that keep spend honest.',
    tag: 'Bookkeeping · AP · Payroll',
  },
  {
    href: '/services/accounting/order-to-cash',
    number: '02',
    eyebrow: 'Money In',
    title: 'Order-to-Cash',
    desc: 'The cycle that funds growth — new customer and quote through cash in the bank, collections, and revenue recognized correctly.',
    tag: 'Bookkeeping · AR · CFO reporting',
  },
  {
    href: '/services/accounting/record-to-report',
    number: '03',
    eyebrow: 'The Numbers',
    title: 'Record-to-Report',
    desc: 'The monthly close that tells you where you really stand — sub-ledgers through consolidated, GAAP-grade financial statements.',
    tag: 'Close · Technical accounting',
  },
];

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
  {
    href: '/services/accounting/forensic-accounting',
    title: 'Forensic Accounting',
    desc: 'Fraud investigation, asset tracing, economic damages, and litigation support — evidence-grade findings that hold up under scrutiny and in court.',
  },
];

export default function AccountingServices() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Office of the CFO"
      breadcrumbEyebrow="Accounting"
    >
      <section className="services-details-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="sub-title">The Office of the CFO</span>
                <h2 className="title">
                  One team owns your whole finance function
                </h2>
                <p style={{ maxWidth: '68ch', margin: '0 auto' }}>
                  Most growing businesses stitch together a bookkeeper, a
                  controller, a fractional CFO, and a tax preparer — four
                  vendors looking at four versions of the numbers. Motta runs
                  all three core finance cycles as one connected system, on
                  shared data, under one accountable partner.
                </p>
              </div>
            </div>
          </div>

          {/* Three core finance cycles */}
          <div className="row justify-content-center">
            {CYCLES.map((cycle) => (
              <div key={cycle.href} className="col-lg-4 col-md-6 mb-4">
                <Link
                  href={cycle.href}
                  className="motta-service-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px 28px',
                    borderRadius: '14px',
                    background: '#fff',
                    border: '1px solid rgba(107, 116, 93, 0.16)',
                    textDecoration: 'none',
                    height: '100%',
                    transition:
                      'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 34,
                        fontWeight: 700,
                        lineHeight: 1,
                        color: 'var(--motta-sage-deep, #6b745d)',
                      }}
                    >
                      {cycle.number}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(43, 47, 36, 0.55)',
                      }}
                    >
                      {cycle.eyebrow}
                    </span>
                  </div>
                  <h4
                    style={{
                      marginBottom: 10,
                      color: 'var(--motta-charcoal, #2b2f24)',
                    }}
                  >
                    {cycle.title}
                  </h4>
                  <p
                    style={{
                      margin: '0 0 16px',
                      color: 'rgba(43, 47, 36, 0.78)',
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {cycle.desc}
                  </p>
                  <span
                    style={{
                      marginTop: 'auto',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--motta-sage-deep, #6b745d)',
                    }}
                  >
                    {cycle.tag}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* ALFRED note */}
          <div className="row justify-content-center mt-20">
            <div className="col-lg-10">
              <div
                style={{
                  padding: '24px 32px',
                  background: 'var(--motta-cream, #f7f5f1)',
                  border: '1px solid rgba(107,116,93,0.18)',
                  borderRadius: 12,
                  textAlign: 'center',
                }}
              >
                <p style={{ margin: 0, fontStyle: 'italic' }}>
                  &ldquo;We waste no time on busywork our technology can handle
                  — so senior advisors spend their hours on strategy, not
                  status updates.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details-area pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="sub-title">How we deliver it</span>
                <h2 className="title">The services behind the cycles</h2>
                <p style={{ maxWidth: '65ch', margin: '0 auto' }}>
                  Clean books, timely reports, and senior financial leadership —
                  without the overhead of a full in-house team. Each cycle is
                  powered by the services below, integrated under one Office of
                  the CFO.
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
                        transition:
                          'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      }}
                    >
                      <h4
                        style={{
                          marginBottom: 10,
                          color: 'var(--motta-charcoal, #2b2f24)',
                        }}
                      >
                        {svc.title}
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          color: 'rgba(43, 47, 36, 0.78)',
                          fontSize: 15,
                          lineHeight: 1.6,
                        }}
                      >
                        {svc.desc}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center mt-40">
                <p style={{ marginBottom: 18 }}>
                  Whether you&apos;re upgrading from a bookkeeper to a fractional
                  CFO or preparing your books for a transaction — we&apos;d
                  welcome the conversation.
                </p>
                <IntakeButton className="btn mr-10" source="accounting: Office of the CFO">
                  Become a Client
                </IntakeButton>
                <Link href="/contact" className="btn border-btn">
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
