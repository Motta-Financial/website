import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'SaaS & Technology Advisory | Motta Financial',
  description:
    'Quote-to-Cash, AWS Marketplace, and ASC 606 revenue accounting advisory for SaaS and technology companies — billing modernization, audit-ready revenue recognition, and the financial infrastructure behind your revenue.',
};

export default function SaasTechAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="SaaS & Technology Advisory"
      breadcrumbEyebrow="Services"
    >
      <ServiceDetailLayout
        currentHref="/services/saas-tech-advisory"
        heroImage="/assets/img/services/services_details_saas.png"
        title="SaaS & Technology Advisory"
        lede="Where finance meets go-to-market. We help SaaS and technology companies bring clarity to the complexity of new sales channels, billing modernization, and audit-ready revenue recognition — the full arc from diagnosis to delivery, from the first quote to cash in the bank."
        bullets={[
          {
            icon: 'flaticon-investment',
            title: 'AWS Marketplace Launch & Optimization',
            desc: 'Stand up and scale an AWS Marketplace program across Direct, Channel Partner (CPPO), Distributor, and MSP motions — with commercial cost-benefit analysis, Quote-to-Cash process design, and listing-fee structuring built in.',
          },
          {
            icon: 'flaticon-target',
            title: 'Quote-to-Cash Assessment & Transformation',
            desc: 'An end-to-end read on your Quote-to-Cash lifecycle — diagnosing the root causes behind billing errors, collections gaps, and control failures — then a prioritized roadmap and hands-on support through implementation.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Revenue Accounting Advisory (ASC 606)',
            desc: 'ASC 606 compliance assessment and policy modernization for evolving SaaS models — bundled and multi-element arrangements and marketplace transactions — built to withstand external audit scrutiny.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Working Capital & Cash Flow',
            desc: 'Optimize billing cycles, collections effectiveness, and cash application to unlock incremental free cash flow from the revenue you have already earned.',
          },
        ]}
        sections={[
          {
            heading: 'Who this is for',
            body: 'Growth-stage and scaling SaaS and technology companies navigating new go-to-market channels, billing modernization, and audit-ready revenue recognition. If your revenue is outgrowing the systems and policies that support it — or you are entering AWS Marketplace, preparing for an audit, or cleaning up Quote-to-Cash before a raise or a sale — this is the engagement.',
          },
          {
            heading: 'AWS Marketplace, done right',
            body: 'Selling through AWS Marketplace changes how deals are quoted, billed, and recognized. We design the finance and operational infrastructure behind Direct, CPPO, Distributor, and MSP motions — mapping the commercial trade-offs, structuring listing fees, aligning the Quote-to-Cash process, and making sure marketplace transactions are recognized correctly under ASC 606.',
          },
          {
            heading: 'Fixing Quote-to-Cash at the root',
            body: 'Billing errors, invoice disputes, and slow collections are usually symptoms, not the disease. We assess the full lifecycle — quoting, order management, billing, AR, collections, and revenue recognition — diagnose the root causes, and deliver a prioritized transformation roadmap with hands-on support through systems implementation (quoting, billing automation, AR management, and revenue recognition platforms).',
          },
          {
            heading: 'Revenue recognition that survives the audit',
            body: 'Evolving pricing, bundled offerings, and multi-element and marketplace arrangements put pressure on ASC 606 compliance. We assess your current posture, modernize revenue recognition policies for where the business is heading, and build the operational readiness — documentation, controls, and SOX / SOC 1 and SOC 2 alignment — to withstand external audit scrutiny.',
          },
          {
            heading: 'A practitioner-led engagement',
            body: 'This practice is led by senior advisors with Big Four and in-house finance-operations backgrounds — including running global Order-to-Cash organizations, owning major billing and revenue-systems implementations, and supporting revenue diligence across acquisitions. You partner directly with Sales, RevOps, Product, and Legal so the numbers hold up, the controls are sound, and your resources fuel growth instead of friction.',
          },
        ]}
      />
    </Layout>
  );
}
