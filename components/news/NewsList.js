'use client';

import Link from 'next/link';

export default function NewsList({ eyebrow, title, lead, items }) {
  return (
    <article className="motta-news-list motta-news-section-bg">
      <span className="motta-eyebrow">{eyebrow}</span>
      <h1 className="motta-section-title" style={{ marginBottom: 16 }}>
        {title}
      </h1>
      <p className="motta-news-list__lead">{lead}</p>

      <div className="motta-news-list__items">
        {items.map((item, i) => (
          <>
            {i > 0 && <hr key={`sep-${item.href}`} className="motta-news-list__sep" />}
            <Link
              key={item.href}
              href={item.href}
              className={`motta-news-list__card${
                item.image ? '' : ' motta-news-list__card--text'
              }`}
            >
              {item.image ? (
                <div
                  className={`motta-news-list__card-img${item.imageBg ? ' motta-news-list__card-img--logo' : ''}`}
                  style={item.imageBg ? { background: item.imageBg } : undefined}
                >
                  <img
                    src={item.image}
                    alt={item.title || ''}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    style={
                      item.imageBg
                        ? { maxWidth: '70%', maxHeight: 100, objectFit: 'contain' }
                        : { objectPosition: item.imagePosition || 'center top' }
                    }
                  />
                </div>
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
          </>
        ))}
      </div>

      <style jsx>{`
        .motta-news-list__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.85);
          max-width: 65ch;
          margin: 0;
        }
        .motta-news-list__items {
          display: flex;
          flex-direction: column;
          margin-top: 28px;
        }
        .motta-news-list__sep {
          border: none;
          border-top: 1px solid rgba(107, 116, 93, 0.28);
          margin: 28px 0 0;
        }
        .motta-news-list__card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border-radius: 0;
          overflow: visible;
          background: transparent;
          border: none;
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          padding: 28px 0 0;
          transition: color 0.2s ease;
        }
        .motta-news-list__card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border-radius: 0;
          overflow: visible;
          background: transparent;
          border: none;
          color: var(--motta-charcoal, #2b2f24);
          text-decoration: none;
          padding: 44px 0 0;
          transition: color 0.2s ease;
        }
        .motta-news-list__card:hover {
          transform: none;
          box-shadow: none;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-list__card-img {
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 16px;
          width: 100%;
          height: 260px;
        }
        .motta-news-list__card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: 16px;
        }
        .motta-news-list__card-img--logo {
          height: 120px;
          padding: 20px;
          background: var(--motta-cream-50, #fbf8f2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .motta-news-list__card-img--logo img {
          height: auto;
          width: auto;
          max-width: 70%;
          max-height: 80px;
          object-fit: contain;
          border-radius: 0;
        }
        .motta-news-list__card-body {
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .motta-news-list__card-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--motta-sage-deep, #6b745d);
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
        }
        .motta-news-list__card-title {
          font-size: 22px;
          line-height: 1.25;
          margin: 0 0 12px;
          color: var(--motta-charcoal, #2b2f24);
        }
        .motta-news-list__card-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(43, 47, 36, 0.72);
          margin: 0;
          max-width: 72ch;
        }
        .motta-news-list__card-cta {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--motta-sage-deep, #6b745d);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
      `}</style>
    </article>
  );
}
