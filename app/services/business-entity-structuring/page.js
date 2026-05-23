import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business Entity Setup | Motta Financial',
  description:
    'Pick the right entity from day one — LLC, S-Corp, C-Corp, or partnership — and structure things so taxes, liability, and future growth all line up.',
};

export default function EntityStructuring() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business Entity Setup"
      breadcrumbEyebrow="Business Services"
    >
      <ServiceDetailLayout
        currentHref="/services/business-entity-structuring"
        heroImage="/assets/img/services/services_details03.jpg"
        title="Business Entity Setup"
        lede="The way you set up your business on day one quietly decides how much tax you pay, how protected you are personally, and how easy it&apos;ll be to bring on partners or sell down the road. Motta helps you pick the right structure now — and adjust it as the business grows."
        bullets={[
          {
            icon: 'flaticon-investment',
            title: 'Pick the Right Entity',
            desc: 'LLC, S-Corp, C-Corp, or partnership — modeled against your income, plans, and what you want personally.',
          },
          {
            icon: 'flaticon-investment-1',
            title: 'Multiple-Business Setups',
            desc: 'A holding company, separate businesses, real estate in its own LLC — set up cleanly for protection and simpler taxes.',
          },
          {
            icon: 'flaticon-report',
            title: 'Multi-State Made Simple',
            desc: 'Selling or operating in more than one state? We handle registrations and ongoing filings so nothing slips.',
          },
          {
            icon: 'flaticon-target',
            title: 'Restructuring When Things Change',
            desc: 'Bringing on a partner, converting an LLC to an S-Corp, or preparing for a sale — coordinated with your attorney.',
          },
        ]}
        sections={[
          {
            heading: 'Coordinated with your attorney',
            body: 'Entity work touches taxes, accounting, and legal. Motta runs the financial and tax side and works with your attorney (or one of our trusted referrals) so the paperwork, the books, and the tax filings all match up — and you&apos;re not left putting the pieces together yourself.',
          },
          {
            heading: 'When to call us',
            body: 'Before you start a new business, before bringing on a partner or investor, before expanding to a new state, or before selling. The earlier we&apos;re involved, the more options you have — and the cheaper they are to put in place.',
          },
        ]}
      />
    </Layout>
  );
}
