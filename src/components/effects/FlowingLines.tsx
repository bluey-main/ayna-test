// src/components/effects/FlowingLines.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FlowingLine {
  id: number;
  startY: string;
  duration: number;
  delay: number;
  width: number;
  opacity: number;
  color: string;
}

interface FlowingLinesProps {
  count?: number;
  colors?: string[]; // e.g., ['rgba(255,255,255,0.1)', 'rgba(var(--color-accent-glow-start-rgb),0.2)']
  className?: string;
}

const FlowingLines: React.FC<FlowingLinesProps> = ({
  count = 10,
  colors = ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.1)'],
  className = '',
}) => {
  const lines = useMemo(() => {
    const newLines: FlowingLine[] = [];
    for (let i = 0; i < count; i++) {
      newLines.push({
        id: i,
        startY: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10, // 10-20 seconds
        delay: Math.random() * 5,
        width: Math.random() * 2 + 0.5, // 0.5px to 2.5px
        opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return newLines;
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-full" // Lines flow vertically
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal start
            width: `${line.width}px`,
            backgroundColor: line.color,
            opacity: line.opacity,
          }}
          initial={{ y: '-100%' }} // Start above the view
          animate={{ y: '100%' }}    // End below the view
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            repeatType: 'loop', // Loop from the start
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
export default FlowingLines;