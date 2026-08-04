'use client';

// Motta Hub public intake form.
// Synced with the canonical contract at v0-motta-hub:
//   - app/api/public/intake/route.ts (WebsiteIntakePayload type)
//   - app/embed/intake/page.tsx     (option vocabulary)
// Submits a FLAT JSON payload (not nested) and uses the renamed
// "website" honeypot field. Field options mirror the live wizard so
// the Karbon push / ALFRED enrichment downstream picks up the same
// values regardless of which surface a prospect filled out.

import { useEffect, useRef, useState } from 'react';
import { postToHub, hubErrorMessage } from '@/lib/hub';

const honeypotStyle = {
  position: 'absolute',
  left: '-9999px',
  width: 1,
  height: 1,
  opacity: 0,
};

const SERVICE_FOCUS_OPTIONS = [
  { value: '', label: 'How can we help?' },
  { value: 'Personal Only', label: 'Personal — individual taxes, planning, IRS support' },
  { value: 'Business Only', label: 'Business — bookkeeping, payroll, business taxes, formation' },
  { value: 'Both Personal & Business', label: 'Both personal & business' },
];

const PERSONAL_SERVICES = [
  'Tax Preparation',
  'Tax Planning & Advisory',
  'IRS Support & Resolution',
  'Financial Planning & Wealth Management',
];

const BUSINESS_SERVICES = [
  'Accounting & Bookkeeping',
  'Payroll Services',
  'Business Advisory',
  'LLC Formation',
  'Legal Entity Services',
];

const ENTITY_TYPES = [
  'Individual (1040)',
  'Single Member LLC (Sch C)',
  'Partnership (1065)',
  'S-Corp (1120-S)',
  'C-Corp (1120)',
  'Exempt Entity (990)',
];

const TAX_CLASSIFICATIONS = [
  'Sole Proprietorship',
  'LLC',
  'Partnership',
  'S-Corp',
  'C-Corp',
  'Nonprofit',
];

const REVENUE_RANGES = [
  'Under $50k',
  '$50k – $250k',
  '$250k – $500k',
  '$500k – $1M',
  '$1M+',
];

const BEHIND_ON_FILINGS_OPTIONS = [
  'No',
  'Yes — personal',
  'Yes — business',
  'Yes — both',
  'Not sure',
];

const PENDING_NOTICES_OPTIONS = ['No', 'Yes', 'Not sure'];

const CURRENT_CPA_OPTIONS = ['No', 'Yes'];

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH',
  'NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
  'VT','VA','WA','WV','WI','WY','PR',
];

// All intake bookings go to Caleb Long's Calendly link.
const CALEB_CALENDLY = 'https://calendly.com/caleb-long-mottafinancial';

function buildCalendlyUrl(baseUrl, { name, email, trackingId } = {}) {
  if (!baseUrl) return null;
  const params = new URLSearchParams();
  if (name) params.set('name', name);
  if (email) params.set('email', email);
  // Hide the Calendly nav chrome inside the embed so it feels native.
  params.set('hide_gdpr_banner', '1');
  params.set('hide_landing_page_details', '1');
  params.set('primary_color', '6B745D');
  // Tracking — the Hub's Calendly webhook handler reads
  // `payload.tracking.utm_*` from the invitee.created event to
  // deterministically join a booking back to the originating
  // prospect_submissions row. utm_content carries the row id;
  // utm_source/medium/campaign tag the surface so Hub analytics can
  // split website intake bookings out from other Calendly traffic.
  params.set('utm_source', 'motta-website');
  params.set('utm_medium', 'intake-form');
  params.set('utm_campaign', 'website-intake');
  if (trackingId) params.set('utm_content', trackingId);
  const qs = params.toString();
  return qs ? `${baseUrl}?${qs}` : baseUrl;
}

