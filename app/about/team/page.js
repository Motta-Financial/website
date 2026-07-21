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
      "Dat Le is the Founder and Managing Partner of Motta Financial, leading the firm's strategic direction across tax, accounting, and advisory services from offices in Boston and Las Vegas. A two-time Suffolk University graduate, Dat built his foundation as a top-rated Audit Senior at Deloitte & Touche before deepening his technical skills through senior consulting and controller roles supporting IPOs, SPAC transactions, and complex revenue recognition.",
    email: 'Dat.Le@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/dat-le-cpa-589b451b/',
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
      "Terry leads Motta's tax advisory practice as the senior point of contact for complex engagements with high-net-worth individuals, family offices, and closely-held businesses. He is known for translating intricate positions into clear client guidance and for a research-first standard that ensures every position is supported by authoritative tax law.",
    email: 'Terry.Song@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/terry-song-3332a970/',
    calendly: 'https://calendly.com/terry-song-mottafinancial',
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
      "Amy leads Motta's accounting advisory practice, overseeing every client engagement from monthly bookkeeping through Fractional CFO services. She pairs world-class technical accounting with Motta certification in AI Business Transformation, delivering GAAP-compliant work product with intelligent AI integrated directly into client operations.",
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
      "Caleb leads Motta's corporate development and M&A practice, advising business owners and platform investors on acquisitions, capital decisions, and post-close integration. He brings 7+ years of in-house strategic finance and corporate development experience sourcing, modeling, and executing transactions across the lower-middle market through institutional-backed platforms.",
    email: 'Caleb.Long@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/caleb-long/',
    calendly: 'https://calendly.com/caleb-long-mottafinancial',
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
      "Julian is Motta's Client Operations Associate, the operational bridge between clients and the internal team. He keeps proposals, onboarding, billing, and workflow visibility moving across the firm, owning engagement letters and invoicing through Ignition, deadline and follow-up tracking in Karbon, and the day-to-day communication that keeps every engagement responsive. His background spans operations and partnership roles at WWE, the Santa Cruz Warriors, and SponsorUnited.",
    email: 'Julian.Jacobson@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/julianjacobson5/',
    calendly: 'https://calendly.com/julian-jacobson-mottafinancial',
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
      "Andrew anchors Motta's accounting team, keeping clients' books accurate and their cash flow under control. He owns the day-to-day financial operations businesses depend on, including bookkeeping, payroll, and working capital management across accounts receivable, accounts payable, and vendor relationships. Fluent across every major accounting and payroll platform, he brings multi-industry experience and understands not just the mechanics of the close, but the reporting and compliance filings each business is responsible for.",
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
      "Justin is a senior-level accounting and finance consultant with a track record across financial services, healthcare, manufacturing, and public accounting. He brings hands-on expertise in month-end close, financial statement preparation, cash flow forecasting, budgeting, and ERP implementation, and a proven ability to step into complex environments and add immediate value. A CPA and University of Minnesota Duluth graduate, Justin also leads process improvement initiatives and has supported companies preparing for public offerings.",
    email: 'Justin.Bestel@MottaFinancial.com',
    linkedin: 'https://www.linkedin.com/in/justin-bestel-33652013/',
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
    linkedin: 'https://www.linkedin.com/in/shinika-shelley-367385116/',
    calendly: 'https://calendly.com/shinika-shelley-mottafinancial',
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
    github: 'https://github.com/samprinazekio',
    calendly: 'https://calendly.com/samprinazekio',
  },
];

const cardStyle = {
  background: '#FFFFFF',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 2px 12px rgba(20,23,108,0.07)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  border: '1px solid #EBEBEA',
};

const imgStyle = {
  width: '100%',
  aspectRatio: '4/3',
  objectFit: 'cover',
  objectPosition: 'center 15%',
  display: 'block',
};

const bodyStyle = {
  padding: '28px 28px 20px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const deptStyle = {
  fontFamily: 'var(--tg-heading-font-family)',
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#6B745D',
  marginBottom: '6px',
  display: 'block',
};

const nameStyle = {
  fontFamily: 'var(--tg-heading-font-family)',
  fontSize: '20px',
  fontWeight: 600,
  color: '#1A1A1A',
  marginBottom: '4px',
  lineHeight: 1.2,
};

const roleStyle = {
  fontFamily: 'var(--tg-heading-font-family)',
  fontSize: '14px',
  fontWeight: 400,
  color: '#5A5F4E',
  marginBottom: '16px',
  display: 'block',
  lineHeight: 1.4,
};

const dividerStyle = {
  height: '1px',
  background: '#E2DDD6',
  margin: '0 0 14px',
  border: 'none',
};

const credStyle = {
  fontFamily: 'var(--tg-body-font-family)',
  fontSize: '11.5px',
  fontWeight: 500,
  color: '#9B9D92',
  marginBottom: '14px',
  lineHeight: 1.5,
  letterSpacing: '0.01em',
};

const blurbStyle = {
  fontFamily: 'var(--tg-body-font-family)',
  fontSize: '13.5px',
  fontWeight: 400,
  color: '#4A4843',
  lineHeight: 1.75,
  marginBottom: 0,
  flexGrow: 1,
};

export default function AboutTeamPage() {
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={1}
        breadcrumbTitle="Meet Our Team"
        breadcrumbEyebrow="The Team / Tech-forward CPAs"
      >
        <section className="team__area-two pb-90" style={{ paddingTop: '30px' }}>
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-40 tg-heading-subheading animation-style3">
                  <h2 className="title tg-element-title">The Ones Who Get It Done</h2>
                  <p className="mt-3 mx-auto" style={{ fontFamily: 'var(--tg-body-font-family)', fontSize: '16px', color: '#5A5F4E', maxWidth: '620px', lineHeight: '1.8' }}>
                    The partners, advisors, and associates leading Motta Financial&apos;s tax, accounting, advisory, and client experience practices.<br />
                    Working across our Boston and Las Vegas offices to make sure your finances are never left to chance.
                  </p>
                </div>
              </div>
            </div>

            <div className="row gutter-24">
              {teamMembers.map((member) => (
                <div key={member.slug} className="col-lg-4 col-md-6 mb-30">
                  <div style={cardStyle}>
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      style={imgStyle}
                    />
                    <div style={bodyStyle}>
                      <span style={deptStyle}>{member.group}</span>
                      <h4 style={nameStyle}>{member.name}</h4>
                      <span style={roleStyle}>{member.title}</span>
                      <hr style={dividerStyle} />
                      <p style={credStyle}>{member.credentials}</p>
                      <p style={blurbStyle}>{member.blurb}</p>
                    </div>
                    <TeamContactLinks member={member} />
                  </div>
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-50">
              <div className="col-lg-8 text-center">
                <p style={{ fontFamily: 'var(--tg-body-font-family)', fontSize: '15px', color: '#5A5F4E', marginBottom: '24px' }}>
                  Want to talk with our team about your tax, accounting, or advisory needs?
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
