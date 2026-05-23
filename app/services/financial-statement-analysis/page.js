import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Statement Analysis | Motta Financial',
  description:
    'Board-ready financial reporting, performance analytics, diligence packages, and M&A advisory grounded in clean GAAP financials.',
};

export default function FinancialStatementAnalysis() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Statement Analysis"
    >
      <ServiceDetailLayout
        currentHref="/services/financial-statement-analysis"
        heroImage="/assets/img/services/services_details05.jpg"
        title="Financial Statement Analysis"
        lede="Bookkeeping tells you what happened. Analysis tells you what to do next. Motta turns your monthly close into board-ready reporting and decision support — clean GAAP financials, KPI commentary, variance analysis, and the deal-grade packages lenders and acquirers actually want to see."
        bullets={[
          {
            icon: 'flaticon-pie-chart',
            title: 'Board-Ready Reporting',
            desc: 'Monthly and quarterly packages with P&amp;L, balance sheet, cash flow, KPIs, and written commentary.',
          },
          {
            icon: 'flaticon-target',
            title: 'Performance Analytics',
            desc: 'Margin, unit-economics, and cohort analysis tied directly to your operating model.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Diligence & QofE Support',
            desc: 'Sell-side prep, buy-side review, and quality-of-earnings packages for transactions and capital raises.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Lender & Investor Reporting',
            desc: 'Covenant calculations, projections, and reporting packages that get banks and investors to yes.',
          },
        ]}
        sections={[
          {
            heading: 'Why this matters',
            body: 'A clean set of statements is the cheapest leverage in your business. It changes how lenders price you, how investors value you, and how confidently you can make capital-allocation decisions. We make sure the numbers are right, the story is honest, and the package is the one your audience expects.',
          },
          {
            heading: 'How we work',
            body: 'We start by tightening the close — chart of accounts, accruals, and reconciliations — then layer reporting and analytics on top. ALFRED Ai handles the data plumbing and recurring deliverables so your senior advisor stays focused on interpretation and strategy.',
          },
        ]}
      />
    </Layout>
  );
}
