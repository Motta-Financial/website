import Link from "next/link"
import { SOCIALS } from "@/lib/socials"

export default function Footer2() {
    return (
        <>
            <footer>
                <div className="footer__area-two">
                    <div className="footer__newsletter-two">
                        <div className="container">
                            <div className="footer__newsletter-inner">
                                <h2 className="title">Subscribe Newsletter For Latest Updates</h2>
                                <form action="#">
                                    <input type="text" placeholder="e-mail Type . . ." />
                                    <button type="submit" className="btn">Subscribe</button>
                                </form>
                                <div className="footer__social-two">
                                    <ul className="list-wrap">
                                        <li><a href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Motta Financial on Instagram"><i className="fab fa-instagram" /></a></li>
                                        <li><a href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="Motta Financial on LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <div className="footer__content-two">
                                            <div className="fw-logo mb-25">
                                                <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                            </div>
                                            <p>Felis consquat magnis fames sagittis ultrices plasodales porttitor</p>
                                            <div className="footer-info-list footer-info-two">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-phone-call" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/tel:0123456789">+123 888 9999</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-envelope" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/mailto:info@apexa.com">info@apexa.com</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-pin" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Sydney Harbour Bridge Circular City of Sydney, Australia.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Information</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/about">Information</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/team">Meet our team</Link></li>
                                                <li><Link href="/contact">Case stories</Link></li>
                                                <li><Link href="/blog">Latest news</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Top Links</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/about">How it’s Work</Link></li>
                                                <li><Link href="/contact">Partners</Link></li>
                                                <li><Link href="/contact">Testimonials</Link></li>
                                                <li><Link href="/contact">Case Studies</Link></li>
                                                <li><Link href="/contact">Pricing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two">
                                        <p>Copyright © <Link href="/">Apexa</Link> | All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
