import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

/**
 * IntakeCallout — replaces the old mock "Request A Call Back" form blocks
 * across blog/details/template pages. Opens the global intake modal for
 * new clients, and keeps "Send Us a Message" pointed at /contact.
 */
export default function IntakeCallout() {
  return (
    <section className="call-back-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="call-back-content">
              <div className="section-title white-title mb-10">
                <h2 className="title">Ready to talk to a tech-forward CPA?</h2>
              </div>
              <p>
                Tell us about your situation and a member of the Motta team
                will follow up within one business day. New clients can move
                straight into our intake to get scoped faster.
              </p>
              <div className="shape">
                <img
                  src="/assets/img/images/call_back_shape.png"
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={400}
                />
              </div>
            </div>
          </div>
            <div className="col-lg-5">
            <div className="slider__btn-row">
              <IntakeButton className="btn" source="callout">
                Get Started
              </IntakeButton>
              <Link href="/contact" className="btn border-btn">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
