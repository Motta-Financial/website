import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Statement Analysis | Motta Financial',
  description:
    'Board-ready reporting, performance analytics, and the diligence packages lenders, investors, and buyers actually want to see.',
};

export default function FinancialStatementAnalysis() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Statement Analysis"
      breadcrumbEyebrow="Reporting & Analytics"
    >
      <ServiceDetailLayout
        currentHref="/services/financial-statement-analysis"
        heroImage="/assets/img/services/services_details05.jpg"
        title="Financial Statement Analysis"
        lede="Bookkeeping tells you what already happened. Analysis tells you what to do next. Motta turns your monthly numbers into reports your board, your bank, or a buyer would actually want to see — with plain-English commentary on what changed and what to watch."
        bullets={[
          {
            icon: 'flaticon-pie-chart',
            title: 'Monthly Reporting Package',
            desc: 'Profit & loss, balance sheet, cash flow, and the few KPIs that matter — with a short written summary you can hand to anyone.',
          },
          {
            icon: 'flaticon-target',
            title: 'Performance Analytics',
            desc: 'Margins, unit economics, and customer trends tied directly to how your business actually makes money.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Selling or Buying a Business',
            desc: 'Sell-side prep, buy-side review, and quality-of-earnings packages so you walk into the deal table prepared.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Lender & Investor Reporting',
            desc: 'Bank covenant calculations, projections, and the package your lender or investor expects on time, every time.',
          },
        ]}
        sections={[
          {
            heading: 'Why this matters',
            body: 'A clean, well-explained set of numbers is the cheapest leverage in your business. It changes how a bank prices a loan, how an investor values a deal, and how confidently you can decide where to put the next dollar. We make sure the numbers are right, the story is honest, and the package is the one your audience expects.',
          },
          {
            heading: 'How we work',
            body: 'We tighten up the close first — the chart of accounts, the recurring entries, the reconciliations — then layer reporting on top. ALFRED Ai handles the data plumbing so your CPA stays focused on what the numbers mean and what to do about them.',
          },
        ]}
      />
    </Layout>
  );
}
