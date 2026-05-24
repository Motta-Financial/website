'use client';

import Link from 'next/link';
import SeedSlideshow from '@/components/partnerships/SeedSlideshow';

const SLIDES = [
  {
    src: '/assets/img/partnerships/seed/seed-presenting-deadlines.jpg',
    alt: 'Dat Le presenting tax deadlines to small business owners at a Suffolk SEED session',
    caption:
      'Dat Le walking small business owners through year-end tax deadlines at a Suffolk SEED session.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-faculty-group.jpg',
    alt: 'Motta team with Suffolk SEED faculty and program leadership at the Sawyer Business School',
    caption:
      'With Suffolk SEED faculty and program leadership at the Sawyer Business School.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-attendee-moment.jpg',
    alt: 'Motta team member embracing a small business owner during a SEED session',
    caption:
      'The reason we show up \u2014 small business owners getting access to expertise that used to be out of reach.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-presenting-solo.jpg',
    alt: 'Dat Le speaking in front of a SEED tax-deadlines slide with the Boston skyline behind him',
    caption:
      'Inside a SEED working session at Suffolk University in downtown Boston.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-audience.jpg',
    alt: 'Small business owners attending a Suffolk SEED Motta Financial session',
    caption:
      'Massachusetts entrepreneurs in the room, asking questions and getting answers.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-agenda-slide.jpg',
    alt: 'Motta Financial agenda slide for a SEED session covering accounting fundamentals',
    caption:
      'A typical SEED session agenda \u2014 accounting fundamentals, year-end deadlines, and a live QuickBooks working session.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-why-accounting.jpg',
    alt: 'Why Is Accounting Important slide using a Jenga tower analogy',
    caption:
      '"Why Is Accounting Important?" \u2014 because every business is a Jenga tower if the books aren\u2019t right.',
  },
  {
    src: '/assets/img/partnerships/seed/seed-team-portrait.jpg',
    alt: 'Dat Le and a colleague with a SEED program participant at Suffolk University',
    caption:
      'After the session: Motta team with one of the small business owners we worked with.',
  },
];

const OFFERINGS = [
  {
    icon: 'flaticon-target',
    title: 'Cross-Functional Consulting',
    body:
      'Teams of students from accounting, marketing, legal, and finance disciplines collaborate to address real business challenges \u2014 mirroring how modern firms operate.',
  },
  {
    icon: 'flaticon-investment',
    title: 'Hands-On Experience',
    body:
      'Students complete semester-long client engagements under faculty supervision, building portfolios of real work before they graduate.',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Small Business Access',
    body:
      'Entrepreneurs gain access to strategic capabilities \u2014 financial analysis, marketing plans, legal guidance \u2014 that would otherwise require expensive consultants.',
  },
  {
    icon: 'flaticon-handshake',
    title: 'Mentor Network',
    body:
      'Suffolk alumni and industry professionals (including Motta team members) mentor student teams, bridging the gap between classroom theory and professional practice.',
  },
];

