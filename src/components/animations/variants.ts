// src/components/animations/variants.ts

import type { Variants } from "framer-motion";

export const staggerContainer = (staggerVal = 0.15, delayChildrenVal = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerVal,
      delayChildren: delayChildrenVal,
    },
  },
});

export const fadeInUp = (durationVal = 0.6, delayVal = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationVal, delay: delayVal, ease: "easeOut" },
  },
});

export const fadeIn = (durationVal = 0.8, delayVal = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durationVal, delay: delayVal, ease: "easeOut" },
  },
});

export const scaleUp = (durationVal = 0.5, delayVal = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durationVal,
      delay: delayVal,
      type: "spring",
      stiffness: 120,
    },
  },
});


export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};


export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};


export const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 15 }
};

export const tapEffect = {
  scale: 0.95
};

// Add these to your animation variants definitions

export const blinkBackgroundVariant = {
  initial: {
    scaleY: 1, // Start fully open
    originY: 0.5, // Scale from the center vertically
  },
  blink: {
    scaleY: [1, 0.1, 1, 0.1, 1], // Open -> Almost Closed -> Open -> Almost Closed -> Open
    transition: {
      duration: 5, // Duration of one full blink sequence
      times: [0, 0.1, 0.2, 0.3, 1], // Timing for each step in scaleY
      // repeat: Infinity, // Make it blink continuously
      // repeatDelay: 3, // Wait 3 seconds between blinks
      // repeatType: "loop",
      ease: "easeInOut",
    },
  },
  // Variant for a single blink on load/hover (if preferred over continuous)
  singleBlink: {
    scaleY: [1, 0.05, 1],
    transition: {
      duration: 5,
      ease: "easeInOut",
      // delay: 0.5 // Delay after the word appears
    }
  }
};

export const textWithinBlinkVariant = {
  initial: { opacity: 1 },
  blinkOnce: {
    opacity: [1, 0.1, 1, 0.1, 1],
    transition: {
      duration: 5,
      times: [0, 0.1, 0.25, 0.35, 0.6],
      delay: 0.5,
      // repeat: Infinity,
      // repeatDelay: 3,
    },
  },
};

export const myBusinessWhatsAppNumber = "+2348076131828"

export const prefilledWhatsappMessage = "Hello! I'm interested in your digital agency services.";