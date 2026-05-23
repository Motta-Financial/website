'use client';

// Motta Hub public intake form.
// Synced with the canonical contract at v0-motta-hub:
//   - app/api/public/intake/route.ts (WebsiteIntakePayload type)
//   - app/embed/intake/page.tsx     (option vocabulary)
// Submits a FLAT JSON payload (not nested) and uses the renamed
// "website" honeypot field. Field options mirror the live wizard so
// the Karbon push / ALFRED enrichment downstream picks up the same
// values regardless of which surface a prospect filled out.

import { useState } from 'react';
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

const pillBase = {
  cursor: 'pointer',
  padding: '6px 14px',
  border: '1px solid var(--motta-sage, #6B745D)',
  borderRadius: 999,
  fontSize: 14,
  transition: 'all 0.2s ease',
  userSelect: 'none',
};

function Pill({ checked, onChange, children }) {
  return (
    <label
      style={{
        ...pillBase,
        background: checked ? 'var(--motta-sage, #6B745D)' : 'transparent',
        color: checked ? '#fff' : 'inherit',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      {children}
    </label>
  );
}

export default function HubIntakeForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [serviceFocus, setServiceFocus] = useState('');
  const [services, setServices] = useState([]);
  const [entityTypes, setEntityTypes] = useState([]);

  const wantsBusiness =
    serviceFocus === 'Business Only' ||
    serviceFocus === 'Both Personal & Business';
  const wantsPersonal =
    serviceFocus !== 'Business Only';

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
      preferred_team_member: get('preferred_team_member') || undefined,

      page_url: typeof window !== 'undefined' ? window.location.href : undefined,
      website: get('website'), // honeypot — bots fill, real users leave empty
    };

    try {
      await postToHub('/api/public/intake', payload);
      setStatus('ok');
    } catch (err) {
      setError(hubErrorMessage(err));
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="hub-form__success" role="status">
        <h3 className="title">Welcome to Motta.</h3>
        <p>
          Your intake has been received. ALFRED is preparing a research brief
          for our team right now — a teammate will follow up within one
          business day to schedule your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="hub-intake-form">
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

      <fieldset className="hub-intake-form__group">
        <legend className="title">About you</legend>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="first_name" placeholder="First name *" autoComplete="given-name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="last_name" placeholder="Last name *" autoComplete="family-name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" name="email" placeholder="Email *" autoComplete="email" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="tel" name="phone" placeholder="Phone" autoComplete="tel" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <input type="text" name="street_address" placeholder="Street address" autoComplete="street-address" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-grp">
              <input type="text" name="city" placeholder="City" autoComplete="address-level2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <select name="state" defaultValue="" autoComplete="address-level1">
                <option value="" disabled>State</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-grp">
              <input type="text" name="zip" placeholder="ZIP" inputMode="numeric" autoComplete="postal-code" />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="hub-intake-form__group">
        <legend className="title">What you need</legend>
        <div className="form-grp">
          <select
            name="service_focus_select"
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
          <div className="form-grp">
            <p style={{ marginBottom: 8, fontWeight: 600 }}>
              Which services are you interested in? (select any that apply)
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
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

        <div className="form-grp">
          <p style={{ marginBottom: 8, fontWeight: 600 }}>
            Returns or filings (select any that apply)
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
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
      </fieldset>

      {wantsBusiness && (
        <fieldset className="hub-intake-form__group">
          <legend className="title">Your business</legend>
          <div className="row">
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" name="business_name" placeholder="Business name" autoComplete="organization" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="email" name="business_email" placeholder="Business email" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <input type="tel" name="business_phone" placeholder="Business phone" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <select name="business_state" defaultValue="">
                  <option value="" disabled>Business state</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <select name="business_tax_classification" defaultValue="">
                  <option value="" disabled>Tax classification</option>
                  {TAX_CLASSIFICATIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <select name="business_revenue_range" defaultValue="">
                  <option value="" disabled>Annual revenue</option>
                  {REVENUE_RANGES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" name="business_employee_count" placeholder="Team size (e.g. 5–10)" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-grp">
                <input
                  type="text"
                  name="business_uses_accounting_system"
                  placeholder="Accounting system (e.g. QuickBooks Online, Xero, none yet)"
                />
              </div>
            </div>
          </div>
          <div className="form-grp">
            <textarea
              name="business_summary"
              placeholder="A brief overview of the business"
              rows={3}
            />
          </div>
        </fieldset>
      )}

      <fieldset className="hub-intake-form__group">
        <legend className="title">How can Motta help?</legend>
        <div className="form-grp">
          <textarea
            name="questions_or_concerns"
            placeholder="Tell us about your current situation, questions you have, and what success looks like for you."
            rows={4}
          />
        </div>
      </fieldset>

      <fieldset className="hub-intake-form__group">
        <legend className="title">Anything else</legend>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="referral_source" placeholder="Who referred you? (optional)" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="preferred_team_member" placeholder="Preferred Motta teammate (optional)" />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea
            name="additional_notes"
            placeholder="Timeline, deadlines, or anything else we should know"
            rows={3}
          />
        </div>
      </fieldset>

      <button type="submit" className="btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Submit intake'}
      </button>

      {status === 'error' && (
        <p className="hub-form__error" role="alert" style={{ marginTop: 16, color: '#b3261e' }}>
          {error}
        </p>
      )}
    </form>
  );
}
