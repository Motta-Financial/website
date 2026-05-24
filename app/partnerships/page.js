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
                Investing in Education &amp; Entrepreneurship
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(43,47,36,0.82)', maxWidth: '65ch', margin: '0 auto' }}>
                Motta Financial believes that the future of professional services depends on 
                nurturing the next generation of talent. We partner with academic institutions 
                and entrepreneurship programs to provide real-world experience, mentorship, 
                and resources to students and small business owners alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suffolk SEED Feature */}
      <section className="motta-seed-feature">
        <div className="container">
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
                Interested in Partnering?
              </h2>
              <p>
                We{"'"}re always looking for opportunities to support education and entrepreneurship 
                in our community. If you represent an academic institution or nonprofit program, 
                let{"'"}s talk.
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
        .motta-seed-feature {
          padding: 90px 0;
          background: var(--motta-cream-50, #fbf8f2);
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
