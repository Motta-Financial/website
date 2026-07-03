import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Quality of Earnings (QofE) | Motta Financial',
  description:
    'Quality of Earnings analysis for buyers and sellers — normalized EBITDA, revenue quality, and working-capital analysis that tells you what the numbers really mean.',
};

export default function QualityOfEarnings() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Quality of Earnings (QofE)"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/quality-of-earnings"
        heroImage="/assets/img/services/quality-of-earnings-hero.jpg"
        title="Quality of Earnings (QofE)"
        lede="Reported earnings and real, sustainable earnings are rarely the same number. A Quality of Earnings analysis cuts through one-time items, owner add-backs, and accounting noise to show what a business actually earns — the figure every purchase price is built on."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Normalized EBITDA',
            desc: 'We identify and quantify add-backs, one-time items, and non-recurring costs to establish a defensible, normalized earnings base.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Revenue Quality',
            desc: 'Customer and payor concentration, recurring vs. one-time revenue, and the durability of the top line under new ownership.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Working Capital',
            desc: 'A normalized working-capital target and analysis of seasonality and trends — so the peg in the deal is set correctly.',
          },
          {
            icon: 'flaticon-target',
            title: 'Earnings Trends & Drivers',
            desc: 'What is actually driving growth or decline — separating durable performance from timing and accounting effects.',
          },
        ]}
        sections={[
          {
            heading: 'Buy-side QofE',
            body: 'Before you commit capital, we validate the seller\u2019s earnings, expose risk, and give you the numbers to negotiate price and structure with confidence. Our team has built the internal models and dissected the billing datasets that committees rely on to approve transactions.',
          },
          {
            heading: 'Sell-side QofE',
            body: 'A sell-side QofE lets you control the narrative. We normalize and document your earnings before buyers dig in — reducing surprises, defending your multiple, and keeping the process on track.',
          },
          {
            heading: 'How it fits the deal',
            body: 'QofE pairs naturally with our valuation and due diligence work. We can deliver it as a standalone analysis or as part of a full diligence engagement, coordinating with your tax and legal advisors throughout.',
          },
        ]}
      />
    </Layout>
  );
}
