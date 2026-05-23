import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Tax Planning & Preparation | Motta Financial',
  description:
    'Federal and multi-state tax planning, preparation, and year-round strategy for individuals, businesses, trusts, and pre-IPO employees — powered by ALFRED Ai and the ProConnect Open API.',
};

export default function TaxPlanning() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Tax Planning & Preparation"
    >
      <ServiceDetailLayout
        currentHref="/services/tax-planning"
        heroImage="/assets/img/services/services_details01.jpg"
        title="Tax Planning & Preparation"
        lede="Motta delivers proactive, year-round tax strategy — not a once-a-year filing exercise. Our advisors model decisions before they happen, optimize across federal, state, and entity layers, and use ALFRED Ai to keep cost and turnaround in line with the value you receive."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Year-Round Strategy',
            desc: 'Quarterly planning, estimate management, and event-driven advisory — not just April returns.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Multi-State & Multi-Entity',
            desc: 'Apportionment, nexus, and entity coordination across complex personal and business structures.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Equity Compensation',
            desc: 'RSUs, ISOs, NSOs, ESPPs, AMT exposure, tender offers, and QSBS (§1202) planning.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'ALFRED + ProConnect',
            desc: 'Programmatic access to Intuit ProConnect drafts routine returns in minutes — freeing senior advisors for strategy.',
          },
        ]}
        sections={[
          {
            heading: 'Who we serve',
            body: 'Business owners and executives, high-net-worth individuals, real-estate investors, pre-IPO employees, trusts and estates, and channel partners who white-label Motta as their back office. We work nationally from offices in Boston and Las Vegas.',
          },
          {
            heading: 'How we work',
            body: 'Every engagement starts with a discovery call and a structured intake. We map your tax picture, surface optimization opportunities, and put a dedicated advisor + associate on your account. ALFRED Ai handles data ingestion, draft preparation, and document chasing — your CPA spends their hours on planning and review.',
          },
        ]}
      />
    </Layout>
  );
}
