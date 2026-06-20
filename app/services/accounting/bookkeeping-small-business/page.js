import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Bookkeeping for Small Business | Motta Financial',
  description:
    'Small-business bookkeeping from a Platinum-tier Certified QuickBooks ProAdvisor firm. Clean monthly books, QuickBooks Online setup and support, and senior accountants who know your business.',
};

/**
 * QuickBooks ProAdvisor co-brand block.
 *
 * Brand-compliance notes (per the QuickBooks ProAdvisor brand
 * guidelines PDF the firm provided):
 *  - Motta's own brand stays at the forefront — this block sits inside
 *    a Motta-branded page/header and is presented as a contained
 *    credential, NOT a logo lockup or tagline.
 *  - The QuickBooks logo is rendered smaller than Motta's branding and
 *    is visually separated from the "ProAdvisor" status text.
 *  - The Platinum tier badge is used as-is (never cropped, recolored,
 *    or used in place of a profile photo / company logo).
 *  - Neither the logo nor the badge sits on a busy background or inside
 *    a tight containing shape around the logo itself.
 *  - "QuickBooks" is always spelled with a capital Q and B; no "QB"
 *    or "QBO" abbreviations. Only approved phrasing is used
 *    ("Certified QuickBooks ProAdvisor", "QuickBooks Online", etc.).
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
        {/* Platinum tier badge — used exactly as supplied by Intuit. */}
        <img
          src="/assets/img/partners/qb-proadvisor-platinum.png"
          alt="QuickBooks ProAdvisor Platinum tier badge"
          style={{ width: 132, height: 'auto', flexShrink: 0 }}
        />

        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h3
            className="title-two"
            style={{ fontSize: 24, marginBottom: 10 }}
          >
            A Platinum-tier Certified QuickBooks ProAdvisor firm
          </h3>
          <p style={{ marginBottom: 18 }}>
            Motta Financial is a Certified QuickBooks ProAdvisor, recognized
            at the Platinum tier of the QuickBooks ProAdvisor Program. That
            means deep, certified expertise in QuickBooks Online — from initial
            setup and clean-up to day-to-day bookkeeping — and access to
            preferred pricing we can pass along to the small businesses we
            serve.
          </p>

          {/* QuickBooks logo: deliberately modest in size and separated
              from the status text above, per brand guidelines. */}
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
            <span
              style={{
                fontSize: 13,
                color: 'rgba(43, 47, 36, 0.6)',
              }}
            >
              Independent Certified QuickBooks ProAdvisor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookkeepingSmallBusiness() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Bookkeeping for Small Business"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/bookkeeping-small-business"
        heroImage="/assets/img/services/services_details_small_business.png"
        title="Bookkeeping for Small Business"
        lede="Running a small business means wearing every hat — you shouldn't have to wear the bookkeeper's too. Motta gives small businesses clean, reliable monthly books backed by senior accountants and a Platinum-tier Certified QuickBooks ProAdvisor team. You get accurate numbers, real-time visibility, and a partner who understands where you're headed."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'QuickBooks Online Setup & Cleanup',
            desc: 'We get your QuickBooks Online file set up correctly — chart of accounts, connected feeds, and a tidy starting point — or clean up the one you already have.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Monthly Bookkeeping & Reconciliation',
            desc: 'Categorized transactions and reconciled bank and credit card accounts every month, so your numbers always match reality.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Invoicing & Bill Pay',
            desc: 'Accounts receivable and payable handled inside QuickBooks — invoice follow-up, vendor bills, and the cash flow tasks that keep a small business running.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Owner-Ready Reports',
            desc: 'Simple, plain-English monthly reports that tell you how the business is actually doing — and a CPA to talk them through with you.',
          },
        ]}
        sections={[
          {
            heading: 'Certified QuickBooks expertise',
            body: <QuickBooksProAdvisorBlock />,
          },
          {
            heading: 'Built for how small businesses actually work',
            body: 'Small businesses don\u2019t need enterprise complexity — they need books they can trust and answers they can understand. We keep things clean and straightforward in QuickBooks Online, and because ALFRED Ai handles the repetitive work, your accountant spends their time on accuracy and advice instead of data entry.',
          },
          {
            heading: 'Ready when you grow',
            body: 'As your business scales, your accounting can scale with it. The same team that keeps your books today can layer on financial reporting, payroll, and fractional CFO support tomorrow — no switching firms, no starting over.',
          },
        ]}
      />
    </Layout>
  );
}
