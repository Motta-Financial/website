import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Planning & Advisory | Motta Financial',
  description:
    'Holistic personal financial planning, retirement strategy, risk management, and investment advisory — coordinated with your tax, entity, and estate plan.',
};

export default function FinancialPlanning() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Planning & Advisory"
    >
      <ServiceDetailLayout
        currentHref="/services/financial-planning"
        heroImage="/assets/img/services/services_details04.jpg"
        title="Financial Planning & Advisory"
        lede="Most people don&apos;t need another product pitch — they need a coordinated plan. Motta builds a single financial plan that ties together your taxes, entities, cash flow, investments, insurance, and estate, so every decision moves the same number forward: your long-term net worth."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Goal-Based Planning',
            desc: 'Retirement, education, real-estate, and liquidity-event planning anchored to your actual goals.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Tax-Aware Investing',
            desc: 'Asset location, tax-loss harvesting, and Roth conversions modeled inside your full tax picture.',
          },
          {
            icon: 'flaticon-life-insurance',
            title: 'Risk & Insurance Review',
            desc: 'Independent review of life, disability, umbrella, and entity-level coverage — no product sales pressure.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Estate & Legacy',
            desc: 'Beneficiary design, gifting, and trust coordination with your attorney to reduce friction and tax leakage.',
          },
        ]}
        sections={[
          {
            heading: 'How a Motta plan is different',
            body: 'Your CPA, planner, and (when relevant) attorney are coordinated on one team — not three separate vendors handing you conflicting advice. We build the plan, model the tax impact, and review it with you on a recurring cadence so it actually gets executed.',
          },
          {
            heading: 'Who we serve',
            body: 'Founders and executives with concentrated stock or pre-IPO equity, business owners planning a transition, families coordinating multi-generational wealth, and professionals who want one team handling tax, planning, and entity work in lockstep.',
          },
        ]}
      />
    </Layout>
  );
}
