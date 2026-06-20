import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Forensic Accounting | Office of the CFO | Motta Financial',
  description:
    'Forensic accounting and litigation support from Motta Financial — fraud investigation, asset tracing, economic damages, business valuation disputes, and expert-witness-ready reporting.',
};

export default function ForensicAccounting() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Forensic Accounting"
      breadcrumbEyebrow="Office of the CFO"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/forensic-accounting"
        heroImage="/assets/img/services/services_details_forensic.png"
        title="Forensic Accounting & Litigation Support"
        lede="When the numbers have to hold up under scrutiny — in a dispute, an investigation, or a courtroom — you need more than a bookkeeper. Motta digs into the transactions, reconstructs what actually happened, and produces findings that are clear, defensible, and built to withstand cross-examination."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Fraud Investigation',
            desc: 'Detect, quantify, and document financial fraud — skimming, embezzlement, false invoicing, and misappropriation — with a clear evidentiary trail from the source documents.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Asset Tracing & Recovery',
            desc: 'Follow the money across accounts, entities, and time periods to locate diverted or hidden assets and reconstruct the flow of funds.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Economic Damages',
            desc: 'Quantify lost profits, lost earnings, and business interruption losses with methodologies that stand up to opposing experts.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Disputes & Valuation',
            desc: 'Shareholder, partnership, and matrimonial disputes — including business valuation, distribution analysis, and the financial detail behind the disagreement.',
          },
        ]}
        sections={[
          {
            heading: 'When forensic accounting helps',
            body: 'Suspected fraud or theft inside the business, a partnership or shareholder dispute, a divorce involving a closely held company, an insurance or business-interruption claim, or pre-litigation diligence where someone needs to know what the records really say. The common thread: the financial facts are contested, and the answer has to be evidence-grade.',
          },
          {
            heading: 'How we work an engagement',
            body: 'We start by scoping the questions that actually need answering, then collect and preserve the underlying records — bank statements, ledgers, contracts, and system data. From there we reconstruct transactions, test them against the documentation, and quantify the impact. You receive a clear written report with the support behind every number, and we can serve as expert witness or consulting expert through deposition and trial.',
          },
          {
            heading: 'Built on the full Office of the CFO',
            body: 'Forensic work is sharper when the people doing it also know how real books are kept. Because our forensic engagements sit alongside our bookkeeping, controller, and CFO teams — and lean on ALFRED Ai to organize large volumes of transactions quickly — we move faster through the records and spend our senior hours on analysis and conclusions, not data entry.',
          },
          {
            heading: 'Independent and discreet',
            body: 'Many forensic matters are sensitive. We handle engagements with discretion, maintain independence and objectivity throughout, and coordinate directly with your attorney so the work product is structured appropriately from day one.',
          },
        ]}
      />
    </Layout>
  );
}
