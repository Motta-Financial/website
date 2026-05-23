import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Accounting & Payroll | Motta Financial',
  description:
    'Clean books, on-time payroll, monthly reporting, and a fractional CFO when you need one — handled by senior accountants with ALFRED Ai doing the heavy lifting in the background.',
};

export default function AccountingAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Accounting & Payroll"
      breadcrumbEyebrow="Accounting Services"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting-advisory"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Accounting & Payroll"
        lede="If you can&apos;t trust the numbers, you can&apos;t make a good decision. Motta keeps your books clean and your payroll on time, then layers on the simple reporting most firms skip — so every month you actually understand what your business is doing and where it&apos;s headed."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Monthly Bookkeeping',
            desc: 'Categorized transactions, reconciled accounts, and financials you can hand to a banker or board without rework.',
          },
          {
            icon: 'flaticon-report',
            title: 'Reports You Actually Read',
            desc: 'Plain-English monthly summaries with the few numbers that matter most for your business — not a 40-page download.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Payroll & Compliance',
            desc: 'Multi-state payroll, contractors, 1099s, and a smooth move off whatever payroll system has been frustrating you.',
          },
          {
            icon: 'flaticon-target',
            title: 'Fractional CFO',
            desc: 'When you need a senior finance leader for cash planning, forecasting, or a fundraise — without hiring full-time.',
          },
        ]}
        sections={[
          {
            heading: 'Works with the tools you already use',
            body: 'QuickBooks Online, Xero, NetSuite, Gusto, Rippling, Bill.com — we plug in to whatever you&apos;re already running. ALFRED Ai connects to your bank, payroll, and expense systems so the books stay current without anyone chasing receipts.',
          },
          {
            heading: 'When it makes sense',
            body: 'You&apos;re a small business or growing company that needs more than a part-time bookkeeper but isn&apos;t ready to hire a controller. Motta drops in as the senior accounting team you don&apos;t have to recruit — and you only pay for what you actually need.',
          },
        ]}
      />
    </Layout>
  );
}
