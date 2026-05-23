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
              <Link href="/about/team">Meet Our Professionals</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/services/tax-planning">
                Tax Planning &amp; Preparation
              </Link>
            </li>
            <li>
              <Link href="/services/accounting-advisory">
                Accounting &amp; Payroll
              </Link>
            </li>
            <li>
              <Link href="/services/business-entity-structuring">
                Business Entity Setup
              </Link>
            </li>
            <li>
              <Link href="/services/financial-planning">
                Financial Planning
              </Link>
            </li>
            <li>
              <Link href="/services/business-ai-transformation">
                Business AI Transformation
              </Link>
            </li>
            <li>
              <Link href="/services/management-consulting">
                Management Consulting
              </Link>
            </li>
            <li>
              <Link href="/services/financial-statement-analysis">
                Financial Statement Analysis
              </Link>
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

