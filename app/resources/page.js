import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'Resources | Motta Financial',
  description:
    'Guides, frameworks, and downloadable resources from Motta Financial — including the Office of the CFO process-cycles framework.',
};

const RESOURCES = [
  {
    eyebrow: 'Office of the CFO',
    title: 'Office of the CFO — Process Cycles',
    desc: 'How the finance function actually runs: the three core cycles — Procure-to-Pay, Order-to-Cash, and Record-to-Report — on one integrated team, one data room, and one partner you can call.',
    file: '/assets/downloads/office-of-the-cfo-process-cycles.pdf',
    meta: 'PDF · Framework overview',
  },
];

export default function Resources() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="Resources"
      breadcrumbEyebrow="Knowledge"
    >
      <section className="services-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Resources</span>
                <h2 className="title">Frameworks &amp; downloads</h2>
                <p style={{ maxWidth: '64ch', margin: '0 auto' }}>
                  Practical guides and frameworks we use with clients. Download
                  what&apos;s useful, and reach out when you&apos;d like to talk
                  it through with a CPA.
                </p>
              </div>

              <div className="row">
                {RESOURCES.map((r) => (
                  <div key={r.file} className="col-md-6 mb-4">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '28px 26px',
                        borderRadius: '14px',
                        background: '#fff',
                        border: '1px solid rgba(107, 116, 93, 0.16)',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          marginBottom: 14,
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 44,
                            height: 44,
                            borderRadius: 10,
                            background: 'var(--motta-cream, #f7f5f1)',
                            color: 'var(--motta-sage-deep, #6b745d)',
                            fontSize: 20,
                          }}
                        >
                          <i className="flaticon-pie-chart" />
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'rgba(43, 47, 36, 0.55)',
                          }}
                        >
                          {r.eyebrow}
                        </span>
                      </div>
                      <h4
                        style={{
                          marginBottom: 10,
                          color: 'var(--motta-charcoal, #2b2f24)',
                        }}
                      >
                        {r.title}
                      </h4>
                      <p
                        style={{
                          margin: '0 0 18px',
                          color: 'rgba(43, 47, 36, 0.78)',
                          fontSize: 15,
                          lineHeight: 1.6,
                        }}
                      >
                        {r.desc}
                      </p>
                      <div
                        style={{
                          marginTop: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            color: 'rgba(43, 47, 36, 0.55)',
                          }}
                        >
                          {r.meta}
                        </span>
                        <a
                          href={r.file}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          <i className="flaticon-down" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-40">
                <p style={{ marginBottom: 18 }}>
                  Want to see how these frameworks apply to your business?
                </p>
                <IntakeButton className="btn mr-10" source="resources">
                  Become a Client
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
