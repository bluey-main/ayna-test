// src/components/AboutSection.tsx
import React from "react";
import { motion, } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Your scroll animation wrapper
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
} from "./animations/variants"; // Your animation variants
import {
  FiLayers, // For "Full-Stack" or "Comprehensive"
  FiMessageSquare, // For "Consultation" or "Strategy"
  FiBarChart2, // For "Analytics" or "Results"
  FiCpu, // For "AI-enabled" or "Technology"
//   FiGlobe, // For Web
} from "react-icons/fi";
import DataNetwork from "./effects/DataNetwork";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";

interface CapabilityTag {
  icon: React.ElementType;
  text: string;
  iconColor?: string;
}

const capabilities: CapabilityTag[] = [
  { icon: FiLayers, text: "Data Governance & Policy Advisory", iconColor: "text-blue-500" },
  { icon: FaMoneyBillAlt, text: "Data Monetization Strategy & Execution", iconColor: "text-purple-500" },
  { icon:  FiCpu, text: "Advanced Analytics & AI Solutions", iconColor: "text-green-500" },
  { icon: FiMessageSquare, text: "Capacity Development & Institutional Training", iconColor: "text-indigo-500" },
  { icon: FiBarChart2, text: "Technology Talent Sourcing & Placement", iconColor: "text-yellow-500" },
  { icon: MdOutlineSupportAgent, text: "Strategy Consulting & Execution Support", iconColor: "text-pink-500" },
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
      className="py-16 md:py-24 bg-about-bg relative overflow-hidden"
    >
      {/* Optional subtle background grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,200,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

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
              <motion.span variants={staticTextPartVariant}>Use </motion.span>
              <AnimatedHighlightedWord
                word="Innovation"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />
              <motion.span variants={staticTextPartVariant}> faster and more </motion.span>
              <AnimatedHighlightedWord
                word="efficiently"
                highlightColorClass="bg-green-300/60" // Example
                textColorClass="text-green-700"
                className="mx-1"
              />
              <motion.span variants={staticTextPartVariant}> with our expert </motion.span>
              <AnimatedHighlightedWord
                word="team!"
                highlightColorClass="bg-blue-300/60" // Example
                textColorClass="text-blue-700"
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
                  dotColor="rgba(245, 158, 11, 1)"
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
            <h3 className="text-2xl sm:text-3xl font-bold text-about-title mb-4 leading-snug">
              Our Agency drives innovation by reducing latency and boosting the
              performance of your applications.
            </h3>
            <p className="text-about-text text-base sm:text-lg leading-relaxed mb-8">
              It's particularly useful for projects that need immediate impact
              and minimal delay, like generative AI solutions, real-time
              analytics, and immersive user experiences. We help you deliver
              excellence, efficiently.
            </p>

            {/* Capability Tags */}
            <motion.div
              variants={staggerContainer(0.1, 0.2)} // Stagger the tags
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4"
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
                  className="bg-about-tag-bg border border-about-tag-border rounded-tag p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 cursor-default transition-all duration-200 ease-out"
                >
                  <cap.icon
                    size={18}
                    className={`${
                      cap.iconColor || "text-primary"
                    } flex-shrink-0`}
                  />
                  <span className="text-xs sm:text-sm font-medium text-about-tag-text">
                    {cap.text}
                  </span>
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
