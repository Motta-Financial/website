import Layout from '@/components/layout/Layout';
import HubContactForm from '@/components/forms/HubContactForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Motta Financial',
  description:
    'Send us a message — Motta Financial is a tech-forward CPA firm based in Tampa, Florida.',
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
                    of the Motta team will follow up shortly. For new client
                    onboarding, our{' '}
                    <Link href="/get-started">new client intake</Link> form
                    captures the details we need to get started faster.
                  </p>
                </div>
                <div className="contact__info">
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="content">
                        <h4 className="title">Office</h4>
                        <p>Tampa, Florida</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail" />
                      </div>
                      <div className="content">
                        <h4 className="title">Email</h4>
                        <a href="mailto:hello@motta.cpa">hello@motta.cpa</a>
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
