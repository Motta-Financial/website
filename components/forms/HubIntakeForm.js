'use client';

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
  { value: '', label: 'What do you need help with? *' },
  { value: 'tax', label: 'Tax preparation & advisory' },
  { value: 'accounting', label: 'Accounting & bookkeeping' },
  { value: 'planning', label: 'Financial planning' },
  { value: 'multi', label: 'A combination — not sure yet' },
];

const ENTITY_TYPES = ['1040', '1120', '1120-S', '1065', '1041', '990'];

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY','DC','PR'
];

export default function HubIntakeForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [entityTypes, setEntityTypes] = useState([]);

  function toggleEntity(t) {
    setEntityTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const fd = new FormData(e.currentTarget);

    const get = (k) => (fd.get(k) || '').toString().trim();

    const payload = {
      submitter: {
        first_name: get('first_name'),
        last_name: get('last_name'),
        email: get('email'),
        phone: get('phone'),
        city: get('city'),
        state: get('state'),
        zip: get('zip'),
      },
      engagement: {
        service_focus: get('service_focus'),
        services_requested: get('services_requested')
          ? get('services_requested').split(',').map((s) => s.trim()).filter(Boolean)
          : [],
        entity_types: entityTypes,
      },
      business: {
        name: get('business_name'),
        email: get('business_email'),
        phone: get('business_phone'),
        state: get('business_state'),
        tax_classification: get('tax_classification'),
        revenue_range: get('revenue_range'),
        employee_count: get('employee_count'),
        uses_accounting_system: get('uses_accounting_system'),
        situation: get('situation'),
        summary: get('summary'),
      },
      notes: get('notes'),
      page_url: typeof window !== 'undefined' ? window.location.href : null,
      _hp: get('_hp'),
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
          Your intake has been received. A member of our team will reach out
          within one business day to schedule your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="hub-intake-form">
      <input
        type="text"
        name="_hp"
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
              <input type="text" name="first_name" placeholder="First name *" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="last_name" placeholder="Last name *" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" name="email" placeholder="Email *" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="tel" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-grp">
              <input type="text" name="city" placeholder="City" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <select name="state" defaultValue="">
                <option value="" disabled>
                  State
                </option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-grp">
              <input type="text" name="zip" placeholder="ZIP" inputMode="numeric" />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="hub-intake-form__group">
        <legend className="title">What you need</legend>
        <div className="form-grp">
          <select name="service_focus" defaultValue="" required>
            {SERVICE_FOCUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={!o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-grp">
          <p style={{ marginBottom: 8, fontWeight: 600 }}>
            Returns or filings (select any that apply)
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {ENTITY_TYPES.map((t) => {
              const checked = entityTypes.includes(t);
              return (
                <label
                  key={t}
                  style={{
                    cursor: 'pointer',
                    padding: '6px 14px',
                    border: '1px solid var(--motta-sage, #6B745D)',
                    borderRadius: 999,
                    background: checked ? 'var(--motta-sage, #6B745D)' : 'transparent',
                    color: checked ? '#fff' : 'inherit',
                    fontSize: 14,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleEntity(t)}
                    style={{ display: 'none' }}
                  />
                  {t}
                </label>
              );
            })}
          </div>
        </div>
        <div className="form-grp">
          <input
            type="text"
            name="services_requested"
            placeholder="Specific services requested (comma separated, e.g. tax planning, bookkeeping)"
          />
        </div>
      </fieldset>

      <fieldset className="hub-intake-form__group">
        <legend className="title">Your business (if applicable)</legend>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="business_name" placeholder="Business name" />
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
                <option value="" disabled>
                  Business state
                </option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <select name="tax_classification" defaultValue="">
                <option value="" disabled>
                  Tax classification
                </option>
                <option>Sole Proprietor</option>
                <option>Single-member LLC</option>
                <option>Partnership</option>
                <option>S-Corp</option>
                <option>C-Corp</option>
                <option>Nonprofit</option>
                <option>Trust / Estate</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <select name="revenue_range" defaultValue="">
                <option value="" disabled>
                  Annual revenue
                </option>
                <option>Under $100k</option>
                <option>$100k–$500k</option>
                <option>$500k–$1M</option>
                <option>$1M–$5M</option>
                <option>$5M–$25M</option>
                <option>$25M+</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <select name="employee_count" defaultValue="">
                <option value="" disabled>
                  Team size
                </option>
                <option>Just me</option>
                <option>2–4</option>
                <option>5–10</option>
                <option>11–25</option>
                <option>26–100</option>
                <option>100+</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <input
                type="text"
                name="uses_accounting_system"
                placeholder="Accounting system (e.g. QuickBooks Online, Xero, none)"
              />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea
            name="situation"
            placeholder="Briefly describe your current situation"
            rows={3}
          />
        </div>
        <div className="form-grp">
          <textarea name="summary" placeholder="What does success look like for you?" rows={3} />
        </div>
      </fieldset>

      <fieldset className="hub-intake-form__group">
        <legend className="title">Anything else</legend>
        <div className="form-grp">
          <textarea name="notes" placeholder="Referral source, timeline, deadlines, etc." rows={3} />
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
