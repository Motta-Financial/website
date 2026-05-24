import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/about">About Us</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">About Motta</Link>
            </li>
            <li>
              <Link href="/about/founder">Meet Our Founder</Link>
            </li>
            <li>
              <Link href="/about/team">Meet Our Professionals</Link>
            </li>
            <li>
              <Link href="/alfred">ALFRED Ai</Link>
            </li>
            <li>
              <Link href="/partnerships">Partnerships</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link href="/services/tax">Tax</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/services/tax-planning">
                    Tax Planning &amp; Preparation
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/services/accounting">Accounting</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/services/accounting/cfo-controller">
                    CFO &amp; Controller Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting/business-infrastructure">
                    Business Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting/bookkeeping">
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting/financial-reporting">
                    Financial Reporting
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting/payroll">
                    Payroll Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/services/business-advisory">Business Advisory</Link>
            </li>
            <li>
              <Link href="/services/wealth-management">Wealth Management</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/news">News</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/news">All News</Link>
            </li>
            <li>
              <Link href="/news/press">Press Releases</Link>
            </li>
            <li>
              <Link href="/news/blog">Blog</Link>
            </li>
            <li>
              <Link href="/news/community">In the Community</Link>
            </li>
            <li>
              <Link href="/news/media">Media</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
