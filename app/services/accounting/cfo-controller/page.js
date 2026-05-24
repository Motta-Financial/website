import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'CFO & Controller Services | Motta Financial',
  description:
    'Fractional CFO and Controller services for growing businesses — strategic financial leadership without the full-time hire.',
};

export default function CFOController() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="CFO & Controller Services"
      breadcrumbEyebrow="Accounting"
    >
      <ServiceDetailLayout
        currentHref="/services/accounting/cfo-controller"
        heroImage="/assets/img/services/services_details02.jpg"
        title="CFO & Controller Services"
        lede="You need senior financial leadership but aren&apos;t ready for a full-time hire. Motta provides fractional CFOs and Controllers who integrate with your team, bring institutional knowledge from working with dozens of companies, and scale up or down as your business evolves."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Strategic Financial Planning',
            desc: 'Cash flow forecasting, budgeting, and scenario modeling to help you make confident decisions about growth, hiring, and investment.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Fundraising Support',
            desc: 'Financial models, due diligence prep, and investor-ready reporting for seed rounds through Series B and beyond.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Financial Operations',
            desc: 'Month-end close management, internal controls, and the processes that let you sleep at night knowing the numbers are right.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Board & Stakeholder Reporting',
            desc: 'Clear, professional financial presentations that tell your company&apos;s story to investors, boards, and lenders.',
          },
        ]}
        sections={[
          {
            heading: 'When it makes sense',
            body: 'You&apos;re past the startup phase and need real financial leadership — but a $300K+ CFO hire doesn&apos;t fit the budget or workload. Our fractional leaders plug in for 10-40 hours a month, scaling with your needs.',
          },
          {
            heading: 'How we work',
            body: 'We start with a diagnostic of your current financial operations, identify gaps, and build a roadmap. Your fractional CFO or Controller joins your team meetings, owns the financial function, and brings best practices from across our client base.',
          },
        ]}
      />
    </Layout>
  );
}
