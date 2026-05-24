import Layout from '@/components/layout/Layout';
import PartnershipsLayout from '@/components/partnerships/PartnershipsLayout';

export const metadata = {
  title: 'Partnerships | Motta Financial',
  description:
    'Motta Financial partners with financial advisors, fellow professional service firms, and academic institutions to deliver better outcomes for clients.',
};

export default function PartnershipsRouteLayout({ children }) {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Partnerships"
      breadcrumbEyebrow="Collaboration"
      breadcrumbTagline="Better outcomes happen when professionals work together"
      breadcrumbImage="/assets/img/partnerships/financial-advisors.jpg"
    >
      <PartnershipsLayout>{children}</PartnershipsLayout>
    </Layout>
  );
}
