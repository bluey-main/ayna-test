// src/components/effects/GlitchTextEffect.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextEffectProps {
  text: string;
  interval?: number; // How often to glitch
  className?: string;
}

const GlitchTextEffect: React.FC<GlitchTextEffectProps> = ({
  text,
  interval = 3000, // Glitch every 3 seconds
  className = '',
}) => {
  const [glitchData, setGlitchData] = useState({ text, active: false });

  useEffect(() => {
    const glitchChars = "!@#$%^&*()+=-[];,./{}|:<>?~";
    let timeoutId: NodeJS.Timeout;

    const triggerGlitch = () => {
      setGlitchData({ text: text, active: true });

      let iterations = 0;
      const maxIterations = Math.floor(Math.random() * 5) + 3; // 3-7 quick changes
      const shuffleInterval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(shuffleInterval);
          setGlitchData({ text: text, active: false }); // Reset to original
        } else {
          setGlitchData({
            text: text.split("")
                       .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
                       .join(""),
            active: true,
          });
          iterations++;
        }
      }, 50); // Speed of character shuffle during glitch

      timeoutId = setTimeout(triggerGlitch, interval + Math.random() * 1000); // Next glitch
    };

    timeoutId = setTimeout(triggerGlitch, interval + Math.random() * 2000); // Initial delay

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, interval]);

  const letters = glitchData.text.split("");

  return (
    <span className={`inline-block ${className}`} aria-label={text} role="text">
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}-${glitchData.active}`} // Key change forces remount on glitch state change for some effects
          initial={{ opacity: 0.8, x: 0 }}
          animate={{
            opacity: glitchData.active ? (Math.random() > 0.3 ? 1 : 0.6) : 1,
            x: glitchData.active ? Math.random() * 4 - 2 : 0,
            color: glitchData.active ? ['#FF00FF', '#00FFFF', '#FFFF00', text ? 'inherit' : '#FF00FF' ][Math.floor(Math.random()*4)] : 'inherit'
          }}
          transition={{ duration: 0.05, type: 'spring', stiffness: 500 }}
          className="inline-block"
          aria-hidden="true"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};
export default GlitchTextEffect;