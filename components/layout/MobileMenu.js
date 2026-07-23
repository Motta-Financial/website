'use client';
import Link from 'next/link';
import { useState } from 'react';
import IntakeButton from '@/components/intake/IntakeButton';

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({ status: false, key: '' });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: '' });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* About Us — full parity with desktop */}
        <li className="menu-item-has-children">
          <Link href="/about">About Us</Link>
          <ul
            className="sub-menu"
            style={{ display: isActive.key === 2 ? 'block' : 'none' }}
          >
            <li>
              <Link href="/about">About Motta</Link>
            </li>
            <li>
              <Link href="/about/founder">Meet Our Founder</Link>
            </li>
            <li>
              <Link href="/about/team">Meet Our Team</Link>
            </li>
            <li>
              <Link href="/alfred">ALFRED Ai</Link>
            </li>
            <li>
              <Link href="/partnerships">Partnerships</Link>
            </li>
          </ul>
          <div
            className={isActive.key === 2 ? 'dropdown-btn open' : 'dropdown-btn'}
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* Services — matching desktop top-level categories */}
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul
            className="sub-menu"
            style={{ display: isActive.key === 3 ? 'block' : 'none' }}
          >
            <li>
              <Link href="/services/tax">Tax</Link>
            </li>
            <li>
              <Link href="/services/accounting">Accounting</Link>
            </li>
            <li>
              <Link href="/services/ma">Mergers &amp; Acquisitions</Link>
            </li>
            <li>
              <Link href="/services/business-advisory">Business Advisory</Link>
            </li>
            <li>
              <Link href="/services/saas-tech-advisory">
                SaaS &amp; Technology Advisory
              </Link>
            </li>
            <li>
              <Link href="/services/wealth-management">Wealth Management</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
          <div
            className={isActive.key === 3 ? 'dropdown-btn open' : 'dropdown-btn'}
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* News — new, not previously in mobile menu */}
        <li className="menu-item-has-children">
          <Link href="/news">News</Link>
          <ul
            className="sub-menu"
            style={{ display: isActive.key === 4 ? 'block' : 'none' }}
          >
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
          <div
            className={isActive.key === 4 ? 'dropdown-btn open' : 'dropdown-btn'}
            onClick={() => handleToggle(4)}
          >
            <span className="plus-line" />
          </div>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <li>
          <IntakeButton className="motta-intake-link" source="mobile-nav">
            Become a Client
          </IntakeButton>
        </li>
      </ul>
    </>
  );
}
