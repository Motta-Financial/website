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
  { value: '', label: 'How can we help? *' },
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

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH',
  'NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
  'VT','VA','WA','WV','WI','WY','PR',
];

// Motta team members with their Calendly booking links. The `name`
// is what gets stored in the Hub's `preferred_team_member` column,
// so it should match how teammates are referred to elsewhere. After
// a successful intake submit we redirect to `calendly` with the
// prospect's name + email prefilled.
const TEAM_MEMBERS = [
  { name: 'Dat Le', calendly: 'https://calendly.com/dat-le-motta' },
  { name: 'Caleb Long', calendly: 'https://calendly.com/caleb-long-mottafinancial' },
  { name: 'Amy Sparaco', calendly: 'https://calendly.com/amy-sparaco-mottafinancial' },
  { name: 'Andrew Gianares', calendly: 'https://calendly.com/andrew-gianares-mottafinancial' },
  { name: 'Micaela Palacios', calendly: 'https://calendly.com/micaela-palacios-mottafinancial' },
  { name: 'Mark Dwyer', calendly: 'https://calendly.com/mark-dwyer-motta' },
];

const NO_PREFERENCE = 'No preference — match me with a teammate';

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

  // Listen for Calendly postMessage events. We only care about
  // `calendly.event_scheduled` — that's the booking-confirmed signal.
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
        className="motta-calendly-embed__frame"
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
        <span className="motta-intake-section__step" aria-hidden="true">
          <span className="motta-intake-section__step-num">{step}</span>
          <span className="motta-intake-section__step-of">of {total}</span>
        </span>
        <div>
          {eyebrow ? (
            <span className="motta-intake-section__eyebrow">{eyebrow}</span>
          ) : null}
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
  const [entityTypes, setEntityTypes] = useState([]);
  const [preferredTeamMember, setPreferredTeamMember] = useState('');
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
      services_requested: services.length > 0 ? services : undefined,
      entity_types: entityTypes.length > 0 ? entityTypes : undefined,

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
      preferred_team_member: preferredTeamMember || undefined,

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

      // Resolve a Calendly redirect: use the chosen teammate's link,
      // or fall back to Caleb (general intake) when "no preference"
      // is selected, so every prospect lands on a booking page.
      const chosen = TEAM_MEMBERS.find((t) => t.name === preferredTeamMember);
      const fallback = TEAM_MEMBERS.find((t) => t.name === 'Caleb Long');
      const target = chosen || fallback;
      const fullName = [payload.first_name, payload.last_name]
        .filter(Boolean)
        .join(' ');
      const url = buildCalendlyUrl(target?.calendly, {
        name: fullName,
        email: payload.email,
        trackingId,
      });

      setRedirectName(target?.name || '');
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
            : <> We&apos;ll be in touch within one business day to schedule a 30‑minute discovery call.</>}
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
              : <>ALFRED routes your intake to the right teammate.</>}
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
              <label htmlFor="intake-first-name">First name *</label>
              <input id="intake-first-name" type="text" name="first_name" autoComplete="given-name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-last-name">Last name *</label>
              <input id="intake-last-name" type="text" name="last_name" autoComplete="family-name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-email">Email *</label>
              <input id="intake-email" type="email" name="email" autoComplete="email" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-phone">Phone</label>
              <input id="intake-phone" type="tel" name="phone" autoComplete="tel" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <label htmlFor="intake-street">Street address</label>
              <input id="intake-street" type="text" name="street_address" autoComplete="street-address" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-grp">
              <label htmlFor="intake-city">City</label>
              <input id="intake-city" type="text" name="city" autoComplete="address-level2" />
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
              <input id="intake-zip" type="text" name="zip" inputMode="numeric" autoComplete="postal-code" />
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
          <label htmlFor="intake-focus">Service focus *</label>
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

        {(wantsPersonal || wantsBusiness) && (
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
            </div>
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
          </div>
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
                <input id="biz-email" type="email" name="business_email" />
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
                <textarea id="biz-summary" name="business_summary" rows={3} />
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
              <label htmlFor="intake-referral">Who referred you?</label>
              <input id="intake-referral" type="text" name="referral_source" placeholder="Optional" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="intake-team">Preferred Motta teammate</label>
              <select
                id="intake-team"
                name="preferred_team_member"
                className={preferredTeamMember ? undefined : 'is-placeholder'}
                value={preferredTeamMember}
                onChange={(e) => setPreferredTeamMember(e.target.value)}
              >
                <option value="">{NO_PREFERENCE}</option>
                {TEAM_MEMBERS.map((t) => (
                  <option key={t.name} value={t.name}>{t.name}</option>
                ))}
              </select>
            </div>
          </div>
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
          <span aria-hidden="true">⏱</span> Takes ~3 minutes ·{' '}
          <span aria-hidden="true">🔒</span> Encrypted in transit ·{' '}
          Pick a time on the next screen — no leaving this page
        </p>
        <button
          type="submit"
          className="btn motta-intake-submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting…' : 'Submit & schedule call'}
          <span aria-hidden="true" className="motta-intake-submit__arrow">→</span>
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
