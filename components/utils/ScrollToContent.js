'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scrolls to the #content anchor on page load, offset by the sticky header
 * height so the content starts cleanly below the nav.
 */
export default function ScrollToContent({ offset = 80 }) {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById('content');
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'instant' });
  }, [pathname, offset]);

  return null;
}
