// src/components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Your scroll animation wrapper
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
} from "./animations/variants"; // Your animation variants

import DataNetwork from "./effects/DataNetwork";
import { FaGlobeAfrica, FaSearch } from "react-icons/fa";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import GridPattern from "./GridPattern";
import { RiFocus3Line } from "react-icons/ri";
import { GiSpring } from "react-icons/gi";

interface CapabilityTag {
  icon: React.ElementType;
  text: string;
  iconColor?: string;
  description?: string;
}

const capabilities: CapabilityTag[] = [
  {
    icon: FaSearch,
    text: "Integrated Expertise",
    iconColor: "text-blue-500",
    description:
      "We blend strategy, data, technology, and talent under one roof.",
  },
  {
    icon: FaGlobeAfrica,
    text: "Local Insight + Global Best Practice",
    iconColor: "text-purple-500",
        description:
      "We are deeply rooted in Africa and globally informed.",
  },
  {
    icon: RiFocus3Line,
    text: "Execution-Focused",
    iconColor: "text-green-500",
         description:
      "Our work goes beyond strategy decks; we drive implementation, measurement, and outcomes.",
  },
  {
    icon: GiSpring,
    text: "Cross-Sectoral Versatility",
    iconColor: "text-indigo-500",
     description:
      "From fintech to government, investment groups to donor agencies, we navigate diverse institutional contexts with ease.",
  },

  // Add more or adjust to your agency's core offerings
];

// const cardContentVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
//   },
// };

const tagVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};
const staticTextPartVariant = fadeInUp(0.7);

function AboutSection() {
  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-data-dark-bg relative overflow-hidden"
    >
      <GridPattern />

      {/* Optional subtle background grid pattern */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="mb-10 md:mb-28 text-center lg:px-48"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>
              {" "}
              Why Choose{" "}
            </motion.span>

            <AnimatedHighlightedWord
              word="AYNA"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <br />
            <motion.span variants={staticTextPartVariant}>
              {" "}
              For Your{" "}
            </motion.span>
            <AnimatedHighlightedWord
              word="Partnership"
              highlightColorClass="bg-red-200/40" // Example different highlight
              textColorClass="text-red-500"
              className="mx-1"
            />
          </motion.h1>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Visual Card */}
          <AnimatedWrapper
            variants={fadeInLeft}
            className="relative aspect-[4/5] sm:aspect-square lg:aspect-[1]"
          >
            <motion.div
              className="absolute inset-0 bg-about-card-dark-b rounded-3.5xl shadow-card-abot overflow-hidden p-6 sm:p-8 flex flex-col justify-end"
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              {/* Abstract Animated Background with Particles */}
              <div className="absolute inset-0 z-0">
                {" "}
                {/* Container for gradient and particles */}
                {/* <motion.div // Gradient Background
                  className="absolute inset-0 opacity-60" // Ensure this is behind particles if particles are not transparent
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, var(--color-accent-glow-start) 0%, var(--color-accent-glow-end) 70%), radial-gradient(circle at 70% 80%, var(--color-primary) 0%, transparent 60%)`,
                    backgroundSize: '200% 200%, 150% 150%',
                  }}
                  animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "mirror"
                  }}
                /> */}
                {/* Option 2: Flowing Lines */}
                {/* <FlowingLines count={15} colors={['rgba(255,255,255,0.5)', 'rgb(237, 50, 56)']} className=" -z-10"/> */}
                {/* Option 3: Pulsing Circles */}
                {/* <PulsingCircles 
                  count={15}
                  colors={["rgba(255,255,255,0.5)", "rgb(237, 50, 56)"]}
                  className=" -z-10"
                /> */}
                {/* Option 5: Data Network */}
                <DataNetwork
                  dotCount={13}
                  dotColor="rgba(255, 255, 255, 1)"
                  lineColor="rgba(245, 158, 11, 1)"
                  connectionDistance={250}
                  speedMultiplier={6} // Make dots move 50% faster than default
                  dotRadius={6}
                  lineWidth={2}
                  //   className="opacity-70" // Overall opacity for the effect
                />
                {/* <ParticleBackground particleCount={470} className="opacity-80" />  */}
              </div>
            </motion.div>
          </AnimatedWrapper>

          {/* Right Text Content */}
          <AnimatedWrapper variants={fadeInRight} className="py-4">
            <motion.h3 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-2xl sm:text-3xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>
                {" "}
                We don&apos;t just{" "}
              </motion.span>

              <AnimatedHighlightedWord
                word="strategize"
                highlightColorClass="bg-[#0d8234]/50" // Example different highlight
                textColorClass="text-[#07DF4F]"
                className="mx-1"
              />

              <motion.span variants={staticTextPartVariant}>
                {" "}
                we deliver results that{" "}
              </motion.span>
              <AnimatedHighlightedWord
                word="redefine"
                highlightColorClass="bg-[#0d8234]/50" // Example different highlight
                textColorClass="text-[#07DF4F]"
                className="mx-1"
              />

              <motion.span variants={staticTextPartVariant}>
                {" "}
                what&apos;s possible.{" "}
              </motion.span>
            </motion.h3>

            {/* <p className="text-about-text text-base sm:text-lg leading-relaxed mb-8">
              It's particularly useful for projects that need immediate impact
              and minimal delay, like generative AI solutions, real-time
              analytics, and immersive user experiences. We help you deliver
              excellence, efficiently.
            </p> */}

            {/* Capability Tags */}
            <motion.div
              variants={staggerContainer(0.1, 0.2)} // Stagger the tags
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4"
            >
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.text}
                  variants={tagVariants} // Use a springy scale-up for tags
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  }}
                  className="bg-about-tag-b  border border-about-tag-border rounded-tag p-3 sm:p-4 flex items-center space-x-3 sm:space-x-5 cursor-default transition-all duration-200 ease-out"
                >
                  <cap.icon
                    size={28}
                    className={`${
                      cap.iconColor || "text-primary"
                    } flex-shrink-0`}
                  />
                  <div className="flex-col gap-y-4 items-center ">
                    <p className="text-lg sm:text-lg font-bold text-data-text-main">
                      {cap.text}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-data-text-muted sm:w-[80%]">
                      {cap?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
