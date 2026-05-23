import Layout from '@/components/layout/Layout';
import HubContactForm from '@/components/forms/HubContactForm';
import IntakeButton from '@/components/intake/IntakeButton';

export const metadata = {
  title: 'Contact Motta Financial',
  description:
    'Send us a message — Motta Financial is a tech-forward CPA firm with offices in Boston, MA and Las Vegas, NV.',
};

export default function Contact() {
  return (
    <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Contact Motta">
      <section className="contact__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact__content">
                <div className="section-title mb-35">
                  <h2 className="title">How can we help?</h2>
                  <p>
                    Tell us a little about what you&apos;re looking for and a member
                    of the Motta team will follow up shortly. New here?{' '}
                    <IntakeButton className="motta-intake-link" style={{ textDecoration: 'underline' }} source="contact">
                      Boot up an engagement
                    </IntakeButton>{' '}
                    and we&apos;ll scope you faster.
                  </p>
                </div>
                <div className="contact__info">
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="content">
                        <h4 className="title">Boston</h4>
                        <p>101 Federal St., Suite 1900<br />Boston, MA 02110</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="content">
                        <h4 className="title">Las Vegas</h4>
                        <p>9205 W. Russell Rd., Bldg. 3, Suite 240<br />Las Vegas, NV 89148</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail" />
                      </div>
                      <div className="content">
                        <h4 className="title">Email</h4>
                        <a href="mailto:Info@MottaFinancial.com">Info@MottaFinancial.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <h4 className="title">Phone</h4>
                        <a href="tel:+17025146055">(702) 514&#8209;6055</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <h4 className="title">Client portal</h4>
                        <a
                          href="https://hub.motta.cpa/login"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          hub.motta.cpa
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact__form-wrap">
                <h2 className="title">Send us a message</h2>
                <p>Required fields are marked *</p>
                <HubContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
