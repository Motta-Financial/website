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
        <SwiperSlide className="swiper-slide slider__single">
          <div
            className="slider__bg"
            data-background="/assets/img/slider/slider_bg01.jpg"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <span className="alfred-mark alfred-mark--with-logo">
                    <AlfredLogo size={26} className="alfred-logo--invert" />
                    Powered by ALFRED Ai
                  </span>
                  <span className="sub-title">Tax · Accounting · Advisory</span>
                  <h2 className="title">
                    A modern CPA firm that actually thinks ahead for you.
                  </h2>
                  <p>
                    Founded in 2023 by Big Four alumni in Boston and Las
                    Vegas, Motta Financial pairs hands-on tax and accounting
                    advice with our own AI platform — so your CPA spends time
                    on you and your goals, not on paperwork.
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

        <SwiperSlide className="swiper-slide slider__single">
          <div
            className="slider__bg"
            data-background="/assets/img/slider/slider_bg01.jpg"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <span className="alfred-mark">Intuit Ecosystem Partner</span>
                  <span className="sub-title">Tax prep, reimagined</span>
                  <h2 className="title">
                    Your tax return, drafted in minutes — not hours.
                  </h2>
                  <p>
                    Motta has partner-grade access to Intuit ProConnect&apos;s
                    API, which lets ALFRED Ai prepare your return in minutes.
                    That means a faster turnaround for you and more time for
                    your CPA to focus on saving you money.
                  </p>
                  <Link href="/about" className="btn mr-10">
                    How ALFRED Works
                  </Link>
                  <Link href="/services/tax-planning" className="btn border-btn">
                    Tax Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__shape">
            <img src="/assets/img/slider/slider_shape01.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slider__single">
          <div
            className="slider__bg"
            data-background="/assets/img/slider/slider_bg01.jpg"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="slider__content">
                  <span className="alfred-mark">Mottainai · もったいない</span>
                  <span className="sub-title">Too good to waste</span>
                  <h2 className="title">
                    No time wasted. No opportunity missed. No potential
                    overlooked.
                  </h2>
                  <p>
                    Our name comes from the Japanese idea of Mottainai —
                    the regret of letting anything good go to waste. It&apos;s
                    how we run our firm and how we look after every
                    individual, business owner, and non-profit we work with.
                  </p>
                  <Link href="/about" className="btn mr-10">
                    About Motta
                  </Link>
                  <Link href="/about/team" className="btn border-btn">
                    Meet the Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__shape">
            <img src="/assets/img/slider/slider_shape01.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
