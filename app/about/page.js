import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import IntakeButton from '@/components/intake/IntakeButton';

/**
 * /about — the long-form story page for Motta Financial.
 *
 * Structure:
 *  1) Photo + sage-wash banner (handled by Layout via Breadcrumb)
 *  2) "Our story" — two-column with Resorts World Las Vegas image + narrative
 *  3) Mottainai callout — one-line philosophy on a sage band
 *  4) The Motta Difference — combined principles + services + tech stats
 *  5) Who we help — three audience cards (individuals / SMBs / partners)
 *  6) Team teaser — link to /about/team
 *  7) CTA band
 */
export default function About() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="About Motta Financial"
      breadcrumbEyebrow="Our Story"
      breadcrumbTagline="A modern CPA firm built for individuals, families, and small business owners who want a team that actually thinks ahead for them."
      breadcrumbImage="/assets/img/about/about_hero.jpg"
    >
      {/* === Story === */}
      <section className="motta-about-story">
        <div className="container">
          <div className="row align-items-center motta-about-story__row">
            <div className="col-lg-6">
              <div className="motta-about-story__media">
                <img
                  src="/assets/img/about/vegas-resorts-world.jpg"
                  alt="Las Vegas skyline at night with The Strat, Circa, Encore, Venetian, and Conrad lit up — home to Motta Financial's Las Vegas office"
                />
                <div className="motta-about-story__tint" aria-hidden="true" />
                <div className="motta-about-story__chip" aria-hidden="true">
                  <span className="motta-about-story__chip-num">2023</span>
                  <span className="motta-about-story__chip-label">
                    Founded · Boston &amp; Las Vegas
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="motta-about-story__content">
                <span className="motta-eyebrow">Who we are</span>
                <h2 className="motta-about-story__title">
                  A CPA firm that thinks ahead — not just files on time.
                </h2>
                <p>
                  Motta Financial was started in 2023 by Big Four alumni
                  who got tired of seeing clients pay too much in tax
                  because nobody was looking at the whole picture. We pair
                  hands-on CPAs with our own AI platform, ALFRED, so the
                  paperwork moves fast and your advisor spends their time
                  on you, your family, and your business.
                </p>
                <p>
                  We work with individuals, small business owners, and
                  non-profits across the country from offices in Boston
                  and Las Vegas. The goal is simple: one team that handles
                  your taxes, books, and planning together — so every
                  decision lines up with the rest of your life.
                </p>
                <div className="motta-about-story__cta">
                  <Link href="/services" className="btn">
                    See What We Do
                  </Link>
                  <Link href="/about/team" className="motta-link">
                    Meet the team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Mottainai band === */}
      <section className="motta-about-philosophy">
        <div className="container">
          <span className="motta-about-philosophy__eyebrow">
            Mottainai · もったいない
          </span>
          <h2 className="motta-about-philosophy__title">
            Too good to waste.
          </h2>
          <p className="motta-about-philosophy__body">
            Our name comes from the Japanese idea of <em>Mottainai</em>{' '}
            — the regret of letting anything good go to waste. It&apos;s
            how we run our firm: no time wasted on paperwork our software
            can handle, no opportunity missed to plan ahead, and no
            client treated like just another return in the stack.
          </p>
        </div>
      </section>

      {/* === The Motta Difference === */}
      <section className="motta-about-difference">
        <div className="container">
          <div className="motta-about-difference__head">
            <span className="motta-eyebrow">The Motta Difference</span>
            <h2 className="motta-section-title">
              A tech-forward CPA firm built to give your time back.
            </h2>
            <p className="motta-about-difference__sub">
              Most firms are stuck doing the same data entry they did 20
              years ago. We built Motta to be different from day one — a
              CPA team paired with our own AI agent, ALFRED, on top of a
              ProConnect Tax + QuickBooks Online stack that automates the
              busywork. The result is a firm that scales without losing
              the high-touch relationship clients are paying for.
            </p>
          </div>

          {/* Tech stats band — sourced from the ProConnect case study */}
          <div className="motta-about-difference__stats">
            {STATS.map((stat) => (
              <div className="motta-about-difference__stat" key={stat.label}>
                <span className="motta-about-difference__stat-num">
                  {stat.num}
                </span>
                <span className="motta-about-difference__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Principles — how we work */}
          <div className="motta-about-difference__principles">
            <h3 className="motta-about-difference__sub-title">
              How we work
            </h3>
            <div className="row motta-about-principles__grid">
              {PRINCIPLES.map((p) => (
                <div className="col-lg-3 col-md-6" key={p.title}>
                  <div className="motta-principle">
                    <span className="motta-principle__num">{p.num}</span>
                    <h3 className="motta-principle__title">{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services — what we do */}
          <div className="motta-about-difference__services">
            <h3 className="motta-about-difference__sub-title">
              What we do
            </h3>
            <p className="motta-about-difference__services-sub">
              Six services. One team. One conversation. Most clients come to
              us with a separate bookkeeper, tax preparer, and financial
              planner — none of whom talk to each other. At Motta, all of it
              sits under one roof, with one CPA who knows your situation.
            </p>
            <div className="row motta-about-services__grid">
              {SERVICES.map((s) => (
                <div className="col-lg-4 col-md-6" key={s.title}>
                  <Link href={s.href} className="motta-service-card">
                    <i className={`${s.icon} motta-service-card__icon`} />
                    <h4 className="motta-service-card__title">{s.title}</h4>
                    <p>{s.desc}</p>
                    <span
                      className="motta-service-card__arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="motta-about-difference__services-cta">
              <Link href="/services" className="btn">
                See All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Who we help === */}
      <section className="motta-about-who">
        <div className="container">
          <div className="motta-about-who__head">
            <span className="motta-eyebrow">Who we help</span>
            <h2 className="motta-section-title">
              Three kinds of clients we&apos;re built for.
            </h2>
          </div>
          <div className="row motta-about-who__grid">
            {AUDIENCES.map((a) => (
              <div className="col-lg-4 col-md-6" key={a.title}>
                <div className="motta-audience">
                  <h3 className="motta-audience__title">{a.title}</h3>
                  <p>{a.body}</p>
                  <ul className="motta-audience__list">
                    {a.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Team teaser === */}
      <section className="motta-about-team-teaser">
        <div className="container">
          <div className="motta-about-team-teaser__inner">
            <div>
              <span className="motta-eyebrow motta-eyebrow--light">
                Leadership
              </span>
              <h2 className="motta-section-title motta-section-title--light">
                The people you&apos;ll actually work with.
              </h2>
              <p>
                Your day-to-day is led by a tax director and a dedicated
                associate, alongside a senior accounting manager — all
                reporting to managing partner Dat Le, CPA. No outsourcing,
                no junior preparer you&apos;ve never met.
              </p>
            </div>
            <Link href="/about/team" className="btn">
              Meet Our Professionals
            </Link>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="motta-about-cta">
        <div className="container">
          <div className="motta-about-cta__inner">
            <div>
              <h2 className="motta-section-title motta-section-title--light">
                Ready to talk to a CPA who actually plans ahead?
              </h2>
              <p>
                Tell us a little about your situation. We&apos;ll get
                back to you — usually within one business day — and
                point you in the right direction even if we&apos;re not
                the right fit.
              </p>
            </div>
            <div className="motta-about-cta__buttons">
              <IntakeButton className="btn" source="about">
                Become a Client
              </IntakeButton>
              <Link href="/contact" className="btn border-btn">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const STATS = [
  {
    num: '~80%',
    label:
      'less time on data entry per return — ALFRED + ProConnect Books-to-Tax',
  },
  {
    num: '30 min',
    label: 'average return prep time, down from 3–4 hours industry standard',
  },
  {
    num: '1 hub',
    label:
      'every client message, document, and signature centralized in one secure portal — no email chains, no lost attachments',
  },
  {
    num: '24/7',
    label:
      'overnight workflow with our Chennai team and AI agents — no waiting weeks for a draft',
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Plan first, file second.',
    body: "We map out your tax picture before the year ends — not after. That's where the actual savings live.",
  },
  {
    num: '02',
    title: 'One team, one conversation.',
    body: 'Your CPA, bookkeeper, and planner are on the same team — so advice on one thing accounts for everything else.',
  },
  {
    num: '03',
    title: 'AI handles the busywork.',
    body: 'ALFRED Ai prepares returns and chases documents in the background, so your CPA can spend time on you.',
  },
  {
    num: '04',
    title: 'Plain English, every time.',
    body: "No jargon, no condescension. We explain what we're doing and why, and you decide where to go from there.",
  },
];

const SERVICES = [
  {
    icon: 'flaticon-investment',
    title: 'Tax Planning & Preparation',
    desc: 'Year-round strategy and stress-free filing — drafted by ALFRED Ai, reviewed by your CPA.',
    href: '/services/tax-planning',
  },
  {
    icon: 'flaticon-financial-profit',
    title: 'Accounting & Payroll',
    desc: 'Clean books, on-time payroll, and monthly reports you actually understand.',
    href: '/services/accounting-advisory',
  },
  {
    icon: 'flaticon-investment-1',
    title: 'Business Entity Setup',
    desc: 'Pick the right structure on day one and adjust it cleanly as you grow.',
    href: '/services/business-entity-structuring',
  },
  {
    icon: 'flaticon-life-insurance',
    title: 'Financial Planning',
    desc: 'A single plan that ties your taxes, investments, and estate together.',
    href: '/services/financial-planning',
  },
  {
    icon: 'flaticon-target',
    title: 'Business AI Transformation',
    desc: 'AI-certified pros help small businesses cut manual work and run leaner.',
    href: '/services/business-ai-transformation',
  },
  {
    icon: 'flaticon-pie-chart',
    title: 'Management Consulting',
    desc: 'Operating model, KPI dashboards, and a fractional CFO when you need one.',
    href: '/services/management-consulting',
  },
];

const AUDIENCES = [
  {
    title: 'Individuals & families',
    body: 'For people who want one trusted CPA looking after taxes, big decisions, and long-term planning together.',
    items: [
      'Year-round tax planning',
      'Stock options & equity comp',
      'Real estate & investments',
      'Estate & legacy coordination',
    ],
  },
  {
    title: 'Small business owners',
    body: 'For owner-operators who need clean books, smart tax strategy, and a real CFO-level perspective on the numbers.',
    items: [
      'Bookkeeping & payroll',
      'Entity setup & restructuring',
      'Monthly reporting & KPIs',
      'AI transformation & automation',
    ],
  },
  {
    title: 'Non-profits',
    body: 'For mission-driven organizations that need rigorous compliance and reporting without the big-firm overhead.',
    items: [
      'Form 990 preparation',
      'Grant & fund accounting',
      'Board-ready financials',
      'State charitable filings',
    ],
  },
];
