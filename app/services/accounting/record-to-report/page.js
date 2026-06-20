import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';
import ProcessCycleMap from '@/components/sections/ProcessCycleMap';

export const metadata = {
  title: 'Record-to-Report | Office of the CFO | Motta Financial',
  description:
    'The numbers — from sub-ledger close through consolidated, GAAP-grade financial statements. Powered by Motta monthly close, technical accounting, and Office of the CFO reporting.',
};

const GROUPS = [
  {
    no: '1.0',
    title: 'Close & Reconcile Subsidiary Ledgers',
    steps: [
      'Close / Cut-off Transaction Processing',
      'Close Transaction Systems Sub-Ledgers',
      'Transfer Sub-Ledger Data to GL',
      'Reconcile Sub-Ledgers to GL',
    ],
  },
  {
    no: '2.0',
    title: 'General Ledger Close',
    steps: [
      'Process Journal Entries',
      'Process Allocations',
      'Local Tax Calculations & Entries',
      'Perform Reconciliations',
    ],
  },
  {
    no: '3.0',
    title: 'Preliminary Financial Statements',
    steps: [
      'Review Trial Balance',
      'Review Preliminary Financial Statements',
      'Management & Corporate Adjustments',
      'Perform Financial Close Analysis',
      'Close General Ledger',
      'Perform Financial Close Forecast',
    ],
  },
  {
    no: '4.0',
    title: 'Financial Consolidation',
    steps: [
      'Transfer & Reconcile GL to Consolidation',
      'Process Currency Translations',
      'Process Intercompany Eliminations',
      'Process Consolidated Adjustments',
      'Consolidated Tax Calculations & Entries',
      'Close Corporate Consolidation Ledger',
    ],
  },
  {
    no: '5.0',
    title: 'Month End Reporting',
    steps: [
      'Prepare Consolidated Financial Statements',
      'Prepare & Distribute Management Reporting',
      'Executive & External Reporting',
      'Prepare Notes to the Financials',
      'Statutory Filings & Shareholder Reports',
      'Prepare & Distribute Regulatory Reports',
    ],
  },
  {
    no: '6.0',
    title: 'Technical Accounting',
    steps: [
      'Perform Accounting Research',
      'Scan Environment & Engage Standard-Setters',
      'Accounting Issue Identification & Monitoring',
      'Disclosure Management',
    ],
  },
  {
    no: '7.0',
    title: 'Manage Process',
    steps: [
      'Develop Close Calendar & Monitoring',
      'Close Policies, Procedures & Templates',
      'Develop & Maintain Internal Controls',
      'Issues Tracking & Resolution',
      'External Audit Management',
      'Evaluate & Implement Improvements',
    ],
  },
  {
    no: '8.0',
    title: 'System Maintenance',
    steps: [
      'Maintain System Interfaces',
      'Maintain Chart of Accounts',
      'Manage Business Rules & Master Data',
      'Perform System Updates',
    ],
  },
];

export default function RecordToReport() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Record-to-Report"
      breadcrumbEyebrow="Office of the CFO"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/record-to-report"
        heroImage="/assets/img/services/services_details05.jpg"
        title="Record-to-Report — The Numbers"
        lede="From sub-ledger close through consolidated, GAAP-grade financial statements — the monthly close that tells you where you really stand. Powered by Motta monthly close, technical accounting, and Office of the CFO reporting, with ALFRED Ai running the close checklist and reconciliations while technical judgment stays with our CPAs."
        bullets={[
          {
            icon: 'flaticon-pie-chart',
            title: 'A Disciplined Monthly Close',
            desc: 'A managed close calendar, reconciliations, and journal entries that deliver the numbers on a predictable schedule.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'GAAP-Grade Statements',
            desc: 'Consolidated, board-ready financial statements with proper notes, adjustments, and disclosures.',
          },
          {
            icon: 'flaticon-target',
            title: 'Technical Accounting Judgment',
            desc: 'CPAs handle research, standard-setting changes, and the judgment calls software cannot make.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Audit & Transaction Ready',
            desc: 'Internal controls and external audit management that keep your books ready for diligence or a transaction.',
          },
        ]}
        sections={[
          {
            heading: 'The full cycle',
            body: <ProcessCycleMap groups={GROUPS} />,
          },
          {
            heading: 'Where ALFRED Ai fits',
            body: 'ALFRED runs the close checklist and reconciliations and keeps the calendar moving, while technical judgment — revenue recognition, consolidations, disclosures, and standard-setting changes — stays firmly with our CPAs.',
          },
        ]}
      />
    </Layout>
  );
}
