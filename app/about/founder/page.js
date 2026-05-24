import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

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
          <div className="row align-items-center motta-founder-story__row">
            <div className="col-lg-5">
              <div className="motta-founder-story__media">
                <img
                  src="/assets/img/about/dat-le-founder.jpg"
                  alt="Dat Le, Founder of Motta Financial"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="motta-founder-story__content">
                <span className="motta-eyebrow">Founder &amp; Managing Partner</span>
                <h1 className="motta-founder-story__name">Dat Le, CPA</h1>
                <blockquote className="motta-founder-story__quote">
                  <p>&ldquo;No need to worry, my accountant handles that.&rdquo;</p>
                  <cite>— The Notorious B.I.G., <em>Juicy</em> (1994)</cite>
                </blockquote>
                <p className="motta-founder-story__lead">
                  That single line changed everything.
                </p>
                <p>
                  When Dat Le first heard Biggie rap about having an accountant 
                  who just <em>handled things</em>, something clicked. It wasn&apos;t 
                  about spreadsheets or tax codes — it was about freedom. The 
                  freedom to focus on what you&apos;re building while someone else 
                  makes sure the numbers work.
                </p>
                <p>
                  That lyric inspired Dat to take an accounting class in high 
                  school. What started as curiosity turned into a career — from 
                  Big Four experience to founding Motta Financial in 2023 with a 
                  simple mission: give every client that same feeling Biggie was 
                  talking about.
                </p>
                <p>
                  No need to worry. We handle it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Tagline Banner === */}
      <section className="motta-founder-tagline">
        <div className="container">
          <div className="motta-founder-tagline__inner">
            <span className="motta-founder-tagline__eyebrow">Our Tagline</span>
            <h2 className="motta-founder-tagline__text">
              &ldquo;No Need to Worry<br />My Accountant Handles That&rdquo;
            </h2>
            <p className="motta-founder-tagline__sub">
              Inspired by Notorious B.I.G. &bull; Lived every day at Motta Financial
            </p>
          </div>
        </div>
      </section>

      {/* === Placeholder for more bio === */}
      <section className="motta-founder-bio">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="motta-founder-bio__content">
                <span className="motta-eyebrow">More About Dat</span>
                <h3 className="motta-section-title">Full Bio Coming Soon</h3>
                <p>
                  We&apos;re working on a more comprehensive biography. In the 
                  meantime, feel free to reach out — Dat loves talking shop, 
                  whether it&apos;s about tax strategy, building a firm, or 
                  debating the greatest hip-hop albums of all time.
                </p>
                <div className="motta-founder-bio__cta">
                  <IntakeButton className="btn" source="founder-page">
                    Become a Client
                  </IntakeButton>
                  <Link href="/contact" className="border-btn">
                    Get in Touch
                  </Link>
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
        }
        .motta-founder-story__media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(15, 19, 16, 0.35);
        }
        .motta-founder-story__media img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 5;
          object-fit: cover;
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
        .motta-founder-story__content p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin: 0 0 16px;
        }

        .motta-founder-tagline {
          padding: 80px 0;
          background: linear-gradient(
            135deg,
            var(--motta-sage-deep, #6b745d) 0%,
            #4f5742 100%
          );
          text-align: center;
        }
        .motta-founder-tagline__inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .motta-founder-tagline__eyebrow {
          display: inline-block;
          font-family: var(--tg-heading-font-family, ui-monospace, monospace);
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(244, 241, 235, 0.7);
          margin-bottom: 18px;
        }
        .motta-founder-tagline__text {
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--motta-warm, #f4f1eb);
          margin: 0 0 20px;
        }
        .motta-founder-tagline__sub {
          font-size: 15px;
          color: rgba(244, 241, 235, 0.75);
          margin: 0;
        }

        .motta-founder-bio {
          padding: 90px 0;
          background: var(--motta-warm, #f4f1eb);
        }
        .motta-founder-bio__content {
          text-align: center;
        }
        .motta-founder-bio__content p {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          max-width: 55ch;
          margin: 0 auto 28px;
        }
        .motta-founder-bio__cta {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  );
}
