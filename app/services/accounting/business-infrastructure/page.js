import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business Infrastructure Set Up & Optimization | Motta Financial',
  description:
    'Get your financial systems set up right from the start — or fix the mess you inherited. Chart of accounts, integrations, and workflows that scale.',
};

export default function BusinessInfrastructure() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business Infrastructure"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/business-infrastructure"
        heroImage="/assets/img/services/services_details02.jpg"
        title="Business Infrastructure Set Up & Optimization"
        lede="The right financial infrastructure makes everything else easier — clean data, automated workflows, and systems that talk to each other. Whether you&apos;re starting fresh or untangling years of workarounds, we build the foundation your business needs to scale."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Chart of Accounts Design',
            desc: 'A thoughtful structure that gives you the reporting you need without the complexity you don&apos;t — tailored to your industry and growth plans.',
          },
          {
            icon: 'flaticon-investment',
            title: 'System Selection & Implementation',
            desc: 'QuickBooks, Xero, NetSuite, or something else? We help you pick the right tool and set it up properly the first time.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Integration & Automation',
            desc: 'Connect your bank, payroll, billing, and expense systems so data flows automatically and reconciliation takes minutes, not days.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Process Documentation',
            desc: 'Written procedures for month-end close, AP/AR, and the workflows your team needs to run without you.',
          },
        ]}
        sections={[
          {
            heading: 'Starting a new business?',
            body: 'We&apos;ll set up your accounting system, connect your bank and payment processors, configure your chart of accounts, and document everything — so you start with clean books from day one.',
          },
          {
            heading: 'Inherited a mess?',
            body: 'We audit your current setup, identify what&apos;s broken or missing, and rebuild the foundation. Sometimes that means migrating to a new system; sometimes it means fixing what you have. Either way, you end up with infrastructure that works.',
          },
        ]}
      />
    </Layout>
  );
}
