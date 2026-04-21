/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import Programs from './sections/Programs';
import Experience from './sections/Experience';
import Payment from './sections/Payment';
import AISupport from './sections/AISupport';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Opportunities from './sections/Opportunities';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-primary-green/30">
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <Hero />
          <HowItWorks />
          <Features />
          <Programs />
          <Experience />
          <Payment />
          <AISupport />
          <Testimonials />
          <Opportunities />
          <FAQ />
          <FinalCTA />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
