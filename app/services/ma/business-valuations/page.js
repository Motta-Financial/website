import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business Valuations (409A & Transaction) | Motta Financial',
  description:
    'Defensible 409A and transaction business valuations for the lower-middle market — rigorous, driver-based modeling led by Motta\u2019s M&A practice, with a free real-time BizEquity valuation to get you started.',
};

const BizEquityCallout = (
  <div
    style={{
      marginTop: 6,
      padding: '28px 32px',
      background: '#fff',
      border: '1px solid rgba(107,116,93,0.18)',
      borderRadius: 12,
    }}
  >
    <img
      src="/assets/img/partners/bizequity-logo.png"
      alt="BizEquity"
      style={{ height: 34, width: 'auto', marginBottom: 16 }}
    />
    <p>
      Not sure where to start? Before we open a formal engagement, we can run a
      complimentary, real-time business valuation through BizEquity. Its 7-step
      process generates a comprehensive estimate in a fraction of the time of
      traditional methods — measuring your value across multiple approaches and
      benchmarking you against others in your industry, so you walk into the
      conversation already knowing roughly where you stand.
    </p>
    <p style={{ marginBottom: 0 }}>
      Think of it as the on-ramp. When you need a number that has to stand up to
      auditors, the IRS, a board, or a buyer, we take it from there with a
      formal valuation.
    </p>
  </div>
);

export default function BusinessValuations() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business Valuations"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/business-valuations"
        heroImage="/assets/img/services/business-valuations-hero.jpg"
        title="Business Valuations (409A & Transaction)"
        lede="Whether you're pricing equity awards, planning a transaction, or simply need to know what your business is worth, valuation is where every deal starts. Motta delivers defensible, transaction-ready valuations built on the same rigorous, driver-based modeling institutional buyers expect — led by a corporate development team that has sat on the other side of the table."
        bullets={[
          {
            icon: 'flaticon-investment',
            title: '409A Valuations',
            desc: 'Independent, audit-ready 409A valuations to support common stock and equity-award pricing for private companies — defensible and documented.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Transaction Valuations',
            desc: 'Deal-ready valuations for buying, selling, or raising capital — DCF, comparable companies, and precedent-transaction approaches reconciled into a clear range.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Purpose-Built Analysis',
            desc: 'Valuations tailored to the decision in front of you — gift and estate, buy-sell agreements, partner buyouts, or strategic planning.',
          },
          {
            icon: 'flaticon-target',
            title: 'Defensible Methodology',
            desc: 'Clearly documented assumptions, multiple valuation methods, and the supporting model — so the number holds up under scrutiny.',
          },
        ]}
        sections={[
          {
            heading: 'Formal valuations you can stand behind',
            body: 'A valuation is only as good as the work behind it. We build a driver-based operating model, reconcile multiple valuation approaches, and document every assumption so the conclusion is defensible to auditors, the IRS, boards, and counterparties. This is the work that supports real decisions — equity awards, transactions, and ownership transitions.',
          },
          {
            heading: 'Start free with a BizEquity valuation',
            body: BizEquityCallout,
          },
          {
            heading: 'Who this is for',
            body: 'Founders pricing option grants, owners weighing a sale or partner buyout, sponsors validating a purchase price, and families planning gift and estate transfers. If a number needs to be both credible and defensible, we can deliver it.',
          },
        ]}
      />
    </Layout>
  );
}
