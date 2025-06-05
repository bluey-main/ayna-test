// src/components/effects/PulsingCircles.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeInOutLoop } from './effectVariants'; // Assuming you have this

interface Circle {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  color: string;
  maxOpacity: number;
}

interface PulsingCirclesProps {
  count?: number;
  colors?: string[]; // e.g., ['rgba(0,255,0,0.3)', 'rgba(0,150,255,0.3)']
  className?: string;
}

const PulsingCircles: React.FC<PulsingCirclesProps> = ({
  count = 15,
  colors = ['rgba(255,255,255,0.2)', 'rgba(var(--color-accent-glow-start-rgb),0.3)'],
  className = '',
}) => {
  const circles = useMemo(() => {
    const newCircles: Circle[] = [];
    for (let i = 0; i < count; i++) {
      newCircles.push({
        id: i,
        size: Math.random() * 30 + 10, // 10px to 40px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2, // 2-5 seconds
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        maxOpacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
      });
    }
    return newCircles;
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: circle.left,
            top: circle.top,
            backgroundColor: circle.color,
            filter: 'blur(3px)', // Soften the circles
          }}
          variants={fadeInOutLoop}
          animate="animate"
          custom={{ duration: circle.duration, delay: circle.delay, maxOpacity: circle.maxOpacity }}
        />
      ))}
    </div>
  );
};
export default PulsingCircles;