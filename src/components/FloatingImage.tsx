// src/components/FloatingImage.tsx
import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
// Removed: import Image from 'next/image';

interface FloatingImageProps extends Omit<MotionProps, 'children'> {
  src: string;
  alt: string;
  className?: string;       // For positioning and initial size of the motion.div wrapper
  imageClassName?: string;  // For styling the <img> tag itself (e.g., object-cover, rounded)
  floatDelay?: number;
  initialX?: number | string;
  initialY?: number | string;
  rotate?: number | string | (number | string)[];
  aspectRatio?: string;   // e.g., 'aspect-square', 'aspect-video', 'aspect-[4/3]'
}

const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover', // Default to object-cover
  floatDelay = 0,
  initialX = 0,
  initialY = 0,
  rotate = 0,
  aspectRatio = 'aspect-square',
  ...rest
}) => {
  return (
    <motion.div
      className={`absolute rounded-xl md:rounded-2xl shadow-xl overflow-hidden ${aspectRatio} ${className}`}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.7, rotate: typeof rotate === 'number' ? rotate - 10 : 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: rotate,
        transition: { duration: 0.8, delay: floatDelay + 0.2, ease: [0.6, -0.05, 0.01, 0.99] },
      }}
      whileInView={{
        y: [0, -5, 0, 6, 0],
        x: [0, 3, 0, -4, 0],
        rotate: Array.isArray(rotate) ? rotate : [Number(rotate), Number(rotate) + 2, Number(rotate) - 1, Number(rotate)],
        transition: {
          duration: Math.random() * 6 + 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay: floatDelay + Math.random() * 2,
        }
      }}
      viewport={{ once: false, amount: 0.1 }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${imageClassName}`} // Ensure image fills its container
        loading="lazy" // Add native lazy loading
      />
      {/* Optional: Add a subtle overlay or border effect */}
      <div className="absolute inset-0 border-2 border-white/10 rounded-xl md:rounded-2xl pointer-events-none"></div>
    </motion.div>
  );
};

export default FloatingImage;