// src/components/HeroDataAnalytics.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { AnimatedWrapper } from './AnimatedWrapper';
import { fadeInUp, staggerContainer,  } from './animations/variants';
import FloatingDataObject, {
  DataCircleDots,
  DataBarSegments,
  DataConcentricCircles,
  DataPillShape,
} from './data-objects/FloatingDataObject';
import AnimatedHighlightedWord from './AnimatedHighlightedWord';

// ... (headline splitting logic remains the same)
const staticTextPartVariant = fadeInUp(0.7);

function HeroDataAnalytics() {



  return (
    <section id="hero-data" className="relative bg-data-light-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20"> {/* Adjusted padding for overall balance */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-12 items-center"> {/* Adjusted gap-x */}
          
          {/* Text Content Area - now takes full width on mobile, half on lg */}
                    <AnimatedWrapper
            variants={staggerContainer(0.2, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0 lg:pb-24"
          >
            <motion.div variants={fadeInUp(0.6)} className="mb-4">
              <span className="inline-block bg-data-secondary/20 text-data-secondary text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                ✨ DATA-DRIVEN RESULTS
              </span>
            </motion.div>

          
             <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>Unlock </motion.span>
              <AnimatedHighlightedWord
                word="Insights,"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />
              <br/>
              <motion.span variants={staticTextPartVariant}>Drive Decisions </motion.span>
     
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)}
              className="text-lg sm:text-xl text-data-text-muted max-w-md mx-auto lg:mx-0 mb-8"
            >
              We transform your complex data into clear, actionable strategies that power growth and innovation for your enterprise.
            </motion.p>

            <motion.div variants={fadeInUp(0.7, 0.3)}>
              {/* ... CTA Button ... */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-data-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-cta text-base sm:text-lg shadow-lg transition-all duration-300 ease-in-out flex items-center mx-auto lg:mx-0"
              >
                Discover Your Data Potential <FiArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </AnimatedWrapper>

          {/* Floating Data Objects Area - DESKTOP (lg screens and up) */}
          <div className="relative hidden lg:block h-[450px] md:h-[550px] lg:h-[650px] order-1 lg:order-2"> {/* Order change for flex layout */}
            {/* ... (Your existing 10+ FloatingDataObject components for desktop - keep them as they are) ... */}
            <FloatingDataObject floatDelay={0.1} className="top-[0%] left-[5%]" initialX={-60} initialY={-20}>
              <DataCircleDots size="w-36 h-36 sm:w-44 sm:h-44" colorClass="bg-data-secondary opacity-90" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.3} className="top-[35%] -left-[5%]" initialY={60} initialX={-30}>
              <DataPillShape width="w-60 sm:w-72" height="h-24 sm:h-28" colorClass="bg-data-primary opacity-75" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.2} className="top-[10%] right-[10%]" initialX={60} initialY={-30}>
              <DataBarSegments size="w-28 h-44 sm:w-32 sm:h-52" colorClass="bg-data-accent opacity-85" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.5} className="top-[30%] left-[45%] transform -translate-x-1/2" initialY={-40}>
              <DataConcentricCircles size="w-28 h-28 sm:w-32 sm:h-32" colorClass="border-data-primary opacity-60" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.7} className="bottom-[5%] right-[5%]" initialY={60} initialX={40}>
              <DataCircleDots size="w-24 h-24 sm:w-28 sm:h-28" colorClass="bg-data-accent opacity-70" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.4} className="bottom-[30%] right-[0%]" initialX={50}>
              <DataPillShape width="w-40 sm:w-48" height="h-16 sm:h-20" colorClass="bg-data-secondary opacity-60" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.6} className="top-[60%] left-[20%]" initialY={30}>
              <DataBarSegments size="w-16 h-28 sm:w-20 sm:h-32" colorClass="bg-data-primary opacity-50" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.8} className="bottom-[45%] left-[55%]" initialX={-20}>
              <DataPillShape width="w-20" height="h-10" colorClass="bg-data-accent opacity-70" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.9} className="top-[5%] right-[40%]" initialY={-20}>
              <DataConcentricCircles size="w-20 h-20" colorClass="border-data-secondary opacity-40" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={1.0} className="bottom-[15%] left-[5%]" initialY={40}>
              <DataCircleDots size="w-16 h-16" colorClass="bg-data-primary opacity-60" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.35} className="top-[70%] right-[30%]" initialX={20} initialY={-10}>
                <DataPillShape width="w-32" height="h-16" colorClass="bg-gray-300 opacity-40" />
            </FloatingDataObject>
          </div>

          {/* Floating Data Objects Area - MOBILE (screens smaller than lg) */}
          {/* This container will be positioned relative to the main grid cell or the page if needed */}
          {/* For mobile, we might want these objects to be part of the same grid cell as text, but positioned absolutely around it */}
          <div className="absolute inset-0 block lg:hidden z-0 pointer-events-none"> {/* Full area, behind text, only on mobile */}
            <FloatingDataObject floatDelay={0.2} className="top-[5%] left-[5%] opacity-50" initialX={-30} initialY={-20}>
              <DataCircleDots size="w-20 h-20" colorClass="bg-data-secondary/60" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.4} className="top-[15%] right-[5%] opacity-50" initialX={30} initialY={-15}>
              <DataPillShape width="w-28" height="h-12" colorClass="bg-data-accent/50" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.6} className="bottom-[10%] left-[10%] opacity-50" initialY={30} initialX={-20}>
              <DataBarSegments size="w-16 h-24" colorClass="bg-data-primary/50" />
            </FloatingDataObject>
            <FloatingDataObject floatDelay={0.8} className="bottom-[5%] right-[8%] opacity-50" initialY={25} initialX={20}>
              <DataConcentricCircles size="w-24 h-24" colorClass="border-data-secondary/40" />
            </FloatingDataObject>
          </div>

        </div>
      </div>

      {/* Subtle Background Blobs (same as before, keep them for overall depth) */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-data-primary/5 rounded-full filter blur-2xl opacity-50 -z-0"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-data-secondary/5 rounded-full filter blur-2xl opacity-50 -z-0"></div>
    </section>
  );
}

export default HeroDataAnalytics;