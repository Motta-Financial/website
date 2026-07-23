'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlfredLogo from '@/components/elements/AlfredLogo';
import IntakeButton from '@/components/intake/IntakeButton';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  spaceBetween: 0,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
};

export default function HeroSlider() {
  return (
    <>
      <Swiper {...swiperOptions}>

        {/* Slide 1 — Main brand */}
        <SwiperSlide className="swiper-slide slider__single">
          <div className="slider__bg" data-background="/assets/img/slider/slider_bg01.jpg" />
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
                  <h2 className="title">
                    A Modern CPA Firm That Actually Thinks Ahead For You.
                  </h2>
                  <p>
                    Founded in 2023 by Big Four alumni in Boston and Las Vegas, Motta Financial
                    pairs hands-on tax and accounting advice with our own AI platform — so your
                    CPA spends time on you and your goals, not on paperwork.
                  </p>
                  <div className="slider__btn-row">
                    <IntakeButton className="btn" source="hero">
                      Boot up an engagement
                    </IntakeButton>
                    <Link href="/services" className="btn border-btn">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 — Intuit case study */}
        <SwiperSlide className="swiper-slide slider__single">
          <div className="slider__bg" data-background="/assets/img/slider/slider_bg01.jpg" />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <div className="slider__pill-row">
                    <span className="sub-title">Featured by Intuit</span>
                    <span className="sub-title">ProConnect Tax Case Study</span>
                  </div>
                  <h2 className="title">
                    Intuit Featured How We Built A Scalable Tax Practice.
                  </h2>
                  <p>
                    Intuit profiled Motta Financial in an official ProConnect Tax case study —
                    the story of a firm built from day one on automation, a Books-to-Tax
                    workflow, and ALFRED Ai, with a relentless focus on putting client dollars
                    toward value, not paperwork.
                  </p>
                  <div className="slider__btn-row">
                    <Link href="/news/press/proconnect-case-study" className="btn">
                      Read the case study
                    </Link>
                    <Link href="/alfred" className="btn border-btn">
                      Meet ALFRED Ai
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 — Intuit ecosystem */}
        <SwiperSlide className="swiper-slide slider__single">
          <div className="slider__bg" data-background="/assets/img/slider/slider_bg01.jpg" />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <div className="slider__pill-row">
                    <span className="alfred-mark">Intuit Ecosystem Partner</span>
                    <span className="sub-title">Tax prep, reimagined</span>
                  </div>
                  <h2 className="title">
                    Your Tax Return, Drafted In Minutes — Not Hours.
                  </h2>
                  <p>
                    Motta has partner-grade access to Intuit ProConnect&apos;s API, which lets
                    ALFRED Ai prepare your return in minutes. That means a faster turnaround
                    for you and more time for your CPA to focus on saving you money.
                  </p>
                  <div className="slider__btn-row">
                    <Link href="/about" className="btn">
                      How ALFRED Works
                    </Link>
                    <Link href="/services/tax-planning" className="btn border-btn">
                      Tax Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 — Mottainai */}
        <SwiperSlide className="swiper-slide slider__single">
          <div className="slider__bg" data-background="/assets/img/slider/slider_bg01.jpg" />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <div className="slider__pill-row">
                    <span className="alfred-mark">Mottainai · もったいない</span>
                    <span className="sub-title">Too good to waste</span>
                  </div>
                  <h2 className="title">
                    No Time Wasted. No Opportunity Missed. No Potential Overlooked.
                  </h2>
                  <p>
                    Our name comes from the Japanese idea of Mottainai — the regret of letting
                    anything good go to waste. It&apos;s how we run our firm and how we look
                    after every individual, business owner, and non-profit we work with.
                  </p>
                  <div className="slider__btn-row">
                    <Link href="/about" className="btn">
                      About Motta
                    </Link>
                    <Link href="/about/team" className="btn border-btn">
                      Meet the Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
