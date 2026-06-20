import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Financial Modeling & Investment Memos | Motta Financial',
  description:
    'Driver-based operating models, pro-forma scenarios, and board- and committee-ready investment memos that stand up to institutional scrutiny.',
};

export default function FinancialModeling() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Financial Modeling & Investment Memos"
      breadcrumbEyebrow="Mergers & Acquisitions"
    >
      <ServiceDetailLayout
        currentHref="/services/ma/financial-modeling"
        heroImage="/assets/img/services/services_details_graph01.jpg"
        title="Financial Modeling & Investment Memos"
        lede="Big decisions deserve more than a spreadsheet of guesses. Motta builds driver-based financial models and the investment memos that turn them into decisions — the same deliverables used to win board approval, secure capital, and close acquisitions."
        bullets={[
          {
            icon: 'flaticon-financial-profit',
            title: 'Driver-Based Models',
            desc: 'Operating models built on the levers that actually move your business — so you can test assumptions instead of hard-coding hope.',
          },
          {
            icon: 'flaticon-pie-chart',
            title: 'Pro-Forma & Scenarios',
            desc: 'Acquisition pro-formas, synergy cases, and downside scenarios that show the range of outcomes before you commit.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Investment Memos',
            desc: 'Clear, persuasive memos that frame the opportunity, the risks, and the recommendation for boards, committees, and lenders.',
          },
          {
            icon: 'flaticon-target',
            title: 'Board & Committee Materials',
            desc: 'Acquisition committee decks and board presentations that communicate the analysis with institutional polish.',
          },
        ]}
        sections={[
          {
            heading: 'Models that earn trust',
            body: 'Our team built a high-growth company\u2019s first driver-based financial model, created a new division\u2019s launch model for board approval, and led commercial business-case modeling that supported 43% topline growth. We bring that same Wall Street Prep\u2013grade discipline to your model — clean structure, transparent assumptions, and outputs you can defend.',
          },
          {
            heading: 'Memos that drive decisions',
            body: 'A model is only useful if decision-makers act on it. We translate the analysis into investment memorandums and committee materials that frame the thesis, quantify the risks, and make a clear recommendation — the documents that get deals and budgets approved.',
          },
          {
            heading: 'When to bring us in',
            body: 'Raising capital, evaluating an acquisition, launching a new line of business, or overhauling a strategic plan — any time the numbers need to support a high-stakes decision and stand up to scrutiny.',
          },
        ]}
      />
    </Layout>
  );
}
