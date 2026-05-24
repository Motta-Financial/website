'use client';

import NewsArticle from '@/components/news/NewsArticle';

export default function RealTeaPodcastPost() {
  return (
    <NewsArticle
      eyebrow="In the Press"
      date="March 13, 2024"
      title={'Dat Le on the Real Tea Podcast: A Two-Part Conversation on Real Estate Taxes'}
      subtitle={
        'Founder Dat Le joined Nicole Hartick of Gibson Sotheby\u2019s International Realty for a two-part deep dive on what realtors, entrepreneurs, investors, and high-income earners should be asking their CPA \u2014 and what to watch for on their tax returns.'
      }
      backHref="/news/blog"
      backLabel="All Blog Posts"
    >
      <p>
        Earlier this year, our founder Dat Le sat down with Nicole Hartick \u2014
        host of the <em>Real Tea</em> podcast and Director of Marketing at Gibson
        Sotheby\u2019s International Realty \u2014 for a candid, two-part
        conversation about the questions real estate professionals and business
        owners should actually be asking their CPA.
      </p>

      <p>
        It\u2019s the kind of conversation we have with clients every day, just
        recorded. Both episodes are embedded below so you can watch (or listen)
        in full.
      </p>

      <h2>Part 1 \u2014 What Realtors and Entrepreneurs Should Be Asking Their CPA</h2>

      <p>
        In Part 1, Nicole and Dat dig into the fundamentals every realtor and
        small business owner should know: what to look for on your return, the
        questions a good CPA welcomes (and the ones they should be raising
        first), and the practical habits that separate clients who feel in
        control of their tax life from the ones who dread April every year.
      </p>

      <div className="motta-news-article__video">
        <iframe
          src="https://www.youtube.com/embed/JKoHIzE0QsU"
          title="What Realtors and Entrepreneurs Should Be Asking Their CPAs: Dat Le [PART 1]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <h2>Part 2 \u2014 What Real Estate Investors and High-Income Earners Need to Know</h2>

      <p>
        In Part 2, the conversation shifts from agents and entrepreneurs to the
        investor side of the table \u2014 portfolio owners, flippers,
        short-term rental hosts, and high-income earners. Dat and Nicole walk
        through the strategies that tend to move the needle most: entity
        structure, depreciation and the real estate professional designation,
        and the planning conversations that have to happen well before
        year-end.
      </p>

      <div className="motta-news-article__video">
        <iframe
          src="https://www.youtube.com/embed/lZ0R1tLIrlA"
          title="What Real Estate Investors Should Ask Their CPAs: Dat Le [PART 2]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <h2>Why we said yes</h2>

      <p>
        Most of the realtors and investors we work with don\u2019t need another
        100-page tax guide. They need a CPA who will sit across from them, ask
        the right questions, and translate the tax code into decisions they can
        actually act on. That\u2019s the conversation Nicole wanted to have on
        Real Tea, and it\u2019s the conversation we have every day at Motta
        Financial.
      </p>

      <p>
        If something in either episode raises a question about your own
        situation \u2014 your entity, your rentals, your year-end planning
        \u2014 we\u2019d be happy to talk it through. <a href="/contact">Get in
        touch</a> any time.
      </p>

      <div className="motta-news-article__about">
        <h3>About this post</h3>
        <p>
          The Real Tea podcast is hosted by Nicole Hartick of Gibson Sotheby\u2019s
          International Realty. Episodes are available on YouTube, Apple
          Podcasts, and Spotify. The information shared in these episodes and
          on this page is for educational purposes only and is not intended as
          tax, legal, or investment advice. Please consult a qualified
          professional regarding your specific situation.
        </p>
      </div>

      <style jsx>{`
        :global(.motta-news-article__video) {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 18px 0 28px;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 1px 2px rgba(43, 47, 36, 0.08), 0 8px 24px rgba(43, 47, 36, 0.08);
        }
        :global(.motta-news-article__video iframe) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </NewsArticle>
  );
}
