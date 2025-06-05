// src/components/effects/effectVariants.ts (New file or add to existing variants)
import { type Variants } from 'framer-motion';

export const gentleDrift: Variants = {
  animate: (custom: { xRange: number[], yRange: number[], duration: number, delay?: number }) => ({
    x: custom.xRange, // e.g., [0, 5, -5, 0]
    y: custom.yRange, // e.g., [0, -5, 5, 0]
    transition: {
      duration: custom.duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: custom.delay || 0,
    }
  })
};

export const fadeInOutLoop: Variants = {
  animate: (custom: { duration: number, delay?: number, minOpacity?: number, maxOpacity?: number }) => ({
    opacity: [custom.minOpacity ?? 0, custom.maxOpacity ?? 0.8, custom.minOpacity ?? 0],
    transition: {
      duration: custom.duration,
      delay: custom.delay || 0,
      repeat: Infinity,
      repeatType: "loop", // Loop from start after finishing
      ease: "easeInOut"
    }
  })
};