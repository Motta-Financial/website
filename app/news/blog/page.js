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
  {
    href: '/news/blog/business-value',
    tag: 'Business Insights',
    date: 'November 5, 2024',
    title: 'Business Owners: There\u2019s No Better Time Than Now',
    desc:
      'With 70% of small business owners\u2019 wealth tied up in their companies, knowing your business\u2019s value is critical \u2014 here are eight reasons to get a valuation today.',
  },
  {
    href: '/news/blog/tax-policy-crossroads',
    tag: 'Tax Planning',
    date: 'October 4, 2024',
    title:
      'Tax Policy Crossroads: What the 2024 Election and Expiring TCJA Provisions Could Mean for You',
    desc:
      'A breakdown of the most significant TCJA provisions set to expire in 2025 and how their expiration could affect both individuals and small businesses.',
  },
  {
    href: '/news/blog/tax-impact-of-federal-student-aid',
    tag: 'Tax Planning',
    date: 'September 4, 2024',
    title: 'Understanding the Tax Impact of Federal Student Aid',
    desc:
      'Loans, Pell Grants, and work-study \u2014 a plain-language guide to what\u2019s taxable and what isn\u2019t for students, parents, and grandparents.',
  },
  {
    href: '/news/blog/types-of-rental-properties',
    tag: 'Real Estate',
    date: 'August 7, 2024',
    title:
      'Exploring Different Types of Rental Properties: Long-Term, Short-Term, and Vacation Rentals',
    desc:
      'Benefits, challenges, and tax implications for each rental type \u2014 plus a quick FAQ on losses, active vs. passive income, and choosing the right model.',
  },
  {
    href: '/news/blog/team-up-for-your-success',
    tag: 'Client Advisory',
    date: 'July 7, 2024',
    title:
      'Are Your Accountant, Attorney, and Financial Advisor Teaming Up for Your Success?',
    desc:
      'Why the trifecta of accountants, attorneys, and financial advisors deliver more than the sum of their parts \u2014 and how to get the most out of the trio.',
  },
  {
    href: '/news/blog/motta-scorp-designation-5-strategic-reasons',
    tag: 'Tax Planning',
    date: 'May 13, 2024',
    title: 'Why Should Your LLC Consider an S-Corp Designation? 5 Strategic Reasons',
    desc:
      'Self-employment tax savings, simpler filings, credibility, and more \u2014 a concise look at when electing S Corp status makes sense for an LLC.',
  },
  {
    href: '/news/blog/why-your-rental-property-belongs-in-an-llc',
    tag: 'Real Estate',
    date: 'April 2, 2024',
    title: 'Why Your Rental Property Belongs in an LLC',
    desc:
      'Liability protection, pass-through tax treatment, easier estate planning, and more \u2014 five reasons to hold rental property through an LLC.',
  },
  {
    href: '/news/blog/real-tea-podcast-with-nicole-hartick',
    tag: 'In the Press',
    date: 'March 13, 2024',
    title:
      'Dat Le on the Real Tea Podcast: A Two-Part Conversation on Real Estate Taxes',
    desc:
      'Founder Dat Le joined Nicole Hartick of Gibson Sotheby\u2019s International Realty for a two-part deep dive on what realtors, entrepreneurs, investors, and high-income earners should be asking their CPA.',
  },
  {
    href: '/news/blog/motta-preparing-for-your-cpas-retirement',
    tag: 'Client Advisory',
    date: 'March 5, 2024',
    title: 'Preparing For Your CPA\u2019s Retirement',
    desc:
      'Five steps to navigate the transition when your CPA hangs up the calculator \u2014 plus why a tech-savvy successor matters.',
  },
  {
    href: '/news/blog/taxes-for-real-estate-professionals',
    tag: 'Real Estate',
    date: 'March 1, 2024',
    title: 'Taxes For Real Estate Professionals',
    desc:
      'IRS classification, key deductions, expense tracking systems, and the common mistakes that cost realtors money at year-end.',
  },
];

export default function BlogIndex() {
  return (
    <NewsList
      eyebrow="From the Motta Blog"
      title="Blog"
      lead="Practical, plain-language notes from the Motta team — written for the founders, advisors, attorneys, and lenders we work with every day."
      items={ITEMS}
    />
  );
}
