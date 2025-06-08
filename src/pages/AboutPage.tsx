// src/pages/AboutPage.tsx (or src/components/AboutPage.tsx)
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "../components/animations/variants"; // Adjust path
import AnimatedHighlightedWord from "../components/AnimatedHighlightedWord"; // Adjust path
import { AnimatedWrapper } from "../components/AnimatedWrapper"; // Adjust path
import FloatingImage from "../components/FloatingImage";
import aboutImage1 from "../assets/images/team-dynamic.jpg"
import aboutImage2 from "../assets/images/creative-process.jpg"
import aboutImage3 from "../assets/images/office-vibe.jpg"
import aboutImage4 from "../assets/images/data-visualization-abstract.jpg"
import Button from "../components/Button";


// Placeholder images - update these paths
// const aboutImage1 = "/images/about/team-dynamic.jpg";
// const aboutImage2 = "/images/about/creative-process.png";
// const aboutImage3 = "/images/about/office-vibe.jpg";
// const aboutImage4 = "/images/about/data-visualization-abstract.jpg"; // Another placeholder


function AboutPage() {
  return (
    <section className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center"> {/* Increased gap */}
          
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0"
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              A Story <br className="hidden sm:block" />
              <AnimatedHighlightedWord
                word="About "
                highlightColorClass="bg-yellow-300/50" // Example different highlight
                textColorClass="text-data-accent" // Ensure data-accent is defined
                className="mx-1"
              />
              Us
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We're a passionate team of innovators, strategists, and creators dedicated to transforming your challenges into impactful solutions. Discover how our blend of expertise and creativity can elevate your project to new heights.
            </motion.p>

        
          </AnimatedWrapper>

          {/* Right Column: Floating Images Area */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
            {/* Image 1 - Largest, slightly back */}
            <FloatingImage
              src={aboutImage1}
              alt="Dynamic team working"
              className="w-[60%] sm:w-[55%] md:w-[280px] lg:w-[320px] top-[5%] left-[10%] lg:left-[5%] z-10"
              rotate={-5}
              floatDelay={0.1}
              aspectRatio="aspect-[4/3]"
            />
            {/* Image 2 - Medium, middle ground */}
            <FloatingImage
              src={aboutImage2}
              alt="Creative process sketches"
              className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] right-[5%] lg:right-[10%] z-20"
              rotate={8}
              floatDelay={0.3}
              aspectRatio="aspect-square"
            />
            {/* Image 3 - Smaller, foreground */}
            <FloatingImage
              src={aboutImage3}
              alt="Modern office vibe"
              className="w-[40%] sm:w-[35%] md:w-[200px] lg:w-[220px] bottom-[10%] left-[25%] lg:left-[20%] z-30"
              rotate={-3}
              floatDelay={0.5}
              aspectRatio="aspect-[3/4]"
            />
            {/* Image 4 - Small accent image */}
             <FloatingImage
              src={aboutImage4}
              alt="Abstract data visualization"
              className="w-[30%] sm:w-[25%] md:w-[160px] lg:w-[180px] top-[65%] right-[20%] lg:right-[25%] z-0 opacity-80" // Behind others
              rotate={12}
              floatDelay={0.2}
              aspectRatio="aspect-video"
            />
          </div>
        </div>
      </div>
      {/* Subtle Background Blobs (optional, similar to Hero if you like the effect) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
    </section>
  );
}

export default AboutPage;

// Ensure AnimatedWrapper and AnimatedHighlightedWord components are correctly imported or defined.
// If AnimatedWrapper is in this file:
// interface AnimatedWrapperProps { children: React.ReactNode; variants?: any; className?: string; threshold?: number; triggerOnce?: boolean; [key: string]: any; }
// const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, variants, className, threshold = 0.1, triggerOnce = true, ...motionProps }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce, threshold });
//   useEffect(() => { if (inView) controls.start("visible"); else if (!triggerOnce) controls.start("hidden"); }, [controls, inView, triggerOnce]);
//   return (<motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...motionProps}>{children}</motion.div>);
// };
// ... and similar for AnimatedHighlightedWord if defined here.