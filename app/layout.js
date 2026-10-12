import { Inter, Outfit } from 'next/font/google';
import '/public/assets/css/bootstrap.min.css';
import '/public/assets/css/flaticon.css';
// Trimmed to the icons the site actually uses (see scripts/build-fa-subset.mjs);
// the full fontawesome-all.min.css stays in the repo as the source for it.
import '/public/assets/css/fontawesome-subset.css';
import '/public/assets/css/swiper-bundle.css';
import '/public/assets/css/default.css';
import '/public/assets/css/main.css';
import '/public/assets/css/motta.css';
import { getSiteUrl } from '@/lib/site';
import { SOCIAL_LIST } from '@/lib/socials';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tg-body-font-family',
  display: 'swap',
});
const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tg-heading-font-family',
  display: 'swap',
});

const SITE_URL = getSiteUrl();

export const metadata = {
  // Resolves every relative canonical / Open Graph URL below and in child pages.
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Motta Financial — Tech-Forward CPAs. Powered by ALFRED Ai.',
    // Page titles already end in "| Motta Financial"; the old '%s · Motta'
    // template turned them into "… | Motta Financial · Motta".
    template: '%s',
  },
  description:
    'Motta is a financial firm that pairs senior CPAs with ALFRED Ai to deliver tax, accounting, and advisory services with clarity and care.',
  // './' resolves to each page's own URL.
  alternates: { canonical: './' },
  openGraph: { siteName: 'Motta Financial', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  // Next.js auto-discovers `app/icon.png` + `app/apple-icon.png`, but
  // we also pin them here so RSS readers, link unfurls, and browsers
  // that don't honor the file convention still get the lotus mark.
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: ['/icon.png'],
  },
};

// Safari / mobile browser UI tinting. Sage matches our palette. (In Next 14
// this belongs in `viewport`; inside `metadata` it is dropped and warns.)
export const viewport = {
  themeColor: '#6B745D',
};

// Offices and contact details are the ones in the site footer. No telephone on
// purpose: the header and footer list different numbers.
const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Motta Financial',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo/logo.png`,
  description:
    'Tech-forward CPA firm offering proactive tax strategy, accounting, and advisory services, powered by ALFRED Ai.',
  email: 'Info@MottaFinancial.com',
  sameAs: SOCIAL_LIST.map((social) => social.url),
  location: [
    {
      '@type': 'Place',
      name: 'Motta Financial — Boston',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '101 Federal St., Suite 1900',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        postalCode: '02110',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Motta Financial — Las Vegas',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9205 West Russell Road, Building 3, Suite 240',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89148',
        addressCountry: 'US',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <script
          type="application/ld+json"
          // `<` is escaped so the JSON can never close the script tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
