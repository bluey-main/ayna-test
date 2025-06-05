// src/components/effects/InteractiveAuroraBackground.tsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface InteractiveAuroraBackgroundProps {
  className?: string;
  color1?: string; // e.g., 'rgba(106, 13, 173, 0.3)' // primary
  color2?: string; // e.g., 'rgba(59, 130, 246, 0.3)' // data-primary
  color3?: string; // e.g., 'rgba(245, 158, 11, 0.2)'// data-accent
}

const InteractiveAuroraBackground: React.FC<InteractiveAuroraBackgroundProps> = ({
  className = '',
  color1 = 'rgba(106, 13, 173, 0.2)', // Default to a purple
  color2 = 'rgba(59, 130, 246, 0.2)',  // Default to a blue
  color3 = 'rgba(245, 158, 11, 0.15)', // Default to an amber
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const springConfig = { damping: 40, stiffness: 200, mass: 2 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }
    };
    const currentRef = containerRef.current; // Capture current ref value
    currentRef?.addEventListener('mousemove', handleMouseMove);
    return () => currentRef?.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]); // Only run when mouseX/mouseY instances change (should be once)

  // Create dynamic background string
  // Transform motion values into percentage strings for backgroundPosition
  const bgPosX1 = useTransform(smoothMouseX, (val) => `${(val / (containerRef.current?.offsetWidth || 1)) * 100}%`);
  const bgPosY1 = useTransform(smoothMouseY, (val) => `${(val / (containerRef.current?.offsetHeight || 1)) * 100}%`);

  // For the second gradient, let's invert or offset the mouse effect
  const bgPosX2 = useTransform(smoothMouseX, (val) => `${100 - (val / (containerRef.current?.offsetWidth || 1)) * 100}%`);
  const bgPosY2 = useTransform(smoothMouseY, (val) => `${100 - (val / (containerRef.current?.offsetHeight || 1)) * 100}%`);
  
  const bgPosX3 = useTransform(smoothMouseX, (val) => `${50 + (val / (containerRef.current?.offsetWidth || 1) - 0.5) * 50}%`);
  const bgPosY3 = useTransform(smoothMouseY, (val) => `${50 + (val / (containerRef.current?.offsetHeight || 1) - 0.5) * 50}%`);


  // Using motion values directly in the style object for backgroundPosition
  // This requires Framer Motion to interpolate these values.
  // Note: Direct interpolation of complex background strings is tricky.
  // It's often better to animate individual gradient layers or use CSS Houdini if possible.
  // For this, we'll animate opacity and have a base gradient that's always there.
  // A simpler approach for direct Framer Motion style is to animate properties like `x`, `y` of pseudo-elements.

  // This is a simplified version. A true multi-layered aurora with smooth mouse follow is complex.
  // Here we use fixed gradients that pulse and one layer that subtly reacts to mouse.

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* Base static-ish aurora layer */}
       <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, ${color1} 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${color2} 0%, transparent 50%)`,
          backgroundSize: '150% 150%, 200% 200%',
          filter: 'blur(60px)', // More blur for aurora
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']}}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'mirror'}}
      />
      {/* Mouse reactive layer (subtle) */}
      <motion.div
        className="absolute inset-0"
        style={{
            // Using motion values to generate background position for one gradient layer
            // This is a bit experimental with Framer Motion's style prop.
            // It might be better to transform pseudo-elements or separate divs.
            // For now, let's try to animate opacity and size based on mouse.
            // This gradient will be static, but its container will animate.
            backgroundImage: `radial-gradient(circle, ${color3} 0%, transparent 60%)`,
            width: '150%', // Large to allow movement
            height: '150%',
            filter: 'blur(80px)',
            opacity: 0.7,
            // For direct style manipulation, x and y are better for Framer Motion
            // We'll use x and y on the motion.div itself
        }}
        // Animate x and y based on smoothed mouse position
        // This will move the entire gradient div
        animate={{
            x: useTransform(smoothMouseX, (v) => (v / (containerRef.current?.offsetWidth || 1) -0.5) * -100), // Move opposite to mouse slightly
            y: useTransform(smoothMouseY, (v) => (v / (containerRef.current?.offsetHeight || 1) -0.5) * -100),
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </div>
  );
};
export default InteractiveAuroraBackground;