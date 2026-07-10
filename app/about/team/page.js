import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TeamContactLinks from '@/components/team/TeamContactLinks';

export const metadata = {
  title: 'Meet Our Team | Motta Financial',
  description:
    'Meet the Motta Financial team — the partners, advisors, and associates leading our tax, accounting, advisory, and client experience practices.',
};

const teamMembers = [
  {
    slug: 'dat-le',
    name: 'Dat Le, CPA',
    title: 'Managing Partner & Founder',
    group: 'Firm Leadership',
    credentials: 'CPA · Suffolk Adjunct Professor · Boston · Las Vegas',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20%28Headshot%29%20-%20Dat%20Le%20%5BWM%5D-kVzKTBVlGdBFKtNQtGCsPYvs3UAxYw.jpg',
    blurb:
      "Dat is the founder and Managing Partner of Motta Financial, leading the firm's strategic direction across tax, accounting, and advisory services from offices in Boston and Las Vegas. A two-time Suffolk University graduate, Dat built his foundation as a top-rated Audit Senior at Deloitte & Touche before deepening his technical skills through senior consulting and controller roles supporting IPOs, SPAC transactions, and complex revenue recognition.",
    email: 'Dat.Le@MottaFinancial.com',
    calendly: 'https://calendly.com/dat-le-motta',
  },
  {
    slug: 'terry-song',
    name: 'Terry Song, CPA',
    title: 'Director, Tax Advisory',
    group: 'Tax',
    credentials: 'CPA · 10+ Years Experience · Boston',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Terry%20Song.png-IEMyP44Vgb8Idx1fPdxCC2qbVjiPpW.jpeg',
    blurb:
      "Terry leads Motta's tax advisory practice as the senior point of contact for complex engagements — high-net-worth individuals, family offices, and closely-held businesses. He is known for translating intricate positions into clear client guidance and for a research-first standard that ensures every position is supported by authoritative tax law.",
    email: 'Terry.Song@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/terry-song-3332a970/',
  },
  {
    slug: 'amy-sparaco',
    name: 'Amy Sparaco',
    title: 'Manager, Accounting Advisory',
    group: 'Accounting',
    credentials: 'Technical Accounting Lead · AI Business Transformation Certified',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amy%20Sparaco-thMF9RPQsNKnzXdBn7bBp6qqnu74rt.jpg',
    blurb:
      "Amy leads Motta's accounting advisory practice, overseeing every client engagement from monthly bookkeeping through Fractional CFO services. She pairs world-class technical accounting with Motta certification in AI Business Transformation — delivering GAAP-compliant work product with intelligent AI integrated directly into client operations.",
    email: 'Amy.Sparaco@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/amysparaco/',
    calendly: 'https://calendly.com/amy-sparaco-mottafinancial',
  },
  {
    slug: 'caleb-long',
    name: 'Caleb Long',
    title: 'Director, Corporate Development & M&A',
    group: 'Business Advisory',
    credentials: 'Strategic Finance · M&A · Business Transformation',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caleb%20Long-gj3veS3Ddc1lHawERIs0UQHSFk3wDX.jpg',
    blurb:
      "Caleb leads Motta's corporate development and M&A practice, advising business owners and platform investors on acquisitions, capital decisions, and post-close integration. He brings 7+ years of in-house strategic finance and corporate development experience — sourcing, modeling, and executing transactions across the lower-middle market through institutional-backed platforms.",
    email: 'Caleb.Long@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/caleb-long/',
    calendly: 'https://calendly.com/caleb-long-mottafinancial',
  },
  {
    slug: 'micaela-palacios',
    name: 'Micaela Palacios',
    title: 'Associate, Tax Advisory',
    group: 'Tax',
    credentials: 'CPA Eligible · Suffolk University · Bilingual EN / ES',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Micaela%20Palacios-66rSwUgEL32LdNFmli6cwtTfzysmOs.jpg',
    blurb:
      "Micaela focuses on individual tax preparation, year-round planning, and equity-compensation strategy for employees navigating RSUs, ISOs, and ESPPs. A Suffolk Sawyer Honors graduate (3.95 GPA, Beta Alpha Psi), she brings real client experience from Suffolk's EEDC clinic and serves Motta's multilingual client community in English and Spanish.",
    email: 'Micaela.Palacios@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/micaela-palacios-v16/',
    calendly: 'https://calendly.com/micaela-palacios-mottafinancial',
  },
  {
    slug: 'julian-jacobson',
    name: 'Julian Jacobson',
    title: 'Associate, Client Operations',
    group: 'Client Operations',
    credentials: 'Client Onboarding · Proposals & Billing · Workflow Coordination',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Julian%20Jacobson-pV0TqUNQjGRcjZeurX7MCTny9ac5Gs.jpg',
    blurb:
      "Julian is Motta's Client Operations Associate, the operational bridge between clients and the internal team. He keeps proposals, onboarding, billing, and workflow visibility moving across the firm — owning engagement letters and invoicing through Ignition, deadline and follow-up tracking in Karbon, and the day-to-day communication that keeps every engagement responsive. His background spans operations and partnership roles at WWE, the Santa Cruz Warriors, and SponsorUnited.",
    email: 'Julian.Jacobson@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/julianjacobson5/',
  },
  {
    slug: 'andrew-gianares',
    name: 'Andrew Gianares',
    title: 'Accounting Advisory Senior',
    group: 'Accounting',
    credentials: 'Bookkeeping · Payroll · Working Capital Management',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Andrew%20Gianares-1LBQBMRYrxTw8SGVVYLTUN4FeX7UU2.jpg',
    blurb:
      "Andrew anchors Motta's accounting team, keeping clients' books accurate and their cash flow under control. He owns the day-to-day financial operations businesses depend on — bookkeeping, payroll, and working capital management across accounts receivable, accounts payable, and vendor relationships. Fluent across every major accounting and payroll platform, he brings multi-industry experience and understands not just the mechanics of the close, but the reporting and compliance filings each business is responsible for.",
    email: 'Andrew.Gianares@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/andrew-gianares-33967b172/',
    calendly: 'https://calendly.com/andrew-gianares-mottafinancial',
  },
  {
    slug: 'justin-bestel',
    name: 'Justin Bestel, CPA',
    title: 'Senior Accounting Consultant',
    group: 'Accounting',
    credentials: 'CPA · Multi-Industry · Financial Services · Healthcare · Manufacturing',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Justin%20Bestel-NFYsWXGsvPNVcBDfDrnRighvOzAsbw.jpg',
    blurb:
      "Justin is a senior-level accounting and finance consultant with a track record across financial services, healthcare, manufacturing, and public accounting. He brings hands-on expertise in month-end close, financial statement preparation, cash flow forecasting, budgeting, and ERP implementation — and a proven ability to step into complex environments and add immediate value. A CPA and University of Minnesota Duluth graduate, Justin also leads process improvement initiatives and has supported companies preparing for public offerings.",
    email: 'Justin.Bestel@MottaFinancial.com',
  },
  {
    slug: 'shinika-shelley',
    name: 'Shinika Shelley',
    title: 'Senior Accounting Consultant',
    group: 'Accounting',
    credentials: 'Controller-Level · Fractional CFO · Multi-Client · 19 Years Experience',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7CB62C0D-75E8-4D6A-B324-3EB9D7590D6C%20%281%29-AwUjJh6BnFVF5y4tdVS5bUiQ34gLng.png',
    blurb:
      "Shinika is a senior accounting professional with nineteen years of experience delivering full-cycle accounting, financial reporting, and advisory services across healthcare, SaaS, B2B, entertainment, and real estate. She has served in Controller and Fractional CFO capacities — leading month-end close, cash flow strategy, multi-entity reporting, and client advisory for businesses ranging from dental investment portfolios to entertainment industry clients. Known for her precision, process improvement instincts, and ability to manage complex multi-client engagements, Shinika is also the founder of Last Stop Consulting LLC.",
    email: 'Shinika.Shelley@MottaFinancial.com',
  },
  {
    slug: 'samprina-zekio',
    name: 'Samprina Zekio',
    title: 'Backend Development Lead, Intern',
    group: 'Client Operations',
    credentials: 'Suffolk University · Boston · 4 Languages',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samprina%20Zekio-GTqi19ZdKp1732WGzF5s5YFygrWUz9.jpg',
    blurb:
      "Samprina leads backend development for ALFRED Ai through the Suffolk University SEED Program, reporting to Dat Le, CPA. She designs the infrastructure, API workflows, and automation behind ALFRED Ai, the Supabase-powered Motta Hub, and Project Alpha — Motta's ProConnect integration, where she owns OAuth, data sync, and tax-return status tracking. A full-stack builder working across Supabase, PostgreSQL, Vercel, JavaScript, and Python, she is pursuing a B.S. in Business Analytics & Information Systems and Cybersecurity with a 4.0 GPA and speaks four languages.",
    email: 'Samprina.Zekio@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/samprina-zekio/',
  },
];

