'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlfredLogo from '@/components/elements/AlfredLogo';
import IntakeButton from '@/components/intake/IntakeButton';

// Applied inline (not via the data-background hook) so every slide is
// painted as soon as it renders, with no dependency on a mount effect.
const SLIDE_BG = { backgroundImage: 'url(/assets/img/slider/slider_bg01.jpg)' };

// The slogan is the first thing visitors see, so it holds a little longer
// than the story slides that follow it (ms).
const SLOGAN_DWELL = 9000;
const STORY_DWELL = 7000;

// Story slides rotate in after the slogan, newest first. Copy is lifted from
// the matching /news entries so the hero never says more than the story does.
const STORIES = [
  {
    id: 'proconnect-case-study',
    kicker: 'Featured by Intuit',
    tag: 'ProConnect Tax Case Study',
    title: 'Intuit Featured How We Built A Scalable Tax Practice.',
    body: 'Intuit profiled Motta Financial in an official ProConnect Tax case study — the story of a firm built from day one on automation, a Books-to-Tax workflow, and ALFRED Ai, with a relentless focus on putting client dollars toward value, not paperwork.',
    cta: { href: '/news/press/proconnect-case-study', label: 'Read the case study' },
    secondary: { href: '/alfred', label: 'Meet ALFRED Ai' },
    image: '/assets/img/news/proconnect-case-study.png',
    imagePosition: 'center 45%',
    caption: 'Case study · July 2026',
  },
  {
    id: 'ja-youth-summit',
    kicker: 'In the Community',
    tag: 'JA Youth Summit',
    title: 'Investing In The Next Generation Of Leaders.',
    body: 'Motta joined Milestone Mortgage Solutions, UMass Dartmouth, and dozens of community partners as a Connection Sponsor of Junior Achievement’s first regional Youth Summit on AI, opportunity, and leadership.',
    cta: { href: '/news/press/ja-youth-summit-2026', label: 'Read the announcement' },
    image: '/assets/img/news/ja-youth-summit-2026.jpg',
    imagePosition: 'center 30%',
    caption: 'Press release · May 2026',
  },
  {
    id: 'madison-advisory-ai-podcast',
    kicker: 'In the Media',
    tag: 'Madison Advisory AI Podcast',
    title: '“AI Buys Time. Judgment Makes The Decision.”',
    body: 'Motta founder Dat Le joined Amanda Verner Thompson on the Madison Advisory AI Podcast to talk about responsible AI inside a real operating CPA firm — not the hype, the execution.',
    // Deep-links to this episode's card; /news/media lists an older story first.
    cta: { href: '/news/media#madison-advisory-ai-buys-time', label: 'See the coverage' },
    image: '/assets/img/news/madison-advisory-ai-podcast.jpg',
    // Square podcast cover art, only 300px wide — keep it small so it stays sharp.
    square: true,
    // Matches the date on /news and /news/media (the episode itself appears to have been published March 2026).
    caption: 'Podcast · November 2025',
  },
  {
    id: 'suffolk-scholarship',
    kicker: 'Paying It Forward',
    tag: 'Suffolk University',
    title: 'A Thank-You To The Professors Who Started It All.',
    body: 'Motta founder Dat Le joined fellow Suffolk alumni in a $225,000 surprise gift to honor Associate Dean Tracey Riley — establishing the Accounting Winternships Fund and the Tracey Riley Legacy Fund.',
    cta: { href: '/news/blog/paying-it-forward-suffolk-scholarship', label: 'Read the story' },
    image: '/assets/img/news/suffolk-scholarship/hug.jpg',
    imagePosition: 'center 30%',
    caption: 'Community · January 2025',
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, EffectFade, A11y],
  spaceBetween: 0,
  effect: 'fade',
  // `rewind` (not `loop`): a fade carousel has nothing to gain from cloned
  // slides, and clones would duplicate every heading and link in the DOM.
  rewind: true,
  speed: 900,
  // Cross-dissolve so only one slide is opaque at a time. Without it, slides
  // behind the active one stay at full opacity and the rewind from the last
  // story back to the slogan would overlay every story's text.
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: STORY_DWELL,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: { clickable: true },
  a11y: {
    containerRole: 'region',
    containerMessage: 'Featured news and firm story',
    containerRoleDescriptionMessage: 'carousel',
    itemRoleDescriptionMessage: 'slide',
    slideLabelMessage: 'Slide {{index}} of {{slidesLength}}',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
};

// A fade carousel stacks every slide in the same spot, so the faded-out ones
// would otherwise still catch clicks and keyboard focus meant for the visible
// slide. (The bundled swiper-bundle.css is v6 and doesn't carry the
// `.swiper-fade` pointer-events rules the v11 JS expects.) `inert` takes the
// hidden slides out of hit-testing, tab order and the accessibility tree.
function syncActiveSlide(swiper) {
  swiper.slides.forEach((slide, i) => {
    slide.inert = i !== swiper.activeIndex;
  });
}

// Visitors who ask their OS for reduced motion get a still hero they can
// step through with the bullets, rather than one that keeps cross-fading.
function stopAutoplayIfReducedMotion(swiper) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    swiper.autoplay?.stop();
  }
}

