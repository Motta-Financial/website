'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlfredLogo from '@/components/elements/AlfredLogo';

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
                    Tech-forward CPAs for clients who want a firm that thinks
                    ahead.
                  </h2>
                  <p>
                    Founded in 2023 by Big Four alumni and operating from
                    Boston and Las Vegas, Motta Financial combines proactive
                    tax strategy with our proprietary AI platform — so senior
                    advisors spend their hours on you, not on busywork.
                  </p>
                  <Link href="/contact" className="btn mr-10">
                    Request a Call Back
                  </Link>
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
                  <span className="alfred-mark">ProConnect Open API</span>
                  <span className="sub-title">Intuit Ecosystem Partner</span>
                  <h2 className="title">
                    Routine tax prep, drafted in minutes — not hours.
                  </h2>
                  <p>
                    Partner-grade access to Intuit&apos;s ProConnect Open API
                    lets ALFRED read and write return data programmatically —
                    eliminating the manual data entry that holds traditional
                    firms back, and freeing our CPAs to focus on planning.
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
                    Our name comes from the Japanese principle of Mottainai —
                    the deep regret of waste in any form. It&apos;s how we run
                    the practice and how we serve every individual, business
                    owner, and non-profit we work with.
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
