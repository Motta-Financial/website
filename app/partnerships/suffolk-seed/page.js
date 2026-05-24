'use client';

import { useState } from 'react';
import Link from 'next/link';
import SeedSlideshow from '@/components/partnerships/SeedSlideshow';

const TOOLKIT_TABS = [
  {
    id: 'internal',
    label: 'Internal Message',
    description:
      'Share SEED with your team via newsletters, intranets, and internal blogs.',
    body: `Dear Colleagues,

We're pleased to share information about our firm's partnership with Suffolk University's SEED — the Suffolk Entrepreneurship and Educational Development Collaborative — the first-of-its-kind, cross-functional consulting clinic that empowers entrepreneurs in today's competitive marketplace.

About SEED
SEED delivers bespoke business services through a dynamic collaboration of Suffolk faculty, alum professionals, and talented students working across disciplines — from finance and advertising to legal and funding opportunities. Through our support, SEED is making a meaningful impact in our local business community, helping entrepreneurs and small business owners access the resources and expertise they need to succeed.

Our Involvement
Motta Financial is proud to join the other organizations supporting this important work. We believe in investing in our community, and SEED's mission aligns directly with our values of fostering economic development and supporting local enterprise.

Looking Ahead
Over the coming months, we'll share our involvement with SEED through our communications channels. We're proud of this partnership and want our clients, partners, and broader community to know about our commitment to supporting local business development.

Thank you for being part of a firm that values giving back to our community.`,
  },
  {
    id: 'press',
    label: 'Press Release',
    description:
      'Template for an external press release or partnership announcement.',
    body: `FOR IMMEDIATE RELEASE

Motta Financial Announces Partnership with Suffolk University's SEED Initiative to Support Business Growth in the Boston Community

[CITY, STATE] — [Date] — Motta Financial today announced its partnership with Suffolk University's SEED — the Suffolk Entrepreneurship and Educational Development Collaborative. The initiative is a cross-functional consulting clinic dedicated to supporting the development and growth of local small businesses.

"Supporting local businesses is at the heart of our mission," said Dat Le, Founder of Motta Financial. "SEED is doing remarkable work to connect small businesses with strategic consulting resources. We're proud to partner with Suffolk University on this initiative and contribute to the economic vitality of our community."

Since its founding in 2025, SEED has supported sixteen local businesses and organizations, creating measurable economic impact in the community. Through a dynamic collaboration between partners, Suffolk faculty, alum professionals, and talented students working across disciplines — from finance and advertising to legal and funding opportunities — SEED helps entrepreneurs navigate growth challenges, develop business plans, improve operations, and build sustainable enterprises.

To learn more about SEED, visit www.suffolk.edu/seed.`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Post',
    description: 'Drop-in copy for a partner announcement on LinkedIn.',
    body: `Motta Financial is honored to collaborate with Suffolk University's @SuffolkSeed — the Suffolk Entrepreneurship and Educational Development Collaborative — which connects Suffolk students with Boston-area businesses and organizations seeking real-world support.

The SEED model is compelling: students gain invaluable hands-on experience while delivering meaningful contributions to local businesses. It's a partnership that strengthens our organization and Boston's entrepreneurial ecosystem.

Learn more about SEED and the impact it's making across Greater Boston: www.suffolk.edu/seed`,
  },
  {
    id: 'instagram',
    label: 'Instagram Post',
    description: 'Short-form caption for Instagram with hashtags.',
    body: `We at Motta Financial feel the need for SEED.

Through Suffolk University's SEED program, students are helping businesses like ours grow while gaining hands-on experience. Read more about SEED and its impact: www.suffolk.edu/seed

#ExperientialLearning #BostonStartups #TalentPipeline #SuffolkSEED
@SuffolkSeed`,
  },
];

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

function ToolkitCopyBlock({ tab }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tab.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.log('[v0] copy failed', e);
    }
  };
  return (
    <div className="motta-seed-toolkit__copyblock">
      <div className="motta-seed-toolkit__copyhead">
        <p className="motta-seed-toolkit__copydesc">{tab.description}</p>
        <button
          type="button"
          className="motta-seed-toolkit__copybtn"
          onClick={handleCopy}
          aria-label={`Copy ${tab.label}`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="motta-seed-toolkit__copytext">{tab.body}</pre>
    </div>
  );
}

