import Link from 'next/link';

export default function About2() {
  return (
    <>
      <section
        className="about__area-two about__bg"
        data-background="/assets/img/bg/about_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 mx-auto">
              <div className="about__content-two">
                <div className="section-title mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title">About Motta Financial</span>
                  <h2 className="title tg-element-title">
                    Tech-forward CPAs powered by ALFRED Ai — for clients who
                    want a firm that thinks ahead.
                  </h2>
                </div>
                <p>
                  Motta Financial is a modern CPA firm built around proactive
                  tax strategy, integrated advisory, and the full Office of the
                  CFO. Founded in 2023 by Big Four alumni and operating from
                  Boston and Las Vegas, we serve business owners, executives,
                  and channel partners nationally — pairing senior-level
                  relationships with our proprietary AI platform to deliver
                  sophisticated work product at speeds traditional firms
                  can&apos;t match.
                </p>
                <div className="about__content-inner">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Proactive tax strategy &amp; planning
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Office of the CFO under one roof
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        ALFRED Ai automation &amp; faster turnaround
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Partner-led, senior-level engagements
                      </li>
                    </ul>
                  </div>
                  {/* <div className="about__list-img">
                    <img src="/assets/img/images/about_list_img.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
