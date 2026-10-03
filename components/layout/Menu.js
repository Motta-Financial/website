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
              <Link prefetch={false} href="/about">About Motta</Link>
            </li>
            <li>
              <Link prefetch={false} href="/about/founder">Meet Our Founder</Link>
            </li>
            <li>
              <Link prefetch={false} href="/about/team">Meet Our Team</Link>
            </li>
            <li>
              <Link prefetch={false} href="/alfred">ALFRED Ai</Link>
            </li>
            <li>
              <Link prefetch={false} href="/partnerships">Partnerships</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link prefetch={false} href="/services/tax">Tax</Link>
            </li>
            <li>
              <Link prefetch={false} href="/services/accounting">Accounting</Link>
            </li>
            <li>
              <Link prefetch={false} href="/services/ma">Mergers &amp; Acquisitions</Link>
            </li>
            <li>
              <Link prefetch={false} href="/services/business-advisory">Business Advisory</Link>
            </li>
            <li>
              <Link prefetch={false} href="/services/saas-tech-advisory">
                SaaS &amp; Technology Advisory
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/services/wealth-management">Wealth Management</Link>
            </li>
            <li>
              <Link prefetch={false} href="/resources">Resources</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/news">News</Link>
          <ul className="sub-menu">
            <li>
              <Link prefetch={false} href="/news">All News</Link>
            </li>
            <li>
              <Link prefetch={false} href="/news/press">Press Releases</Link>
            </li>
            <li>
              <Link prefetch={false} href="/news/blog">Blog</Link>
            </li>
            <li>
              <Link prefetch={false} href="/news/community">In the Community</Link>
            </li>
            <li>
              <Link prefetch={false} href="/news/media">Media</Link>
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
