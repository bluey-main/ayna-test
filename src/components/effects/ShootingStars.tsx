// src/components/effects/ShootingStars.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  top: string;
  left: string; // Will start off-screen (e.g. -10%)
  duration: number;
  delay: number;
  length: number; // Length of the star's tail
  angle: number; // Angle of shooting
}

interface ShootingStarsProps {
  count?: number;
  color?: string;
  className?: string;
}

const ShootingStars: React.FC<ShootingStarsProps> = ({
  count = 5,
  color = 'rgba(255,255,255,0.7)',
  className = '',
}) => {
  const stars = useMemo(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 80}%`, // Start within top 80%
        left: '-10%', // Start off-screen to the left
        duration: Math.random() * 2 + 1, // 1-3 seconds for a quick streak
        delay: Math.random() * 10 + 2,  // Appear at random intervals
        length: Math.random() * 80 + 50, // 50px to 130px tail
        angle: Math.random() * 10 + 15, // Shoot downwards diagonally (15-25 degrees from horizontal)
      });
    }
    return newStars;
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.length}px`,
            height: '1.5px', // Thin line for the star
            background: `linear-gradient(to right, transparent, ${color})`,
            transform: `rotate(${star.angle}deg)`,
            transformOrigin: 'left center',
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: '120vw', opacity: [0, 1, 0] }} // Move across screen and fade out
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear', // Constant speed
            opacity: { times: [0, 0.1, 0.9, 1], duration: star.duration} // Quick fade in/out
          }}
        />
      ))}
    </div>
  );
};
export default ShootingStars;