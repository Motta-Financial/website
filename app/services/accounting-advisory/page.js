import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Accounting Advisory & Payroll | Motta Financial',
  description:
    'Outsourced controllership, monthly close, GAAP-compliant reporting, payroll, and fractional CFO services — delivered by senior accountants and ALFRED Ai.',
};

export default function AccountingAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Accounting Advisory & Payroll"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting-advisory"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Accounting Advisory & Payroll"
        lede="Closing the books is the easy part. Motta delivers GAAP-compliant accounting and payroll with the analytical layer most firms skip — variance commentary, KPI dashboards, and decision-ready reporting your operators actually use."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Outsourced Controllership',
            desc: 'Monthly close, accruals, reconciliations, and GAAP-compliant financials owned end-to-end.',
          },
          {
            icon: 'flaticon-report',
            title: 'Management Reporting',
            desc: 'Board-ready P&L, KPI dashboards, and variance commentary tailored to your operating model.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Payroll & Compliance',
            desc: 'Multi-state payroll, contractor management, and migration off legacy providers.',
          },
          {
            icon: 'flaticon-target',
            title: 'Fractional CFO',
            desc: 'Forecasting, cash planning, fundraise support, and FP&A on demand for owner-led businesses.',
          },
        ]}
        sections={[
          {
            heading: 'ERP, QuickBooks & systems',
            body: 'We work natively in QuickBooks Online, Xero, NetSuite, and most mid-market ERPs. ALFRED Ai connects directly to your ledger, expense, and payroll systems — keeping records clean without endless email chains.',
          },
          {
            heading: 'When it makes sense',
            body: 'You have between $1M and $50M in revenue, your team is wearing too many hats, your closes are slipping, or you need a finance function that scales without hiring a full department. Motta drops in as the senior accounting team you don\u2019t have to recruit.',
          },
        ]}
      />
    </Layout>
  );
}
