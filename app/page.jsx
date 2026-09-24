'use client';
import { MotionConfig } from 'framer-motion';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Guide from '../components/Guide';
import Rights from '../components/Rights';
import Habits from '../components/Habits';
import Cta from '../components/Cta';
import LegalQuote from '../components/LegalQuote';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Banner />
      <Nav />
      <Hero />
      <Guide />
      <Rights />
      <Habits />
      <Cta />
      <LegalQuote />
      <Footer />
    </MotionConfig>
  );
}
