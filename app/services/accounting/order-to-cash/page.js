import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';
import ProcessCycleMap from '@/components/sections/ProcessCycleMap';

export const metadata = {
  title: 'Order-to-Cash | Office of the CFO | Motta Financial',
  description:
    'Money in — from a new customer and a quote to cash in the bank and revenue recognized correctly. Powered by Motta bookkeeping, QuickBooks setup, and fractional CFO reporting.',
};

const GROUPS = [
  {
    no: '1.0',
    title: 'Manage Customer',
    steps: [
      'Establish New Customer',
      'Maintain Customer Master Data',
      'Validate Customer Transaction Tax Data',
      'Manage Customer Contracts',
    ],
  },
  {
    no: '2.0',
    title: 'Manage Customer Credit Portfolio',
    steps: [
      'Establish Methodology & Credit Limits',
      'Suspend / Reinstate Accounts',
      'Maintain Customer Credit Limits',
      'Analyze & Revise Credit Portfolio',
      'Manage Customer Securities',
    ],
  },
  {
    no: '3.0',
    title: 'Product / Service Management',
    steps: [
      'Add New Products & Services',
      'Validate Transaction Tax Data',
      'Review & Update Pricing',
    ],
  },
  {
    no: '4.0',
    title: 'Quote & Order Management',
    steps: [
      'Develop Quote',
      'Review, Approve & Distribute Quote',
      'Receive, Enter & Validate Order',
      'Check Credit Availability',
      'Confirm Inventory / Out of Stock',
      'Confirm Order',
    ],
  },
  {
    no: '5.0',
    title: 'Invoice Management',
    steps: [
      'Receive Order Fulfillment Information',
      'Generate, Review & Approve Invoices',
      'Distribute Invoices',
      'Review Overwritten Prices & Terms',
      'Pricing Rebates & Sales Allowance',
    ],
  },
  {
    no: '6.0',
    title: 'Customer Service',
    steps: [
      'Manage Customer Inquiry / Dispute',
      'Manage Returns',
      'Process Warranty Claims',
      'Measure & Evaluate Satisfaction',
      'Customer Self Service',
    ],
  },
  {
    no: '7.0',
    title: 'Cash Applications',
    steps: [
      'Process Payments (Lockbox / Electronic)',
      'Prepare Bank Deposits',
      'Reconcile Unapplied / Misapplied Payments',
      'Record Deductions When Approved',
      'Process Credit / Debit Memos',
    ],
  },
  {
    no: '8.0',
    title: 'Collections Management',
    steps: [
      'Review AR Aging Reports',
      'Perform Collection Activity',
      'Escalate / Follow Up',
      'Process Charge Backs & Write-offs',
      'Calculate Penalties on Past-Due',
    ],
  },
  {
    no: '9.0',
    title: 'Month End',
    steps: [
      'Close AR Sub-Ledger & Reconcile to GL',
      'Bank Reconciliations & Adjustments',
      'Perform Revenue Recognition Accounting',
      'Record Bad Debt & Reserves',
    ],
  },
  {
    no: '10.0',
    title: 'A/R Analysis',
    steps: [
      'Perform Revenue & AR Analysis',
      'Perform Revenue & AR Forecasting',
      'Perform Customer Risk Analysis',
    ],
  },
  {
    no: '11.0',
    title: 'Manage Process',
    steps: [
      'Develop & Communicate Risk Policies',
      'Develop & Maintain Internal Controls',
      'Issues Tracking & Resolution',
      'Evaluate & Implement Improvements',
    ],
  },
  {
    no: '12.0',
    title: 'System Maintenance',
    steps: [
      'Maintain System Interfaces',
      'Maintain Table Master Data',
      'Perform System Updates',
    ],
  },
];

export default function OrderToCash() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Order-to-Cash"
      breadcrumbEyebrow="Office of the CFO"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/order-to-cash"
        heroImage="/assets/img/services/services_details04.jpg"
        title="Order-to-Cash — Money In"
        lede="From a new customer and a quote to cash in the bank and revenue recognized — the cycle that funds your growth. Powered by Motta Bookkeeping, QuickBooks setup, and Fractional CFO reporting, with ALFRED Ai surfacing AR aging and cash-flow signals while collections strategy stays human."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Quote to Cash',
            desc: 'Clean order, invoice, and cash-application workflows so revenue turns into deposited cash without leakage.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'AR & Collections Visibility',
            desc: 'ALFRED surfaces aging and at-risk balances; our team runs a deliberate, relationship-aware collections strategy.',
          },
          {
            icon: 'flaticon-profit',
            title: 'Revenue Recognized Correctly',
            desc: 'Revenue recognition handled to GAAP at month end, with reserves and bad-debt treated properly.',
          },
          {
            icon: 'flaticon-target',
            title: 'Cash-Flow Forecasting',
            desc: 'Forward-looking AR analysis and forecasting that feeds directly into your CFO reporting and planning.',
          },
        ]}
        sections={[
          {
            heading: 'The full cycle',
            body: <ProcessCycleMap groups={GROUPS} />,
          },
          {
            heading: 'Where ALFRED Ai fits',
            body: 'ALFRED watches AR aging and cash-flow signals in real time and flags what needs attention, while the human side of the cycle — credit decisions, customer relationships, and collections strategy — stays with your advisors.',
          },
        ]}
      />
    </Layout>
  );
}
