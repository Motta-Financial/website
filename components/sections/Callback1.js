import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

export default function Callback1() {
  return (
    <section className="call-back-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="call-back-content">
              <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  Ready to talk to a tech-forward CPA?
                </h2>
              </div>
              <p>
                Tell us about your situation and a member of the Motta team
                will follow up within one business day. New clients can move
                straight into our intake to get scoped faster — existing
                clients can reach us through the client portal.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="slider__btn-row" style={{ flexWrap: 'wrap', rowGap: 8 }}>
              <IntakeButton className="btn" source="callback">
                Boot up an engagement
              </IntakeButton>
              <Link href="/contact" className="btn border-btn">
                Send Us a Message
              </Link>
            </div>
            <a
              href="https://hub.motta.cpa/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                marginTop: 10,
                fontSize: 13,
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'underline',
              }}
            >
              Existing client? Open the portal →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
