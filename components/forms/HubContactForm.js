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

export default function HubContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | ok | error
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: (fd.get('full_name') || '').toString().trim(),
      email: (fd.get('email') || '').toString().trim(),
      phone: (fd.get('phone') || '').toString().trim(),
      company: (fd.get('company') || '').toString().trim(),
      subject: (fd.get('subject') || '').toString().trim(),
      message: (fd.get('message') || '').toString().trim(),
      page_url: typeof window !== 'undefined' ? window.location.href : null,
      _hp: (fd.get('_hp') || '').toString(),
    };
    try {
      await postToHub('/api/public/contact', payload);
      setStatus('ok');
    } catch (err) {
      setError(hubErrorMessage(err));
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="hub-form__success" role="status">
        <h3 className="title">Thanks — we&apos;ll be in touch shortly.</h3>
        <p>Your message has been delivered to the Motta team.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* honeypot */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        aria-hidden="true"
        style={honeypotStyle}
      />

      <div className="form-grp">
        <textarea
          name="message"
          placeholder="How can we help? *"
          required
          maxLength={5000}
          rows={6}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" name="full_name" placeholder="Full name *" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="email" name="email" placeholder="Email *" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="tel" name="phone" placeholder="Phone (optional)" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" name="company" placeholder="Company (optional)" />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <input type="text" name="subject" placeholder="Subject (optional)" />
      </div>

      <button type="submit" className="btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="hub-form__error" role="alert" style={{ marginTop: 16, color: '#b3261e' }}>
          {error}
        </p>
      )}
    </form>
  );
}
