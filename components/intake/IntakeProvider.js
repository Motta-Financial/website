'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * IntakeProvider — global listener that redirects to Motta's native
 * intake form whenever any part of the app dispatches:
 *
 *   window.dispatchEvent(new CustomEvent('motta:open-intake', { detail: { source } }))
 *
 * The intake form now lives natively on this site at /intake.
 * IntakeButton handles direct clicks; this provider covers the entry
 * points that dispatch the event programmatically: TopBanner,
 * AlfredCompanion, IntakeFloatingButton, etc.
 */
const INTAKE_URL = '/intake';

function buildHref(source) {
  if (!source) return INTAKE_URL;
  // Pass the originating surface through as a UTM tag for analytics.
  // The intake route ignores unknown params, so this is harmless.
  return `${INTAKE_URL}?utm_source=motta-website&utm_content=${encodeURIComponent(
    source
  )}`;
}

export default function IntakeProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    function onOpen(e) {
      const source = e?.detail?.source || null;
      // Client-side transition to the native intake route.
      router.push(buildHref(source));
    }

    window.addEventListener('motta:open-intake', onOpen);
    return () => window.removeEventListener('motta:open-intake', onOpen);
  }, [router]);

  return children;
}
