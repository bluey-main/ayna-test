// src/components/GlobalNetworkSection.tsx
import React from "react";
import { motion } from "framer-motion";
import SpinningGlobe from "./SpinningGlobe"; // Import the new globe
import { AnimatedWrapper } from "./AnimatedWrapper";
import { fadeInUp, staggerContainer } from "./animations/variants";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import GridPattern from "./GridPattern";

const staticTextPartVariant = fadeInUp(0.7);

function GlobalNetworkSection() {
  return (
    <section
      id="global-network"
      className="py-20 md:py-32  bg-data-dark-bg  text-global-text-primary relative overflow-hidden"
    >
     <GridPattern/>

      {/* Optional: Subtle space dust/particle effect for the entire section background */}
      {/* <ParticleBackground particleCount={100} className="opacity-30 -z-10" /> */}

      <div className="container h-[70vh]  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedWrapper
          variants={staggerContainer(0.3, 0.1)}
          className="text-center max-w-3xl mx-auto mb-2"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>
              Shed some 
            </motion.span>
            <AnimatedHighlightedWord
              word=" Light"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={staticTextPartVariant}>
              {" "}
              on your business   
            </motion.span>
            <AnimatedHighlightedWord
              word=" data"
              highlightColorClass="bg-brand-green/60" // Example
              textColorClass="text-brand-green"
              className="mx-1"
            />
          </motion.h1>
          <motion.p
            variants={fadeInUp(0.7, 0.2)}
            className="text-lg sm:text-xl text-data-text-muted leading-relaxed"
          >
Uncover insights from raw data, track performance, and make smarter decisions with intuitive tools that bring clarity, focus, and growth.
          </motion.p>
        </AnimatedWrapper>

        <AnimatedWrapper
          variants={fadeInUp(0.9, 0.4)} // Globe fades in slightly later
          className="flex justify-center items-center"
        >
          <SpinningGlobe size={800} /> {/* Adjust size as needed */}
    
        </AnimatedWrapper>
      </div>
    </section>
  );
}

export default GlobalNetworkSection;
