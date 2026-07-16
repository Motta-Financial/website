'use client';

import NewsList from '@/components/news/NewsList';

const ITEMS = [
  {
    href: '/news/press/proconnect-case-study',
    tag: 'Featured In',
    date: 'Intuit ProConnect Tax',
    title:
      'Motta Financial featured in Intuit\u2019s ProConnect Tax case study',
    desc:
      'Intuit selected Motta Financial as a ProConnect Tax case study, spotlighting how the firm paired automation and ALFRED Ai to build a scalable, low-overhead tax practice from day one.',
  },
  {
    href: '/news/press/ja-youth-summit-2026',
    tag: 'Press Release',
    date: 'May 24, 2026',
    title:
      'Motta Financial Sponsors Inaugural JA Southern Massachusetts Youth Summit',
    desc:
      'Local CPA and advisory firm joins Milestone Mortgage Solutions, UMass Dartmouth, and dozens of community partners as a Connection Sponsor of Junior Achievement\u2019s first regional Youth Summit on AI, opportunity, and leadership.',
  },
];

export default function PressIndex() {
  return (
    <NewsList
      eyebrow="Press Releases"
      title="Press &amp; Announcements"
      lead="Official announcements from Motta Financial — sponsorships, partnerships, leadership news, and media releases. For interview requests or further information, contact us directly."
      items={ITEMS}
    />
  );
}
