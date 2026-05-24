import Layout from '@/components/layout/Layout';
import AlfredProductPage from '@/components/sections/AlfredProductPage';

export const metadata = {
  title: 'ALFRED Ai | Practice Management Platform for Professional Services',
  description:
    'ALFRED Ai connects your firm\'s existing tools into one intelligent workspace — centralized client data, live dashboards, and an AI assistant that knows your clients.',
  openGraph: {
    title: 'ALFRED Ai | Practice Management Platform',
    description:
      'The AI platform that connects everything your firm runs on. Live dashboards, unified client data, and intelligent automation for CPA firms, financial planners, lawyers, and professional services.',
  },
};

export default function AlfredPage() {
  return (
    <Layout headerStyle={5} footerStyle={1}>
      <AlfredProductPage />
    </Layout>
  );
}
