'use client';

import { useEffect, useState } from 'react';

export default function SeedSlideshow({ slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (total <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [total]);

  if (total === 0) return null;

  const go = (i) => setIndex(((i % total) + total) % total);

  return (
    <div className="seed-slideshow" aria-roledescription="carousel">
      <div className="seed-slideshow__viewport">
        {slides.map((s, i) => (
          <figure
            key={s.src}
            className={
              'seed-slideshow__slide' + (i === index ? ' is-active' : '')
            }
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <img src={s.src} alt={s.alt} />
            {s.caption ? (
              <figcaption className="seed-slideshow__caption">
                {s.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}

        {total > 1 ? (
          <>
            <button
              type="button"
              className="seed-slideshow__btn seed-slideshow__btn--prev"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
            >
              <i className="flaticon-left-arrow" />
            </button>
            <button
              type="button"
              className="seed-slideshow__btn seed-slideshow__btn--next"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
            >
              <i className="flaticon-right-arrow" />
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="seed-slideshow__dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={'Go to slide ' + (i + 1)}
              className={
                'seed-slideshow__dot' + (i === index ? ' is-active' : '')
              }
              onClick={() => go(i)}
            />
          ))}
        </div>
      ) : null}

      <style jsx>{`
        .seed-slideshow {
          width: 100%;
        }
        .seed-slideshow__viewport {
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: 16px;
          overflow: hidden;
          background: var(--motta-charcoal, #2b2f24);
          box-shadow: 0 24px 50px -28px rgba(15, 19, 16, 0.35);
        }
        .seed-slideshow__slide {
          position: absolute;
          inset: 0;
          margin: 0;
          opacity: 0;
          transform: scale(1.02);
          transition: opacity 0.7s ease, transform 0.9s ease;
        }
        .seed-slideshow__slide.is-active {
          opacity: 1;
          transform: scale(1);
        }
        .seed-slideshow__slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .seed-slideshow__caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px 22px;
          background: linear-gradient(
            180deg,
            rgba(15, 19, 16, 0) 0%,
            rgba(15, 19, 16, 0.78) 100%
          );
          color: var(--motta-warm, #f4f1eb);
          font-size: 13.5px;
          line-height: 1.5;
        }
        .seed-slideshow__btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 0;
          background: rgba(15, 19, 16, 0.55);
          color: var(--motta-warm, #f4f1eb);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 13px;
        }
        .seed-slideshow__btn:hover {
          background: rgba(15, 19, 16, 0.85);
        }
        .seed-slideshow__btn--prev {
          left: 14px;
        }
        .seed-slideshow__btn--next {
          right: 14px;
        }
        .seed-slideshow__dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 16px;
        }
        .seed-slideshow__dot {
          width: 28px;
          height: 4px;
          border-radius: 2px;
          border: 0;
          background: rgba(43, 47, 36, 0.18);
          cursor: pointer;
          transition: background 0.2s ease, width 0.2s ease;
          padding: 0;
        }
        .seed-slideshow__dot.is-active {
          background: var(--motta-sage-deep, #6b745d);
          width: 44px;
        }
      `}</style>
    </div>
  );
}
