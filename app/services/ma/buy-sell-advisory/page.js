import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Buy-Side & Sell-Side Advisory | Motta Financial',
  description:
    'End-to-end M&A advisory for the lower-middle market — sourcing, LOIs, valuation, negotiation, and close, with the discipline of an in-house corporate development team.',
};

export default function BuySellAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Buy-Side & Sell-Side Advisory"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/buy-sell-advisory"
        heroImage="/assets/img/services/buy-sell-advisory-hero.jpg"
        title="Buy-Side & Sell-Side Advisory"
        lede="Most owners go through the biggest transaction of their lives once. We have run dozens. Motta brings in-house corporate development discipline to both sides of the table — guiding buyers and sellers from first conversation through a signed, closed deal."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Sourcing & Pipeline',
            desc: 'Proprietary pipeline development and target outreach — the same prospecting engine that produced dozens of LOIs and completed acquisitions.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Valuation & Deal Structure',
            desc: 'Valuation, deal structuring, and terms that balance price, risk, and your after-tax outcome — coordinated with your tax and legal team.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Negotiation Support',
            desc: 'LOI through definitive agreement — we sit beside you in negotiations, armed with the model and the diligence to defend your position.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Process Management',
            desc: 'We run the transaction timeline and coordinate every workstream so the deal keeps moving and momentum is never lost.',
          },
        ]}
        sections={[
          {
            heading: 'For buyers',
            body: 'Whether you\u2019re a sponsor building a platform or an owner pursuing a strategic tuck-in, we help you find, value, and acquire the right business — and build the integration plan before you close so the thesis actually plays out.',
          },
          {
            heading: 'For sellers',
            body: 'Selling your business is personal and high-stakes. We prepare the company for market, position the story with data, manage buyer interest, and negotiate hard on your behalf — so you maximize value and close with confidence.',
          },
          {
            heading: 'Institutional rigor, without the layered fees',
            body: 'You get the model, the diligence, and the negotiation support that institutional buyers bring to every deal — delivered by a team that has executed transactions across sponsor-backed and platform organizations, scaled to the lower-middle market.',
          },
        ]}
      />
    </Layout>
  );
}
