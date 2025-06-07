// src/components/SpinningGlobe.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Dot {
  id: number;
  cx: number; // Relative x (0 to 1)
  cy: number; // Relative y (0 to 1)
  r: number;  // Radius
  opacity: number;
  delay: number; // For animation
}

interface SpinningGlobeProps {
  dotCount?: number;
  globeColor?: string; // Color for the underlying sphere (can be transparent)
  dotColor?: string;
  glowColorStart?: string;
  glowColorMid?: string;
  glowColorEnd?: string;
  className?: string;
  size?: number; // Diameter of the globe in pixels
}

const SpinningGlobe: React.FC<SpinningGlobeProps> = ({
  dotCount = 300, // Adjust for density
  globeColor = 'rgba(30, 30, 60, 0.1)', // Very subtle dark blue for the sphere body
  dotColor = 'rgba(255, 255, 240,1)', // theme('colors.globe-dot') with opacity
  glowColorStart = 'var(--color-globe-glow-start, rgba(255, 190, 0, 0.6))',
  glowColorMid = 'var(--color-globe-glow-mid, rgba(255, 165, 0, 0.3))',
  glowColorEnd = 'var(--color-globe-glow-end, rgba(255, 140, 0, 0.05))',
  className = '',
  size = 400, // Default size
}) => {
  const sphereRadius = size / 2;

  const dots = useMemo(() => {
    const generatedDots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      // Generate points on a sphere using spherical coordinates, then project
      const phi = Math.acos(-1 + (2 * i) / dotCount); // Distributes points more evenly top to bottom
      const theta = Math.sqrt(dotCount * Math.PI) * phi; // Golden angle for spiral

      // Convert spherical to Cartesian (simple projection for 2D)
      // For a more "3D" look on a 2D plane, we can bias y and scale x
      const x = Math.sin(phi) * Math.cos(theta); // -1 to 1
      const y = Math.sin(phi) * Math.sin(theta); // -1 to 1 (represents depth/front-back for spinning)
      const z = Math.cos(phi);                   // -1 to 1 (represents top to bottom)

      // Project onto a 2D circle (cx, cy)
      // cx from x, cy from z (to make it look like a sphere from the side)
      // Scale x by y to give perspective (dots "further back" appear closer to center horizontally)
      const perspectiveFactor = (y + 1.5) / 2.5; // Range ~0.2 to 1, closer to 1 is "front"
      
      generatedDots.push({
        id: i,
        cx: 0.5 + (x * perspectiveFactor * 0.45), // 0.45 to keep within bounds
        cy: 0.5 + (z * 0.45),                   // 0.45 to keep within bounds
        r: Math.random() * 1 + 0.5,           // Radius 0.5 to 1.5
        opacity: (perspectiveFactor * 0.6) + 0.1, // Front dots more opaque (0.22 to 0.7)
        delay: Math.random() * 0.5,
      });
    }
    return generatedDots.sort((a,b) => a.opacity - b.opacity); // Draw less opaque dots first
  }, [dotCount]);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Atmospheric Glow - multiple layers for a softer, deeper effect */}
      <motion.div
        className="absolute inset-0 rounded-full animate-swing-gentle"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, ${glowColorStart} 0%, ${glowColorMid} 30%, ${glowColorEnd} 60%, transparent 75%)`,
          filter: 'blur(20px)', // Softer blur for atmosphere
        }}
      />
       <motion.div // Inner sharper glow
        className="absolute inset-0 rounded-full opacity-80 animate-swing-gentle"
        style={{
            top: '5%', height: '90%', // Slightly smaller for inner glow
            backgroundImage: `radial-gradient(circle at 50% 25%, ${glowColorStart} 0%, ${glowColorMid} 25%, transparent 55%)`,
            filter: 'blur(10px)',
        }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.7, 0.9, 0.7]}}
        transition={{duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
      />


      {/* Spinning Globe Container */}
      <motion.div
        className="w-full h-full animate-slow-spi" // Apply CSS spin animation
        style={{ perspective: '1000px' }} // For a slight 3D feel to the dots
      >
        {/* Optional: A very subtle sphere body */}
        {/* <div className="absolute inset-0 rounded-full" style={{background: globeColor}}></div> */}

        {/* <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
          {dots.map((dot) => (
            <motion.circle
              key={dot.id}
              cx={dot.cx * size}
              cy={dot.cy * size}
              r={dot.r}
              fill={dotColor}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: dot.opacity, scale: 5 }}
              transition={{ duration: 0.8, delay: dot.delay + 0.5, ease: "easeOut" }}
            />
          ))}
        </svg> */}

        <div className="grid grid-cols-10 sm:grid-cols-12 gap-9 sm:gap-1 h-full w-full">
      {Array.from({ length: 440 }).map((_, i) => (
        <div key={i} className={`w-2 h-2 sm:w-4 sm:h-4 bg-data-light-bg rounded-full`}></div>
      ))}
    </div>
      </motion.div>
    </div>
  );
};

export default SpinningGlobe;