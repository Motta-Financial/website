import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';
import { ProConnectBlock } from '@/components/sections/IntuitCredentials';

export const metadata = {
  title: 'Small Business Tax Advisory | Motta Financial',
  description:
    'Year-round tax advisory built for small business owners — entity strategy, S-Corp elections, reasonable-compensation studies, quarterly estimates, payroll-tax compliance, and business returns, all handled by one team.',
};

export default function SmallBusinessTaxAdvisory() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Small Business Tax Advisory"
      breadcrumbEyebrow="Tax"
    >
      <ServiceDetailLayout
        currentHref="/services/tax/small-business"
        heroImage="/assets/img/services/services_details_small_business.png"
        title="Small Business Tax Advisory"
        lede="Most small business owners overpay tax simply because no one is looking at the whole picture before the year closes. Motta works alongside you year-round — choosing the right entity, structuring how you pay yourself, staying current on payroll and estimates, and filing accurate business returns — so the money you keep is the result of a plan, not an accident in April."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Entity & Structure Strategy',
            desc: 'LLC, S-Corp, or partnership — we model the trade-offs and put you in the structure that actually fits your profit and your goals.',
          },
          {
            icon: 'flaticon-profit',
            title: 'S-Corp Elections & Compliance',
            desc: 'We assess whether the election pays off, file it, set a defensible salary, run payroll, and keep it compliant year after year.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Quarterly Estimates & Planning',
            desc: 'No April surprises. We project your liability, time your estimates, and surface moves before deadlines pass.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Business Returns Done Right',
            desc: '1120-S, 1065, and Schedule C — prepared accurately, reconciled to your books, and filed on time.',
          },
        ]}
        sections={[
          {
            heading: 'Built for owners, not just filers',
            body: 'We work with single-member LLCs, partnerships, and S-corporations across the country from our Boston and Las Vegas offices. The common thread: owners who want a partner watching the numbers all year, not a preparer they meet once each spring. ALFRED Ai handles the heavy lifting on the return so your CPA can focus on the strategy that saves you money.',
          },
          {
            heading: 'The S-Corp question, answered honestly',
            body: 'For many profitable small businesses, electing S-corporation status legally lowers self-employment tax — but only when the numbers and the compliance discipline are right. Before we ever recommend it, we model your actual profit, set the worth-it threshold, and net the savings against the added costs. If it pays off, we handle the whole election end-to-end. Explore our dedicated S-Corp Elections & Compliance service to see exactly how it works.',
          },
          {
            heading: 'One team, year-round',
            body: 'Tax does not live in a vacuum. Because your tax advisor, bookkeeper, and payroll team all sit together at Motta, a change in one place updates everywhere — your reasonable salary, your estimates, your retirement contributions, and your QBI deduction all stay in sync. That coordination is where the real savings come from.',
          },
          {
            heading: 'Prepared on Intuit ProConnect',
            body: <ProConnectBlock />,
          },
        ]}
      />
    </Layout>
  );
}
