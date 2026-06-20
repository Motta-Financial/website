import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'M&A Due Diligence | Motta Financial',
  description:
    'Buy-side and sell-side M&A due diligence — financial, operational, and commercial analysis that surfaces risk and protects value before you sign.',
};

export default function DueDiligence() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="M&A Due Diligence"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/due-diligence"
        heroImage="/assets/img/services/services_details04.jpg"
        title="M&A Due Diligence"
        lede="Diligence is where deals are won, repriced, or walked away from. Motta runs a disciplined, cross-functional diligence process — built from years of executing acquisitions in-house — that surfaces the risks and the upside before you commit capital or sign a deal."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Financial Diligence',
            desc: 'Historical performance, revenue and margin trends, working-capital dynamics, and the adjustments that change what you are really buying.',
          },
          {
            icon: 'flaticon-target',
            title: 'Operational Diligence',
            desc: 'How the business actually runs — systems, KPIs, customer and payor concentration, and the operational dependencies that affect value.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Commercial & Market Analysis',
            desc: 'Market sizing, competitive positioning, and growth assumptions stress-tested against third-party data.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Vendor Coordination',
            desc: 'We engage and manage third-party diligence providers — legal, tax, QofE — so the workstreams move in parallel and nothing slips.',
          },
        ]}
        sections={[
          {
            heading: 'Buy-side: know before you close',
            body: 'For buyers, we quantify revenue and cost synergies, pressure-test the seller\u2019s numbers, and translate findings into purchase-price and structure recommendations. Our team has dissected complex billing datasets and built the internal models that committees rely on to approve deals.',
          },
          {
            heading: 'Sell-side: no surprises',
            body: 'For sellers, we run diligence before the buyer does — identifying and addressing the issues that erode value or stall a process, so you walk into negotiations prepared and protect your price.',
          },
          {
            heading: 'How we work',
            body: 'We scope the diligence to the deal, build a request list, manage the data room and third-party vendors, and deliver clear findings and committee-ready materials — the same playbook used to close dozens of transactions.',
          },
        ]}
      />
    </Layout>
  );
}
