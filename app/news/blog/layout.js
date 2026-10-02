export const metadata = {
  title: 'Blog | Motta Financial',
  description:
    'Practical, plain-language notes from the Motta team — written for the founders, advisors, attorneys, and lenders we work with every day.',
  openGraph: {
    title: 'Blog | Motta Financial',
    description:
      'Practical, plain-language notes from the Motta team — written for the founders, advisors, attorneys, and lenders we work with every day.',
    type: 'website',
    siteName: 'Motta Financial',
  },
};

// This route's page is a client component, so its metadata lives in this layout.
export default function Layout({ children }) {
  return children;
}
