import Layout from '@/components/layout/Layout';
import HubIntakeForm from '@/components/forms/HubIntakeForm';

export const metadata = {
  title: 'New Client Intake — Motta Financial',
  description:
    'Start your engagement with Motta Financial. Share a few details about your situation and our team will be in touch within one business day.',
};

export default function GetStarted() {
  return (
    <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="New Client Intake">
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Get started with Motta</span>
                <h2 className="title">
                  Tell us about you and your business
                </h2>
                <p>
                  This intake powers our discovery process — the more context
                  you share, the faster our team and ALFRED Ai can scope the
                  right engagement for you.
                </p>
              </div>
              <div className="contact__form-wrap">
                <HubIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
