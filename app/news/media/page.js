'use client';

import Link from 'next/link';

const APPEARANCES = [
  {
    id: 'suffolk-going-places-2023',
    show: 'Suffolk University News',
    artwork: '/assets/img/news/dat-suffolk-seed.jpg',
    artworkAlt: 'Dat Le presenting at Suffolk University SEED Sessions',
    accent: '#14213d',
    episode: '\u201CGoing Places\u201D \u2014 the origin story of Motta Financial',
    host: 'Suffolk University Office of Public Affairs',
    guest: 'Dat Le, BSBA \u201912 / MSA \u201913',
    date: 'October 2023',
    duration: 'Feature article',
    summary:
      'Suffolk University profiled Dat just weeks after Motta Financial launched \u2014 covering his upbringing in Woburn, his path through Deloitte and global controllership roles, the mentorship of Professor Tracey Riley, and the founding mission behind Motta. The feature traces the origin story of the firm and why teaching the next generation of accountants at Suffolk is still part of the work.',
    listenUrl:
      'https://www.suffolk.edu/news-features/news/2023/10/18/15/29/going-places',
    listenLabel: 'Read the article',
    platforms: [],
  },
  {
    id: 'madison-advisory-ai-buys-time',
    show: 'Madison Advisory AI Podcast',
    artwork: '/assets/img/news/madison-advisory-ai-podcast.jpg',
    artworkAlt:
      'Madison Advisory AI Podcast cover art \u2014 \u201CAI Buys Time. Judgment Makes the Decision.\u201D',
    accent: '#6b745d',
    episode: '\u201CAI Buys Time. Judgment Makes the Decision.\u201D',
    host: 'Amanda Verner Thompson, Founder & CEO, Madison Advisory AI',
    guest: 'Dat Le, CPA \u2014 Founder & Managing Partner, Motta Financial',
    date: 'November 2025',
    duration: 'Podcast episode',
    summary:
      'Amanda Verner Thompson sits down with Dat Le to talk about responsible AI implementation inside a real operating CPA firm \u2014 not the hype, the execution. Dat walks through how Motta built ALFRED, our internal AI agent, to remove administrative friction and free the team for higher-value client work without sacrificing human judgment. They cover servant leadership in high-performance advisory environments, why generic AI advice can cause real-world harm without context, building a culture that rewards \u201Cfield-goal attempts,\u201D and the line Motta will not cross: never breaking trust with data accuracy. The throughline \u2014 AI can accelerate the analysis, but the decision must remain human.',
    listenUrl: 'https://www.youtube.com/watch?v=dguig3A7XlM',
    listenLabel: 'Watch on YouTube',
    platforms: [
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/episode/1fdVcjzmWAGgV28rUtvSYT',
      },
      {
        label: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/ai-buys-time-judgment-makes-the-decision/id1868377710?i=1000752539779',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7434231759296417792/',
      },
      {
        label: 'Madison Advisory AI',
        url: 'https://www.madisonadvisory.ai/',
      },
    ],
  },
];

