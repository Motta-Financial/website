import Link from 'next/link';
import AlfredLogo from '@/components/elements/AlfredLogo';

const CAPABILITIES = [
  {
    icon: 'flaticon-target',
    title: 'Client Intelligence',
    desc: 'Every conversation, document, and engagement detail unified into one view — pulling from your practice management, scheduling, and financial systems.',
  },
  {
    icon: 'flaticon-investment',
    title: 'Lead Intake & Research',
    desc: 'ALFRED researches prospects, drafts partner-ready answers to complex questions, and routes leads with full context — cold to warm in minutes.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Engagement Workflow',
    desc: 'Proposals, payments, scheduling, and onboarding coordinated end-to-end across your existing tools. Clients sign once, pay once, get to work.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Internal Operations',
    desc: 'Daily briefings, weekly performance recaps, team recognition, and early surfacing of issues. The firm runs without anyone chasing status.',
  },
  {
    icon: 'flaticon-report',
    title: 'Compliance & Audit Trail',
    desc: 'Every AI interaction logged, every model decision auditable, every prompt version-controlled — for clients and regulators.',
  },
];

export default function AlfredFeature() {
  return (
    <section
      className="alfred-feature-area"
      style={{
        background:
          'linear-gradient(180deg, #2b2f24 0%, #232619 55%, #1c1f15 100%)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 80% 20%, rgba(142,155,121,0.18), transparent 50%), radial-gradient(circle at 15% 85%, rgba(107,116,93,0.22), transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                marginBottom: 24,
                filter: 'drop-shadow(0 12px 28px rgba(142,155,121,0.35))',
              }}
            >
              <AlfredLogo
                size={120}
                glow
                className="alfred-logo--orb-pulse alfred-logo--invert"
                priority
              />
            </div>
            <span className="alfred-mark" style={{ marginBottom: 24 }}>
              The AI platform powering Motta
            </span>
            <h2
              className="title"
              style={{
                color: 'var(--motta-white)',
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              ALFRED Ai eliminates the administrative drag holding traditional
              firms back.
            </h2>
            <p
              style={{
                color: 'rgba(234, 230, 225, 0.8)',
                fontSize: 17,
                maxWidth: 720,
                margin: '0 auto 60px',
                lineHeight: 1.65,
              }}
            >
              Motta is built on the Japanese principle of <em>Mottainai</em> —
              too good to waste. ALFRED Ai — our Artificial Liaison for Rapid
              Efficient Delivery — is how we live that philosophy: a proprietary
              AI platform, layered on top of Intuit ProConnect Tax, that lets our
              team focus entirely on the work that actually moves clients
              forward.
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
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background:
                      'linear-gradient(135deg, var(--motta-alfred), var(--motta-alfred-glow))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--motta-white)',
                    fontSize: 20,
                    marginBottom: 18,
                  }}
                >
                  <i className={c.icon} />
                </div>
                <h4
                  style={{
                    color: 'var(--motta-white)',
                    fontSize: 19,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    color: 'rgba(234, 230, 225, 0.72)',
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="col-lg-4 col-md-6">
            <div
              style={{
                height: '100%',
                padding: '32px 28px',
                background:
                  'linear-gradient(135deg, rgba(107,116,93,0.45), rgba(142,155,121,0.22))',
                border: '1px solid rgba(142, 155, 121, 0.5)',
                borderRadius: 14,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--motta-alfred-glow)',
                    marginBottom: 14,
                  }}
                >
                  Strategic differentiator
                </span>
                <h4
                  style={{
                    color: 'var(--motta-white)',
                    fontSize: 19,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  Tax returns, drafted in minutes
                </h4>
                <p
                  style={{
                    color: 'rgba(234, 230, 225, 0.78)',
                    fontSize: 14.5,
                    lineHeight: 1.6,
                  }}
                >
                  Motta has partner-grade access to Intuit ProConnect&apos;s
                  API, which lets ALFRED Ai prepare your return in minutes.
                  That means a faster turnaround for you and more time for
                  your CPA to spend looking for ways to save you money.
                </p>
              </div>
              <Link
                href="/alfred"
                className="btn"
                style={{ marginTop: 18, alignSelf: 'flex-start' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
