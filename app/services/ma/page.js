import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'Mergers & Acquisitions | Motta Financial',
  description:
    'Institutional-grade M&A advisory for the lower-middle market — business valuations, due diligence, quality of earnings, buy-side and sell-side advisory, financial modeling, and post-close integration.',
};

const SERVICES = [
  {
    href: '/services/ma/business-valuations',
    title: 'Business Valuations (409A & Transaction)',
    desc: 'Defensible, transaction-ready valuations — formal 409A and deal valuations backed by rigorous modeling, with a free real-time BizEquity valuation to get you started.',
  },
  {
    href: '/services/ma/due-diligence',
    title: 'M&A Due Diligence',
    desc: 'Buy-side and sell-side diligence coordination — financial, operational, and commercial analysis that surfaces risk and protects value before you sign.',
  },
  {
    href: '/services/ma/buy-sell-advisory',
    title: 'Buy-Side & Sell-Side Advisory',
    desc: 'End-to-end transaction support — from sourcing and LOIs through negotiation and close, with the deal discipline of an in-house corporate development team.',
  },
  {
    href: '/services/ma/quality-of-earnings',
    title: 'Quality of Earnings (QofE)',
    desc: 'Normalized EBITDA, revenue quality, and working-capital analysis that tells buyers and sellers what the numbers really mean.',
  },
  {
    href: '/services/ma/financial-modeling',
    title: 'Financial Modeling & Investment Memos',
    desc: 'Driver-based operating models, pro-forma scenarios, and board- and committee-ready investment memos that stand up to institutional scrutiny.',
  },
  {
    href: '/services/ma/integration',
    title: 'Post-Close Integration & Synergy',
    desc: 'A practical integration plan and synergy-capture roadmap so the value you modeled in diligence actually shows up after close.',
  },
];

const CALEB_EXPERTISE = [
  'Buy-side & sell-side M&A advisory',
  'Valuation, pro-forma & driver-based modeling',
  'Diligence coordination & QofE support',
  'Investment memos & board / committee materials',
  'Post-close integration & synergy capture',
  'Strategic planning & enterprise growth strategy',
];

export default function MergersAcquisitions() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Mergers & Acquisitions"
      breadcrumbEyebrow="Services"
    >
      <section className="services-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Mergers & Acquisitions</span>
                <h2 className="title">
                  Institutional-grade deal execution for the lower-middle market
                </h2>
                <p style={{ maxWidth: '65ch', margin: '0 auto' }}>
                  Owners and sponsors deserve the same caliber of analysis the
                  institutional buyers across the table are getting. Motta
                  brings the model, the diligence, and the integration plan —
                  without the layered fees that usually come with it.
                </p>
              </div>

              <div className="row">
                {SERVICES.map((svc) => (
                  <div key={svc.href} className="col-md-6 mb-4">
                    <Link
                      href={svc.href}
                      className="motta-service-card"
                      style={{
                        display: 'block',
                        padding: '28px 24px',
                        borderRadius: '14px',
                        background: '#fff',
                        border: '1px solid rgba(107, 116, 93, 0.16)',
                        textDecoration: 'none',
                        height: '100%',
                        transition:
                          'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      }}
                    >
                      <h4
                        style={{
                          marginBottom: 10,
                          color: 'var(--motta-charcoal, #2b2f24)',
                        }}
                      >
                        {svc.title}
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          color: 'rgba(43, 47, 36, 0.78)',
                          fontSize: 15,
                          lineHeight: 1.6,
                        }}
                      >
                        {svc.desc}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Caleb — practice lead */}
              <div
                style={{
                  marginTop: 32,
                  padding: '40px',
                  background: 'var(--motta-cream, #f7f5f1)',
                  border: '1px solid rgba(107,116,93,0.18)',
                  borderRadius: 16,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 24,
                    marginBottom: 20,
                  }}
                >
                  <img
                    src="/assets/img/team/caleb-long.jpg"
                    alt="Caleb Long, Director of Corporate Development & M&A at Motta Financial"
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      flexShrink: 0,
                      border: '3px solid #fff',
                      boxShadow: '0 6px 20px rgba(43,47,36,0.12)',
                    }}
                  />
                  <div style={{ flex: '1 1 280px', minWidth: 240 }}>
                    <span
                      className="sub-title"
                      style={{ display: 'block', marginBottom: 8 }}
                    >
                      Meet your corporate development lead
                    </span>
                    <h3 className="title" style={{ marginBottom: 6 }}>
                      Caleb Long
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        color: 'var(--motta-sage-deep, #6b745d)',
                      }}
                    >
                      Director, Corporate Development &amp; M&amp;A
                    </p>
                    <p style={{ margin: '4px 0 0', fontSize: 14, opacity: 0.75 }}>
                      Strategic Finance &nbsp;|&nbsp; M&amp;A &nbsp;|&nbsp;
                      Business Transformation &nbsp;|&nbsp; Boston
                    </p>
                  </div>
                </div>
                <p style={{ maxWidth: '70ch' }}>
                  Caleb leads Motta&apos;s corporate development and M&amp;A
                  practice with seven-plus years of in-house strategic finance
                  and corporate development experience across high-growth,
                  sponsor-backed, and platform organizations. He has executed
                  transactions and scaled finance functions — including
                  supporting a private-equity-backed exit to KKR-backed
                  BrightSpring Health, and a multi-state acquisition program
                  that grew a physician practice patient panel 10x and hospice
                  census 6x through M&amp;A.
                </p>

                <div className="row" style={{ marginTop: 8 }}>
                  <div className="col-md-7">
                    <h4 style={{ fontSize: 16, marginBottom: 12 }}>
                      Areas of expertise
                    </h4>
                    <ul className="list-wrap" style={{ paddingLeft: 0, listStyle: 'none' }}>
                      {CALEB_EXPERTISE.map((item) => (
                        <li
                          key={item}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 10,
                            marginBottom: 8,
                            fontSize: 15,
                          }}
                        >
                          <i
                            className="flaticon-arrow-button"
                            style={{
                              color: 'var(--motta-sage-deep, #6b745d)',
                              marginTop: 4,
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-5">
                    <h4 style={{ fontSize: 16, marginBottom: 12 }}>
                      Track record
                    </h4>
                    <ul
                      className="list-wrap"
                      style={{ paddingLeft: 0, listStyle: 'none', fontSize: 15 }}
                    >
                      <li style={{ marginBottom: 8 }}>
                        7+ years in corporate development, strategic finance &amp;
                        PE-backed M&amp;A
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        Contributed to a PE exit growing a platform to $600M of
                        revenue across 12 states
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        Led 5 completed acquisitions and 9 executed LOIs from a
                        proprietary pipeline
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        B.B.A. Finance, Babson College &middot; Wall Street Prep
                        financial modeling
                      </li>
                    </ul>
                  </div>
                </div>

                <blockquote
                  style={{
                    margin: '12px 0 0',
                    paddingLeft: 18,
                    borderLeft: '3px solid var(--motta-sage-deep, #6b745d)',
                    fontStyle: 'italic',
                    color: 'rgba(43,47,36,0.85)',
                  }}
                >
                  &ldquo;Owners and sponsors deserve the same caliber of analysis
                  the institutional buyers across the table are getting. My job
                  is to bring that rigor — the model, the diligence, the
                  integration plan — without the layered fees that usually come
                  with it.&rdquo;
                </blockquote>
              </div>

              <div className="text-center" style={{ marginTop: 40 }}>
                <IntakeButton className="btn mr-10" source="service: Mergers & Acquisitions">
                  Start a Conversation
                </IntakeButton>
                <Link href="/contact" className="btn border-btn">
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
