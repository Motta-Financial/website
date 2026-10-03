'use client';
import dynamic from 'next/dynamic';

// The hero (and the Swiper library it needs, ~34 kB gzipped) only exists on the
// home page. Every page prefetches the home route through its logo/menu links,
// and prefetching pulled Swiper's JavaScript into pages that never show it.
// Loading it through a client-side dynamic import keeps it out of that path;
// the hero is still server-rendered, so its markup is in the first HTML.
//
// This has to be a client component: `dynamic()` called from the server
// component that renders the hero does not split the chunk out.
const HeroSlider = dynamic(() => import('./HeroSlider'));

export default HeroSlider;
