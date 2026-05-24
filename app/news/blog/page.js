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
    imagePosition: 'center 22%',
  },
  {
    href: '/news/blog/paying-it-forward-suffolk-scholarship',
    tag: 'Community',
    date: 'January 30, 2025',
    title:
      'Paying It Forward: A Scholarship in Honor of the Professors Who Started It All',
    desc:
      'Dat Le joins fellow Suffolk alumni in a $225,000 surprise gift to honor Associate Dean Tracey Riley \u2014 establishing the Accounting Winternships Fund and the Tracey Riley Legacy Fund.',
    image: '/assets/img/news/suffolk-scholarship/hug.jpg',
    imagePosition: 'center 28%',
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
