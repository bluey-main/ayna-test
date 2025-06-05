// src/components/effects/AnimatedGradientBackground.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientBackgroundProps {
  gradientColors?: {
    topLeft: string; // e.g. var(--color-accent-glow-start)
    bottomRight: string; // e.g. var(--color-primary)
    topRight?: string; // e.g. var(--color-accent-glow-end)
    bottomLeft?: string; // e.g. transparent
  };
  className?: string;
  opacity?: number;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  gradientColors = {
    topLeft: 'var(--color-accent-glow-start, rgba(255,100,0,0.6))',
    bottomRight: 'var(--color-primary, rgba(106,13,173,0.6))',
    topRight: 'var(--color-accent-glow-end, rgba(230,0,0,0.1))',
    bottomLeft: 'transparent'
  },
  className = '',
  opacity = 0.6,
}) => {
  return (
    <motion.div
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, ${gradientColors.topLeft} 0%, ${gradientColors.topRight} 70%), radial-gradient(circle at 70% 80%, ${gradientColors.bottomRight} 0%, ${gradientColors.bottomLeft} 60%)`,
        backgroundSize: '200% 200%, 180% 180%', // Different sizes for more parallax
        opacity: opacity,
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 25, // Slower, more ambient
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror"
      }}
    />
  );
};
export default AnimatedGradientBackground;