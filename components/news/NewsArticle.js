'use client';

import Link from 'next/link';

export default function NewsArticle({
  eyebrow,
  date,
  title,
  subtitle,
  heroImage,
  heroAlt,
  heroCaption,
  backHref = '/news',
  backLabel = 'All News',
  children,
}) {
  return (
    <article className="motta-news-article">
      <div className="motta-news-article__meta-row">
        <Link href={backHref} className="motta-news-article__back">
          <i className="flaticon-left-arrow" /> {backLabel}
        </Link>
        {eyebrow ? (
          <span className="motta-news-article__eyebrow-pill">{eyebrow}</span>
        ) : null}
        {date ? <span className="motta-news-article__date">{date}</span> : null}
      </div>
      <h1 className="motta-news-article__title">{title}</h1>
      {subtitle ? <p className="motta-news-article__sub">{subtitle}</p> : null}

      {heroImage ? (
        <figure className="motta-news-article__hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt={heroAlt || ''} />
          {heroCaption ? (
            <figcaption>{heroCaption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="motta-news-article__body">{children}</div>

      <style jsx>{`
        .motta-news-article__meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .motta-news-article__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: none;
        }
        .motta-news-article__back:hover {
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-article__eyebrow-pill {
          display: inline-flex;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          background: rgba(142, 155, 121, 0.12);
          border: 1px solid rgba(142, 155, 121, 0.28);
          border-radius: 999px;
          padding: 3px 10px;
        }
        .motta-news-article__date {
          font-size: 12px;
          letter-spacing: 0.06em;
          color: rgba(43, 47, 36, 0.5);
        }
        .motta-news-article__title {
          font-size: clamp(28px, 3.4vw, 42px);
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--motta-charcoal, #2b2f24);
          margin: 0 0 14px;
          text-wrap: balance;
        }
        .motta-news-article__sub {
          font-size: 18px;
          line-height: 1.55;
          color: rgba(43, 47, 36, 0.78);
          margin: 0 0 28px;
          max-width: 65ch;
        }
        .motta-news-article__hero {
          margin: 0 0 32px;
          max-width: 70ch;
        }
        .motta-news-article__hero img {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: 14px;
        }
        .motta-news-article__hero figcaption {
          font-size: 12.5px;
          color: rgba(43, 47, 36, 0.62);
          margin-top: 10px;
          line-height: 1.5;
        }
        .motta-news-article__body :global(p) {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(43, 47, 36, 0.88);
          margin: 0 0 18px;
          max-width: 70ch;
        }
        .motta-news-article__body :global(h2) {
          font-size: 24px;
          margin: 36px 0 14px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-article__body :global(h3) {
          font-size: 19px;
          margin: 28px 0 10px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-article__body :global(ul) {
          padding-left: 22px;
          margin: 0 0 20px;
        }
        .motta-news-article__body :global(li) {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.88);
          margin-bottom: 6px;
        }
        .motta-news-article__body :global(blockquote) {
          margin: 24px 0;
          padding: 18px 22px;
          border-left: 3px solid var(--motta-sage, #8e9b79);
          background: var(--motta-cream-50, #fbf8f2);
          border-radius: 8px;
          font-size: 17px;
          line-height: 1.6;
          color: rgba(43, 47, 36, 0.88);
          font-style: italic;
        }
        .motta-news-article__body :global(blockquote cite) {
          display: block;
          margin-top: 10px;
          font-size: 13px;
          color: rgba(43, 47, 36, 0.65);
          font-style: normal;
          letter-spacing: 0.04em;
        }
        .motta-news-article__body :global(a) {
          color: var(--motta-sage-deep, #6b745d);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .motta-news-article__body :global(a:hover) {
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-article__body :global(.motta-news-article__about) {
          margin-top: 36px;
          padding: 22px 24px;
          border-radius: 12px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.14);
        }
        .motta-news-article__body :global(.motta-news-article__about h3) {
          margin-top: 0;
          font-size: 16px;
          letter-spacing: 0.04em;
        }
        .motta-news-article__body :global(.motta-news-article__about p) {
          font-size: 14.5px;
          line-height: 1.7;
        }
      `}</style>
    </article>
  );
}
