import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Planning | Motta Financial',
  description:
    'A single plan that connects your taxes, investments, retirement, and estate — led by a CFP through Motta Wealth Management.',
};

export default function FinancialPlanning() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Planning"
      breadcrumbEyebrow="Personal Wealth"
    >
      <ServiceDetailLayout
        currentHref="/services/financial-planning"
        heroImage="/assets/img/services/services_details04.jpg"
        title="Financial Planning"
        lede="You don&apos;t need another product pitch — you need one plan that ties everything together. Motta builds a single financial plan that connects your taxes, investments, retirement, insurance, and estate, so every decision moves the same number forward: your long-term net worth."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Goals First',
            desc: 'Retirement, kids&apos; education, a second home, leaving a legacy — we plan around the things you actually care about.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Tax-Smart Investing',
            desc: 'Where you hold what, when to harvest losses, and when a Roth conversion makes sense — modeled inside your full tax picture.',
          },
          {
            icon: 'flaticon-life-insurance',
            title: 'Insurance Review',
            desc: 'Honest review of life, disability, and umbrella coverage — no commission, no product sales pressure.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Estate & Legacy',
            desc: 'Beneficiaries, gifting, and trust coordination with your attorney so your wishes get carried out without surprises.',
          },
        ]}
        sections={[
          {
            heading: 'How a Motta plan is different',
            body: 'Your CPA, planner, and (when it matters) your attorney are all on one team — not three separate vendors handing you conflicting advice. We build the plan, model how taxes affect each move, and check in with you on a regular cadence so the plan actually gets followed.',
          },
          {
            heading: 'Who we work with',
            body: 'Founders and executives with stock options, business owners thinking about a transition, families coordinating wealth across generations, and professionals who simply want one team handling taxes, planning, and investments together.',
          },
        ]}
      />
    </Layout>
  );
}
