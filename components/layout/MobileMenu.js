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
              <Link href="/about/team">Meet Our Team</Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 2 ? 'dropdown-btn open' : 'dropdown-btn'
            }
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>

        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>
          <ul
            className="sub-menu"
            style={{ display: isActive.key === 3 ? 'block' : 'none' }}
          >
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
              <Link href="/services/ma">Mergers &amp; Acquisitions</Link>
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
          <div
            className={
              isActive.key === 3 ? 'dropdown-btn open' : 'dropdown-btn'
            }
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>

        <li>
          <IntakeButton className="motta-intake-link" source="mobile-nav">Become a Client</IntakeButton>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
