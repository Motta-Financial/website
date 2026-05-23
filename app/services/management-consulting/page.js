import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Management Consulting | Motta Financial',
  description:
    'Operating-model design, AI workflow integration, KPI dashboards, and fractional CFO support for owner-led businesses ready to scale.',
};

export default function ManagementConsulting() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Management Consulting"
    >
      <ServiceDetailLayout
        currentHref="/services/management-consulting"
        heroImage="/assets/img/services/services_details01.jpg"
        title="Management Consulting"
        lede="Owner-led businesses hit the same ceiling for the same reasons — unclear roles, missing financial visibility, and processes that live in someone&apos;s head. Motta&apos;s consulting practice rewires the operating model: clean data, written workflows, AI where it actually pays, and a leadership cadence that makes the next stage of growth executable."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Operating-Model Design',
            desc: 'Org charts, RACI, and SOPs grounded in how your business actually makes money.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'KPI & Dashboards',
            desc: 'A finance-grade KPI stack tied to your books — not spreadsheets that go stale by Wednesday.',
          },
          {
            icon: 'flaticon-investment',
            title: 'AI Workflow Integration',
            desc: 'Practical automation across intake, document handling, reporting, and client communication using ALFRED Ai.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Fractional CFO',
            desc: 'Senior CFO leadership on a fractional basis — forecasting, capital strategy, and lender / investor management.',
          },
        ]}
        sections={[
          {
            heading: 'Where we engage',
            body: 'Most engagements start with a 30-day diagnostic: we map your operating model, financial close, and reporting cadence; identify the two or three changes that move the needle most; and propose a roadmap with owners and dates. From there we either execute alongside your team or hand the playbook back.',
          },
          {
            heading: 'Who we serve',
            body: 'Service businesses, professional firms, real-estate operators, and founder-led companies in the $2M–$50M revenue band that have outgrown bookkeeper-and-spreadsheet finance and need a real operating system to scale.',
          },
        ]}
      />
    </Layout>
  );
}
