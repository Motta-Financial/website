import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business Entity Structuring | Motta Financial',
  description:
    'Entity selection, multi-entity / multi-state structures, holding-company design, and reorganizations coordinated across tax, accounting, and legal counsel.',
};

export default function EntityStructuring() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business Entity Structuring"
    >
      <ServiceDetailLayout
        currentHref="/services/business-entity-structuring"
        heroImage="/assets/img/services/services_details03.jpg"
        title="Business Entity Structuring"
        lede="The right entity structure can save you taxes, protect personal assets, and make your next round of growth or M&A dramatically simpler. Motta designs structures that anticipate where you\u2019re going — not just where you are today."
        bullets={[
          {
            icon: 'flaticon-investment',
            title: 'Entity Selection',
            desc: 'LLC vs. S-Corp vs. C-Corp vs. partnership — modeled against your specific tax, comp, and exit profile.',
          },
          {
            icon: 'flaticon-investment-1',
            title: 'Holding-Co Design',
            desc: 'Multi-entity structures for asset protection, lines of business, and tax-efficient cash movement.',
          },
          {
            icon: 'flaticon-report',
            title: 'Multi-State & Nexus',
            desc: 'Footprint analysis, state registrations, and ongoing compliance across the states you actually operate in.',
          },
          {
            icon: 'flaticon-target',
            title: 'Reorganizations',
            desc: 'F-reorgs, conversions, mergers, and tax-free reorganizations coordinated with counsel.',
          },
        ]}
        sections={[
          {
            heading: 'Coordinated with counsel',
            body: 'Entity work touches tax, accounting, legal, and HR. Motta runs lead on the financial and tax side and partners with your attorney (or one of our trusted referrals) so the structure is implemented correctly and documented in one cohesive package.',
          },
          {
            heading: 'When to engage us',
            body: 'Before launching a new venture, before bringing on partners, before raising outside capital, before a state expansion, or before a contemplated sale. The earlier we\u2019re involved, the more options stay on the table.',
          },
        ]}
      />
    </Layout>
  );
}
