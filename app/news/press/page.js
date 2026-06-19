'use client';

import NewsList from '@/components/news/NewsList';

const ITEMS = [
  {
    href: '/news/press/proconnect-case-study',
    tag: 'Intuit ProConnect Case Study',
    date: 'Featured by Intuit',
    title:
      'How Motta Financial Built a Scalable Tax Practice with Intuit ProConnect Tax',
    desc:
      'Intuit featured Motta Financial in an official ProConnect Tax case study \u2014 the story of a firm built from day one on automation, a Books-to-Tax workflow, and ALFRED Ai, with a relentless focus on client value.',
    image: '/assets/img/news/proconnect-case-study.png',
  },
  {
    href: '/news/press/ja-youth-summit-2026',
    tag: 'Press Release',
    date: 'May 24, 2026',
    title:
      'Motta Financial Sponsors Inaugural JA Southern Massachusetts Youth Summit',
    desc:
      'Local CPA and advisory firm joins Milestone Mortgage Solutions, UMass Dartmouth, and dozens of community partners as a Connection Sponsor of Junior Achievement\u2019s first regional Youth Summit on AI, opportunity, and leadership.',
    image: '/assets/img/news/ja-youth-summit-2026.jpg',
  },
];

export default function PressIndex() {
  return (
    <NewsList
      eyebrow="Press Releases"
      title="Press &amp; Announcements"
      lead="Official announcements from Motta Financial \u2014 sponsorships, partnerships, leadership news, and media releases. For interview requests or further information, contact us directly."
      items={ITEMS}
    />
  );
}
