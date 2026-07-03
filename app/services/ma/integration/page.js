import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Post-Close Integration & Synergy | Motta Financial',
  description:
    'Post-close M&A integration and synergy capture — a practical plan so the value you modeled in diligence actually shows up after the deal closes.',
};

export default function Integration() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Post-Close Integration & Synergy"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/integration"
        heroImage="/assets/img/services/integration-hero.jpg"
        title="Post-Close Integration & Synergy"
        lede="The deal closes and the real work begins. Most acquisitions underdeliver not because the thesis was wrong, but because integration stalls. Motta builds and helps execute the integration plan so the synergies you underwrote in diligence actually reach the bottom line."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Integration Planning',
            desc: 'A clear, sequenced plan with owners, timelines, and milestones — built before close so day one is organized, not chaotic.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Synergy Capture',
            desc: 'We translate modeled revenue and cost synergies into tracked, accountable initiatives — and measure whether they land.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Finance & Systems Integration',
            desc: 'Chart of accounts, reporting, and financial operations brought together so you get one clean, consolidated view quickly.',
          },
          {
            icon: 'flaticon-investment',
            title: 'KPI & Performance Tracking',
            desc: 'Dashboards and reporting that show whether the combined business is performing against the deal model.',
          },
        ]}
        sections={[
          {
            heading: 'From model to reality',
            body: 'Synergy numbers in a diligence model are a promise; integration is how you keep it. We connect the assumptions that justified the price to a concrete operating plan — defining the initiatives, assigning ownership, and tracking results against the model month over month.',
          },
          {
            heading: 'Experience that has done it before',
            body: 'Our team has handled operational synergy analyses and integration efforts on real acquisitions, standardized acquisition playbooks to codify responsibilities and timelines, and managed budgets across multi-entity organizations — so your integration follows a proven framework, not improvisation.',
          },
          {
            heading: 'Built to scale with serial acquirers',
            body: 'If you\u2019re acquiring repeatedly, we help codify a repeatable integration playbook — shortening lead time to value on every subsequent deal.',
          },
        ]}
      />
    </Layout>
  );
}
