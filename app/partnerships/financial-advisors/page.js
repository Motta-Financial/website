'use client';

import Link from 'next/link';

const ROLES = [
  {
    icon: 'flaticon-investment',
    variant: 'fa',
    title: 'Financial Advisor',
    sub: 'Focused on overall financial health',
    items: [
      'Investment strategy & portfolio construction',
      'Retirement planning & income modeling',
      'Long-term goal alignment',
      'Risk tolerance & behavioral coaching',
      'Estate & wealth transfer strategy',
    ],
  },
  {
    icon: 'flaticon-financial-profit',
    variant: 'cpa',
    title: 'Certified Public Accountant',
    sub: 'Focused on tax & financial precision',
    items: [
      'Tax compliance & preparation',
      'Proactive tax planning & optimization',
      'Financial reporting & analysis',
      'Entity structuring & business advisory',
      'Audit, IRS, and regulatory support',
    ],
  },
];

const BENEFITS = [
  {
    icon: 'flaticon-target',
    title: 'Holistic Planning',
    body:
      'Tax strategies and financial goals stop living on separate sheets. One coordinated plan covers investments, retirement, business, and estate.',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Tax Efficiency',
    body:
      'Investments, distributions, and entity structures are designed together to legally minimize lifetime tax \u2014 not just this year\u2019s return.',
  },
  {
    icon: 'flaticon-report',
    title: 'Risk Management',
    body:
      'Two pairs of eyes flag financial and tax risks earlier \u2014 from concentrated positions to filing exposure \u2014 and protect assets in concert.',
  },
  {
    icon: 'flaticon-handshake',
    title: 'Business & Estate Planning',
    body:
      'Coordinated advice across legal, tax, and financial dimensions means succession plans, trusts, and entity moves all line up.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Seamless Coordination',
    body:
      'CPA and advisor share context so financial strategies stay aligned and clients never get conflicting advice from their own team.',
  },
  {
    num: '02',
    title: 'Comprehensive Support',
    body:
      'From quarterly tax estimates to portfolio rebalancing and entity decisions, every financial base is covered without the client running point.',
  },
  {
    num: '03',
    title: 'Enhanced Decision-Making',
    body:
      'Diverse perspectives sharpen every recommendation. Major decisions \u2014 sale of a business, Roth conversion, retirement timing \u2014 get reviewed from both sides before they happen.',
  },
];

