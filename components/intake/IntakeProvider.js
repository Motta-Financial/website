'use client';

import { useEffect } from 'react';

/**
 * IntakeProvider — global listener that opens the intake form in a
 * separate window whenever any part of the app dispatches:
 *
 *   window.dispatchEvent(new CustomEvent('motta:open-intake', { detail: { source } }))
 *
 * The previous version of this provider mounted an in-page modal.
 * That worked, but the form is dense and the modal made it harder to
 * read on smaller laptops. We now open a dedicated /intake page in a
 * popup window so the prospect gets the full viewport for the form
 * while the marketing site stays open behind it.
 *
 * IntakeButton already handles direct clicks (so middle-click / cmd-
 * click work). This provider exists for the other entry points that
 * dispatch the event programmatically: TopBanner, AlfredCompanion,
 * IntakeFloatingButton, etc.
 */
const POPUP_FEATURES = [
  'noopener',
  'noreferrer',
  'width=1080',
  'height=920',
  'menubar=no',
  'toolbar=no',
  'location=no',
  'status=no',
].join(',');

function buildHref(source) {
  if (!source) return '/intake';
  return `/intake?source=${encodeURIComponent(source)}`;
}

export default function IntakeProvider({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    function onOpen(e) {
      const source = e?.detail?.source || null;
      const href = buildHref(source);
      // Reuse the same window name so repeated clicks focus the
      // existing intake popup instead of opening duplicates.
      const win = window.open(href, 'motta-intake', POPUP_FEATURES);
      if (!win) {
        // Popup blocked — fall back to same-tab navigation so the
        // prospect still reaches the form.
        window.location.assign(href);
      } else {
        win.focus();
      }
    }

    window.addEventListener('motta:open-intake', onOpen);
    return () => window.removeEventListener('motta:open-intake', onOpen);
  }, []);

  return children;
}
