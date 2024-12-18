import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'; // Importamos InView
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import Footer from '../components/footerLanding';
import Header from '../components/header'; // Importamos el Header
import PricingSection from '../components/pricingSection'; // Importamos la sección de precios

const LandingPage: React.FC = () => {
  return (
    <>
      <Header /> {/* Agregamos el Header aquí */}

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
          </motion.div>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FeaturesSection />
          </motion.div>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <PricingSection />
          </motion.div>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <TestimonialSection />
          </motion.div>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <CTASection />
          </motion.div>
        )}
      </InView>

      <Footer />
    </>
  );
};

export default LandingPage;
