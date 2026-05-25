import { Inter, Outfit } from 'next/font/google';
import '/public/assets/css/animate.min.css';
import '/public/assets/css/bootstrap.min.css';
import '/public/assets/css/flaticon.css';
import '/public/assets/css/fontawesome-all.min.css';
import '/public/assets/css/magnific-popup.css';
import '/public/assets/css/odometer.css';
import '/public/assets/css/swiper-bundle.css';
import '/public/assets/css/aos.css';
import '/public/assets/css/default.css';
import '/public/assets/css/main.css';
import '/public/assets/css/motta.css';

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

export const metadata = {
  title: {
    default: 'Motta',
    template: '%s · Motta',
  },
  description:
    'Motta is a financial firm that pairs senior CPAs with ALFRED Ai to deliver tax, accounting, and advisory services with clarity and care.',
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
  // Safari pinned-tab + browser UI tinting. Sage matches our palette.
  themeColor: '#6B745D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
