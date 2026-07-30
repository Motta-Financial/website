import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export default function Callback2() {
  return (
    <section className="call-back-area call-back-area-two">
      <div className="container">
        <div className="call-back-wrap">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="call-back-content">
                <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                  <h2 className="title tg-element-title">
                    Ready to talk to a tech-forward CPA?
                  </h2>
                </div>
                <p>
                  Tell us about your situation and a member of the Motta team
                  will follow up within one business day. New clients can move
                  straight into our intake to get scoped faster.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="slider__btn-row">
                <IntakeButton className="btn" source="callback">
                  Get Started
                </IntakeButton>
                <Link href="/contact" className="btn border-btn">
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