// Display order for the service-line sections on the team page.
const TEAM_GROUP_ORDER = [
  'Firm Leadership',
  'Tax',
  'Accounting',
  'Business Advisory',
  'Client Operations',
];

export default function AboutTeamPage() {
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={1}
        breadcrumbTitle="Meet Our Team"
        breadcrumbEyebrow="The Team / Tech-forward CPAs"
      >
        <section className="team__area-two pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                  <span className="sub-title">OUR TEAM</span>
                  <h2 className="title tg-element-title">
                    Meet Our Team
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
            {TEAM_GROUP_ORDER.map((groupName) => {
              const members = teamMembers.filter((m) => m.group === groupName);
              if (members.length === 0) return null;
              return (
                <div key={groupName} className="motta-team-group mb-50">
                  <div className="motta-team-group__head">
                    <span className="motta-team-group__line" />
                    <h3 className="motta-team-group__title">{groupName}</h3>
                    <span className="motta-team-group__line" />
                  </div>
                  <div className="row justify-content-center gutter-24">
                    {members.map((member) => (
                      <div
                        key={member.slug}
                        className="col-lg-4 col-md-6 col-sm-8 mb-30"
                      >
                        <div
                          className="team__item-two shine-animate-item h-100"
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <div className="team__thumb-two shine-animate">
                            <img
                              src={member.image || '/placeholder.svg'}
                              alt={member.name}
                              style={{ objectPosition: 'center 15%' }}
                            />
                          </div>
                          <div className="team__content-two">
                            <h4 className="title">{member.name}</h4>
                            <span>{member.title}</span>
                            <p
                              style={{
                                fontSize: '13px',
                                color: 'var(--motta-sage, #6B745D)',
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
                          <TeamContactLinks member={member} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

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
