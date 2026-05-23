import Layout from "@/components/layout/Layout"
import Link from "next/link"
import IntakeButton from "@/components/intake/IntakeButton"

export default function About() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Motta Financial">
                <div>
                    {/* about-area */}
                    <section className="about__area-four">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.jpg" alt="Motta Financial advisors" />
                                        <img src="/assets/img/images/inner_about02.jpg" alt="Motta Financial team meeting" />
                                        <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">3 yrs</h2>
                                                <p>Founded April 2023 <br /> Boston &amp; Las Vegas</p>
                                            </div>
                                        </div>
                                        <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__content-four">
                                        <div className="section-title mb-30">
                                            <span className="sub-title">About Motta Financial</span>
                                            <h2 className="title">Tech-Forward CPAs. Powered By ALFRED Ai.</h2>
                                        </div>
                                        <div className="about__content-inner-three">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Proactive tax strategy &amp; planning</li>
                                                    <li><i className="flaticon-arrow-button" />Integrated advisory under one roof</li>
                                                    <li><i className="flaticon-arrow-button" />Full Office of the CFO services</li>
                                                </ul>
                                            </div>
                                            <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div>
                                        </div>
                                        <p>Motta Financial is a modern, tech-forward CPA firm built around proactive tax strategy, integrated advisory, and the full Office of the CFO. Founded in 2023 by Big Four alumni and operating from Boston and Las Vegas, we serve business owners, executives, and channel partners who want a firm that thinks ahead — not one that just files on time.</p>
                                        <Link href="/contact" className="btn">Contact With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}

                    {/* mottainai-area */}
                    <section className="about__area-four" style={{ paddingTop: 0 }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9 text-center">
                                    <div className="section-title mb-30">
                                        <span className="sub-title">Mottainai · もったいない</span>
                                        <h2 className="title">Too Good To Waste.</h2>
                                    </div>
                                    <p>Our name comes from the Japanese principle of <em>Mottainai</em> — the deep regret of waste in any form. That philosophy drives how we run the practice: we waste no time on busywork our technology can handle, no opportunity to plan ahead for a client, and no potential within our team. The result is a firm where senior advisors spend their hours on strategy, not status updates — and clients feel the difference.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* mottainai-area-end */}

                    {/* choose-area — What We Deliver */}
                    <section className="choose__area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="choose__content-four">
                                        <div className="section-title white-title mb-20">
                                            <span className="sub-title">What We Deliver</span>
                                            <h2 className="title">Six Practice Areas. One Integrated Team.</h2>
                                        </div>
                                        <p>Most firms make you choose between a bookkeeper, a tax preparer, a financial advisor, and a transaction shop. At Motta, all of them sit under one roof, one engagement letter, and one accountable partner — looking at the same data and planning toward the same goals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Tax Compliance &amp; Planning</h4>
                                                        <p>Federal &amp; multi-state filing, quarterly estimates, year-round planning.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-financial-profit" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Accounting &amp; Bookkeeping</h4>
                                                        <p>Outsourced controllership, monthly close, GAAP-compliant reporting.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment-1" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Fractional CFO &amp; FP&amp;A</h4>
                                                        <p>Forecasting, KPI dashboards, cash flow planning, board-ready reporting.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-report" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">M&amp;A &amp; Corporate Development</h4>
                                                        <p>Buy- and sell-side advisory, valuation modeling, diligence support.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Financial Planning &amp; Wealth</h4>
                                                        <p>Comprehensive personal financial planning led by a CFP.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-financial-profit" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Business Transformation</h4>
                                                        <p>AI workflow integration, process optimization, operating-model redesign.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose__shape-wrap-four">
                            <img src="/assets/img/images/inner_choose_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/inner_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    {/* choose-area-end */}

                    {/* counter-area removed: investor-deck metrics
                        (return counts, team headcount, capital raised)
                        intentionally kept off the public marketing site. */}


                    {/* niches-area — Where We Go Deep */}
                    <section className="choose__area-four" style={{ background: "#f7f7f7" }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <div className="section-title mb-40">
                                        <span className="sub-title">Where We Go Deep</span>
                                        <h2 className="title">Three Industries We Know Cold</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose__list-box-two" style={{ height: "100%" }}>
                                        <div className="choose__list-icon-two">
                                            <i className="flaticon-investment" />
                                        </div>
                                        <div className="choose__list-content-two">
                                            <h4 className="title">Real Estate</h4>
                                            <p>Realtors, mortgage brokers, rental-property owners, and developers — including cost segregation, 1031 exchanges, and rapid-turnaround mortgage income verifications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose__list-box-two" style={{ height: "100%" }}>
                                        <div className="choose__list-icon-two">
                                            <i className="flaticon-financial-profit" />
                                        </div>
                                        <div className="choose__list-content-two">
                                            <h4 className="title">Equity Comp &amp; Pre-IPO</h4>
                                            <p>RSUs, ISOs, NSOs, ESPPs, AMT exposure, tender offer analysis, and QSBS (Section 1202) planning for executives and pre-IPO employees.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose__list-box-two" style={{ height: "100%" }}>
                                        <div className="choose__list-icon-two">
                                            <i className="flaticon-report" />
                                        </div>
                                        <div className="choose__list-content-two">
                                            <h4 className="title">Channel Partners</h4>
                                            <p>White-labeled tax, bookkeeping, and FP&amp;A for financial advisors, mortgage brokers, and attorneys — running the back office under your brand.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* niches-area-end */}

                    {/* team-teaser-area */}
                    <section className="team__area-four">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="section-title text-center mb-40">
                                        <span className="sub-title">Leadership &amp; Team</span>
                                        <h2 className="title">The People You&apos;ll Work With</h2>
                                        <p className="mt-20">Motta&apos;s day-to-day work is led by a tax advisory pair — a director and a dedicated associate — alongside a senior accounting manager and a corporate development director, all reporting to Managing Partner Dat Le, CPA.</p>
                                        <div className="mt-30">
                                            <Link href="/about/team" className="btn">Meet Our Professionals</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-teaser-area-end */}

                    {/* call-back-area */}
                    <section className="call-back-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Ready to talk to a tech-forward CPA?</h2>
                                        </div>
                                        <p>Whether you&apos;re looking to upgrade your tax practice, build out the Office of the CFO, white-label a back office, or partner on an M&amp;A transaction — the Motta team would welcome a conversation.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                        <IntakeButton className="btn" style={{ textAlign: 'center' }} source="about">Boot up an engagement</IntakeButton>
                                        <Link href="/contact" className="btn border-btn" style={{ textAlign: 'center' }}>Send Us a Message</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
