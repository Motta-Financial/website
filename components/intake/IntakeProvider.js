'use client';

import { useEffect } from 'react';

/**
 * IntakeProvider — global listener that redirects to Motta's legacy
 * intake form whenever any part of the app dispatches:
 *
 *   window.dispatchEvent(new CustomEvent('motta:open-intake', { detail: { source } }))
 *
 * The intake now lives on the legacy site at
 * https://www.mottafinancial.com/intake-form. IntakeButton handles
 * direct clicks; this provider covers the entry points that dispatch
 * the event programmatically: TopBanner, AlfredCompanion,
 * IntakeFloatingButton, etc.
 */
const LEGACY_INTAKE_URL = '/intake';

function buildHref(source) {
  if (!source) return LEGACY_INTAKE_URL;
  // Pass the originating surface through as a UTM tag for analytics.
  // The legacy form ignores unknown params, so this is harmless.
  return `${LEGACY_INTAKE_URL}?utm_source=motta-website&utm_content=${encodeURIComponent(
    source
  )}`;
}

export default function IntakeProvider({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    function onOpen(e) {
      const source = e?.detail?.source || null;
      // Redirect the current tab to the legacy intake form.
      window.location.assign(buildHref(source));
    }

    window.addEventListener('motta:open-intake', onOpen);
    return () => window.removeEventListener('motta:open-intake', onOpen);
  }, []);

  return children;
}
