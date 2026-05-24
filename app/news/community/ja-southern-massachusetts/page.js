'use client';

import Link from 'next/link';
import NewsArticle from '@/components/news/NewsArticle';

export default function JASouthernMassachusettsCommunityPage() {
  return (
    <>
      <NewsArticle
        eyebrow="In the Community \u00b7 Sponsorship"
        date="May 2026"
        title="Junior Achievement of Southern Massachusetts"
        subtitle="Motta Financial is a Connection Sponsor of JA Southern Massachusetts, supporting the inaugural 2026 Youth Summit and JA\u2019s year-round programs in financial literacy, entrepreneurship, and career readiness."
        heroImage="/assets/img/news/ja-youth-summit-2026.jpg"
        heroAlt="Motta Financial team member at the JA Southern Massachusetts Youth Summit"
        heroCaption="The inaugural JA Southern Massachusetts Youth Summit, May 7, 2026 \u2014 UMass Dartmouth."
        backHref="/news/community"
        backLabel="In the Community"
      >
        <h2>Why we sponsor JA</h2>
        <p>
          Junior Achievement of Southern Massachusetts has empowered young people to own
          their economic success since 1919. Through hands-on programs in financial
          literacy, entrepreneurship, and career readiness, JA helps students build the
          skills and confidence to thrive in the modern economy &mdash; and they do it at
          no cost to schools or families.
        </p>
        <p>
          As a CPA and advisory firm rooted in Massachusetts, we want the next generation
          of accountants, founders, advisors, and engineers to come up through the
          institutions that connect classroom skills to real-world opportunity. JA is one
          of those institutions, and we&rsquo;re proud to back them.
        </p>

        <h2>What our sponsorship supports</h2>
        <p>
          Motta Financial is a <strong>Connection Sponsor</strong> of the inaugural{' '}
          <em>2026 JA Southern Massachusetts Youth Summit</em>, held May 7, 2026 at UMass
          Dartmouth. Beyond the Summit, Connection Sponsor support helps fund JA&rsquo;s
          year-round programming across the region:
        </p>
        <ul>
          <li>The 2026 Youth Summit at UMass Dartmouth</li>
          <li>The JA Company Program and Pitch Competition</li>
          <li>In-classroom financial literacy and career readiness programs</li>
          <li>Entrepreneurship and AI learning experiences for high school students</li>
        </ul>

        <h2>2026 Youth Summit</h2>
        <p>
          The Summit&rsquo;s 2026 theme &mdash; &ldquo;Impact Through Connection: The
          World of Tomorrow &mdash; Exploring AI as the Next World&rsquo;s Fair
          Moment&rdquo; &mdash; placed artificial intelligence at the center of
          student-led conversations about innovation, opportunity, and leadership.
          Motta team member Caleb Long represented the firm on-site, joining mentors and
          sponsors throughout the day to talk with students about careers in accounting,
          financial planning, and AI-enabled advisory work.
        </p>

        <blockquote>
          &ldquo;The students walking through that room are the accountants, founders,
          advisors, and engineers we will be working with in ten years. Showing up early
          matters.&rdquo;
          <cite>&mdash; Dat Le, CPA, Managing Partner, Motta Financial</cite>
        </blockquote>

        <p style={{ marginTop: 28 }}>
          <Link href="/news/press/ja-youth-summit-2026" className="motta-news-article__inline-cta">
            Read the full press release &rarr;
          </Link>
          <br />
          <Link
            href="/news/blog/ja-youth-summit-why-we-showed-up"
            className="motta-news-article__inline-cta"
          >
            Read the blog post: Why We Showed Up at the JA Youth Summit &rarr;
          </Link>
        </p>

        <div className="motta-news-article__about">
          <h3>About Junior Achievement of Southern Massachusetts</h3>
          <p>
            Junior Achievement of Southern Massachusetts is a regional non-profit
            empowering young people to own their economic success through hands-on
            programs in financial literacy, entrepreneurship, and career readiness.
            Learn more at{' '}
            <a
              href="https://jasouthernma.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              jasouthernma.org
            </a>{' '}
            or visit{' '}
            <a
              href="https://jausa.ja.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JA USA
            </a>
            .
          </p>
        </div>
      </NewsArticle>
    </>
  );
}
