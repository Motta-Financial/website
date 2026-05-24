import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Bookkeeping Services | Motta Financial',
  description:
    'Reliable monthly bookkeeping from senior accountants — categorized transactions, reconciled accounts, and books you can trust.',
};

export default function Bookkeeping() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Bookkeeping"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/bookkeeping"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Bookkeeping"
        lede="Clean books are the foundation of every good financial decision. Motta handles your day-to-day bookkeeping with senior accountants who actually understand your business — not offshore teams or algorithms alone. ALFRED Ai does the repetitive work so your accountant can focus on accuracy and insight."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Transaction Categorization',
            desc: 'Every transaction properly coded to your chart of accounts, with consistent treatment month over month.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Bank & Credit Card Reconciliation',
            desc: 'Monthly reconciliation of all accounts so you know the numbers match reality — no surprises at year-end.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Accounts Payable & Receivable',
            desc: 'Bill tracking, vendor payments, invoice follow-up, and the cash management tasks that keep operations running.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Month-End Close',
            desc: 'Books closed within 10 business days of month-end, with a clean trial balance and any adjustments documented.',
          },
        ]}
        sections={[
          {
            heading: 'More than data entry',
            body: 'Anyone can categorize transactions. We bring accounting judgment — catching errors, flagging unusual items, and making sure your books tell an accurate story. When tax time comes, your CPA inherits clean data instead of a cleanup project.',
          },
          {
            heading: 'Works with your systems',
            body: 'QuickBooks Online, Xero, NetSuite, Sage — we work in whatever platform you&apos;re already using. If you need to migrate, we handle that too.',
          },
        ]}
      />
    </Layout>
  );
}
