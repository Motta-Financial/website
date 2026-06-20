import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Bookkeeping Services | Motta Financial',
  description:
    'Reliable monthly bookkeeping from senior accountants and a Platinum-tier Certified QuickBooks ProAdvisor firm — from small-business books to scaling operations. Categorized transactions, reconciled accounts, and books you can trust.',
};

/**
 * QuickBooks ProAdvisor co-brand block.
 *
 * Brand-compliance notes (per the QuickBooks ProAdvisor brand
 * guidelines the firm provided):
 *  - Motta's own brand stays at the forefront — this block sits inside
 *    a Motta-branded page and is presented as a contained credential,
 *    NOT a logo lockup or tagline.
 *  - The QuickBooks logo is rendered smaller than Motta's branding and
 *    is visually separated from the "ProAdvisor" status text.
 *  - The Platinum tier badge is used as-is (never cropped, recolored,
 *    or used in place of a profile photo / company logo).
 *  - "QuickBooks" is always spelled with a capital Q and B.
 */
function QuickBooksProAdvisorBlock() {
  return (
    <div
      style={{
        marginTop: 8,
        padding: '32px',
        background: '#ffffff',
        border: '1px solid rgba(107, 116, 93, 0.18)',
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 28,
        }}
      >
        <img
          src="/assets/img/partners/qb-proadvisor-platinum.png"
          alt="QuickBooks ProAdvisor Platinum tier badge"
          style={{ width: 132, height: 'auto', flexShrink: 0 }}
        />

        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h3 className="title-two" style={{ fontSize: 24, marginBottom: 10 }}>
            A Platinum-tier Certified QuickBooks ProAdvisor firm
          </h3>
          <p style={{ marginBottom: 18 }}>
            Motta Financial is a Certified QuickBooks ProAdvisor, recognized at
            the Platinum tier of the QuickBooks ProAdvisor Program. That means
            deep, certified expertise in QuickBooks Online — from initial setup
            and clean-up to day-to-day bookkeeping — and access to preferred
            pricing we can pass along to the businesses we serve.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              paddingTop: 16,
              borderTop: '1px solid rgba(107, 116, 93, 0.16)',
            }}
          >
            <img
              src="/assets/img/partners/intuit-quickbooks-logo.png"
              alt="Intuit QuickBooks"
              style={{ height: 30, width: 'auto' }}
            />
            <span style={{ fontSize: 13, color: 'rgba(43, 47, 36, 0.6)' }}>
              Independent Certified QuickBooks ProAdvisor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        lede="Clean books are the foundation of every good financial decision. Whether you're a small business owner who shouldn't have to wear the bookkeeper's hat too, or a scaling company that needs airtight monthly numbers, Motta handles your day-to-day bookkeeping with senior accountants who actually understand your business — backed by a Platinum-tier Certified QuickBooks ProAdvisor team. ALFRED Ai does the repetitive work so your accountant can focus on accuracy and insight."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'QuickBooks Online Setup & Cleanup',
            desc: 'We get your QuickBooks Online file set up correctly — chart of accounts, connected feeds, and a tidy starting point — or clean up the one you already have.',
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
            title: 'Month-End Close & Owner-Ready Reports',
            desc: 'Books closed within 10 business days of month-end, with a clean trial balance and plain-English reports you can actually use.',
          },
        ]}
        sections={[
          {
            heading: 'Certified QuickBooks expertise',
            body: <QuickBooksProAdvisorBlock />,
          },
          {
            heading: 'More than data entry',
            body: 'Anyone can categorize transactions. We bring accounting judgment — catching errors, flagging unusual items, and making sure your books tell an accurate story. When tax time comes, your CPA inherits clean data instead of a cleanup project.',
          },
          {
            heading: 'Built for small businesses, ready when you grow',
            body: 'Small businesses don\u2019t need enterprise complexity — they need books they can trust and answers they can understand. We keep things clean and straightforward in QuickBooks Online (or Xero, NetSuite, or Sage if that\u2019s where you already are). As your business scales, the same team can layer on financial reporting, payroll, and fractional CFO support — no switching firms, no starting over.',
          },
        ]}
      />
    </Layout>
  );
}
