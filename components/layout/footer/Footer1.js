import Link from 'next/link';
import InstagramFeed from '@/components/elements/InstagramFeed';
import { SOCIALS } from '@/lib/socials';

export default function Footer1() {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <div className="fw-logo mb-25">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="" />
                      </Link>
                    </div>
                    <div className="footer-content">
                      <p>
                        Our role is to be your trusted partner for all of your
                        tax, accounting, and finance needs.
                      </p>
                      <div className="footer-social">
                        <p className="mb-1">Follow Us</p>
                        <ul className="list-wrap">
                          <li>
                            <a
                              href={SOCIALS.instagram.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Motta Financial on Instagram"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={SOCIALS.linkedin.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Motta Financial on LinkedIn"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Information</h4>
                    <div className="footer-info-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <Link href="/tel:0123456789">(702) 514 - 6055</Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-envelope" />
                          </div>
                          <div className="content">
                            <Link href="/mailto:Info@MottaFinancial.com">
                              Info@MottaFinancial.com
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>101 Federal St. Suite 1900 Boston, MA 02110</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>
                              9205 West Russell Road Building 3 Suite 240 Las
                              Vegas, NV 89148
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Top Links</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/contact">Partners</Link>
                        </li>
                        <li>
                          <Link href="/contact">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/contact">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Instagram Posts</h4>
                    <InstagramFeed limit={6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 order-0 order-lg-2">
                  <div className="footer-newsletter">
                    <h4 className="title">Newsletter SignUp!</h4>
                    <form action="#">
                      <input type="text" placeholder="e-mail Type . . ." />
                      <button className="btn btn-two" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="copyright-text">
                    <p>
                      Copyright © <Link href="/">Motta Financial</Link> | All
                      Right Reserved
                    </p>
                    <Link href="/contact">
                      Support Terms Conditions Privacy Policy.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
