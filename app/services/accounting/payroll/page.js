import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Payroll Services | Motta Financial',
  description:
    'Reliable payroll processing, tax filings, and compliance — multi-state, contractors, and all the complexity handled for you.',
};

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
            heading: 'Platform-agnostic',
            body: 'We work with Gusto, Rippling, ADP, Paychex, or whatever payroll platform fits your business. If you need to switch, we manage the migration.',
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
