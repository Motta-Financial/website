'use client';

import { useState } from 'react';
import Link from 'next/link';
import AlfredLogo from '@/components/elements/AlfredLogo';

const CAPABILITIES = [
  {
    icon: 'flaticon-target',
    title: 'Unified Client Intelligence',
    desc: 'Every conversation, document, and engagement detail in one view — ALFRED integrates with your existing practice management, scheduling, and financial systems.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Live Dashboards & KPIs',
    desc: 'Real-time visibility into business health, team performance, client status, and revenue metrics — pulling data from all your connected platforms automatically.',
  },
  {
    icon: 'flaticon-investment',
    title: 'AI-Powered Research & Prep',
    desc: 'ALFRED researches prospects, drafts answers to complex questions, prepares engagement summaries, and surfaces relevant context from your client history.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Workflow Automation',
    desc: 'Intake, proposals, payments, scheduling, and onboarding coordinated end-to-end across your existing tools — no manual data entry between systems.',
  },
  {
    icon: 'flaticon-report',
    title: 'Team Operations',
    desc: 'Daily briefings, performance tracking, workload balancing, and early issue detection. Your firm runs without anyone chasing status updates.',
  },
];

const AUDIENCES = [
  {
    title: 'CPA & Tax Firms',
    desc: 'From return prep to client communication, ALFRED streamlines the entire engagement lifecycle.',
    highlight: true,
  },
  {
    title: 'Financial Planners',
    desc: 'Unified view of client portfolios, meetings, and action items across your wealth management stack.',
  },
  {
    title: 'Law Firms',
    desc: 'Matter management, billing, client communications, and research — all connected and intelligent.',
  },
  {
    title: 'Professional Services',
    desc: 'Any firm that juggles clients, projects, and deadlines can benefit from ALFRED\'s automation.',
  },
];

