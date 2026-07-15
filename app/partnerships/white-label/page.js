'use client';

import Link from 'next/link';

const SERVICES = [
  {
    icon: 'flaticon-financial-profit',
    title: 'Tax Planning & Compliance',
    body:
      'Quarterly planning, return preparation, and proactive strategy for individuals, business owners, and high-net-worth households.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Accounting for Business Owners',
    body:
      'Bookkeeping, financial reporting, payroll, and CFO/Controller-level oversight for your advisor clients who own businesses.',
  },
  {
    icon: 'flaticon-investment',
    title: 'Equity Compensation Planning',
    body:
      'ISO/NSO/RSU strategy, AMT modeling, 83(b) and 10b5-1 coordination, and multi-year exercise planning for tech and executive clients.',
  },
  {
    icon: 'flaticon-handshake',
    title: 'M&A Advisory \u2014 Buy & Sell Side',
    body:
      'Quality of earnings, working capital analysis, deal structuring, tax modeling, and post-close integration for transactions on either side of the table.',
  },
  {
    icon: 'flaticon-report',
    title: 'Attestation Services',
    body:
      'Reviews, compilations, and agreed-upon procedures issued under partner-firm letterhead by licensed CPAs.',
  },
  {
    icon: 'flaticon-target',
    title: 'Due Diligence Support',
    body:
      'Financial, tax, and operational diligence for transactions, lender requirements, investor reporting, and internal audit functions.',
  },
];

const WHY = [
  {
    num: '01',
    title: 'Your Brand, Front and Center',
    body:
      'Deliverables, communications, and meetings represent your firm. We stay invisible to the client unless you want it otherwise.',
  },
  {
    num: '02',
    title: 'Specialist Bench on Demand',
    body:
      'Tap CPAs, tax planners, and M&A specialists without hiring them. Scale up for diligence season, scale down when you don\u2019t need the capacity.',
  },
  {
    num: '03',
    title: 'No Channel Conflict',
    body:
      'We do not market to or solicit your clients. Ever. Our growth is yours \u2014 referral economics work in one direction.',
  },
  {
    num: '04',
    title: 'ALFRED-Powered Delivery',
    body:
      'The same AI platform that runs Motta\u2019s practice runs yours. Faster turnaround, tighter audit trails, consistent quality across every engagement.',
  },
];

export default function WhiteLabelPartnership() {
  return (
    <article className="motta-wl-page">
      <div className="motta-wl-page__hero">
        <span className="motta-eyebrow">Professional Partnership</span>
        <h1 className="motta-section-title" style={{ marginBottom: 18 }}>
          White Label Tax &amp; Accounting
        </h1>
        <p className="motta-wl-page__lead">
          Motta-level quality, delivered under your umbrella. We white label our tax and
          accounting services for other professional service firms who want to expand
          what they can offer their clients without expanding their bench.
        </p>
        <p>
          Financial advisors who want to add tax planning. RIAs who need accounting for
          their business-owner book. Law firms supporting M&amp;A and estate work. Family
          offices coordinating across multiple advisors. We sit behind your brand,
          produce institutional-grade work, and let you keep the client relationship
          exactly where it belongs &mdash; with you.
        </p>
      </div>

      <section className="motta-wl-page__block">
        <header className="motta-wl-page__block-head">
          <span className="motta-eyebrow">Service Lines</span>
          <h2 className="motta-section-title">What We Deliver Under Your Brand</h2>
          <p>
            Pick the modules that round out your offering. We&apos;ll plug in as a private
            back office or a co-branded specialist team &mdash; your call.
          </p>
        </header>
        <div className="motta-wl-page__services">
          {SERVICES.map((s) => (
            <div key={s.title} className="motta-wl-page__service">
              <div className="motta-wl-page__service-icon">
                <i className={s.icon} />
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="motta-wl-page__why">
        <header className="motta-wl-page__block-head">
          <span className="motta-eyebrow">Why Motta</span>
          <h2 className="motta-section-title">
            Built to Sit Behind Your Brand
          </h2>
        </header>
        <div className="motta-wl-page__why-grid">
          {WHY.map((w) => (
            <div key={w.num} className="motta-wl-page__why-card">
              <div className="motta-wl-page__why-num">{w.num}</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/contact" className="btn motta-wl-page__why-btn">
            Start a White Label Conversation
          </Link>
        </div>
      </section>

      <style jsx>{`
        .motta-wl-page__hero {
          max-width: 72ch;
          margin-bottom: 60px;
        }
        .motta-wl-page__hero p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }
        .motta-wl-page__lead {
          font-size: 17px !important;
          color: var(--motta-charcoal, #2b2f24) !important;
        }

        .motta-wl-page__block {
          padding: 50px 0;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-wl-page__block-head {
          text-align: center;
          margin-bottom: 36px;
        }
        .motta-wl-page__block-head p {
          max-width: 60ch;
          margin: 0 auto;
          color: rgba(43, 47, 36, 0.78);
          line-height: 1.65;
        }
        .motta-wl-page__block-head--light p {
          color: rgba(244, 241, 235, 0.78);
        }

        .motta-wl-page__services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 991px) {
          .motta-wl-page__services {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 575px) {
          .motta-wl-page__services {
            grid-template-columns: 1fr;
          }
        }
        .motta-wl-page__service {
          padding: 26px 22px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }
        .motta-wl-page__service:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 16px 40px -25px rgba(15, 19, 16, 0.25);
        }
        .motta-wl-page__service-icon {
          width: 46px;
          height: 46px;
          border-radius: 11px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          margin-bottom: 14px;
        }
        .motta-wl-page__service h4 {
          font-size: 17px;
          margin: 0 0 8px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-wl-page__service p {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }

        .motta-wl-page__why {
          margin: 50px -48px 0;
          padding: 60px 48px;
          background: #ffffff;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
        }
        @media (max-width: 767px) {
          .motta-wl-page__why {
            margin: 40px -22px 0;
            padding: 48px 22px;
          }
        }
        .motta-wl-page__why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 767px) {
          .motta-wl-page__why-grid {
            grid-template-columns: 1fr;
          }
        }
        .motta-wl-page__why-card {
          display: flex;
          gap: 16px;
          padding: 22px;
          border-radius: 12px;
          background: var(--motta-cream, #f7f5f1);
          border: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-wl-page__why-num {
          flex-shrink: 0;
          font-family: var(--font-serif, serif);
          font-size: 26px;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
          width: 44px;
        }
        .motta-wl-page__why-card h4 {
          color: var(--motta-charcoal, #2b2f24);
          font-size: 17px;
          margin: 0 0 6px;
        }
        .motta-wl-page__why-card p {
          color: rgba(43, 47, 36, 0.78);
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .motta-wl-page__why-btn {
          background: var(--motta-sage, #6b745d) !important;
          border-color: var(--motta-sage, #6b745d) !important;
          color: #ffffff !important;
        }
        .motta-wl-page__why-btn:hover {
          background: var(--motta-sage-deep, #4f573f) !important;
          border-color: var(--motta-sage-deep, #4f573f) !important;
        }
      `}</style>
    </article>
  );
}
