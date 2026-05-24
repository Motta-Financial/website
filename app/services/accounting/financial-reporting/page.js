import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Reporting | Motta Financial',
  description:
    'Clear, actionable financial reports that help you understand your business — not 40-page downloads that sit unread.',
};

export default function FinancialReporting() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Reporting"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/financial-reporting"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Financial Reporting"
        lede="Financial statements are only useful if you actually read them. Motta delivers reports designed for decision-making — the numbers that matter, explained in plain English, delivered on a schedule that works for your business."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Monthly Financial Package',
            desc: 'Income statement, balance sheet, and cash flow — with variance analysis and commentary explaining what changed and why.',
          },
          {
            icon: 'flaticon-investment',
            title: 'KPI Dashboards',
            desc: 'The 5-10 metrics that actually drive your business, tracked over time and benchmarked against your goals.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Custom Reports',
            desc: 'Department P&Ls, project profitability, customer analysis, or whatever cuts of data help you run the business.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Board & Investor Reporting',
            desc: 'Professional packages formatted for board meetings, investor updates, and lender covenants.',
          },
        ]}
        sections={[
          {
            heading: 'Reports you&apos;ll actually use',
            body: 'We start by understanding what decisions you&apos;re trying to make, then build reports that answer those questions. No more scrolling through 40 pages looking for the one number you need.',
          },
          {
            heading: 'Delivered when you need them',
            body: 'Monthly, weekly, or real-time dashboards — whatever cadence fits your business. Most clients get their monthly package within 10 business days of month-end.',
          },
        ]}
      />
    </Layout>
  );
}
