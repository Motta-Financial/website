'use client';

import Link from 'next/link';

export default function NewsList({ eyebrow, title, lead, items }) {
  return (
    <article className="motta-news-list">
      <span className="motta-eyebrow">{eyebrow}</span>
      <h1 className="motta-section-title" style={{ marginBottom: 16 }}>
        {title}
      </h1>
      <p className="motta-news-list__lead">{lead}</p>

      <div className="motta-news-list__items">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="motta-news-list__card">
            {item.image ? (
              <div
                className="motta-news-list__card-img"
                style={{
                  backgroundImage: `url(${item.image})`,
                  background: item.imageBg || undefined,
                  backgroundPosition: item.imagePosition || 'center',
                }}
                aria-hidden="true"
              />
            ) : null}
            <div className="motta-news-list__card-body">
              <span className="motta-news-list__card-eyebrow">
                {item.tag} {item.date ? <>&middot; {item.date}</> : null}
              </span>
              <h3 className="motta-news-list__card-title">{item.title}</h3>
              <p className="motta-news-list__card-desc">{item.desc}</p>
              <span className="motta-news-list__card-cta">
                Read more <i className="flaticon-right-arrow" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .motta-news-list__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0 0 32px;
        }
        .motta-news-list__items {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .motta-news-list__card {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 24px;
          padding: 22px;
          border-radius: 14px;
          background: var(--motta-cream-50, #fbf8f2);
          border: 1px solid rgba(107, 116, 93, 0.16);
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
        }
        @media (max-width: 767px) {
          .motta-news-list__card {
            grid-template-columns: 1fr;
          }
        }
        .motta-news-list__card:hover {
          transform: translateY(-3px);
          border-color: var(--motta-sage, #8e9b79);
          box-shadow: 0 16px 40px -22px rgba(15, 19, 16, 0.28);
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-list__card-img {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 10px;
          min-height: 220px;
        }
        @media (min-width: 768px) {
          .motta-news-list__card-img {
            min-height: 180px;
          }
        }
        .motta-news-list__card-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
        }
        .motta-news-list__card-title {
          font-size: 22px;
          line-height: 1.25;
          margin: 8px 0 8px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-list__card-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(43, 47, 36, 0.8);
          margin: 0 0 10px;
        }
        .motta-news-list__card-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </article>
  );
}
