import Link from 'next/link';

/**
 * IntakeCallout — replaces the old mock "Request A Call Back" form blocks
 * across blog/details/template pages. Routes new clients into the real
 * /get-started intake form, and keeps "Send Us a Message" pointed at /contact.
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <Link
                href="/get-started"
                className="btn"
                style={{ textAlign: 'center' }}
              >
                Start New Client Intake
              </Link>
              <Link
                href="/contact"
                className="btn border-btn"
                style={{ textAlign: 'center' }}
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