export default function FinancialAdvisorsPartnership() {
  return (
    <article className="motta-fa-page">
      {/* Header */}
      <div className="motta-fa-page__hero">
        <span className="motta-eyebrow">Featured Partnership</span>
        <h1 className="motta-section-title" style={{ marginBottom: 18 }}>
          Financial Advisors &amp; CPAs
        </h1>
        <p className="motta-fa-page__lead">
          Tax planning and financial planning are the same conversation. We partner with
          financial advisors who share one common goal: deliver the best possible product
          for the end user &mdash; the client.
        </p>
        <p>
          When a client&apos;s CPA and financial advisor work together seamlessly,
          investment strategies, tax positions, retirement timing, and estate decisions
          stop being separate spreadsheets and start being a single coordinated plan.
          That&apos;s where the real value shows up.
        </p>
        <p>
          We bring tax expertise, compliance discipline, and a forward-looking advisory
          lens. Our partner advisors bring deep capital markets experience, behavioral
          coaching, and long-term wealth strategy. Together, we cover every angle of a
          client&apos;s financial life.
        </p>
      </div>

      {/* Two disciplines */}
      <section className="motta-fa-page__block">
        <header className="motta-fa-page__block-head">
          <span className="motta-eyebrow">The Difference</span>
          <h2 className="motta-section-title">Two Disciplines, One Plan</h2>
          <p>
            Each professional brings distinct expertise. Coordinated, those strengths
            compound.
          </p>
        </header>
        <div className="motta-fa-page__roles">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className={'motta-fa-page__role motta-fa-page__role--' + role.variant}
            >
              <div className="motta-fa-page__role-icon">
                <i className={role.icon} />
              </div>
              <h3 className="motta-fa-page__role-title">{role.title}</h3>
              <p className="motta-fa-page__role-sub">{role.sub}</p>
              <ul>
                {role.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="motta-fa-page__benefits">
        <header className="motta-fa-page__block-head">
          <span className="motta-eyebrow">Benefits to the Client</span>
          <h2 className="motta-section-title">
            What Coordination Actually Delivers
          </h2>
        </header>
        <div className="motta-fa-page__benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="motta-fa-page__benefit">
              <div className="motta-fa-page__benefit-icon">
                <i className={b.icon} />
              </div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="motta-fa-page__block">
        <header className="motta-fa-page__block-head">
          <span className="motta-eyebrow">Maximizing the Partnership</span>
          <h2 className="motta-section-title">How We Work Together</h2>
        </header>
        <div className="motta-fa-page__steps">
          {STEPS.map((s) => (
            <div key={s.num} className="motta-fa-page__step">
              <div className="motta-fa-page__step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="motta-fa-page__close">
          A strong collaboration between your financial advisor and your CPA gives you a
          well-rounded strategy to achieve your financial goals while protecting your
          wealth. By leveraging combined expertise, you can confidently navigate your
          financial journey.
        </p>
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <Link href="/contact" className="btn">
            Refer a Client &amp; Partner With Us
          </Link>
        </div>
      </section>

      <style jsx>{`
        .motta-fa-page__hero {
          max-width: 72ch;
          margin-bottom: 60px;
        }
        .motta-fa-page__hero p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }
        .motta-fa-page__lead {
          font-size: 17px !important;
          color: var(--motta-charcoal, #2b2f24) !important;
        }

        .motta-fa-page__block {
          padding: 50px 0;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-fa-page__block-head {
          text-align: center;
          margin-bottom: 36px;
        }
        .motta-fa-page__block-head p {
          max-width: 60ch;
          margin: 0 auto;
          color: rgba(43, 47, 36, 0.78);
          line-height: 1.65;
        }

        /* Roles */
        .motta-fa-page__roles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 767px) {
          .motta-fa-page__roles {
            grid-template-columns: 1fr;
          }
        }
        .motta-fa-page__role {
          padding: 28px 26px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
        }
        .motta-fa-page__role-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 14px;
        }
        .motta-fa-page__role--cpa .motta-fa-page__role-icon {
          background: var(--motta-charcoal, #2b2f24);
        }
        .motta-fa-page__role-title {
          font-size: 20px;
          margin: 0 0 4px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-fa-page__role-sub {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 600;
          margin-bottom: 14px;
        }
        .motta-fa-page__role ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .motta-fa-page__role li {
          position: relative;
          padding: 7px 0 7px 20px;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(43, 47, 36, 0.82);
          border-bottom: 1px dashed rgba(107, 116, 93, 0.18);
        }
        .motta-fa-page__role li:last-child {
          border-bottom: 0;
        }
        .motta-fa-page__role li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 13px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--motta-sage, #8e9b79);
        }

        /* Benefits */
        .motta-fa-page__benefits {
          margin: 50px -48px;
          padding: 60px 48px;
          background: #ffffff;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
          border-bottom: 1px solid rgba(107, 116, 93, 0.14);
        }
        @media (max-width: 767px) {
          .motta-fa-page__benefits {
            margin: 40px -22px;
            padding: 48px 22px;
          }
        }
        .motta-fa-page__benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 767px) {
          .motta-fa-page__benefits-grid {
            grid-template-columns: 1fr;
          }
        }
        .motta-fa-page__benefit {
          display: flex;
          gap: 14px;
          padding: 22px;
          border-radius: 12px;
          background: var(--motta-cream, #f7f5f1);
          border: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-fa-page__benefit-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--motta-sage, #6b745d);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .motta-fa-page__benefit h4 {
          color: var(--motta-charcoal, #2b2f24);
          font-size: 17px;
          margin: 0 0 6px;
        }
        .motta-fa-page__benefit p {
          color: rgba(43, 47, 36, 0.78);
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }

        /* Steps */
        .motta-fa-page__steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 30px;
        }
        @media (max-width: 767px) {
          .motta-fa-page__steps {
            grid-template-columns: 1fr;
          }
        }
        .motta-fa-page__step {
          padding: 26px 22px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-fa-page__step-num {
          font-family: var(--font-serif, serif);
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
          color: var(--motta-sage, #8e9b79);
          margin-bottom: 12px;
        }
        .motta-fa-page__step h4 {
          font-size: 17px;
          margin: 0 0 8px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-fa-page__step p {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }
        .motta-fa-page__close {
          font-style: italic;
          font-size: 16px;
          line-height: 1.7;
          color: var(--motta-charcoal, #2b2f24);
          text-align: center;
          max-width: 65ch;
          margin: 0 auto 18px;
        }
      `}</style>
    </article>
  );
}