export default function MediaPage() {
  return (
    <article className="motta-media">
      <header className="motta-media__head">
        <span className="motta-eyebrow">Podcasts, Press &amp; Features</span>
        <h1 className="motta-media__title">Motta in the Media</h1>
        <p className="motta-media__lead">
          From founder features to podcast guest spots, panel discussions, and
          press mentions &mdash; the Motta Financial team shows up to talk
          about tax strategy, building a modern CPA firm, the technology behind
          our workflow, and the clients and communities we serve. Catch up on
          recent appearances below.
        </p>
      </header>

      <ul className="motta-media__list">
        {APPEARANCES.map((item) => (
          <li key={item.id} className="motta-media__card">
            <div
              className="motta-media__art"
              style={
                item.artwork
                  ? { backgroundImage: `url(${item.artwork})` }
                  : { background: item.accent }
              }
              aria-hidden={item.artwork ? undefined : 'true'}
              role={item.artwork ? 'img' : undefined}
              aria-label={item.artwork ? item.artworkAlt : undefined}
            >
              {!item.artwork && (
                <span className="motta-media__art-mono">
                  {item.show
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 3)
                    .toUpperCase()}
                </span>
              )}
            </div>
            <div className="motta-media__body">
              <div className="motta-media__meta">
                <span className="motta-media__show">{item.show}</span>
                {item.date && (
                  <span className="motta-media__sep" aria-hidden="true">
                    &middot;
                  </span>
                )}
                {item.date && (
                  <span className="motta-media__date">{item.date}</span>
                )}
                {item.duration && (
                  <>
                    <span className="motta-media__sep" aria-hidden="true">
                      &middot;
                    </span>
                    <span>{item.duration}</span>
                  </>
                )}
              </div>
              <h2 className="motta-media__episode">{item.episode}</h2>
              <p className="motta-media__credits">
                Hosted by <strong>{item.host}</strong> &middot; featuring{' '}
                <strong>{item.guest}</strong>
              </p>
              <p className="motta-media__summary">{item.summary}</p>
              <div className="motta-media__actions">
                <a
                  className="motta-button motta-button--solid"
                  href={item.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.listenLabel || 'Listen'}
                </a>
                {item.platforms.map((p) => (
                  <a
                    key={p.label}
                    className="motta-media__platform"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
              {item.isPlaceholder && (
                <p className="motta-media__placeholder">
                  Placeholder entry &mdash; we&apos;ll swap in the real show
                  artwork, episode title, and listen links shortly.
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="motta-media__cta">
        <p>Want a Motta team member on your show, panel, or feature?</p>
        <Link href="/contact" className="motta-button motta-button--ghost">
          Get in touch
        </Link>
      </div>

      <style jsx>{`
        .motta-media__head {
          margin-bottom: 32px;
        }
        .motta-media__title {
          font-size: clamp(32px, 4vw, 44px);
          line-height: 1.1;
          margin: 8px 0 14px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-media__lead {
          font-size: 16px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.8);
          max-width: 65ch;
          margin: 0;
        }

        .motta-media__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 22px;
        }
        .motta-media__card {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 24px;
          padding: 22px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          border-radius: 14px;
        }
        @media (max-width: 640px) {
          .motta-media__card {
            grid-template-columns: 1fr;
          }
        }

        .motta-media__art {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 10px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(244, 241, 235, 0.92);
          box-shadow: 0 14px 32px -22px rgba(15, 19, 16, 0.45);
        }
        .motta-media__art-mono {
          font-family: var(--motta-font-display, inherit);
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .motta-media__body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .motta-media__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-media__sep {
          opacity: 0.5;
        }
        .motta-media__episode {
          font-size: 22px;
          line-height: 1.25;
          margin: 4px 0 4px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-media__credits {
          font-size: 13.5px;
          color: rgba(43, 47, 36, 0.72);
          margin: 0;
        }
        .motta-media__summary {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.85);
          margin: 6px 0 4px;
        }
        .motta-media__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }
        .motta-media__platform {
          appearance: none;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
          border: 1px solid rgba(107, 116, 93, 0.32);
          border-radius: 999px;
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
        }
        .motta-media__platform:hover {
          border-color: var(--motta-sage-deep, #6b745d);
        }
        .motta-media__placeholder {
          margin: 10px 0 0;
          font-size: 12px;
          color: rgba(43, 47, 36, 0.55);
          font-style: italic;
        }

        .motta-media__cta {
          margin-top: 36px;
          padding: 22px 24px;
          border-radius: 14px;
          background: var(--motta-warm, #f4f1eb);
          border: 1px dashed rgba(107, 116, 93, 0.28);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .motta-media__cta p {
          margin: 0;
          font-size: 15px;
          color: var(--motta-charcoal, #2b2f24);
          font-weight: 600;
        }
      `}</style>
    </article>
  );
}
