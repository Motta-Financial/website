import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Meet Our Professionals | Motta Financial',
  description:
    'Meet the Motta Financial team — the partners, advisors, and associates leading our tax, accounting, advisory, and client experience practices.',
};

const teamMembers = [
  {
    slug: 'dat-le',
    name: 'Dat Le, CPA',
    title: 'Managing Partner & Founder',
    credentials: 'CPA · Suffolk Adjunct Professor · Boston · Las Vegas',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20%28Headshot%29%20-%20Dat%20Le%20%5BWM%5D-kVzKTBVlGdBFKtNQtGCsPYvs3UAxYw.jpg',
    blurb:
      "Dat is the founder and Managing Partner of Motta Financial, leading the firm's strategic direction across tax, accounting, and advisory services from offices in Boston and Las Vegas. A two-time Suffolk University graduate, Dat built his foundation as a top-rated Audit Senior at Deloitte & Touche before deepening his technical skills through senior consulting and controller roles supporting IPOs, SPAC transactions, and complex revenue recognition.",
  },
  {
    slug: 'terry-song',
    name: 'Terry Song, CPA',
    title: 'Director, Tax Advisory',
    credentials: 'CPA · 10+ Years Experience · Boston',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Terry%20Song.png-IEMyP44Vgb8Idx1fPdxCC2qbVjiPpW.jpeg',
    blurb:
      "Terry leads Motta's tax advisory practice as the senior point of contact for complex engagements — high-net-worth individuals, family offices, and closely-held businesses. He is known for translating intricate positions into clear client guidance and for a research-first standard that ensures every position is supported by authoritative tax law.",
  },
  {
    slug: 'amy-sparaco',
    name: 'Amy Sparaco',
    title: 'Manager, Accounting Advisory',
    credentials: 'Technical Accounting Lead · AI Business Transformation Certified',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amy%20Sparaco-thMF9RPQsNKnzXdBn7bBp6qqnu74rt.jpg',
    blurb:
      "Amy leads Motta's accounting advisory practice, overseeing every client engagement from monthly bookkeeping through Fractional CFO services. She pairs world-class technical accounting with Motta certification in AI Business Transformation — delivering GAAP-compliant work product with intelligent AI integrated directly into client operations.",
  },
  {
    slug: 'caleb-long',
    name: 'Caleb Long',
    title: 'Director, Corporate Development & M&A',
    credentials: 'Strategic Finance · M&A · Business Transformation',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caleb%20Long-gj3veS3Ddc1lHawERIs0UQHSFk3wDX.jpg',
    blurb:
      "Caleb leads Motta's corporate development and M&A practice, advising business owners and platform investors on acquisitions, capital decisions, and post-close integration. He brings 7+ years of in-house strategic finance and corporate development experience — sourcing, modeling, and executing transactions across the lower-middle market through institutional-backed platforms.",
  },
  {
    slug: 'micaela-palacios',
    name: 'Micaela Palacios',
    title: 'Associate, Tax Advisory',
    credentials: 'CPA Eligible · Suffolk University · Bilingual EN / ES',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Micaela%20Palacios-66rSwUgEL32LdNFmli6cwtTfzysmOs.jpg',
    blurb:
      "Micaela focuses on individual tax preparation, year-round planning, and equity-compensation strategy for employees navigating RSUs, ISOs, and ESPPs. A Suffolk Sawyer Honors graduate (3.95 GPA, Beta Alpha Psi), she brings real client experience from Suffolk's EEDC clinic and serves Motta's multilingual client community in English and Spanish.",
  },
  {
    slug: 'julian-jacobson',
    name: 'Julian Jacobson',
    title: 'Associate, Client Experience',
    credentials: 'Client Onboarding · Communications · Operations',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Julian%20Jacobson-oGnYI2hOkwVBbU1va8lzZswT79Kp6p.jpg',
    blurb:
      "Julian joins Motta as the firm's first dedicated Client Experience Associate, serving as the connective tissue between clients and the Motta team. He owns the moments that shape every client relationship — proposal turnaround, onboarding, billing rhythm, and the everyday communication that keeps engagements moving.",
  },
];

export default function AboutTeamPage() {
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={1}
        breadcrumbTitle="Meet Our Professionals"
      >
        <section className="team__area-two pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                  <span className="sub-title">OUR TEAM</span>
                  <h2 className="title tg-element-title">
                    Meet Our Professionals
                  </h2>
                  <p className="mt-3">
                    The partners, advisors, and associates leading Motta
                    Financial&apos;s tax, accounting, advisory, and client
                    experience practices — across our Boston and Las Vegas
                    offices.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gutter-24">
              {teamMembers.map((member) => (
                <div
                  key={member.slug}
                  className="col-lg-4 col-md-6 col-sm-8 mb-30"
                >
                  <div className="team__item-two shine-animate-item h-100">
                    <div className="team__thumb-two shine-animate">
                      <img
                        src={member.image || '/placeholder.svg'}
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '360px',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                      />
                    </div>
                    <div className="team__content-two">
                      <h4 className="title">{member.name}</h4>
                      <span>{member.title}</span>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#7a8295',
                          marginTop: '6px',
                          marginBottom: '12px',
                        }}
                      >
                        {member.credentials}
                      </p>
                      <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                        {member.blurb}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-30">
              <div className="col-lg-8 text-center">
                <p>
                  Want to talk with our team about your tax, accounting, or
                  advisory needs?
                </p>
                <Link href="/contact" className="btn">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
