// src/components/AnimatedHighlightedWord.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define blink animation variants (can be shared or local)
const blinkBackgroundVariant: Variants = {
  initial: { scaleY: 1, originY: 0.5 }, // Start fully open
  blinkOnce: {
    scaleY: [1, 0.05, 1, 0.05, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.1, 0.25, 0.35, 0.6],
      delay: 0.3, // Delay after the word appears for blink to start
    },
  },
};

const textWithinBlinkVariant: Variants = {
  initial: { opacity: 1 },
  blinkOnce: {
    opacity: [1, 0.1, 1, 0.1, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.1, 0.25, 0.35, 0.6],
      delay: 0.3, // Sync with background blink delay
    },
  },
};

interface AnimatedHighlightedWordProps {
  word: string;
  highlightColorClass?: string; // e.g., "bg-[#f4d29889]"
  textColorClass?: string;      // e.g., "text-data-accent"
  className?: string;           // For additional styling on the outer span
  // You can add more props for different animation variants per word if needed
}

const AnimatedHighlightedWord: React.FC<AnimatedHighlightedWordProps> = ({
  word,
  highlightColorClass = "bg-[#f4d29889]", // Default highlight
  textColorClass = "text-data-accent",    // Default text color for highlighted word
  className = "",
}) => {
  const blinkControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // A slight delay to ensure the word's container has faded in first
      const timer = setTimeout(() => {
        blinkControls.start("blinkOnce");
      }, 200); // Adjust this delay if needed
      return () => clearTimeout(timer);
    }
  }, [inView, blinkControls]);

  return (
    <motion.span // This span can be animated by a parent stagger if needed
      ref={ref}
      className={`relative inline-block ${className} ${highlightColorClass} transform -skew-x-6 -skew-y-3 rounded-xl`}
    >
      {/* <motion.span
        className={`absolute inset-0 ${highlightColorClass}  bg-[#f4d29889] transform -skew-x-6 -skew-y-3 px-1 rounded-lg sm:rounded-xl z-0`} // Adjusted padding and skew
        variants={blinkBackgroundVariant}
        initial="initial"
        animate={blinkControls}
      ></motion.span> */}
      <motion.span
        className={`relative z-10 ${textColorClass}`}
        variants={textWithinBlinkVariant}
        initial="initial"
        animate={blinkControls}
      >
        {word}
      </motion.span>
    </motion.span>
  );
};

export default AnimatedHighlightedWord;