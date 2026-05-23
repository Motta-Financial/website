import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Management Consulting | Motta Financial',
  description:
    'Operating-model design, simple KPI dashboards, and fractional CFO support for owner-led businesses ready for the next stage of growth.',
};

export default function ManagementConsulting() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Management Consulting"
      breadcrumbEyebrow="Business Advisory"
    >
      <ServiceDetailLayout
        currentHref="/services/management-consulting"
        heroImage="/assets/img/services/services_details01.jpg"
        title="Management Consulting"
        lede="Owner-led businesses tend to hit the same wall for the same reasons — unclear roles, no real visibility into the numbers, and key processes that only live in one person&apos;s head. Motta&apos;s consulting team helps you fix the operating model: clean numbers, written processes, the right tools, and a leadership rhythm that makes the next stage of growth doable."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Clear Roles & Processes',
            desc: 'Org chart, who-does-what, and step-by-step playbooks built around how your business actually makes money.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Simple KPI Dashboards',
            desc: 'A short list of numbers tied directly to your books — not a spreadsheet that goes stale by Wednesday.',
          },
          {
            icon: 'flaticon-investment',
            title: 'AI Where It Pays Off',
            desc: 'Practical automation across intake, documents, reporting, and client communication using ALFRED Ai.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Fractional CFO',
            desc: 'A senior CFO on a part-time basis — for cash forecasting, planning, and conversations with banks or investors.',
          },
        ]}
        sections={[
          {
            heading: 'How an engagement starts',
            body: 'Most engagements begin with a 30-day diagnostic: we look at how your business is run, your monthly numbers, and your reporting rhythm; we point at the two or three changes that would move the needle most; and we hand you a plan with owners and dates. From there we either run alongside your team or hand the playbook back.',
          },
          {
            heading: 'Who we work with',
            body: 'Service businesses, professional firms, real-estate operators, and founder-led companies that have outgrown bookkeeper-and-spreadsheet finance and need a real operating system to scale to the next stage.',
          },
        ]}
      />
    </Layout>
  );
}