export default function SuffolkSeedPartnership() {
  const [activeTab, setActiveTab] = useState(TOOLKIT_TABS[0].id);
  const currentTab = TOOLKIT_TABS.find((t) => t.id === activeTab) || TOOLKIT_TABS[0];

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

      <section className="motta-seed-toolkit" id="partner-toolkit">
        <header className="motta-seed-page__block-head">
          <span className="motta-eyebrow">Partner Marketing Toolkit</span>
          <h2 className="motta-section-title">Spreading the Word About SEED</h2>
          <p className="motta-seed-toolkit__intro">
            As a SEED partner, Motta Financial is authorized to use the official SEED
            Partner badge and share approved messaging across our channels. Below is the
            full toolkit &mdash; badges, sample posts, and press copy &mdash; for our
            team and anyone we collaborate with.
          </p>
        </header>

        <div className="motta-seed-toolkit__badges">
          <div className="motta-seed-toolkit__badge motta-seed-toolkit__badge--light">
            <a
              href="https://www.suffolk.edu/seed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suffolk University SEED Partner"
            >
              <img
                src="/assets/img/partnerships/seed/badges/seed-partner-badge-white.png"
                alt="Suffolk University SEED Partner Badge"
                width="220"
              />
            </a>
            <div className="motta-seed-toolkit__badge-meta">
              <h4>Light Background Badge</h4>
              <a
                href="/assets/img/partnerships/seed/badges/seed-partner-badge-white.png"
                download
                className="motta-seed-toolkit__download"
              >
                Download PNG
              </a>
            </div>
          </div>
          <div className="motta-seed-toolkit__badge motta-seed-toolkit__badge--dark">
            <a
              href="https://www.suffolk.edu/seed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suffolk University SEED Partner"
            >
              <img
                src="/assets/img/partnerships/seed/badges/seed-partner-badge-blue.png"
                alt="Suffolk University SEED Partner Badge"
                width="220"
              />
            </a>
            <div className="motta-seed-toolkit__badge-meta">
              <h4>Dark Background Badge</h4>
              <a
                href="/assets/img/partnerships/seed/badges/seed-partner-badge-blue.png"
                download
                className="motta-seed-toolkit__download"
              >
                Download PNG
              </a>
            </div>
          </div>
        </div>

        <p className="motta-seed-toolkit__usage">
          <strong>Usage:</strong> Badges should link to{' '}
          <a href="https://www.suffolk.edu/seed" target="_blank" rel="noopener noreferrer">
            www.suffolk.edu/seed
          </a>
          . Minimum size 150&times;124 pixels. Use the light badge on dark backgrounds and
          the dark badge on light backgrounds.
        </p>

        <div className="motta-seed-toolkit__tabs" role="tablist">
          {TOOLKIT_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={
                activeTab === tab.id
                  ? 'motta-seed-toolkit__tab motta-seed-toolkit__tab--active'
                  : 'motta-seed-toolkit__tab'
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ToolkitCopyBlock tab={currentTab} />

        <p className="motta-seed-toolkit__credit">
          Toolkit content adapted from Suffolk University&apos;s official{' '}
          <a
            href="https://boston.suffolk.edu/seed/toolkit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEED Partner Toolkit
          </a>
          .
        </p>
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

        .motta-seed-toolkit {
          padding: 50px 0;
          border-top: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-seed-toolkit__intro {
          max-width: 65ch;
          margin: 14px auto 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.82);
          text-align: center;
        }
        .motta-seed-toolkit__badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin: 32px 0 14px;
        }
        @media (max-width: 767px) {
          .motta-seed-toolkit__badges {
            grid-template-columns: 1fr;
          }
        }
        .motta-seed-toolkit__badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(107, 116, 93, 0.16);
        }
        .motta-seed-toolkit__badge--light {
          background: var(--motta-cream-50, #fbf8f2);
        }
        .motta-seed-toolkit__badge--dark {
          background: #14213d;
        }
        .motta-seed-toolkit__badge img {
          max-width: 220px;
          height: auto;
          display: block;
        }
        .motta-seed-toolkit__badge-meta {
          text-align: center;
        }
        .motta-seed-toolkit__badge-meta h4 {
          font-size: 14px;
          margin: 0 0 6px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-seed-toolkit__badge--dark .motta-seed-toolkit__badge-meta h4 {
          color: rgba(244, 241, 235, 0.92);
        }
        .motta-seed-toolkit__download {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--motta-sage, #6b745d);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
        }
        .motta-seed-toolkit__badge--dark .motta-seed-toolkit__download {
          color: rgba(244, 241, 235, 0.85);
        }
        .motta-seed-toolkit__usage {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.72);
          text-align: center;
          margin: 0 auto 28px;
          max-width: 60ch;
        }
        .motta-seed-toolkit__tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 16px;
        }
        .motta-seed-toolkit__tab {
          appearance: none;
          background: transparent;
          border: 1px solid rgba(107, 116, 93, 0.28);
          color: var(--motta-charcoal, #2b2f24);
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }
        .motta-seed-toolkit__tab:hover {
          border-color: var(--motta-sage, #6b745d);
        }
        .motta-seed-toolkit__tab--active {
          background: var(--motta-charcoal, #2b2f24);
          color: var(--motta-warm, #f4f1eb);
          border-color: var(--motta-charcoal, #2b2f24);
        }
        .motta-seed-toolkit__copyblock {
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          border-radius: 12px;
          padding: 22px;
        }
        .motta-seed-toolkit__copyhead {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .motta-seed-toolkit__copydesc {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.78);
          margin: 0;
          flex: 1;
        }
        .motta-seed-toolkit__copybtn {
          appearance: none;
          background: var(--motta-sage, #6b745d);
          color: var(--motta-warm, #f4f1eb);
          border: 0;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          flex-shrink: 0;
        }
        .motta-seed-toolkit__copybtn:hover {
          background: var(--motta-charcoal, #2b2f24);
        }
        .motta-seed-toolkit__copytext {
          margin: 0;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .motta-seed-toolkit__credit {
          font-size: 12.5px;
          color: rgba(43, 47, 36, 0.6);
          text-align: center;
          margin: 18px 0 0;
        }
        .motta-seed-toolkit__credit a {
          color: var(--motta-sage, #6b745d);
        }
      `}</style>
    </article>
  );
}
