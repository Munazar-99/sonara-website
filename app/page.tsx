'use client';

import EarlyAccess from '@/features/early-access/components/EarlyAcess';
import Benefits from '@/features/benefits/components/Benefits';
import Footer from '@/components/Footer';
import Hero from '@/features/hero/components/Hero';
import HowItWorks from '@/features/how-it-works/components/HowItWorks';
import Navbar from '@/components/Navbar';
import { LazyMotion, domAnimation } from 'motion/react';
import { renderSchemaTags } from '@/utils/seo';

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Benefits />
        <HowItWorks />
        <EarlyAccess />
        <Footer />
        {renderSchemaTags()}
      </div>
    </LazyMotion>
  );
}
