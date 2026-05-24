import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Wealth Management | Motta Financial',
  description:
    'Comprehensive financial planning and investment management — retirement, estate planning, and the long-term strategy to build and protect wealth.',
};

export default function WealthManagement() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Wealth Management"
      breadcrumbEyebrow="Services"
    >
      <ServiceDetailLayout
        currentHref="/services/wealth-management"
        heroImage="/assets/img/services/services_details04.jpg"
        title="Wealth Management"
        lede="Building wealth is about more than picking investments — it&apos;s about aligning your money with your life. Motta provides comprehensive financial planning that coordinates your taxes, retirement, estate, and investments into one coherent strategy."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Financial Planning',
            desc: 'A comprehensive plan that answers the big questions — when can I retire, how much can I spend, and am I on track?',
          },
          {
            icon: 'flaticon-investment',
            title: 'Investment Management',
            desc: 'Portfolio construction and ongoing management aligned with your goals, risk tolerance, and tax situation.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Retirement Planning',
            desc: '401(k) optimization, Roth conversions, Social Security timing, and the withdrawal strategy that makes your money last.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Estate Planning Coordination',
            desc: 'Working with your estate attorney to ensure your wealth transfers efficiently — trusts, gifting strategies, and beneficiary planning.',
          },
        ]}
        sections={[
          {
            heading: 'Tax-smart wealth management',
            body: 'Because we also do your taxes, we see opportunities other advisors miss. Asset location, tax-loss harvesting, and timing decisions are all coordinated with your overall tax picture.',
          },
          {
            heading: 'Fee-only, fiduciary',
            body: 'We&apos;re legally required to act in your best interest. No commissions, no kickbacks, no conflicts — just advice you can trust.',
          },
        ]}
      />
    </Layout>
  );
}