export default function SuffolkSeedPartnership() {
  return (
    <article className="motta-seed-page">
      <header className="motta-seed-page__head">
        <span className="motta-eyebrow">Academic Partnership</span>
        <h1 className="motta-section-title" style={{ marginBottom: 14 }}>
          Suffolk University SEED Program
        </h1>
        <p className="motta-seed-page__lead">
          The future of professional services depends on nurturing the next generation
          of talent. Motta is a founding sponsor of the Suffolk Entrepreneurship and
          Educational Development Collaborative &mdash; and our founder teaches in it.
        </p>
      </header>

      <SeedSlideshow slides={SLIDES} />

      <section className="motta-seed-page__about">
        <h2 className="motta-section-title" style={{ marginBottom: 14 }}>
          About the Program
        </h2>
        <p>
          <strong>SEED</strong> &mdash; the Suffolk Entrepreneurship and Educational
          Development Collaborative &mdash; is a multidisciplinary consulting clinic that
          connects small businesses with the strategic capabilities they need to thrive.
        </p>
        <p>
          Launched in Spring 2025, SEED brings together Suffolk faculty, alumni
          professionals, and students from finance, marketing, advertising, legal, and
          accounting disciplines to deliver bespoke business services to entrepreneurs
          across Massachusetts.
        </p>
        <p>
          The program operates like a professional consulting firm. Students work on
          semester-long, hands-on projects with real clients under the guidance of
          faculty mentors, gaining invaluable experiential learning while helping small
          businesses access expertise that would otherwise be out of reach.
        </p>
        <a
          href="https://boston.suffolk.edu/seed/"
          target="_blank"
          rel="noopener noreferrer"
          className="motta-link"
        >
          Visit Suffolk SEED <i className="flaticon-right-arrow" />
        </a>
      </section>

      <section className="motta-seed-page__dat">
        <div className="motta-seed-page__dat-photo">
          <img
            src="/assets/img/partnerships/seed/seed-headshot.jpg"
            alt="Dat Le, Founder of Motta Financial and SEED Faculty"
          />
        </div>
        <div className="motta-seed-page__dat-content">
          <span className="motta-eyebrow motta-eyebrow--light">Faculty &amp; Sponsor</span>
          <h2 style={{ color: 'var(--motta-warm)', marginBottom: 14 }}>
            Dat Le, CPA &mdash; SEED Faculty Member
          </h2>
          <p>
            Motta Financial&apos;s founder, Dat Le, serves as a professor in the SEED
            program, bringing real-world accounting and advisory expertise directly into
            the classroom. Motta Financial also sponsors the program, providing financial
            support and professional resources to help SEED students and their small
            business clients succeed.
          </p>
          <p style={{ marginBottom: 0 }}>
            &ldquo;I took my first accounting class because of a line in a Notorious B.I.G.
            song. Now I get to help the next generation of students discover their own
            path &mdash; and give small businesses access to the kind of advice that used
            to be reserved for companies with deep pockets.&rdquo;
          </p>
          <Link
            href="/about/founder"
            className="motta-link"
            style={{ marginTop: 16, color: 'var(--motta-sage-light)' }}
          >
            Read Dat&apos;s Full Story <i className="flaticon-right-arrow" />
          </Link>
        </div>
      </section>

      <section className="motta-seed-page__offerings">
        <header className="motta-seed-page__block-head">
          <span className="motta-eyebrow">Program Highlights</span>
          <h2 className="motta-section-title">What SEED Delivers</h2>
        </header>
        <div className="motta-seed-page__offerings-grid">
          {OFFERINGS.map((o) => (
            <div key={o.title} className="motta-seed-page__offering">
              <div className="motta-seed-page__offering-icon">
                <i className={o.icon} />
              </div>
              <div>
                <h4>{o.title}</h4>
                <p>{o.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="motta-seed-page__cta">
        <Link href="/contact" className="btn">
          Get in Touch
        </Link>
        <a
          href="https://boston.suffolk.edu/seed/people/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-btn"
          style={{ marginLeft: 12 }}
        >
          Meet the SEED Team
        </a>
      </div>

      <style jsx>{`
        .motta-seed-page__head {
          margin-bottom: 32px;
        }
        .motta-seed-page__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0;
        }
        .motta-seed-page__about {
          padding: 50px 0;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
          margin-top: 50px;
        }
        .motta-seed-page__about p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          margin-bottom: 14px;
        }

        .motta-seed-page__dat {
          margin: 50px -48px;
          padding: 50px 48px;
          background: linear-gradient(180deg, #1f261c 0%, #14180f 100%);
          color: var(--motta-warm, #f4f1eb);
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 36px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .motta-seed-page__dat {
            margin: 40px -22px;
            padding: 40px 22px;
            grid-template-columns: 1fr;
          }
        }
        .motta-seed-page__dat-photo {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(244, 241, 235, 0.12);
          box-shadow: 0 18px 40px -22px rgba(15, 19, 16, 0.55);
          justify-self: center;
        }
        .motta-seed-page__dat-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .motta-seed-page__dat-content p {
          color: rgba(244, 241, 235, 0.82);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .motta-seed-page__offerings {
          padding: 50px 0;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-seed-page__block-head {
          text-align: center;
          margin-bottom: 30px;
        }
        .motta-seed-page__offerings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 767px) {
          .motta-seed-page__offerings-grid {
            grid-template-columns: 1fr;
          }
        }
        .motta-seed-page__offering {
          display: flex;
          gap: 14px;
          padding: 22px;
          border-radius: 12px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
        }
        .motta-seed-page__offering-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--motta-sage, #8e9b79);
          color: var(--motta-warm, #f4f1eb);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .motta-seed-page__offering h4 {
          font-size: 17px;
          margin: 0 0 6px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-seed-page__offering p {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
        }
        .motta-seed-page__cta {
          text-align: center;
          margin-top: 30px;
        }
      `}</style>
    </article>
  );
}
