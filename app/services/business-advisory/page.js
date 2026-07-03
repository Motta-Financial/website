import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business Advisory | Motta Financial',
  description:
    'Strategic advice for business owners — entity structuring, growth planning, M&A support, and the guidance you need to make confident decisions.',
};

export default function BusinessAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business Advisory"
      breadcrumbEyebrow="Services"
    >
      <ServiceDetailLayout
        currentHref="/services/business-advisory"
        heroImage="/assets/img/services/business-advisory-hero.jpg"
        title="Business Advisory"
        lede="Running a business means making big decisions with incomplete information. Motta brings the financial expertise and outside perspective to help you think through what&apos;s next — whether you&apos;re starting up, scaling, or planning an exit."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Entity Structuring',
            desc: 'LLC, S-Corp, C-Corp, partnership — we help you pick the right structure and set it up properly for tax efficiency and liability protection.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Growth Planning',
            desc: 'Financial modeling, scenario analysis, and the strategic thinking that helps you grow profitably instead of just growing.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'M&A Support',
            desc: 'Buy-side and sell-side advisory — due diligence, valuation, deal structuring, and post-close integration.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Operational Improvement',
            desc: 'Pricing strategy, cost reduction, cash flow optimization, and the operational changes that show up on the bottom line.',
          },
        ]}
        sections={[
          {
            heading: 'More than just advice',
            body: 'We don&apos;t just tell you what to do — we help you do it. Our advisory engagements include implementation support, so recommendations actually become reality.',
          },
          {
            heading: 'Who we work with',
            body: 'Business owners at inflection points — starting a company, taking on investment, acquiring a competitor, or planning a sale. We work with companies from startup through $50M+ in revenue.',
          },
        ]}
      />
    </Layout>
  );
}
