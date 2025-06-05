// src/components/effects/ParticleBackground.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  id: number;
  size: number;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

const Particle: React.FC<ParticleProps> = ({ size, left, top, animationDuration, animationDelay, opacity }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        opacity: 0, // Start invisible, will be animated by Framer Motion
      }}
      animate={{
        opacity: [0, opacity, opacity * 0.7, opacity * 0.4, 0], // Fade in, twinkle, fade out
        scale: [0.5, 1, 0.8, 1.1, 0.5], // Subtle scale animation
        x: [0, Math.random() * 10 - 5, Math.random() * -10 + 5, 0], // Slight horizontal drift
        y: [0, Math.random() * 10 - 5, Math.random() * -10 + 5, 0], // Slight vertical drift
      }}
      transition={{
        duration: parseFloat(animationDuration),
        delay: parseFloat(animationDelay),
        repeat: Infinity,
        repeatType: "loop", // Loop the twinkle and drift
        ease: "easeInOut",
      }}
    />
  );
};

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50, // Adjust number of particles
  className = '',
}) => {
  const particles = useMemo(() => {
    const newParticles: ParticleProps[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 2 + 0.5, // Particle size between 0.5px and 2.5px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`, // Duration between 5-10s
        animationDelay: `${Math.random() * 5}s`,      // Delay up to 5s
        opacity: Math.random() * 0.4 + 0.1,          // Opacity between 0.1 and 0.5
      });
    }
    return newParticles;
  }, [particleCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
};

export default ParticleBackground;