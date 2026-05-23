import Layout from '@/components/layout/Layout';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';

export const metadata = {
  title: 'Business AI Transformation | Motta Financial',
  description:
    'Our AI-certified team rebuilds the way your business runs — replacing manual processes with smart automation so your people focus on growth, not paperwork.',
};

export default function BusinessAiTransformation() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Business AI Transformation"
      breadcrumbEyebrow="Powered by ALFRED Ai"
    >
      <ServiceDetailLayout
        currentHref="/services/business-ai-transformation"
        heroImage="/assets/img/services/services_details_ai_transformation.jpg"
        title="Business AI Transformation"
        lede="Most small businesses are running on a stack of spreadsheets, email threads, and steps that only one person knows how to do. Motta&apos;s AI-certified team comes in, looks at how the business actually works day-to-day, and rebuilds it — replacing manual processes with smart automation so your people spend their time on the work that grows the company."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Operations Audit',
            desc: 'We sit with your team, watch how work actually gets done, and map out where time, money, and attention are leaking.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Smart Automation',
            desc: 'Intake, document handling, billing, reporting, scheduling, and follow-ups handled by AI — built around the way your business runs.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'AI-Powered Workflows',
            desc: 'Customer messages, proposals, vendor coordination, and internal updates that draft themselves so your team can simply review and send.',
          },
          {
            icon: 'flaticon-light-bulb',
            title: 'Team Training & Adoption',
            desc: 'We don&apos;t hand you tools and disappear. Your people learn how to use them, own them, and get more out of them every month.',
          },
        ]}
        sections={[
          {
            heading: 'How an engagement looks',
            body: 'We start with a short discovery — usually a couple of working sessions where we walk through your business with you. Within a few weeks you get a clear plan: what to automate first, what it&apos;ll do for you, and what it&apos;ll cost. From there our team builds, deploys, and trains your people — and stays close so the system keeps improving.',
          },
          {
            heading: 'Who we work with',
            body: 'Owner-led businesses that have outgrown the spreadsheet-and-sticky-note phase: professional services firms, real-estate operators, e-commerce brands, healthcare practices, family offices, and non-profits. If you can describe a process that someone on your team does over and over, we can almost certainly take most of it off their plate.',
          },
          {
            heading: 'Why Motta',
            body: 'We built our own firm on AI first — ALFRED Ai runs our intake, our research, our reporting, and our internal operations. We&apos;re not consultants who read about AI; we&apos;re an AI-certified team that uses it every day to run a CPA practice, and we know what works in the real world.',
          },
        ]}
      />
    </Layout>
  );
}
