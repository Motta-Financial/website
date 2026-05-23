import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Tax Planning & Preparation | Motta Financial',
  description:
    'Year-round tax planning and stress-free filing for individuals, families, and business owners — with ALFRED Ai drafting your return in minutes so your CPA can focus on saving you money.',
};

export default function TaxPlanning() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Tax Planning & Preparation"
      breadcrumbEyebrow="Tax Services"
    >
      <ServiceDetailLayout
        currentHref="/services/tax-planning"
        heroImage="/assets/img/services/services_details01.jpg"
        title="Tax Planning & Preparation"
        lede="Most people only think about taxes once a year — and pay extra for it. Motta works with you year-round, looking at every big decision before it happens so the bill in April is the smallest one possible. ALFRED Ai handles the heavy lifting on your return so your CPA can focus on the strategy that actually saves you money."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Year-Round Planning',
            desc: 'Quarterly check-ins and proactive advice when life events happen — not a once-a-year filing rush.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Multi-State & Multi-Business',
            desc: 'Living in one state, working in another, or running businesses across state lines? We handle the moving pieces for you.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Stock Options & Equity',
            desc: 'RSUs, ISOs, ESPPs, and pre-IPO planning — explained in plain English and modeled before you make the move.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Returns in Minutes',
            desc: 'Our partner-grade access to Intuit ProConnect lets ALFRED Ai prepare your return in minutes — so you get a faster turnaround and a more attentive CPA.',
          },
        ]}
        sections={[
          {
            heading: 'Who we work with',
            body: 'Individuals, families, business owners, real-estate investors, employees with stock options, retirees, trusts and estates, and non-profits. We work nationally from offices in Boston and Las Vegas.',
          },
          {
            heading: 'How an engagement starts',
            body: 'It begins with a quick discovery call and a short intake form. We map out your tax picture, surface the savings hiding in plain sight, and pair you with a dedicated CPA. ALFRED Ai handles document collection and prep so your advisor can spend their time on the things only a human can do — explaining, planning, and looking around the corner for you.',
          },
        ]}
      />
    </Layout>
  );
}
