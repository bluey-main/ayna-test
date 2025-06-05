// src/components/effects/FloatingBubbles.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Bubble {
  id: number;
  size: number;
  left: string;
  duration: number;
  delay: number;
  color: string; // e.g., 'rgba(0,150,255,0.3)'
}

interface FloatingBubblesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({
  count = 20,
  colors = ['rgba(0,150,255,0.2)', 'rgba(0,200,200,0.2)'],
  className = '',
}) => {
  const bubbles = useMemo(() => {
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 50 + 20, // 20px to 70px
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 8, // 8-18 seconds
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return newBubbles;
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            backgroundColor: bubble.color,
            filter: 'blur(5px)',
          }}
          initial={{ y: '110%', opacity: 0, x: Math.random() * 40 - 20 }} // Start below, slightly offset x
          animate={{ y: '-20%', opacity: [0, 1, 1, 0], x: Math.random() * 60 - 30 }} // Rise up and sway
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            opacity: { times: [0, 0.1, 0.9, 1] } // Fade in at start, fade out at end
          }}
        />
      ))}
    </div>
  );
};
export default FloatingBubbles;