// Inline Calendly embed. Lazily loads Calendly's widget.js once per
// page lifecycle, then renders their official `.calendly-inline-widget`
// div with our prefilled data-url. The user never leaves the site.
// `onScheduled` fires when Calendly emits its `event_scheduled`
// postMessage, which is how we know the booking actually completed.
function CalendlyInline({ url, name, onScheduled }) {
  const containerRef = useRef(null);
  // Actual content height reported by Calendly. Null until the widget
  // tells us, so the frame can collapse to fit instead of showing a
  // fixed-height beige placeholder below the calendar.
  const [frameHeight, setFrameHeight] = useState(null);

  // Listen for Calendly postMessage events: `event_scheduled` confirms a
  // booking, and `page_height` reports the iframe's real content height
  // so we can size the frame to fit (no dead space underneath).
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    function isCalendlyEvent(e) {
      return (
        e?.origin === 'https://calendly.com' &&
        e?.data?.event &&
        typeof e.data.event === 'string' &&
        e.data.event.indexOf('calendly.') === 0
      );
    }
    function onMessage(e) {
      if (!isCalendlyEvent(e)) return;
      if (e.data.event === 'calendly.event_scheduled') {
        onScheduled?.(e.data?.payload || null);
      } else if (e.data.event === 'calendly.page_height') {
        const raw = e.data?.payload?.height;
        const px = typeof raw === 'string' ? parseInt(raw, 10) : raw;
        if (Number.isFinite(px) && px > 0) setFrameHeight(px);
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onScheduled]);

  useEffect(() => {
    if (!url || typeof window === 'undefined') return undefined;
    const SRC = 'https://assets.calendly.com/assets/external/widget.js';

    function ensureScript() {
      if (window.Calendly) return Promise.resolve();
      const existing = document.querySelector(`script[src="${SRC}"]`);
      if (existing) {
        return new Promise((resolve) => {
          existing.addEventListener('load', () => resolve(), { once: true });
        });
      }
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Calendly widget failed to load'));
        document.body.appendChild(script);
      });
    }

    let cancelled = false;
    ensureScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) return;
        // Clear any prior render then mount a fresh widget.
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
      })
      .catch(() => { /* swallow — manual link is shown as fallback */ });

    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!url) return null;

  return (
    <div className="motta-calendly-embed">
      {name ? (
        <p className="motta-calendly-embed__caption">
          Pick a time with <strong>{name}</strong>
        </p>
      ) : null}
      <div
        ref={containerRef}
        className={`motta-calendly-embed__frame${
          frameHeight ? ' is-sized' : ''
        }`}
        style={frameHeight ? { height: `${frameHeight}px` } : undefined}
        aria-label={name ? `Schedule a call with ${name}` : 'Schedule a call'}
      />
      <p className="motta-calendly-embed__fallback">
        Trouble seeing the calendar?{' '}
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}

