'use client';

import Link from 'next/link';

const APPEARANCES = [
  {
    id: 'placeholder-1',
    show: 'Podcast Show Name',
    artwork: null,
    artworkAlt: 'Podcast cover art',
    accent: '#14213d',
    episode: 'Episode title goes here',
    host: 'Host Name',
    guest: 'Dat Le',
    date: 'TBD',
    duration: null,
    summary:
      'Short blurb about the conversation \u2014 what Dat covered, why it matters to clients, and any standout moments. Replace this copy with the real episode description.',
    listenUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7434231097208549376',
    listenLabel: 'View on LinkedIn',
    platforms: [],
    isPlaceholder: true,
  },
];

export default function MediaPage() {
  return (
    <article className="motta-media">
      <header className="motta-media__head">
        <span className="motta-eyebrow">Podcasts &amp; Media</span>
        <h1 className="motta-media__title">In the Media</h1>
        <p className="motta-media__lead">
          Dat Le and the Motta Financial team show up on podcasts, panels, and
          interviews to talk about tax strategy, building a modern firm, and the
          businesses we serve. Catch up on recent appearances below.
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
        <p>Want Dat on your show or panel?</p>
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
