'use client';

import { useEffect, useState } from 'react';
import { SOCIALS } from '@/lib/socials';

/**
 * Live Instagram feed grid for Motta Financial.
 * Fetches recent posts from /api/instagram (Instagram Graph API proxy).
 * Falls back to "Follow us on Instagram" placeholder tiles if the
 * upstream is unconfigured or errors out.
 */
export default function InstagramFeed({ limit = 6 }) {
  const [media, setMedia] = useState(null); // null = loading, [] = fallback

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/instagram?limit=${limit}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setMedia(Array.isArray(data?.media) ? data.media : []);
      })
      .catch(() => {
        if (!cancelled) setMedia([]);
      });
    return () => {
      cancelled = true;
    };
  }, [limit]);

  // Loading: show skeletons sized like the existing widget
  if (media === null) {
    return (
      <div className="footer-instagram">
        <ul className="list-wrap">
          {Array.from({ length: limit }).map((_, i) => (
            <li key={i} aria-hidden="true">
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 4,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Live posts
  if (media.length > 0) {
    return (
      <div className="footer-instagram">
        <ul className="list-wrap">
          {media.map((post) => (
            <li key={post.id}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  post.caption
                    ? `Instagram post: ${post.caption.slice(0, 80)}`
                    : 'View Instagram post'
                }
              >
                <img
                  src={post.thumbnail || '/placeholder.svg'}
                  alt={post.caption ? post.caption.slice(0, 80) : 'Motta Financial Instagram post'}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Fallback: link tiles to the IG profile
  return (
    <div className="footer-instagram">
      <ul className="list-wrap">
        {Array.from({ length: limit }).map((_, i) => (
          <li key={i}>
            <a
              href={SOCIALS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Motta Financial on Instagram"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                aspectRatio: '1 / 1',
                background:
                  'linear-gradient(135deg, var(--motta-sage, #6B745D), var(--motta-sage-deep, #4F573F))',
                color: '#fff',
                borderRadius: 4,
              }}
            >
              <i className="fab fa-instagram" style={{ fontSize: 22 }} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
