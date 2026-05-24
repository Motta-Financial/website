import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Tax Services | Motta Financial',
  description:
    'Year-round tax planning and preparation for individuals, families, and businesses — with ALFRED Ai handling the heavy lifting so your CPA can focus on strategy.',
};

export default function TaxServices() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Tax Services"
      breadcrumbEyebrow="Services"
    >
      <ServiceDetailLayout
        currentHref="/services/tax"
        heroImage="/assets/img/services/services_details01.jpg"
        title="Tax Services"
        lede="Most people only think about taxes once a year — and pay extra for it. Motta works with you year-round, looking at every big decision before it happens so the bill in April is the smallest one possible. ALFRED Ai handles the heavy lifting on your return so your CPA can focus on the strategy that actually saves you money."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Year-Round Planning',
            desc: 'Quarterly check-ins and proactive advice when life events happen — not a once-a-year filing rush.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Individual & Business Returns',
            desc: '1040s, 1120s, 1065s, 1041s, 990s — personal, business, trust, estate, and nonprofit returns prepared with care.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Multi-State & Complex Situations',
            desc: 'Living in one state, working in another, or running businesses across state lines? We handle the moving pieces.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Stock Options & Equity',
            desc: 'RSUs, ISOs, ESPPs, and pre-IPO planning — explained in plain English and modeled before you make the move.',
          },
        ]}
        sections={[
          {
            heading: 'Who we work with',
            body: 'Individuals, families, business owners, real-estate investors, employees with stock options, retirees, trusts and estates, and non-profits. We work nationally from offices in Boston and Las Vegas.',
          },
          {
            heading: 'Powered by ProConnect',
            body: 'Our partner-grade access to Intuit ProConnect lets ALFRED Ai prepare your return in minutes — so you get a faster turnaround and a more attentive CPA who can focus on the strategy that saves you money.',
          },
        ]}
      />
    </Layout>
  );
}
