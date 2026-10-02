'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import DataBg from '../elements/DataBg';
import Breadcrumb from './Breadcrumb';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Footer5 from './footer/Footer5';
import Header1 from './header/Header1';
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Header5 from './header/Header5';
import TopBanner from '../elements/TopBanner';
import AlfredCompanion from '../elements/AlfredCompanion';
import IntakeProvider from '../intake/IntakeProvider';

// aos / wow.js and the stylesheets they need, for the leftover template sections
// only. Loaded on demand so they don't weigh down every real page.
const LegacyMotion = dynamic(() => import('../utils/LegacyMotion'), { ssr: false });

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  breadcrumbCrumbLabel,
  breadcrumbEyebrow,
  breadcrumbTagline,
  breadcrumbImage,
  breadcrumbBackHref,
  breadcrumbBackLabel,
  children,
  transparent,
}) {
  const [scroll, setScroll] = useState(false);
  const [needsLegacyMotion, setNeedsLegacyMotion] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add('mobile-menu-visible')
      : document.body.classList.remove('mobile-menu-visible');
  };
  // Search Menu
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);
  // Moblile Menu
  const [isOffcanvus, setOffcanvus] = useState(false);
  const handleOffcanvus = () => setOffcanvus(!isOffcanvus);

  // Escape closes the mobile menu (it has no other keyboard exit).
  useEffect(() => {
    if (!isMobileMenu) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleMobileMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenu]);

  useEffect(() => {
    // The scroll-reveal libraries are only needed by template sections that opt
    // in with `data-aos` / `.wow`. None of the live pages do, so load them on
    // demand instead of shipping them (and their global observers) everywhere.
    setNeedsLegacyMotion(Boolean(document.querySelector('[data-aos], .wow')));

    // Sticky-header flag. Layout remounts on every client navigation, so the
    // listener must be removed or they pile up (one per page visited).
    const onScroll = () => setScroll(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <IntakeProvider>
      <DataBg />
      <TopBanner />

      {!headerStyle && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
          transparent={transparent}
        />
      )}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
          transparent={transparent}
        />
      ) : null}
      {headerStyle == 2 ? (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      ) : null}
      {headerStyle == 3 ? (
        <Header3
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      ) : null}
      {headerStyle == 4 ? (
        <Header4
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      ) : null}
      {headerStyle == 5 ? (
        <Header5
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      ) : null}

      <main className="fix">
        {breadcrumbTitle && (
        <Breadcrumb
          breadcrumbTitle={breadcrumbTitle}
          crumbLabel={breadcrumbCrumbLabel}
          eyebrow={breadcrumbEyebrow}
          tagline={breadcrumbTagline}
          backgroundImage={breadcrumbImage}
            backHref={breadcrumbBackHref}
            backLabel={breadcrumbBackLabel}
          />
        )}

        {children}
      </main>

      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}
      {footerStyle == 2 ? <Footer2 /> : null}
      {footerStyle == 3 ? <Footer3 /> : null}
      {footerStyle == 4 ? <Footer4 /> : null}
      {footerStyle == 5 ? <Footer5 /> : null}

      {needsLegacyMotion && <LegacyMotion />}
      <BackToTop />
      <AlfredCompanion />
    </IntakeProvider>
  );
}
