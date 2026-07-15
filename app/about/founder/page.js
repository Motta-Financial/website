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
                  about spreadsheets or tax codes - it was about freedom. The 
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
            <div className="col-lg-5">
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

      {/* === Background === */}
      <section className="motta-founder-bio">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="motta-founder-bio__content">
                <span className="motta-eyebrow">Background</span>
                <h3 className="motta-section-title">From Woburn to Boston, Las Vegas, and beyond</h3>
                <p>
                  Dat is a two-time Suffolk University graduate
                  (BSBA &rsquo;12, MSA &rsquo;13) and a CPA who grew up in Woburn,
                  Massachusetts. His parents immigrated from Vietnam in 1987
                  as teenage newlyweds, and the work ethic they modeled is
                  the foundation everything at Motta is built on.
                </p>
                <p>
                  Before founding Motta, Dat trained as a senior auditor at
                  Deloitte, served as a consulting manager at WilliamsMarston
                  LLC, was a senior manager at Outseer, and ran global
                  corporate controllership for ANA, Inc. in Las Vegas. He was
                  named to Suffolk&rsquo;s &ldquo;10 Under 10&rdquo; alumni list in 2017
                  and co-hosted the 2023 ceremony alongside Suffolk President
                  Marisa Kelly.
                </p>
                <p>
                  In fall 2023, Dat launched Motta Financial with a team of
                  fellow Big Four alumni, including longtime friend and
                  Suffolk classmate Nick Raccuia. The firm now operates from
                  Boston and Las Vegas, with most of the team working
                  remotely. Three years in, Motta has grown to nine
                  professionals serving 600+ tax returns a year across real
                  estate investors, self-employed professionals, equity-comp
                  heavy tech employees, and businesses that need a fractional
                  CFO &mdash; all without sacrificing the high-touch advisory
                  experience the firm was built around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Mottainai === */}
      <section className="motta-founder-philosophy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <span className="motta-eyebrow">Why &ldquo;Motta&rdquo;</span>
              <h3 className="motta-section-title">Mottainai &mdash; nothing wasted</h3>
              <p>
                The firm name comes from the Japanese principle{' '}
                <em>mottainai</em>, which roughly translates to{' '}
                &ldquo;what a waste.&rdquo; It shapes how Dat prices, staffs,
                and builds workflows: every minute a Motta professional
                spends on data entry is a minute not spent on planning,
                advisory, or client conversations. Eliminating that waste is
                the whole point.
              </p>
              <blockquote className="motta-founder-pull">
                <p>
                  &ldquo;Even if I&rsquo;m the best CPA in the world, I can&rsquo;t
                  generate revenue for a client. They play offense and score
                  points &mdash; our job is to play defense and prevent money
                  from going out. Mottainai is essentially being efficient
                  with your resources. Our name is rooted in helping people
                  and businesses do that.&rdquo;
                </p>
                <cite>&mdash; Dat Le, ProConnect Tax case study</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* === Teaching & Community === */}
      <section className="motta-founder-bio motta-founder-bio--alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="motta-founder-bio__content">
                <span className="motta-eyebrow">Teaching &amp; Community</span>
                <h3 className="motta-section-title">From mentee to mentor</h3>
                <p>
                  Dat moonlights as an adjunct at his alma mater, teaching
                  Suffolk&rsquo;s Career Launch course inside the Sawyer
                  Business School&rsquo;s &ldquo;Winternship&rdquo; program
                  alongside longtime mentor Professor Tracey Riley. Every
                  year he donates his teaching salary back to Suffolk&rsquo;s
                  Accounting Department to support students. Motta is also
                  a founding sponsor of the Suffolk SEED program and a
                  Connection Sponsor of Junior Achievement of Southern
                  Massachusetts.
                </p>
                <p>
                  Suffolk profiled Dat&rsquo;s journey from accounting student to
                  firm founder in their 2023 feature{' '}
                  <a
                    href="https://www.suffolk.edu/news-features/news/2023/10/18/15/29/going-places"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &ldquo;Going Places.&rdquo;
                  </a>{' '}
                  Read more in our{' '}
                  <Link href="/news/media">Media</Link> section.
                </p>
                <div className="motta-founder-bio__cta">
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
          max-width: 380px;
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

        .motta-founder-connect {
          margin-top: 0;
          padding: 24px 26px;
          background: #fff;
          border: 1px solid rgba(142, 155, 121, 0.25);
          border-radius: 14px;
          box-shadow: 0 12px 32px -22px rgba(15, 19, 16, 0.35);
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
        .motta-founder-bio--alt {
          background: var(--motta-cream-50, #fbf8f2);
          margin-top: -40px;
          padding-top: 50px;
        }
        .motta-founder-bio__content {
          text-align: left;
        }
        .motta-founder-bio__content p {
          font-size: 17px;
          line-height: 1.75;
          color: rgba(43, 47, 36, 0.85);
          margin: 0 0 18px;
        }
        .motta-founder-bio__content a {
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .motta-founder-bio__cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 28px;
          justify-content: flex-end;
        }
        .motta-founder-bio__cta .border-btn {
          border: 1px solid var(--motta-sage-deep, #6b745d);
          color: var(--motta-sage-deep, #6b745d);
          background: transparent;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .motta-founder-bio__cta .border-btn:hover {
          background: var(--motta-sage-deep, #6b745d);
          color: var(--motta-warm, #f4f1eb);
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
          font-size: 16px;
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