function Pill({ checked, onChange, children }) {
  return (
    <label
      className={`motta-intake-pill${checked ? ' is-active' : ''}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="visually-hidden-input"
      />
      <span className="motta-intake-pill__check" aria-hidden="true">
        {checked ? '✓' : '+'}
      </span>
      <span>{children}</span>
    </label>
  );
}

function SectionCard({ step, total, eyebrow, title, sub, children }) {
  return (
    <section className="motta-intake-section" aria-labelledby={`intake-step-${step}`}>
      <header className="motta-intake-section__head">
        <div>
          <span className="motta-intake-section__eyebrow">
            <span className="motta-intake-section__progress">{`Step ${step} / ${total}`}</span>
            {eyebrow ? (
              <>
                <span className="motta-intake-section__eyebrow-sep" aria-hidden="true">·</span>
                {eyebrow}
              </>
            ) : null}
          </span>
          <h3 id={`intake-step-${step}`} className="motta-intake-section__title">
            {title}
          </h3>
          {sub ? <p className="motta-intake-section__sub">{sub}</p> : null}
        </div>
      </header>
      <div className="motta-intake-section__body">{children}</div>
    </section>
  );
}

export default function HubIntakeForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [serviceFocus, setServiceFocus] = useState('');
  const [services, setServices] = useState([]);
  const [servicesOther, setServicesOther] = useState('');
  const [entityTypes, setEntityTypes] = useState([]);
  const [entityTypesOther, setEntityTypesOther] = useState('');
  // Where we redirect after a successful intake. Captured at submit
  // time so we don't lose it if the form re-renders.
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [redirectName, setRedirectName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submittedFirstName, setSubmittedFirstName] = useState('');
  // Set once Calendly fires `calendly.event_scheduled`. When this
  // flips to true we swap the booking screen for a confirmation
  // panel from ALFRED Ai.
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const wantsBusiness =
    serviceFocus === 'Business Only' ||
    serviceFocus === 'Both Personal & Business';
  const wantsPersonal = serviceFocus !== 'Business Only';

  // Total visible sections: 1 you, 2 needs, [3 business when applicable], 3/4 details
  const totalSteps = wantsBusiness ? 4 : 3;

  function toggle(list, setter, value) {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const fd = new FormData(e.currentTarget);
    const get = (k) => (fd.get(k) || '').toString().trim();

    // Flat payload — matches WebsiteIntakePayload in the Hub repo
    // (app/api/public/intake/route.ts). Empty strings are dropped so
    // the route's `asString()` helper treats them as null.
    const payload = {
      first_name: get('first_name') || undefined,
      last_name: get('last_name') || undefined,
      email: get('email') || undefined,
      phone: get('phone') || undefined,
      street_address: get('street_address') || undefined,
      city: get('city') || undefined,
      state: get('state') || undefined,
      zip: get('zip') || undefined,

      service_focus: serviceFocus || undefined,
      services_requested: (() => {
        const list = [...services];
        if (services.includes('Other') && servicesOther.trim()) {
          const idx = list.indexOf('Other');
          list[idx] = `Other: ${servicesOther.trim()}`;
        }
        return list.length > 0 ? list : undefined;
      })(),
      entity_types: (() => {
        const list = [...entityTypes];
        if (entityTypes.includes('Other') && entityTypesOther.trim()) {
          const idx = list.indexOf('Other');
          list[idx] = `Other: ${entityTypesOther.trim()}`;
        }
        return list.length > 0 ? list : undefined;
      })(),

      business_name: get('business_name') || undefined,
      business_email: get('business_email') || undefined,
      business_phone: get('business_phone') || undefined,
      business_state: get('business_state') || undefined,
      business_tax_classification: get('business_tax_classification') || undefined,
      business_revenue_range: get('business_revenue_range') || undefined,
      business_employee_count: get('business_employee_count') || undefined,
      business_uses_accounting_system: get('business_uses_accounting_system') || undefined,
      business_summary: get('business_summary') || undefined,

      questions_or_concerns: get('questions_or_concerns') || undefined,
      additional_notes: get('additional_notes') || undefined,
      referral_source: get('referral_source') || undefined,

      behind_on_filings: get('behind_on_filings') || undefined,
      pending_tax_notices: get('pending_tax_notices') || undefined,
      current_cpa_status: get('current_cpa_status') || undefined,
      cpa_switch_reason: get('cpa_switch_reason') || undefined,

      page_url: typeof window !== 'undefined' ? window.location.href : undefined,
      website: get('website'), // honeypot — bots fill, real users leave empty
    };

    try {
      // The Hub returns the created row so we can use its id as a
      // deterministic correlation key for the eventual Calendly
      // booking. The shape is intentionally tolerant — fall back
      // through a few likely field names so a small Hub response
      // rename doesn't break this. If none match we still book; the
      // Hub-side webhook just falls back to email matching.
      const hubResponse = await postToHub('/api/public/intake', payload);
      const trackingId =
        hubResponse?.prospect_submission_id ||
        hubResponse?.submission_id ||
        hubResponse?.id ||
        hubResponse?.data?.id ||
        null;

      // All intake bookings go to Caleb Long's Calendly link.
      const fullName = [payload.first_name, payload.last_name]
        .filter(Boolean)
        .join(' ');
      const url = buildCalendlyUrl(CALEB_CALENDLY, {
        name: fullName,
        email: payload.email,
        trackingId,
      });

      setRedirectName('Caleb Long');
      setRedirectUrl(url);
      setSubmittedEmail(payload.email || '');
      setSubmittedFirstName(payload.first_name || '');
      setStatus('ok');
    } catch (err) {
      setError(hubErrorMessage(err));
      setStatus('error');
    }
  }

  if (status === 'ok' && bookingConfirmed) {
    const greeting = submittedFirstName ? `${submittedFirstName}, ` : '';
    const meetingWith = redirectName ? ` with ${redirectName}` : '';
    return (
      <div className="motta-intake-confirm" role="status" aria-live="polite">
        <header className="motta-intake-confirm__header">
          <span className="motta-intake-confirm__alfred">
            <span className="motta-intake-confirm__alfred-dot" aria-hidden="true" />
            ALFRED Ai
          </span>
          <span className="motta-intake-confirm__signal" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
        </header>

        <h3 className="motta-intake-confirm__title">
          {greeting}your call is on the books.
        </h3>
        <p className="motta-intake-confirm__lede">
          Nice work. Your discovery call{meetingWith} is confirmed and a
          calendar invite is on its way to{' '}
          <strong>{submittedEmail || 'your inbox'}</strong>. I&apos;ll quietly
          handle prep work in the background so the call itself can stay
          focused on you.
        </p>

        <ul className="motta-intake-confirm__steps">
          <li>
            <span className="motta-intake-confirm__step-num" aria-hidden="true">1</span>
            <div>
              <strong>Check your email.</strong> A confirmation from{' '}
              <span className="motta-intake-confirm__chip">ALFRED Ai</span>{' '}
              will arrive within a few minutes — including the call link, a
              short prep doc, and a reschedule link if anything changes.
            </div>
          </li>
          <li>
            <span className="motta-intake-confirm__step-num" aria-hidden="true">2</span>
            <div>
              <strong>Before the call.</strong> ALFRED enriches your profile
              with public filings, prior-year context where applicable, and
              the right Motta service playbook so we walk in informed.
            </div>
          </li>
          <li>
            <span className="motta-intake-confirm__step-num" aria-hidden="true">3</span>
            <div>
              <strong>On the call.</strong> 30 minutes, no fluff — we&apos;ll
              talk through your situation and confirm scope. If we&apos;re a
              fit, expect a fixed‑fee proposal within 48 hours.
            </div>
          </li>
        </ul>

        <p className="motta-intake-confirm__signoff">
          See you on the call,
          <br />
          <strong>ALFRED Ai</strong> · on behalf of the Motta team
        </p>

        <div className="motta-intake-confirm__cta-row">
          <a className="motta-intake-confirm__cta" href="/">
            Back to the homepage
            <span aria-hidden="true">→</span>
          </a>
          <a className="motta-intake-confirm__cta-secondary" href="/services">
            Explore our services
          </a>
        </div>
      </div>
    );
  }

  if (status === 'ok') {
    const bookingWith = redirectName ? ` with ${redirectName}` : '';
    return (
      <div className="motta-intake-success" role="status" aria-live="polite">
        <div className="motta-intake-success__badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h3 className="motta-intake-success__title">Welcome to Motta.</h3>
        <p className="motta-intake-success__lede">
          Your intake has been received and ALFRED is already preparing a
          research brief.{redirectUrl
            ? <> Pick a 30‑minute discovery call{bookingWith} below — your name and email are already filled in.</>
            : <> Someone from the Motta team will reach out within one business day to get a discovery call on the calendar.</>}
        </p>

        {redirectUrl ? (
          <CalendlyInline
            url={redirectUrl}
            name={redirectName}
            onScheduled={() => setBookingConfirmed(true)}
          />
        ) : null}

        <ol className="motta-intake-success__list" style={{ marginTop: 24 }}>
          <li>
            <strong>Right now.</strong>{' '}
            {redirectUrl
              ? <>Choose a time on the calendar above — confirmation lands in your inbox.</>
              : <>ALFRED is routing your intake to the right teammate and they&apos;ll be in touch shortly.</>}
          </li>
          <li>
            <strong>Within one business day.</strong> We&apos;ll confirm by
            email and share a short prep doc ahead of the call.
          </li>
          <li>
            <strong>Next steps.</strong> If we&apos;re a fit, we&apos;ll send
            a fixed‑fee proposal — usually within 48 hours of the call.
          </li>
        </ol>
      </div>
    );
  }

  const businessStep = 3;
  const detailsStep = wantsBusiness ? 4 : 3;

  return (
    <form onSubmit={onSubmit} noValidate className="motta-intake-form">
      {/* Honeypot — hidden, must stay empty */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        aria-hidden="true"
        style={honeypotStyle}
      />

      <p style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(43,47,36,0.52)', margin: '0 0 20px', letterSpacing: '0.01em' }}>
        Fields marked with <span style={{ color: '#c0392b', fontStyle: 'normal', fontWeight: 700 }}>*</span> are required.
      </p>

      <SectionCard
        step={1}
        total={totalSteps}
        eyebrow="Contact"
        title="Tell us who you are"
        sub="So we know who&apos;s reaching out and where to send a follow-up."
      >
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-first-name">First name <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <input id="intake-first-name" type="text" name="first_name" autoComplete="given-name" placeholder="e.g. Jane" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-last-name">Last name <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <input id="intake-last-name" type="text" name="last_name" autoComplete="family-name" placeholder="e.g. Smith" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-email">Email <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <input id="intake-email" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-phone">Phone</label>
              <input id="intake-phone" type="tel" name="phone" autoComplete="tel" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <label htmlFor="intake-street">Street address</label>
              <input id="intake-street" type="text" name="street_address" autoComplete="street-address" placeholder="123 Main St" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-grp">
              <label htmlFor="intake-city">City</label>
              <input id="intake-city" type="text" name="city" autoComplete="address-level2" placeholder="e.g. Austin" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <label htmlFor="intake-state">State</label>
              <select id="intake-state" name="state" defaultValue="" autoComplete="address-level1">
                <option value="" disabled>Select…</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-grp">
              <label htmlFor="intake-zip">ZIP</label>
              <input id="intake-zip" type="text" name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="78701" />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        step={2}
        total={totalSteps}
        eyebrow="Scope"
        title="What can Motta help with?"
        sub="Pick the lane that fits — we&apos;ll show the relevant follow-ups."
      >
        <div className="form-grp">
          <label htmlFor="intake-focus">Service focus <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <select
                id="intake-focus"
                name="service_focus_select"
                className={serviceFocus ? undefined : 'is-placeholder'}
                value={serviceFocus}
                onChange={(e) => setServiceFocus(e.target.value)}
                required
              >
            {SERVICE_FOCUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={!o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {!!serviceFocus && (
          <div className="motta-intake-pillgroup">
            <p className="motta-intake-pillgroup__label">
              Specific services (select any)
            </p>
            <div className="motta-intake-pillgroup__pills">
              {wantsPersonal &&
                PERSONAL_SERVICES.map((s) => (
                  <Pill
                    key={s}
                    checked={services.includes(s)}
                    onChange={() => toggle(services, setServices, s)}
                  >
                    {s}
                  </Pill>
                ))}
              {wantsBusiness &&
                BUSINESS_SERVICES.map((s) => (
                  <Pill
                    key={s}
                    checked={services.includes(s)}
                    onChange={() => toggle(services, setServices, s)}
                  >
                    {s}
                  </Pill>
                ))}
              <Pill
                checked={services.includes('Other')}
                onChange={() => {
                  toggle(services, setServices, 'Other');
                  if (services.includes('Other')) setServicesOther('');
                }}
              >
                Other
              </Pill>
            </div>
            {services.includes('Other') && (
              <div className="motta-intake-other-input">
                <input
                  type="text"
                  placeholder="Please describe…"
                  value={servicesOther}
                  onChange={(e) => setServicesOther(e.target.value)}
                  aria-label="Other service description"
                />
              </div>
            )}
          </div>
        )}

        <div className="motta-intake-pillgroup">
          <p className="motta-intake-pillgroup__label">
            Returns or filings (select any)
          </p>
          <div className="motta-intake-pillgroup__pills">
            {ENTITY_TYPES.map((t) => (
              <Pill
                key={t}
                checked={entityTypes.includes(t)}
                onChange={() => toggle(entityTypes, setEntityTypes, t)}
              >
                {t}
              </Pill>
            ))}
            <Pill
              checked={entityTypes.includes('Other')}
              onChange={() => {
                toggle(entityTypes, setEntityTypes, 'Other');
                if (entityTypes.includes('Other')) setEntityTypesOther('');
              }}
            >
              Other
            </Pill>
          </div>
          {entityTypes.includes('Other') && (
            <div className="motta-intake-other-input">
              <input
                type="text"
                placeholder="Please describe…"
                value={entityTypesOther}
                onChange={(e) => setEntityTypesOther(e.target.value)}
                aria-label="Other return or filing description"
              />
            </div>
          )}
        </div>
      </SectionCard>

      {wantsBusiness && (
        <SectionCard
          step={businessStep}
          total={totalSteps}
          eyebrow="Business"
          title="About your business"
          sub="A few quick details so we can scope the right team and tooling."
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-grp">
                <label htmlFor="biz-name">Business name</label>
                <input id="biz-name" type="text" name="business_name" autoComplete="organization" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <label htmlFor="biz-email">Business email</label>
                <input id="biz-email" type="email" name="business_email" placeholder="billing@yourcompany.com" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <label htmlFor="biz-phone">Business phone</label>
                <input id="biz-phone" type="tel" name="business_phone" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <label htmlFor="biz-state">Business state</label>
                <select id="biz-state" name="business_state" defaultValue="">
                  <option value="" disabled>Select…</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <label htmlFor="biz-class">Tax classification</label>
                <select id="biz-class" name="business_tax_classification" defaultValue="">
                  <option value="" disabled>Select…</option>
                  {TAX_CLASSIFICATIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <label htmlFor="biz-rev">Annual revenue</label>
                <select id="biz-rev" name="business_revenue_range" defaultValue="">
                  <option value="" disabled>Select…</option>
                  {REVENUE_RANGES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <label htmlFor="biz-team">Team size</label>
                <input id="biz-team" type="text" name="business_employee_count" placeholder="e.g. 5–10" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-grp">
                <label htmlFor="biz-acct">Accounting system</label>
                <input
                  id="biz-acct"
                  type="text"
                  name="business_uses_accounting_system"
                  placeholder="e.g. QuickBooks Online, Xero, none yet"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-grp">
                <label htmlFor="biz-summary">A brief overview of the business</label>
                <textarea id="biz-summary" name="business_summary" rows={3} placeholder="e.g. We run a 3-person e-commerce brand selling custom goods online. Looking for help with monthly bookkeeping and year-end taxes." />
              </div>
            </div>
          </div>
        </SectionCard>
      )}

      <SectionCard
        step={detailsStep}
        total={totalSteps}
        eyebrow="Context"
        title="What success looks like"
        sub="Share what&apos;s on your mind — the more we know, the better we scope."
      >
        <div className="form-grp">
          <label htmlFor="intake-questions">Questions, goals, or concerns</label>
          <textarea
            id="intake-questions"
            name="questions_or_concerns"
            rows={4}
            placeholder="Tell us about your current situation, questions you have, and what success looks like for you."
          />
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-behind">Are you currently behind on any tax filings? <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <select id="intake-behind" name="behind_on_filings" defaultValue="" required>
                <option value="" disabled>Select…</option>
                {BEHIND_ON_FILINGS_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-notices">Any pending IRS or state notices? <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <select id="intake-notices" name="pending_tax_notices" defaultValue="" required>
                <option value="" disabled>Select…</option>
                {PENDING_NOTICES_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-cpa">Do you currently work with a CPA or bookkeeper? <span style={{ color: '#c0392b' }} aria-label="required">*</span></label>
              <select id="intake-cpa" name="current_cpa_status" defaultValue="" required>
                <option value="" disabled>Select…</option>
                {CURRENT_CPA_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-switch">If you&apos;re switching, what&apos;s prompting the change?</label>
              <input id="intake-switch" type="text" name="cpa_switch_reason" placeholder="Optional" />
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-referral">Who referred you?</label>
              <input id="intake-referral" type="text" name="referral_source" placeholder="e.g. Google, a friend, LinkedIn" />
            </div>
          </div>
          <div className="col-md-6" />
        </div>
        <div className="form-grp">
          <label htmlFor="intake-notes">Anything else we should know</label>
          <textarea
            id="intake-notes"
            name="additional_notes"
            rows={3}
            placeholder="Timeline, deadlines, or anything else worth flagging"
          />
        </div>
      </SectionCard>

      <footer className="motta-intake-footer">
        <p className="motta-intake-footer__meta">
          From here, we&apos;ll get you on the calendar with the right person.
        </p>
        <button
          type="submit"
          className="btn motta-intake-submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting…' : 'Submit & schedule call'}
          {status === 'loading' ? (
            <span aria-hidden="true" className="motta-intake-submit__spinner" />
          ) : (
            <span aria-hidden="true" className="motta-intake-submit__arrow">→</span>
          )}
        </button>
      </footer>

      {status === 'error' && (
        <p className="motta-intake-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