// The rotation is also paused for as long as keyboard focus is anywhere in the
// hero — Swiper's own pauseOnMouseEnter only reacts to a mouse. That keeps a
// slide from changing under a focused CTA (which `inert` would otherwise turn
// into a dropped focus). resume() is a no-op once the rotation has been
// stopped, so an explicit pause or reduced motion is never undone by a blur.
function pauseWhileFocused(swiper) {
  const hero = swiper.el.closest('.slider__area') ?? swiper.el;
  hero.addEventListener('focusin', () => swiper.autoplay?.pause());
  hero.addEventListener('focusout', (e) => {
    if (!hero.contains(e.relatedTarget)) swiper.autoplay?.resume();
  });
}

// Swiper's bullet keyboard handling activates on Space but doesn't cancel the
// browser's default, so the page scrolls a viewport at the same time.
function keepSpaceFromScrolling(swiper) {
  [].concat(swiper.pagination?.el ?? []).forEach((el) => {
    el.addEventListener('keydown', (e) => {
      if (e.key === ' ') e.preventDefault();
    });
  });
}

function handleInit(swiper) {
  syncActiveSlide(swiper);
  pauseWhileFocused(swiper);
  keepSpaceFromScrolling(swiper);
}

// Runs on `afterInit` so it lands after Swiper's A11y module has set its own
// aria-live value (and after autoplay has started) rather than being overwritten.
function handleAfterInit(swiper) {
  stopAutoplayIfReducedMotion(swiper);
}

// Screen readers should hear slide changes only when the rotation isn't
// driving them (ARIA carousel pattern: live region "off" while rotating).
function setLiveRegion(swiper, mode) {
  swiper.wrapperEl.setAttribute('aria-live', mode);
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
      <rect x="2" y="1" width="3.5" height="12" rx="1" />
      <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
      <path d="M3 1.4v11.2a.6.6 0 0 0 .9.5l9-5.6a.6.6 0 0 0 0-1L3.9.9a.6.6 0 0 0-.9.5z" />
    </svg>
  );
}

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleRotation = () => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (autoplay.running) autoplay.stop();
    else autoplay.start();
  };

  return (
    <>
      {/* Handlers are props, not an `on` param — Swiper's React wrapper drops `on`. */}
      <Swiper
        {...swiperOptions}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={handleInit}
        onAfterInit={handleAfterInit}
        onSlideChange={syncActiveSlide}
        onAutoplayStart={(swiper) => {
          setIsPlaying(true);
          setLiveRegion(swiper, 'off');
        }}
        onAutoplayStop={(swiper) => {
          setIsPlaying(false);
          setLiveRegion(swiper, 'polite');
        }}
      >

        {/* Slide 1 — Firm slogan */}
        <SwiperSlide
          className="swiper-slide slider__single"
          data-swiper-autoplay={SLOGAN_DWELL}
        >
          <div className="slider__bg" style={SLIDE_BG} />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <div className="slider__pill-row">
                    <span className="alfred-mark alfred-mark--with-logo">
                      <AlfredLogo size={26} className="alfred-logo--invert" />
                      Powered by ALFRED Ai
                    </span>
                    <span className="sub-title">Tax · Accounting · Advisory</span>
                  </div>
                  <h1 className="title slider__slogan">
                    No Need to Worry, my{' '}
                    <span className="slider__slogan-em">
                      accountant
                      <svg
                        className="slider__slogan-underline"
                        viewBox="0 0 240 16"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M3 10 C 38 3, 74 14, 118 8 S 196 4, 237 9"
                          pathLength="1"
                        />
                      </svg>
                    </span>{' '}
                    handles that
                  </h1>
                  <p>
                    Founded in 2023 by Big Four alumni in Boston and Las Vegas, Motta Financial
                    pairs hands-on tax and accounting advice with our own AI platform — so your
                    CPA spends time on you and your goals, not on paperwork.
                  </p>
                  <IntakeButton className="btn mr-10" source="hero">
                    Boot up an engagement
                  </IntakeButton>
                  <Link href="/services" className="btn border-btn">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__shape">
            <img src="/assets/img/slider/slider_shape01.png" alt="" />
          </div>
        </SwiperSlide>

        {/* Slides 2+ — Stories (ProConnect case study first) */}
        {STORIES.map((story) => (
          <SwiperSlide key={story.id} className="swiper-slide slider__single">
            <div className="slider__bg" style={SLIDE_BG} />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="slider__content">
                    <div className="slider__pill-row">
                      <span className="alfred-mark">{story.kicker}</span>
                      <span className="sub-title">{story.tag}</span>
                    </div>
                    <h2 className="title">{story.title}</h2>
                    <p>{story.body}</p>
                    <Link href={story.cta.href} className="btn mr-10">
                      {story.cta.label}
                    </Link>
                    <Link
                      href={story.secondary?.href ?? '/news'}
                      className="btn border-btn"
                    >
                      {story.secondary?.label ?? 'More Stories'}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <figure
                    className={`slider__story${story.square ? ' slider__story--square' : ''}`}
                  >
                    <div className="slider__story-frame">
                      <Image
                        src={story.image}
                        alt=""
                        fill
                        sizes="(min-width: 992px) 480px, 1px"
                        style={{ objectFit: 'cover', objectPosition: story.imagePosition }}
                      />
                    </div>
                    <figcaption className="slider__story-caption">{story.caption}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="slider__shape">
              <img src="/assets/img/slider/slider_shape01.png" alt="" />
            </div>
          </SwiperSlide>
        ))}

        {/* The visible pause control for the auto-rotation (WCAG 2.2.2). */}
        <button
          type="button"
          slot="container-end"
          className="slider__toggle"
          onClick={toggleRotation}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

      </Swiper>
    </>
  );
}