export default function AlfredProductPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firmName: '',
    firmType: '',
    teamSize: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/alfred-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background:
            'radial-gradient(ellipse 900px 600px at 50% 10%, rgba(142,155,121,0.25) 0%, transparent 60%), linear-gradient(180deg, #1f261c 0%, #14180f 100%)',
          padding: '140px 0 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(142, 155, 121, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(142, 155, 121, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  marginBottom: 32,
                  filter: 'drop-shadow(0 16px 40px rgba(142,155,121,0.4))',
                }}
              >
                <AlfredLogo
                  size={140}
                  glow
                  className="alfred-logo--orb-pulse alfred-logo--invert"
                  priority
                />
              </div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '8px 18px',
                  borderRadius: 999,
                  background: 'rgba(142, 155, 121, 0.15)',
                  border: '1px solid rgba(142, 155, 121, 0.3)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8e9b79',
                  marginBottom: 24,
                }}
              >
                Practice Management Platform
              </span>
              <h1
                style={{
                  color: 'var(--motta-white, #F4F1EB)',
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  lineHeight: 1.1,
                  marginBottom: 24,
                  letterSpacing: '-0.02em',
                  fontWeight: 700,
                }}
              >
                The AI platform that connects everything your firm runs on
              </h1>
              <p
                style={{
                  color: 'rgba(234, 230, 225, 0.8)',
                  fontSize: 19,
                  maxWidth: 720,
                  margin: '0 auto 40px',
                  lineHeight: 1.65,
                }}
              >
                ALFRED Ai — our Artificial Liaison for Rapid Efficient Delivery —
                integrates with your existing tools — practice management,
                scheduling, billing, document storage — and turns disconnected systems 
                into one intelligent workspace with live data, smart automation, and 
                an AI assistant that actually knows your clients.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="#demo"
                  className="btn"
                  style={{
                    padding: '16px 32px',
                    fontSize: 16,
                  }}
                >
                  Book a Demo
                </a>
                <Link
                  href="/services/business-ai-transformation"
                  className="border-btn"
                  style={{
                    padding: '16px 32px',
                    fontSize: 16,
                    background: 'transparent',
                    border: '1px solid rgba(142, 155, 121, 0.5)',
                    color: '#F4F1EB',
                  }}
                >
                  Learn How We Use It
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props */}
      <section
        style={{
          background: 'var(--motta-warm, #F4F1EB)',
          padding: '100px 0',
        }}
      >
        <div className="container">
          <div className="row justify-content-center" style={{ marginBottom: 60 }}>
            <div className="col-lg-8 text-center">
              <span
                className="motta-eyebrow"
                style={{ marginBottom: 16, display: 'block' }}
              >
                What ALFRED Does
              </span>
              <h2
                className="motta-section-title"
                style={{ marginBottom: 20 }}
              >
                Three problems every professional services firm has — solved
              </h2>
            </div>
          </div>

          <div className="row" style={{ rowGap: 32 }}>
            <div className="col-lg-4">
              <div
                style={{
                  height: '100%',
                  padding: '40px 32px',
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1px solid rgba(107, 116, 93, 0.15)',
                  boxShadow: '0 20px 50px -20px rgba(15, 19, 16, 0.15)',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #8e9b79, #6b745d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F4F1EB',
                    fontSize: 24,
                    marginBottom: 24,
                  }}
                >
                  <i className="flaticon-target" />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--motta-charcoal)' }}>
                  Centralized Client Intelligence
                </h3>
                <p style={{ color: 'rgba(43, 47, 36, 0.75)', lineHeight: 1.65, margin: 0 }}>
                  Client information, notes, communications, and project status — all in one place. 
                  No more switching between five apps to get the full picture before a meeting.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  height: '100%',
                  padding: '40px 32px',
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1px solid rgba(107, 116, 93, 0.15)',
                  boxShadow: '0 20px 50px -20px rgba(15, 19, 16, 0.15)',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #8e9b79, #6b745d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F4F1EB',
                    fontSize: 24,
                    marginBottom: 24,
                  }}
                >
                  <i className="flaticon-pie-chart" />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--motta-charcoal)' }}>
                  Live Dashboards & Business Health
                </h3>
                <p style={{ color: 'rgba(43, 47, 36, 0.75)', lineHeight: 1.65, margin: 0 }}>
                  Revenue, utilization, pipeline, deadlines, team workload — real-time visibility 
                  across all your business platforms. Track KPIs without building reports.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  height: '100%',
                  padding: '40px 32px',
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1px solid rgba(107, 116, 93, 0.15)',
                  boxShadow: '0 20px 50px -20px rgba(15, 19, 16, 0.15)',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #8e9b79, #6b745d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F4F1EB',
                    fontSize: 24,
                    marginBottom: 24,
                  }}
                >
                  <i className="flaticon-light-bulb" />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--motta-charcoal)' }}>
                  AI Assistant with Context
                </h3>
                <p style={{ color: 'rgba(43, 47, 36, 0.75)', lineHeight: 1.65, margin: 0 }}>
                  Research, prep work, draft communications — powered by the latest AI models, 
                  anchored on your actual client data and the most recent conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section
        style={{
          background:
            'radial-gradient(900px 500px at 80% 0%, rgba(142, 155, 121, 0.15) 0%, transparent 60%), linear-gradient(180deg, #1f261c 0%, #14180f 100%)',
          padding: '100px 0',
        }}
      >
        <div className="container">
          <div className="row justify-content-center" style={{ marginBottom: 50 }}>
            <div className="col-lg-8 text-center">
              <span
                className="motta-eyebrow motta-eyebrow--light"
                style={{ marginBottom: 16, display: 'block' }}
              >
                Platform Capabilities
              </span>
              <h2
                className="motta-section-title motta-section-title--light"
                style={{ marginBottom: 20 }}
              >
                Everything a modern firm needs
              </h2>
              <p style={{ color: 'rgba(244, 241, 235, 0.75)', fontSize: 17, lineHeight: 1.65 }}>
                ALFRED integrates with your existing tools and adds intelligence on top — 
                no rip-and-replace required.
              </p>
            </div>
          </div>

          <div className="row" style={{ rowGap: 24 }}>
            {CAPABILITIES.map((c) => (
              <div className="col-lg-4 col-md-6" key={c.title}>
                <div
                  style={{
                    height: '100%',
                    padding: '32px 28px',
                    background: 'rgba(234, 230, 225, 0.04)',
                    border: '1px solid rgba(142, 155, 121, 0.22)',
                    borderRadius: 14,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, #8e9b79, #6b745d)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F1EB',
                      fontSize: 20,
                      marginBottom: 18,
                    }}
                  >
                    <i className={c.icon} />
                  </div>
                  <h4 style={{ color: '#F4F1EB', fontSize: 19, fontWeight: 600, marginBottom: 10 }}>
                    {c.title}
                  </h4>
                  <p style={{ color: 'rgba(234, 230, 225, 0.72)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* ProConnect Highlight Card */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  height: '100%',
                  padding: '32px 28px',
                  background: 'linear-gradient(135deg, rgba(107,116,93,0.45), rgba(142,155,121,0.22))',
                  border: '1px solid rgba(142, 155, 121, 0.5)',
                  borderRadius: 14,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#a8b396',
                    marginBottom: 14,
                  }}
                >
                  For Tax Firms
                </span>
                <h4 style={{ color: '#F4F1EB', fontSize: 19, fontWeight: 600, marginBottom: 10 }}>
                  ProConnect Integration
                </h4>
                <p style={{ color: 'rgba(234, 230, 225, 0.78)', fontSize: 14.5, lineHeight: 1.6, flex: 1 }}>
                  Motta has partner-grade access to Intuit ProConnect&apos;s API, which lets 
                  ALFRED Ai prepare returns in minutes. We&apos;re working to bring this 
                  capability to other firms using ALFRED.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section
        style={{
          background: 'var(--motta-warm, #F4F1EB)',
          padding: '100px 0',
        }}
      >
        <div className="container">
          <div className="row justify-content-center" style={{ marginBottom: 50 }}>
            <div className="col-lg-8 text-center">
              <span
                className="motta-eyebrow"
                style={{ marginBottom: 16, display: 'block' }}
              >
                Who ALFRED is For
              </span>
              <h2
                className="motta-section-title"
                style={{ marginBottom: 20 }}
              >
                Built for firms that run on client relationships
              </h2>
            </div>
          </div>

          <div className="row" style={{ rowGap: 24 }}>
            {AUDIENCES.map((a) => (
              <div className="col-lg-3 col-md-6" key={a.title}>
                <div
                  style={{
                    height: '100%',
                    padding: '28px 24px',
                    background: a.highlight
                      ? 'linear-gradient(135deg, #6b745d, #4f5742)'
                      : '#FFFFFF',
                    borderRadius: 14,
                    border: a.highlight
                      ? 'none'
                      : '1px solid rgba(107, 116, 93, 0.15)',
                    boxShadow: a.highlight
                      ? '0 20px 50px -15px rgba(107, 116, 93, 0.4)'
                      : '0 14px 32px -20px rgba(15, 19, 16, 0.12)',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: 10,
                      color: a.highlight ? '#F4F1EB' : 'var(--motta-charcoal)',
                    }}
                  >
                    {a.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: a.highlight
                        ? 'rgba(244, 241, 235, 0.85)'
                        : 'rgba(43, 47, 36, 0.75)',
                    }}
                  >
                    {a.desc}
                  </p>
                  {a.highlight && (
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: 14,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#a8b396',
                      }}
                    >
                      Primary Focus
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section
        id="demo"
        style={{
          background:
            'radial-gradient(ellipse 800px 500px at 30% 80%, rgba(142,155,121,0.2) 0%, transparent 60%), linear-gradient(180deg, #1f261c 0%, #14180f 100%)',
          padding: '100px 0',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center" style={{ marginBottom: 40 }}>
                <span
                  className="motta-eyebrow motta-eyebrow--light"
                  style={{ marginBottom: 16, display: 'block' }}
                >
                  Get Started
                </span>
                <h2
                  className="motta-section-title motta-section-title--light"
                  style={{ marginBottom: 16 }}
                >
                  Book a Demo
                </h2>
                <p style={{ color: 'rgba(244, 241, 235, 0.75)', fontSize: 17, lineHeight: 1.65 }}>
                  See how ALFRED can transform your firm&apos;s operations. 
                  We&apos;ll walk through the platform and discuss how it fits your workflow.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '48px 32px',
                    background: 'rgba(142, 155, 121, 0.15)',
                    border: '1px solid rgba(142, 155, 121, 0.3)',
                    borderRadius: 16,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8e9b79, #6b745d)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F1EB"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ color: '#F4F1EB', fontSize: 24, marginBottom: 12 }}>
                    Thanks for your interest!
                  </h3>
                  <p style={{ color: 'rgba(244, 241, 235, 0.75)', margin: 0 }}>
                    We&apos;ll be in touch within one business day to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    padding: '40px 32px',
                    background: 'rgba(234, 230, 225, 0.04)',
                    border: '1px solid rgba(142, 155, 121, 0.22)',
                    borderRadius: 16,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div className="row" style={{ rowGap: 20 }}>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="First name *"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Last name *"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        placeholder="Firm name *"
                        required
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        required
                        value={formData.firmType}
                        onChange={(e) => setFormData({ ...formData, firmType: e.target.value })}
                        style={inputStyle}
                      >
                        <option value="">Firm type *</option>
                        <option value="cpa">CPA / Tax Firm</option>
                        <option value="financial-planning">Financial Planning</option>
                        <option value="law">Law Firm</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other Professional Services</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        style={inputStyle}
                      >
                        <option value="">Team size</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-15">6-15 people</option>
                        <option value="16-50">16-50 people</option>
                        <option value="50+">50+ people</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        placeholder="What challenges are you looking to solve?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                      />
                    </div>
                    {error && (
                      <div className="col-12">
                        <p style={{ color: '#e74c3c', fontSize: 14, margin: 0 }}>{error}</p>
                      </div>
                    )}
                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          padding: '16px 32px',
                          fontSize: 16,
                          opacity: submitting ? 0.7 : 1,
                        }}
                      >
                        {submitting ? 'Submitting...' : 'Request Demo'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #6b745d 0%, #4f5742 100%)',
          padding: '60px 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ maxWidth: 600 }}>
              <h3 style={{ color: '#F4F1EB', fontSize: 24, marginBottom: 8 }}>
                Questions? Let&apos;s talk.
              </h3>
              <p style={{ color: 'rgba(244, 241, 235, 0.85)', margin: 0 }}>
                Reach out to learn more about ALFRED or discuss how it might fit your firm.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn"
              style={{
                background: '#F4F1EB',
                color: '#2b2f24',
                borderColor: '#F4F1EB',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(244, 241, 235, 0.08)',
  border: '1px solid rgba(142, 155, 121, 0.25)',
  borderRadius: 10,
  color: '#F4F1EB',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};
