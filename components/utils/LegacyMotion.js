'use client';
import { useEffect } from 'react';
// Only the leftover template sections use these (the live pages don't), so they
// ship in this lazily loaded module instead of the global stylesheet bundle.
import '/public/assets/css/animate.min.css';
import '/public/assets/css/aos.css';

// Starts the scroll-reveal libraries for template sections that opt in with
// `data-aos` / `.wow`. Layout only renders this when such markup is on the page.
export default function LegacyMotion() {
  useEffect(() => {
    if (document.querySelector('[data-aos]')) {
      import('aos').then(({ default: Aos }) => Aos.init());
    }
    if (document.querySelector('.wow')) {
      import('wowjs').then((mod) => {
        const WOW = mod.WOW || mod.default?.WOW;
        window.wow = new WOW({ live: false });
        window.wow.init();
      });
    }
  }, []);
  return null;
}
