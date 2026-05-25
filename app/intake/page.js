import HubIntakeForm from '@/components/forms/HubIntakeForm';
import IntakePageChrome from '@/components/intake/IntakePageChrome';

export const metadata = {
  title: 'New Client Intake — Motta',
  description:
    'Share a few details about your situation and our team — with a little help from ALFRED Ai — will follow up within one business day.',
};

/**
 * /intake — standalone, easy-to-read full-page intake.
 *
 * Mounted as its own route so it can be opened in a separate browser
 * window (see IntakeProvider). This intentionally does NOT include the
 * site header/footer — when popped open via window.open() the user is
 * focused on filling out the form, not navigating the marketing site.
 *
 * If a visitor lands here directly (typed URL, shared link, search),
 * IntakePageChrome adds a subtle "Back to motta.cpa" rail so they
 * still have a way out.
 */
export default function IntakePage({ searchParams }) {
  // Allow callers to pre-populate or annotate the submission with a
  // source tag, e.g. /intake?source=header. Surfaced in the eyebrow.
  const source =
    typeof searchParams?.source === 'string' ? searchParams.source : null;

  return (
    <IntakePageChrome source={source}>
      <HubIntakeForm />
    </IntakePageChrome>
  );
}
