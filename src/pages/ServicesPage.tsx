// src/pages/AboutPage.tsx (or src/components/AboutPage.tsx)
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../components/animations/variants"; // Adjust path
import AnimatedHighlightedWord from "../components/AnimatedHighlightedWord"; // Adjust path
import { AnimatedWrapper } from "../components/AnimatedWrapper"; // Adjust path
import FloatingImage from "../components/FloatingImage";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AnimatedSVG } from "../components/AnimatedAfricaSvg";
import shield from "../assets/images/shield.png";
import money from "../assets/images/money.png";
import ai from "../assets/images/robot.png";
import tree from "../assets/images/tree.png";
import lightBulb from "../assets/images/light-bulb.png";
import chess from "../assets/images/chess.png";




// Placeholder images - update these paths
// const aboutImage1 = "/images/about/team-dynamic.jpg";
// const aboutImage2 = "/images/about/creative-process.png";
// const aboutImage3 = "/images/about/office-vibe.jpg";
// const aboutImage4 = "/images/about/data-visualization-abstract.jpg"; // Another placeholder
interface ServicesInterface {
  title:string;
  description:string;
  image: string;
  reverse?:boolean;

}

function ServicesPage() {
  const navigate = useNavigate();

  const services:ServicesInterface[] = [
    {
      title: "Data Governance & Policy Advisory",
      description:"We design data governance frameworks, support regulatory compliance, and enable inter-agency interoperability. Our advisory services ensure secure, efficient, and compliant data practices across organizations, aligning operations with national and global standards while fostering collaboration and trust in data ecosystems.",
      image:shield,

    },

     {
      title: "Data Monetization Strategy & Execution",
      description:"We develop and execute data monetization strategies through direct models like licensing and marketplaces, and indirect gains from efficiency and optimization. Our approach includes building sector-specific and national data marketplaces that unlock economic value, drive innovation, and position data as a strategic asset for sustainable revenue generation.",
      image:money,
      reverse:true,

    },

    
     {
      title: "Advanced Analytics & AI Solutions",
      description:"We deliver advanced analytics and AI solutions, including predictive modeling, machine learning, and automation. From deploying generative and enterprise AI tools to crafting tailored use cases, we help organizations unlock insights, enhance decision-making, and drive innovation across both business and public sector environments.",
      image:ai,

    },

    {
      title: "Capacity Development & Institutional Training",
      description:"We offer capacity development and institutional training through customized programs for public officials, private sector teams, and executives. Our offerings include AI literacy, data stewardship certification, and digital transformation bootcamps empowering stakeholders with the skills needed to lead in a data-driven world.",
      image:tree,
      reverse:true,

    },

    {
      title: "Technology Talent Sourcing & Placement",
      description:"We provide technology talent sourcing and placement services, offering both contract and permanent hires. Our support includes talent strategy development for digital transformation, workforce readiness assessments, and capability-building initiatives,ensuring organizations have the skilled professionals needed to scale and succeed in the digital economy.",
      image:lightBulb,

    },
        {
      title: "Strategy Consulting & Execution Support",
      description:"We offer strategy consulting and execution support through organizational diagnostics, vision alignment, and performance planning. Our services include ecosystem mapping, stakeholder engagement, and program delivery, with a focus on business model innovation,especially for tech-driven sectors aiming to scale impact and drive sustainable growth.",
      image:chess,
      reverse:true,

    }
  ]

  return (
    <section className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0"
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              What &nbsp;
              <AnimatedHighlightedWord
                word="Services "
                highlightColorClass="bg-yellow-300/50" // Example different highlight
                textColorClass="text-data-accent" // Ensure data-accent is defined
                className="mx-1"
              />{" "}
              <br className="" />
              Do We Offer
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-lg sm:text-xl md:text-2xl text-data-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We deliver practical, end-to-end solutions across six
              interconnected service pillars
            </motion.p>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative lg:pl-0 pl-11 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            <AnimatedSVG
              animation="float"
              responsiveSizes={{
                mobile: 300,
                tablet: 500,
                desktop: 1000,
              }}
            />
          </div>
        </div>
        {
          services.map(service => (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          <div className={`relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 ${service?.reverse ? " lg:order-2" : " lg:order-1"} mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto`}>
            <FloatingImage
              src={service?.image}
              alt="shield"
              className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] bottom-[10%] left-[15%] lg:left-[10%] z-0"
              rotate={-3}
              floatDelay={0.5}
              borderHidden
              // aspectRatio="aspect-[2/4]"
            />
          </div>
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className={`text-center lg:text-left relative z- order-2   ${service?.reverse ? "lg:order-1" : "lg:order-2"} py-8 lg:py-0`}
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
             {service?.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
             {service?.description}
            </motion.p>
            <div className="flex justify-center lg:justify-start ">
              <Button
                label="Reach Out Now"
                onClick={() => navigate("/contact")}
              />
            </div>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
        </div>
          ))
        }






        
      </div>

      {/* Subtle Background Blobs (optional, similar to Hero if you like the effect) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
    </section>
  );
}

export default ServicesPage;

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
