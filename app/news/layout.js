import Layout from '@/components/layout/Layout';
import NewsLayout from '@/components/news/NewsLayout';

export const metadata = {
  title: 'News | Motta Financial',
  description:
    'Press releases, blog posts, announcements, and community involvement from Motta Financial.',
};

export default function NewsRouteLayout({ children }) {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="News"
      breadcrumbEyebrow="Newsroom"
      breadcrumbTagline="Press releases, blog posts, and stories from the Motta community"
    >
      <NewsLayout>{children}</NewsLayout>
    </Layout>
  );
}
