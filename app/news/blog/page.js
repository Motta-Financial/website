'use client';

import NewsList from '@/components/news/NewsList';

const ITEMS = [
  {
    href: '/news/blog/ja-youth-summit-why-we-showed-up',
    tag: 'Community',
    date: 'May 24, 2026',
    title: 'Why We Showed Up at the JA Youth Summit',
    desc:
      'Notes from a day spent with the people who will run everything in ten years \u2014 and why a growing firm should still write the check for the next generation.',
    image: '/assets/img/news/ja-youth-summit-2026.jpg',
  },
];

export default function BlogIndex() {
  return (
    <NewsList
      eyebrow="From the Motta Blog"
      title="Blog"
      lead="Practical, plain-language notes from the Motta team \u2014 written for the founders, advisors, attorneys, and lenders we work with every day."
      items={ITEMS}
    />
  );
}
