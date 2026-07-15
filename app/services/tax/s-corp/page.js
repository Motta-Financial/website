import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import ServiceDetailLayout from '@/components/sections/ServiceDetailLayout';
import { ProConnectBlock } from '@/components/sections/IntuitCredentials';

export const metadata = {
  title: 'S-Corp Elections & Compliance | Motta Financial',
  description:
    'We help profitable small businesses decide whether to elect S-corporation status, file the election, set a defensible reasonable salary, stand up payroll, handle quarterly filings, and prepare the annual 1120-S — end to end.',
};

const STEPS = [
  {
    n: '01',
    title: 'Assess whether you should elect',
    body: 'We model your actual profit, estimate the self-employment-tax savings, and net them against the added costs of an S-corp. If the election does not clear the worth-it threshold, we tell you to wait — and why.',
  },
  {
    n: '02',
    title: 'Set a defensible reasonable salary',
    body: 'Reasonable compensation is the most scrutinized part of an S-corp. We build your salary from real market data for your role, hours, and market, and document the basis in writing as your audit defense.',
  },
  {
    n: '03',
    title: 'File the election (Form 2553)',
    body: 'We prepare and file the election — including late-relief language under Rev. Proc. 2013-30 if you missed the deadline — and track the IRS acceptance so nothing slips.',
  },
  {
    n: '04',
    title: 'Stand up payroll',
    body: 'We open your federal and state payroll-tax accounts, configure payroll through our accountant partner program, and schedule your salary so it runs cleanly from day one.',
  },
  {
    n: '05',
    title: 'Quarterly payroll filings & ongoing compliance',
    body: 'We keep payroll running on schedule, file your quarterly Forms 941, issue your W-2, and refresh your reasonable-comp documentation each year so the structure stays sound.',
  },
  {
    n: '06',
    title: 'Annual business tax return',
    body: 'We prepare your Form 1120-S and Schedule K-1, track stock and debt basis (Form 7203), and reconcile wages to profit — then carry it through to your personal return.',
  },
];

export default function SCorpElections() {
  return (
    <Layout
      headerStyle={5}
      footerStyle={1}
      breadcrumbTitle="S-Corp Elections & Compliance"
      breadcrumbEyebrow="Tax"
    >
      <ServiceDetailLayout
        currentHref="/services/tax/s-corp"
        heroImage="/assets/img/services/s-corp-hero.jpg"
        title="S-Corp Elections & Compliance"
        lede="If you run a profitable single-member LLC, every dollar of profit is hit with 15.3% self-employment tax before income tax even starts. An S-corporation election can legally remove that layer from the distribution portion of your profit — but only when the salary is reasonable and the compliance is handled. Motta runs the whole thing: we confirm it pays off, file the election, set your salary, stand up payroll, and keep you compliant year after year."
        bullets={[
          {
            icon: 'flaticon-target',
            title: 'Savings Analysis First',
            desc: 'We confirm the net benefit after every cost before you commit — no guesswork, no headline numbers.',
          },
          {
            icon: 'flaticon-profit',
            title: 'Reasonable Comp, Documented',
            desc: 'A defensible salary built from market data, with a written memo kept on file as your audit defense.',
          },
          {
            icon: 'flaticon-investment',
            title: 'Election + Payroll Setup',
            desc: 'Form 2553 prepared and filed, payroll-tax accounts opened, and your salary scheduled to run cleanly.',
          },
          {
            icon: 'flaticon-financial-profit',
            title: 'Quarterly Filings & 1120-S',
            desc: 'Quarterly 941s, your annual W-2, and the S-corp return with K-1 and basis tracking — all handled.',
          },
        ]}
        sections={[
          {
            heading: 'How the election actually saves you money',
            body: (
              <>
                <p>
                  An S-Corp election does not change your legal entity — your
                  LLC stays an LLC. It changes how the IRS taxes your profit.
                  You pay yourself a reasonable salary through payroll (subject
                  to payroll tax), and take the remaining profit as
                  distributions, which are not subject to self-employment or
                  payroll tax. You still pay income tax on all of it; the
                  savings come from removing the 15.3% layer on the distribution
                  portion.
                </p>
                <p style={{ marginTop: 16 }}>
                  At roughly $150,000 of profit with a reasonable salary near
                  $70,000, the election typically saves about $10,000 in
                  self-employment tax per year. Net of our package and payroll,
                  most owners keep $5,000–$7,000+ annually — every year the
                  business runs. The election generally starts to pay off once
                  net profit reliably clears about $60,000.
                </p>
              </>
            ),
          },
          {
            heading: 'Our end-to-end process',
            body: (
              <div className="row" style={{ marginTop: 8 }}>
                {STEPS.map((s) => (
                  <div key={s.n} className="col-md-6" style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        height: '100%',
                        padding: '22px 22px 20px',
                        borderRadius: 14,
                        background: '#fff',
                        border: '1px solid rgba(107, 116, 93, 0.16)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          color: 'var(--motta-sage-deep, #6b745d)',
                          marginBottom: 8,
                        }}
                      >
                        STEP {s.n}
                      </span>
                      <h5
                        style={{
                          marginBottom: 8,
                          color: 'var(--motta-charcoal, #2b2f24)',
                        }}
                      >
                        {s.title}
                      </h5>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: 'rgba(43, 47, 36, 0.78)',
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ),
          },
          {
            heading: 'Reasonable compensation — the rule that matters most',
            body: 'Because distributions avoid payroll tax, there is a temptation to pay a tiny salary and take everything else as distributions. The IRS knows this, and an unreasonably low salary can be reclassified as wages with back taxes, interest, and penalties — wiping out years of savings. There is no magic percentage; "half of profit" is a starting heuristic, not a safe harbor. We build your figure from your actual duties, hours, and market comparables, and the documentation IS the defense. No election is filed without a completed, reviewed comp study on file.',
          },
          {
            heading: 'Deadlines and late relief',
            body: 'For an existing calendar-year business, Form 2553 is generally due by March 15 to take effect for the current year. New businesses file within 2 months and 15 days of starting. Missed the deadline? Relief is often available under Rev. Proc. 2013-30 with a proper reasonable-cause statement — and good news for LLCs: you do not need a separate Form 8832 first, since Form 2553 handles the classification change.',
          },
          {
            heading: 'Prepared on Intuit ProConnect',
            body: <ProConnectBlock />,
          },
          {
            heading: 'Want the full picture first?',
            body: (
              <p style={{ margin: 0 }}>
                Download our plain-English{' '}
                <Link
                  href="/resources"
                  style={{ color: 'var(--motta-sage-deep, #6b745d)', fontWeight: 600 }}
                >
                  Small Business Owner&apos;s Guide to the S-Corporation Election
                </Link>{' '}
                from our Resources page — it walks through the savings, the
                reasonable-comp rule, the real costs, and a readiness checklist
                with worked 2026 numbers. When you&apos;re ready, we&apos;ll run
                your actual figures before you commit to anything.
              </p>
            ),
          },
        ]}
      />
    </Layout>
  );
}
