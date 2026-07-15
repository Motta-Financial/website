import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';
import ProcessCycleMap from '@/components/sections/ProcessCycleMap';

export const metadata = {
  title: 'Procure-to-Pay | Office of the CFO | Motta Financial',
  description:
    'Money out, controlled end to end — from the first purchase requisition to a reconciled payment. Powered by Motta accounting, AP, and payroll with ALFRED Ai.',
};

const GROUPS = [
  {
    no: '1.0',
    title: 'Manage Purchasing Requirements',
    steps: [
      'Manage Purchase Requisitions',
      'Create & Approve Requisitions',
      'Manage Catalogs & Punch-out',
      'Consolidate & Validate Demand',
    ],
  },
  {
    no: '2.0',
    title: 'Sourcing & Supplier Management',
    steps: [
      'Identify & Qualify Suppliers',
      'Negotiate & Establish Contracts / Pricing',
      'Maintain Supplier Master Data',
      'Manage Supplier Risk & Compliance',
      'Evaluate Supplier Performance',
    ],
  },
  {
    no: '3.0',
    title: 'Purchase Order Management',
    steps: [
      'Create Purchase Order',
      'Review & Approve Purchase Order',
      'Transmit PO to Supplier',
      'Manage PO Changes & Cancellations',
      'Confirm Order Acknowledgement',
    ],
  },
  {
    no: '4.0',
    title: 'Receiving & Goods / Services',
    steps: [
      'Receive Goods & Services',
      'Inspect & Validate Receipt',
      'Record Goods Receipt',
      'Manage Returns & Discrepancies',
      'Manage Inventory Put-away',
    ],
  },
  {
    no: '5.0',
    title: 'Invoice Processing',
    steps: [
      'Receive & Capture Invoices',
      'Validate & Code Invoices',
      'Perform 2-Way / 3-Way Match',
      'Resolve Invoice Exceptions / Holds',
      'Process Non-PO Invoices',
      'Process Employee Expenses',
    ],
  },
  {
    no: '6.0',
    title: 'Payment Processing',
    steps: [
      'Schedule & Approve Payments',
      'Execute Payment Run',
      'Manage Payment Methods',
      'Process Manual & Urgent Payments',
      'Manage Discounts & Deductions',
    ],
  },
  {
    no: '7.0',
    title: 'Accounts Payable & Reconciliation',
    steps: [
      'Maintain AP Sub-Ledger',
      'Reconcile AP to GL & Statements',
      'Manage Aging & Open Liabilities',
      'Process Accruals & Period Close',
      'Manage Unclaimed Property / Escheatment',
    ],
  },
  {
    no: '8.0',
    title: 'Process Governance',
    steps: [
      'Develop & Communicate P2P Policies',
      'Develop & Maintain Internal Controls',
      'Issues Tracking & Resolution',
      'Evaluate & Implement Improvements',
    ],
  },
  {
    no: '9.0',
    title: 'System Maintenance',
    steps: [
      'Maintain System Interfaces',
      'Maintain Table Master Data',
      'Perform System Updates',
    ],
  },
];

export default function ProcureToPay() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Procure-to-Pay"
      breadcrumbEyebrow="Office of the CFO"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/procure-to-pay"
        heroImage="/assets/img/services/procure-to-pay-hero.jpg"
        title="Procure-to-Pay — Money Out"
        lede="From the first purchase requisition to a reconciled payment — every dollar that leaves your business, controlled and accounted for. Powered by Motta Accounting & Bookkeeping and Payroll Services (Gusto, ADP, Paychex), with ALFRED Ai capturing invoices and triaging AP exceptions while our advisors approve every payment."
        bullets={[
          {
            icon: 'flaticon-investment',
            title: 'Spend Under Control',
            desc: 'Requisitions, approvals, and PO matching that keep spend honest before money ever leaves the account.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'AP Run by Senior Accountants',
            desc: 'Invoice capture, coding, and 2-way / 3-way matching — exceptions triaged by ALFRED, payments approved by people.',
          },
          {
            icon: 'flaticon-target',
            title: 'Payroll Integrated',
            desc: 'Gusto, ADP, or Paychex payroll folded into the same money-out cycle and the same reconciled ledger.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Reconciled & Audit-Ready',
            desc: 'A clean AP sub-ledger reconciled to the GL, with accruals and period close handled every month.',
          },
        ]}
        sections={[
          {
            heading: 'The full cycle',
            body: <ProcessCycleMap groups={GROUPS} />,
          },
          {
            heading: 'Where ALFRED Ai fits',
            body: 'ALFRED captures invoices, codes them against the chart of accounts, and surfaces exceptions for review — so the busywork disappears and our advisors spend their time on approvals, vendor strategy, and controls. Humans approve every payment.',
          },
        ]}
      />
    </Layout>
  );
}
