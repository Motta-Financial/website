import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Meet Our Founder | Dat Le | Motta Financial',
  description:
    'Learn about Dat Le, founder of Motta Financial, and how a Notorious B.I.G. lyric inspired a career in accounting.',
};

export default function FounderPage() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Meet Our Founder"
      breadcrumbEyebrow="About"
      breadcrumbTagline="The story behind Motta Financial"
      breadcrumbImage="/assets/img/about/about_hero.jpg"
    >
      {/* === Founder Story === */}
      <section className="motta-founder-story">
        <div className="container">
          <div className="row motta-founder-story__row">
            {/* Left column: photo + connect box stacked */}
            <div className="col-lg-4 motta-founder-story__left">
              <div className="motta-founder-story__media">
                <img
                  src="/assets/img/about/dat-le-founder.jpg"
                  alt="Dat Le, Founder of Motta Financial"
                />
              </div>
              <div className="motta-founder-connect">
                <span className="motta-founder-connect__label">
                  Connect with Dat
                </span>
                <ul className="motta-founder-connect__list">
                  <li>
                    <a href="mailto:dat.le@mottafinancial.com">
                      dat.le@mottafinancial.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+17025146055,3">
                      (702) 514-6055 ext. 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://calendly.com/dat-le-motta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a meeting on Calendly
                    </a>
                  </li>
                </ul>
                <div className="motta-founder-connect__social">
                  <a
                    href="https://www.linkedin.com/in/dat-le-cpa-589b451b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dat Le on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/dat_m_le/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dat Le on Instagram"
                  >
                    <i className="fab fa-instagram" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://github.com/datleMotta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dat Le on GitHub"
                  >
                    <i className="fab fa-github" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Right column: bio content */}
            <div className="col-lg-8">
              <div className="motta-founder-story__content">
                <span className="motta-eyebrow">Founder &amp; Managing Partner</span>
                <h1 className="motta-founder-story__name">Dat Le, CPA</h1>

                {/* Intro pull quote */}
                <p className="motta-founder-story__intro">
                  Every client dollar should go toward creating value, not administrative work.
                </p>

                {/* Stats row */}
                <div className="motta-founder-story__stats">
                  <div className="motta-founder-story__stat">
                    <span className="motta-founder-story__stat-num">600+</span>
                    <span className="motta-founder-story__stat-label">Tax engagements/year</span>
                  </div>
                  <div className="motta-founder-story__stat">
                    <span className="motta-founder-story__stat-num">9</span>
                    <span className="motta-founder-story__stat-label">Team members</span>
                  </div>
                  <div className="motta-founder-story__stat">
                    <span className="motta-founder-story__stat-num">80%</span>
                    <span className="motta-founder-story__stat-label">Less admin time</span>
                  </div>
                </div>

                {/* Career */}
                <div className="motta-founder-story__section">
                  <h3 className="motta-founder-story__section-title">Career</h3>
                  <p>
                    Started at Deloitte, then held leadership roles across public accounting, consulting, and corporate finance — founding Motta Financial in 2023 with one goal: redesign how accounting gets done, combining AI, automation, and elite tax expertise.
                  </p>
                </div>

                {/* Philosophy */}
                <div className="motta-founder-story__section">
                  <h3 className="motta-founder-story__section-title">Philosophy</h3>
                  <p>
                    Accountants don&rsquo;t create wealth — they protect it. Clients play offense. Motta plays defense.
                  </p>
                </div>

                {/* Beyond the office */}
                <div className="motta-founder-story__section">
                  <h3 className="motta-founder-story__section-title">Beyond the office</h3>
                  <p>
                    Adjunct professor at Suffolk University, founder of the Le Family Scholarship, and a firm believer that AI will reshape professional services. Enjoys golf, Boston sports, and time with his dog Brody.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <style>{`
        .motta-founder-story {
          padding: 100px 0 80px;
          background: var(--motta-warm, #f4f1eb);
        }
        @media (max-width: 991px) {
          .motta-founder-story {
            padding: 70px 0 50px;
          }
        }
        .motta-founder-story__row {
          gap: 50px 0;
          align-items: flex-start;
        }
        .motta-founder-story__left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .motta-founder-story__media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(15, 19, 16, 0.35);
          width: 100%;
        }
        .motta-founder-story__media img {
          width: 100%;
          height: 520px;
          display: block;
          object-fit: cover;
          object-position: center 10%;
        }
        .motta-founder-story__content {
          max-width: 600px;
        }
        .motta-founder-story__name {
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 24px;
        }
        .motta-founder-story__quote {
          margin: 0 0 28px;
          padding: 24px 28px;
          background: rgba(142, 155, 121, 0.12);
          border-left: 4px solid var(--motta-sage, #8e9b79);
          border-radius: 0 12px 12px 0;
        }
        .motta-founder-story__quote p {
          font-size: clamp(20px, 2.5vw, 28px);
          font-style: italic;
          line-height: 1.35;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 12px;
        }
        .motta-founder-story__quote cite {
          font-size: 14px;
          font-style: normal;
          color: var(--motta-sage-deep, #6b745d);
          letter-spacing: 0.02em;
        }
        .motta-founder-story__lead {
          font-size: 20px;
          font-weight: 600;
          color: var(--motta-charcoal, #2b2f24);
          margin-bottom: 16px;
        }
        .motta-founder-story__intro {
          font-size: 18px;
          font-style: italic;
          font-weight: 500;
          line-height: 1.55;
          color: var(--motta-sage-deep, #6b745d);
          border-left: 3px solid var(--motta-sage, #8e9b79);
          padding-left: 16px;
          margin: 0 0 28px;
        }
        .motta-founder-story__stats {
          display: flex;
          gap: 0;
          margin: 0 0 32px;
          border: 1px solid rgba(142, 155, 121, 0.25);
          border-radius: 12px;
          overflow: hidden;
        }
        .motta-founder-story__stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 12px;
          border-right: 1px solid rgba(142, 155, 121, 0.25);
          background: rgba(142, 155, 121, 0.06);
        }
        .motta-founder-story__stat:last-child {
          border-right: none;
        }
        .motta-founder-story__stat-num {
          font-size: 26px;
          font-weight: 700;
          color: var(--motta-charcoal, #2b2f24);
          line-height: 1;
          margin-bottom: 4px;
        }
        .motta-founder-story__stat-label {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          text-align: center;
        }
        .motta-founder-story__section {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(142, 155, 121, 0.18);
        }
        .motta-founder-story__section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .motta-founder-story__section-title {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          margin: 0 0 8px;
          font-weight: 600;
        }
        .motta-founder-story__content p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin: 0;
        }

        .motta-founder-connect {
          width: 100%;
          padding: 24px 26px;
          background: #fff;
          border: 1px solid rgba(142, 155, 121, 0.25);
          border-radius: 14px;
          box-shadow: 0 12px 32px -22px rgba(15, 19, 16, 0.35);
          position: relative;
          z-index: 1;
        }
        .motta-founder-connect__label {
          display: block;
          font-family: var(--tg-heading-font-family, ui-monospace, monospace);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          margin-bottom: 14px;
        }
        .motta-founder-connect__list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .motta-founder-connect__list a {
          color: var(--motta-charcoal, #2b2f24);
          font-size: 15px;
          line-height: 1.5;
          text-decoration: none;
          border-bottom: 1px dashed rgba(107, 116, 93, 0.45);
          padding-bottom: 2px;
        }
        .motta-founder-connect__list a:hover {
          color: var(--motta-sage-deep, #6b745d);
          border-bottom-style: solid;
        }
        .motta-founder-connect__social {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(142, 155, 121, 0.20);
        }
        .motta-founder-connect__social a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(142, 155, 121, 0.12);
          color: var(--motta-charcoal, #2b2f24);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .motta-founder-connect__social a:hover {
          background: var(--motta-sage-deep, #6b745d);
          color: var(--motta-warm, #f4f1eb);
        }
        .motta-founder-connect__social i {
          font-size: 14px;
        }

        .motta-founder-philosophy {
          padding: 80px 0;
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-founder-philosophy p {
          font-size: 17px;
          line-height: 1.75;
          color: rgba(43, 47, 36, 0.85);
          margin: 0 0 24px;
        }
        .motta-founder-pull {
          margin: 0;
          padding: 24px 28px;
          background: rgba(142, 155, 121, 0.10);
          border-left: 4px solid var(--motta-sage, #8e9b79);
          border-radius: 0 12px 12px 0;
        }
        .motta-founder-pull p {
          font-size: 18px;
          font-style: italic;
          line-height: 1.6;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 12px;
        }
        .motta-founder-pull cite {
          font-size: 13px;
          font-style: normal;
          color: var(--motta-sage-deep, #6b745d);
          letter-spacing: 0.02em;
        }
      `}</style>
    </Layout>
  );
}
