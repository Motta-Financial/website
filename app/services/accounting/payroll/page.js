import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Payroll Services | Motta Financial',
  description:
    'Reliable payroll processing, tax filings, and compliance — multi-state, contractors, and all the complexity handled for you. An ADP Certified Partner, Gusto partner, and Rippling partner firm.',
};

/**
 * Payroll platform partners block (ADP + Gusto + Rippling).
 *
 * Brand-compliance notes:
 *  - Motta's own brand stays at the forefront — this block lives inside
 *    a Motta-branded page and presents ADP / Gusto as the platforms we
 *    work in, NOT as a co-branded lockup with Motta's logo.
 *  - Partner logos are shown at modest size on a clean white field
 *    (no busy backgrounds, no recoloring, correct clear space).
 *  - The ADP "Accountant Connect" Certified Partner badge is used
 *    exactly as supplied — never cropped or recolored.
 *  - "ADP" and "Gusto" use correct casing; no abbreviations.
 */
function PayrollPartnersBlock() {
  return (
    <div
      style={{
        marginTop: 8,
        display: 'grid',
        gap: 20,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      {/* ADP */}
      <div
        style={{
          padding: '28px',
          background: '#ffffff',
          border: '1px solid rgba(107, 116, 93, 0.18)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <img
            src="/assets/img/partners/adp-logo.png"
            alt="ADP"
            style={{ height: 38, width: 'auto' }}
          />
          {/* Accountant Connect Certified Partner badge — used as-is. */}
          <img
            src="/assets/img/partners/adp-accountant-connect-badge.png"
            alt="ADP Certified Partner — Accountant Connect"
            style={{ height: 72, width: 'auto', flexShrink: 0 }}
          />
        </div>
        <div>
          <h3 className="title-two" style={{ fontSize: 22, marginBottom: 8 }}>
            ADP Certified Partner
          </h3>
          <p style={{ margin: 0 }}>
            As an ADP Certified Partner with Accountant Connect, Motta gets
            direct, secure access to your ADP payroll data — which means faster
            answers, cleaner reconciliations, and a team that can manage payroll
            and tax filings right alongside your books.
          </p>
        </div>
      </div>

      {/* Gusto */}
      <div
        style={{
          padding: '28px',
          background: '#ffffff',
          border: '1px solid rgba(107, 116, 93, 0.18)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', minHeight: 72 }}>
          <img
            src="/assets/img/partners/gusto-logo.png"
            alt="Gusto"
            style={{ height: 40, width: 'auto' }}
          />
        </div>
        <div>
          <h3 className="title-two" style={{ fontSize: 22, marginBottom: 8 }}>
            Gusto Partner
          </h3>
          <p style={{ margin: 0 }}>
            Gusto is our preferred platform for modern, full-service payroll,
            benefits, and HR — built for small and growing teams. As a Gusto
            partner firm, we can set you up, run payroll in minutes, and keep
            taxes, benefits, and compliance working together in one place.
          </p>
        </div>
      </div>

      {/* Rippling */}
      <div
        style={{
          padding: '28px',
          background: '#ffffff',
          border: '1px solid rgba(107, 116, 93, 0.18)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', minHeight: 72 }}>
          <img
            src="/assets/img/partners/rippling-logo.png"
            alt="Rippling"
            style={{ height: 30, width: 'auto' }}
          />
        </div>
        <div>
          <h3 className="title-two" style={{ fontSize: 22, marginBottom: 8 }}>
            Rippling Partner
          </h3>
          <p style={{ margin: 0 }}>
            Rippling brings payroll, benefits, HR, and IT into a single system —
            a great fit for fast-scaling teams. As a Rippling partner firm, we
            help you run payroll across states and entities while keeping
            onboarding, compliance, and reporting connected in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Payroll() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Payroll Services"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/payroll"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Payroll Services"
        lede="Payroll should just work. Motta handles the processing, tax filings, and compliance so you can focus on running your business — not debugging why someone&apos;s check was wrong or chasing down a state registration."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Payroll Processing',
            desc: 'Accurate, on-time paychecks for W-2 employees — direct deposit, pay stubs, and year-end W-2s handled.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Multi-State Compliance',
            desc: 'Employees in multiple states? We handle the registrations, withholdings, and filings for each jurisdiction.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Contractor Payments & 1099s',
            desc: 'Contractor payment tracking and year-end 1099 preparation — so you&apos;re compliant without the paperwork headache.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Benefits Administration',
            desc: 'Coordination with health insurance, retirement plans, and other benefits that flow through payroll.',
          },
        ]}
        sections={[
          {
            heading: 'Trusted payroll platforms',
            body: <PayrollPartnersBlock />,
          },
          {
            heading: 'Platform-agnostic',
            body: 'ADP, Gusto, and Rippling are our go-to platforms, but we also work with Paychex or whatever fits your business. If you need to switch, we manage the migration.',
          },
          {
            heading: 'Integrated with your books',
            body: 'Payroll flows directly into your accounting system with proper coding — no manual journal entries or reconciliation headaches.',
          },
        ]}
      />
    </Layout>
  );
}
