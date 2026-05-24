'use client';

import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Partnerships() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Partnerships"
      breadcrumbEyebrow="Community"
      breadcrumbTagline="Building the next generation of business leaders"
      breadcrumbImage="/assets/img/partnerships/suffolk-seed.jpg"
    >
      {/* Intro */}
      <section className="motta-partnerships-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span className="motta-eyebrow">Our Partnerships</span>
              <h1 className="motta-section-title">
                Better Together
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(43,47,36,0.82)', maxWidth: '65ch', margin: '0 auto' }}>
                Motta Financial believes the best client outcomes come from collaboration —
                whether we&apos;re partnering with financial advisors to deliver holistic
                planning, sitting behind another firm&apos;s brand to expand what they can offer,
                or investing in the next generation of professionals through education programs.
              </p>
            </div>
          </div>

          {/* Quick nav */}
          <div className="row justify-content-center" style={{ marginTop: 50 }}>
            <div className="col-lg-11">
              <div className="motta-partnerships-nav">
                <a href="#financial-advisors" className="motta-partnerships-nav__card">
                  <span className="motta-partnerships-nav__eyebrow">Professional Partners</span>
                  <span className="motta-partnerships-nav__title">Financial Advisors</span>
                  <span className="motta-partnerships-nav__desc">
                    Tax planning &amp; financial planning, one conversation.
                  </span>
                  <span className="motta-partnerships-nav__arrow">
                    <i className="flaticon-right-arrow" />
                  </span>
                </a>
                <a href="#white-label" className="motta-partnerships-nav__card">
                  <span className="motta-partnerships-nav__eyebrow">Behind-the-Scenes</span>
                  <span className="motta-partnerships-nav__title">White Label Services</span>
                  <span className="motta-partnerships-nav__desc">
                    Motta-quality tax &amp; accounting under your brand.
                  </span>
                  <span className="motta-partnerships-nav__arrow">
                    <i className="flaticon-right-arrow" />
                  </span>
                </a>
                <a href="#suffolk-seed" className="motta-partnerships-nav__card">
                  <span className="motta-partnerships-nav__eyebrow">Academic Partners</span>
                  <span className="motta-partnerships-nav__title">Suffolk SEED</span>
                  <span className="motta-partnerships-nav__desc">
                    Building the next generation of professionals.
                  </span>
                  <span className="motta-partnerships-nav__arrow">
                    <i className="flaticon-right-arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Advisors Feature */}
      <section id="financial-advisors" className="motta-fa-feature">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="motta-fa-feature__media">
                <img
                  src="/assets/img/partnerships/financial-advisors.jpg"
                  alt="A CPA and a financial advisor reviewing a client's holistic financial plan together"
                />
                <div className="motta-fa-feature__badge">
                  <span className="motta-fa-feature__badge-text">The Dynamic Duo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="motta-fa-feature__content">
                <span className="motta-eyebrow">Featured Partnership</span>
                <h2 className="motta-section-title" style={{ marginBottom: 20 }}>
                  Financial Advisors &amp; CPAs
                </h2>
                <p className="motta-fa-feature__lead">
                  Tax planning and financial planning are the same conversation. We partner with
                  financial advisors who share one common goal: deliver the best possible product
                  for the end user — the client.
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
                <a
                  href="#fa-benefits"
                  className="motta-link"
                  style={{ marginTop: 16 }}
                >
                  See how the partnership works <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="motta-fa-difference">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow">The Difference</span>
              <h2 className="motta-section-title">Two Disciplines, One Plan</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(43,47,36,0.78)', maxWidth: '60ch', margin: '0 auto' }}>
                Each professional brings distinct expertise. Coordinated, those strengths compound.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="motta-fa-role-card motta-fa-role-card--fa">
                <div className="motta-fa-role-card__icon">
                  <i className="flaticon-investment" />
                </div>
                <h4 className="motta-fa-role-card__title">Financial Advisor</h4>
                <p className="motta-fa-role-card__sub">Focused on overall financial health</p>
                <ul className="motta-fa-role-card__list">
                  <li>Investment strategy &amp; portfolio construction</li>
                  <li>Retirement planning &amp; income modeling</li>
                  <li>Long-term goal alignment</li>
                  <li>Risk tolerance &amp; behavioral coaching</li>
                  <li>Estate &amp; wealth transfer strategy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="motta-fa-role-card motta-fa-role-card--cpa">
                <div className="motta-fa-role-card__icon">
                  <i className="flaticon-financial-profit" />
                </div>
                <h4 className="motta-fa-role-card__title">Certified Public Accountant</h4>
                <p className="motta-fa-role-card__sub">Focused on tax &amp; financial precision</p>
                <ul className="motta-fa-role-card__list">
                  <li>Tax compliance &amp; preparation</li>
                  <li>Proactive tax planning &amp; optimization</li>
                  <li>Financial reporting &amp; analysis</li>
                  <li>Entity structuring &amp; business advisory</li>
                  <li>Audit, IRS, and regulatory support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="fa-benefits" className="motta-fa-benefits">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow motta-eyebrow--light">Benefits to the Client</span>
              <h2 className="motta-section-title motta-section-title--light">
                What Coordination Actually Delivers
              </h2>
            </div>
          </div>
          <div className="row">
            {[
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
                  'Investments, distributions, and entity structures are designed together to legally minimize lifetime tax — not just this year&apos;s return.',
              },
              {
                icon: 'flaticon-report',
                title: 'Risk Management',
                body:
                  'Two pairs of eyes flag financial and tax risks earlier — from concentrated positions to filing exposure — and protect assets in concert.',
              },
              {
                icon: 'flaticon-handshake',
                title: 'Business &amp; Estate Planning',
                body:
                  'Coordinated advice across legal, tax, and financial dimensions means succession plans, trusts, and entity moves all line up.',
              },
            ].map((item, i) => (
              <div className="col-lg-6 col-md-6" key={i}>
                <div className="motta-fa-benefit">
                  <div className="motta-fa-benefit__icon">
                    <i className={item.icon} />
                  </div>
                  <div className="motta-fa-benefit__content">
                    <h4 className="motta-fa-benefit__title">{item.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maximize the Partnership */}
      <section className="motta-fa-maximize">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow">Maximizing the Partnership</span>
              <h2 className="motta-section-title">How We Work Together</h2>
            </div>
          </div>
          <div className="row">
            {[
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
                  'Diverse perspectives sharpen every recommendation. Major decisions — sale of a business, Roth conversion, retirement timing — get reviewed from both sides before they happen.',
              },
            ].map((item) => (
              <div className="col-lg-4 col-md-6" key={item.num}>
                <div className="motta-fa-step">
                  <div className="motta-fa-step__num">{item.num}</div>
                  <h4 className="motta-fa-step__title">{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center" style={{ marginTop: 40 }}>
            <div className="col-lg-10 text-center">
              <p className="motta-fa-maximize__close">
                A strong collaboration between your financial advisor and your CPA gives you a
                well-rounded strategy to achieve your financial goals while protecting your
                wealth. By leveraging combined expertise, you can confidently navigate your
                financial journey.
              </p>
              <Link href="/contact" className="btn" style={{ marginTop: 24 }}>
                Refer a Client &amp; Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Services */}
      <section id="white-label" className="motta-wl-feature">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="motta-wl-feature__media">
                <img
                  src="/assets/img/partnerships/white-label.jpg"
                  alt="A behind-the-scenes professional services partnership where Motta delivers tax and accounting work under a partner's brand"
                />
                <div className="motta-wl-feature__badge">
                  <span className="motta-wl-feature__badge-text">Behind the Scenes</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="motta-wl-feature__content">
                <span className="motta-eyebrow">Professional Partnership</span>
                <h2 className="motta-section-title" style={{ marginBottom: 20 }}>
                  White Label Tax &amp; Accounting
                </h2>
                <p className="motta-wl-feature__lead">
                  Motta-level quality, delivered under your umbrella. We white label our tax and
                  accounting services for other professional service firms who want to expand
                  what they can offer their clients without expanding their bench.
                </p>
                <p>
                  Financial advisors who want to add tax planning. RIAs who need accounting for
                  their business-owner book. Law firms supporting M&amp;A and estate work. Family
                  offices coordinating across multiple advisors. We sit behind your brand,
                  produce institutional-grade work, and let you keep the client relationship
                  exactly where it belongs — with you.
                </p>
                <a
                  href="#wl-services"
                  className="motta-link"
                  style={{ marginTop: 16 }}
                >
                  See what we deliver <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section id="wl-services" className="motta-wl-services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow">Service Lines</span>
              <h2 className="motta-section-title">What We Deliver Under Your Brand</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(43,47,36,0.78)', maxWidth: '60ch', margin: '0 auto' }}>
                Pick the modules that round out your offering. We&apos;ll plug in as a private
                back office or a co-branded specialist team — your call.
              </p>
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: 'flaticon-financial-profit',
                title: 'Tax Planning &amp; Compliance',
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
                title: 'M&amp;A Advisory — Buy &amp; Sell Side',
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
            ].map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="motta-wl-service">
                  <div className="motta-wl-service__icon">
                    <i className={item.icon} />
                  </div>
                  <h4
                    className="motta-wl-service__title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why white label with Motta */}
      <section className="motta-wl-why">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow motta-eyebrow--light">Why Motta</span>
              <h2 className="motta-section-title motta-section-title--light">
                Built to Sit Behind Your Brand
              </h2>
            </div>
          </div>
          <div className="row">
            {[
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
            ].map((item) => (
              <div className="col-lg-6 col-md-6" key={item.num}>
                <div className="motta-wl-why-card">
                  <div className="motta-wl-why-card__num">{item.num}</div>
                  <div>
                    <h4 className="motta-wl-why-card__title">{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center" style={{ marginTop: 30 }}>
            <div className="col-lg-10 text-center">
              <Link href="/contact" className="btn">
                Start a White Label Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suffolk SEED Feature */}
      <section id="suffolk-seed" className="motta-seed-feature">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 60 }}>
              <span className="motta-eyebrow">Academic Partnership</span>
              <h2 className="motta-section-title">Investing in the Next Generation</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(43,47,36,0.78)', maxWidth: '60ch', margin: '0 auto' }}>
                The future of professional services depends on nurturing the next generation
                of talent. We back academic and entrepreneurship programs that give students
                real-world experience and small businesses access to the expertise they need
                to grow.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="motta-seed-feature__media">
                <img
                  src="/assets/img/partnerships/suffolk-seed.jpg"
                  alt="Suffolk SEED program students collaborating on a consulting project"
                />
                <div className="motta-seed-feature__badge">
                  <span className="motta-seed-feature__badge-text">Founding Partner</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="motta-seed-feature__content">
                <span className="motta-eyebrow">Featured Partnership</span>
                <h2 className="motta-section-title" style={{ marginBottom: 20 }}>
                  Suffolk University SEED Program
                </h2>
                <p className="motta-seed-feature__lead">
                  <strong>SEED</strong> — the Suffolk Entrepreneurship and Educational Development
                  Collaborative — is a multidisciplinary consulting clinic that connects small
                  businesses with the strategic capabilities they need to thrive.
                </p>
                <p>
                  Launched in Spring 2025, SEED brings together Suffolk faculty, alumni professionals,
                  and students from finance, marketing, advertising, legal, and accounting disciplines
                  to deliver bespoke business services to entrepreneurs across Massachusetts.
                </p>
                <p>
                  The program operates like a professional consulting firm — students work on
                  semester-long, hands-on projects with real clients under the guidance of faculty
                  mentors, gaining invaluable experiential learning while helping small businesses
                  access expertise that would otherwise be out of reach.
                </p>
                <a
                  href="https://boston.suffolk.edu/seed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motta-link"
                  style={{ marginTop: 16 }}
                >
                  Visit Suffolk SEED <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dat&apos;s Role */}
      <section className="motta-seed-dat">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="motta-seed-dat__card">
                <div className="motta-seed-dat__photo">
                  <img
                    src="/assets/img/about/dat-le-founder.jpg"
                    alt="Dat Le, Founder of Motta Financial and SEED Faculty"
                  />
                </div>
                <div className="motta-seed-dat__content">
                  <span className="motta-eyebrow motta-eyebrow--light">Faculty &amp; Sponsor</span>
                  <h3 style={{ color: 'var(--motta-warm)', fontSize: 'clamp(22px, 2.5vw, 28px)', margin: '0 0 14px' }}>
                    Dat Le, CPA — SEED Faculty Member
                  </h3>
                  <p>
                    Motta Financial{"'"}s founder, Dat Le, serves as a professor in the SEED program, 
                    bringing real-world accounting and advisory expertise directly into the classroom. 
                    Motta Financial also sponsors the program, providing financial support and 
                    professional resources to help SEED students and their small business clients succeed.
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    {"\""}I took my first accounting class because of a line in a Notorious B.I.G. song. 
                    Now I get to help the next generation of students discover their own path — and 
                    give small businesses access to the kind of advice that used to be reserved for 
                    companies with deep pockets.{"\""}
                  </p>
                  <Link href="/about/founder" className="motta-link" style={{ marginTop: 18, color: 'var(--motta-sage-light)' }}>
                    Read Dat{"'"}s Full Story <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What SEED Offers */}
      <section className="motta-seed-offerings">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" style={{ marginBottom: 50 }}>
              <span className="motta-eyebrow">Program Highlights</span>
              <h2 className="motta-section-title">What SEED Delivers</h2>
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: 'flaticon-target',
                title: 'Cross-Functional Consulting',
                body: 'Teams of students from accounting, marketing, legal, and finance disciplines collaborate to address real business challenges — mirroring how modern firms operate.',
              },
              {
                icon: 'flaticon-investment',
                title: 'Hands-On Experience',
                body: 'Students complete semester-long client engagements under faculty supervision, building portfolios of real work before they graduate.',
              },
              {
                icon: 'flaticon-financial-profit',
                title: 'Small Business Access',
                body: 'Entrepreneurs gain access to strategic capabilities — financial analysis, marketing plans, legal guidance — that would otherwise require expensive consultants.',
              },
              {
                icon: 'flaticon-handshake',
                title: 'Mentor Network',
                body: 'Suffolk alumni and industry professionals (including Motta team members) mentor student teams, bridging the gap between classroom theory and professional practice.',
              },
            ].map((item, i) => (
              <div className="col-lg-6 col-md-6" key={i}>
                <div className="motta-seed-offering">
                  <div className="motta-seed-offering__icon">
                    <i className={item.icon} />
                  </div>
                  <div className="motta-seed-offering__content">
                    <h4 className="motta-seed-offering__title">{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="motta-partnerships-cta">
        <div className="container">
          <div className="motta-partnerships-cta__inner">
            <div>
              <h2 className="motta-section-title motta-section-title--light">
                Partner With Motta
              </h2>
              <p>
                Whether you&apos;re a financial advisor looking for a CPA partner who actually
                picks up the phone, a firm that needs Motta-quality work behind your own brand,
                or an academic program building the next generation of professionals — let&apos;s
                talk.
              </p>
            </div>
            <div className="motta-partnerships-cta__buttons">
              <Link href="/contact" className="btn">
                Get in Touch
              </Link>
              <a
                href="https://boston.suffolk.edu/seed/people/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-btn"
              >
                Meet the SEED Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .motta-partnerships-intro {
          padding: 90px 0 70px;
          background: var(--motta-warm, #f4f1eb);
        }

        /* Quick nav cards */
        .motta-partnerships-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 767px) {
          .motta-partnerships-nav {
            grid-template-columns: 1fr;
          }
        }
        .motta-partnerships-nav__card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 26px 28px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.18);
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease, background 0.25s ease;
        }
        .motta-partnerships-nav__card:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 18px 40px -22px rgba(15, 19, 16, 0.3);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-partnerships-nav__eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-partnerships-nav__title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
        }
        .motta-partnerships-nav__desc {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(43, 47, 36, 0.72);
        }
        .motta-partnerships-nav__arrow {
          position: absolute;
          top: 22px;
          right: 22px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--motta-warm, #f4f1eb);
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .motta-partnerships-nav__card:hover .motta-partnerships-nav__arrow {
          background: var(--motta-sage-deep, #6b745d);
          color: var(--motta-warm, #f4f1eb);
        }

        /* FA feature */
        .motta-fa-feature {
          padding: 90px 0;
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-fa-feature__media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(15, 19, 16, 0.35);
        }
        .motta-fa-feature__media img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .motta-fa-feature__badge {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 8px 14px;
          border-radius: 8px;
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .motta-fa-feature__content {
          padding-right: 40px;
        }
        @media (max-width: 991px) {
          .motta-fa-feature__content {
            padding-right: 0;
            margin-bottom: 40px;
          }
        }
        .motta-fa-feature__lead {
          font-size: 17px;
          line-height: 1.65;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-fa-feature__content p {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }

        /* FA roles */
        .motta-fa-difference {
          padding: 90px 0;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-fa-role-card {
          height: 100%;
          padding: 36px 32px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.16);
          margin-bottom: 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .motta-fa-role-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px -25px rgba(15, 19, 16, 0.28);
        }
        .motta-fa-role-card__icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 18px;
        }
        .motta-fa-role-card--cpa .motta-fa-role-card__icon {
          background: var(--motta-charcoal, #2b2f24);
        }
        .motta-fa-role-card__title {
          font-size: 22px;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 4px;
        }
        .motta-fa-role-card__sub {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 600;
          margin-bottom: 18px;
        }
        .motta-fa-role-card__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .motta-fa-role-card__list li {
          position: relative;
          padding: 8px 0 8px 22px;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(43, 47, 36, 0.82);
          border-bottom: 1px dashed rgba(107, 116, 93, 0.18);
        }
        .motta-fa-role-card__list li:last-child {
          border-bottom: 0;
        }
        .motta-fa-role-card__list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 14px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--motta-sage, #8e9b79);
        }

        /* Benefits */
        .motta-fa-benefits {
          padding: 90px 0;
          background:
            radial-gradient(900px 500px at 80% 0%, rgba(142, 155, 121, 0.18) 0%, transparent 60%),
            linear-gradient(180deg, #1f261c 0%, #14180f 100%);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-fa-benefit {
          display: flex;
          gap: 18px;
          padding: 24px;
          margin-bottom: 24px;
          border-radius: 14px;
          background: rgba(244, 241, 235, 0.05);
          border: 1px solid rgba(244, 241, 235, 0.1);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .motta-fa-benefit:hover {
          transform: translateY(-3px);
          background: rgba(244, 241, 235, 0.08);
          border-color: rgba(142, 155, 121, 0.45);
        }
        .motta-fa-benefit__icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .motta-fa-benefit__title {
          color: var(--motta-warm, #f4f1eb);
          font-size: 18px;
          margin: 0 0 8px;
        }
        .motta-fa-benefit__content p {
          color: rgba(244, 241, 235, 0.82);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        /* Maximize / how we work */
        .motta-fa-maximize {
          padding: 90px 0;
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-fa-step {
          height: 100%;
          padding: 30px 26px;
          margin-bottom: 24px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.14);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .motta-fa-step:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px -25px rgba(15, 19, 16, 0.25);
        }
        .motta-fa-step__num {
          font-size: 30px;
          font-weight: 700;
          color: var(--motta-sage, #8e9b79);
          line-height: 1;
          margin-bottom: 14px;
          font-family: var(--font-serif, serif);
        }
        .motta-fa-step__title {
          font-size: 19px;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 10px;
        }
        .motta-fa-step p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }
        .motta-fa-maximize__close {
          font-size: 17px;
          line-height: 1.7;
          color: var(--motta-charcoal, #2b2f24);
          font-style: italic;
        }

        /* Quick nav: switch to 3 columns when 3 cards present */
        @media (min-width: 992px) {
          .motta-partnerships-nav {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* White Label feature */
        .motta-wl-feature {
          padding: 90px 0;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-wl-feature__media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(15, 19, 16, 0.35);
        }
        .motta-wl-feature__media img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .motta-wl-feature__badge {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 8px 14px;
          border-radius: 8px;
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .motta-wl-feature__content {
          padding-left: 40px;
        }
        @media (max-width: 991px) {
          .motta-wl-feature__content {
            padding-left: 0;
            margin-top: 40px;
          }
        }
        .motta-wl-feature__lead {
          font-size: 17px;
          line-height: 1.65;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-wl-feature__content p {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }

        /* WL services grid */
        .motta-wl-services {
          padding: 90px 0;
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-wl-service {
          height: 100%;
          padding: 30px 26px;
          margin-bottom: 24px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.16);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .motta-wl-service:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px -25px rgba(15, 19, 16, 0.25);
          border-color: var(--motta-sage, #8e9b79);
        }
        .motta-wl-service__icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 18px;
        }
        .motta-wl-service__title {
          font-size: 19px;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 10px;
        }
        .motta-wl-service p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }

        /* WL why */
        .motta-wl-why {
          padding: 90px 0;
          background:
            radial-gradient(900px 500px at 20% 0%, rgba(142, 155, 121, 0.18) 0%, transparent 60%),
            linear-gradient(180deg, #1f261c 0%, #14180f 100%);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-wl-why-card {
          display: flex;
          gap: 18px;
          padding: 24px;
          margin-bottom: 24px;
          border-radius: 14px;
          background: rgba(244, 241, 235, 0.05);
          border: 1px solid rgba(244, 241, 235, 0.1);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .motta-wl-why-card:hover {
          transform: translateY(-3px);
          background: rgba(244, 241, 235, 0.08);
          border-color: rgba(142, 155, 121, 0.45);
        }
        .motta-wl-why-card__num {
          flex-shrink: 0;
          font-family: var(--font-serif, serif);
          font-size: 30px;
          font-weight: 700;
          line-height: 1;
          color: var(--motta-sage, #8e9b79);
          width: 52px;
        }
        .motta-wl-why-card__title {
          color: var(--motta-warm, #f4f1eb);
          font-size: 18px;
          margin: 0 0 8px;
        }
        .motta-wl-why-card p {
          color: rgba(244, 241, 235, 0.82);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        /* SEED feature */
        .motta-seed-feature {
          padding: 90px 0;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-seed-feature__media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(15, 19, 16, 0.35);
        }
        .motta-seed-feature__media img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .motta-seed-feature__badge {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 8px 14px;
          border-radius: 8px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .motta-seed-feature__content {
          padding-left: 40px;
        }
        @media (max-width: 991px) {
          .motta-seed-feature__content {
            padding-left: 0;
            margin-top: 40px;
          }
        }
        .motta-seed-feature__lead {
          font-size: 17px;
          line-height: 1.65;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-seed-feature__content p {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }
        .motta-seed-dat {
          padding: 90px 0;
          background:
            radial-gradient(900px 500px at 80% 0%, rgba(142, 155, 121, 0.15) 0%, transparent 60%),
            linear-gradient(180deg, #1f261c 0%, #14180f 100%);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-seed-dat__card {
          display: flex;
          align-items: center;
          gap: 50px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(244, 241, 235, 0.06);
          border: 1px solid rgba(244, 241, 235, 0.12);
        }
        @media (max-width: 767px) {
          .motta-seed-dat__card {
            flex-direction: column;
            text-align: center;
            padding: 30px 24px;
            gap: 30px;
          }
        }
        .motta-seed-dat__photo {
          flex-shrink: 0;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--motta-sage, #8e9b79);
        }
        .motta-seed-dat__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .motta-seed-dat__content p {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(244, 241, 235, 0.85);
          margin-bottom: 14px;
        }
        .motta-seed-offerings {
          padding: 90px 0;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-seed-offering {
          display: flex;
          gap: 20px;
          padding: 28px 24px;
          margin-bottom: 24px;
          border-radius: 14px;
          background: #fff;
          border: 1px solid rgba(107, 116, 93, 0.14);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .motta-seed-offering:hover {
          transform: translateY(-4px);
          border-color: rgba(107, 116, 93, 0.4);
          box-shadow: 0 18px 40px -20px rgba(15, 19, 16, 0.25);
        }
        .motta-seed-offering__icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          font-size: 24px;
        }
        .motta-seed-offering__title {
          font-size: 18px;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 8px;
        }
        .motta-seed-offering__content p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }
        .motta-partnerships-cta {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--motta-sage-deep, #6b745d) 0%, #4f5742 100%);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-partnerships-cta__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }
        .motta-partnerships-cta__inner > div:first-child {
          max-width: 55ch;
        }
        .motta-partnerships-cta p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(244, 241, 235, 0.9);
          margin: 0;
        }
        .motta-partnerships-cta__buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .motta-partnerships-cta .btn {
          background: var(--motta-warm, #f4f1eb);
          color: var(--motta-charcoal, #2b2f24);
          border-color: var(--motta-warm, #f4f1eb);
        }
        .motta-partnerships-cta .btn:hover {
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          border-color: var(--motta-charcoal, #2b2f24);
        }
        .motta-partnerships-cta .border-btn {
          background: transparent;
          border: 1px solid rgba(244, 241, 235, 0.6);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-partnerships-cta .border-btn:hover {
          background: var(--motta-warm, #f4f1eb);
          color: var(--motta-sage-deep, #6b745d);
        }
      `}</style>
    </Layout>
  );
}
