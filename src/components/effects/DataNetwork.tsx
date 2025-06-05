// src/components/effects/DataNetwork.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number; // Velocity in x
  vy: number; // Velocity in y
}

interface Line {
  id: string;
  d1: Dot;
  d2: Dot;
  opacity: number;
}

interface DataNetworkProps {
  dotCount?: number;
  dotColor?: string;
  dotRadius?: number;
  lineColor?: string;
  lineWidth?: number;
  connectionDistance?: number;
  className?: string;
  speedMultiplier?: number;
}

const DataNetwork: React.FC<DataNetworkProps> = ({
  dotCount = 30,
  dotColor = 'rgba(255,255,255,0.4)',
  dotRadius = 1.5,
  lineColor = 'rgba(255,255,255,0.1)',
  lineWidth = 0.5,
  connectionDistance = 130,
  className = '',
  speedMultiplier = 1.0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]); // Use ref for animation data
  const animationIdRef = useRef<number | undefined>(undefined);
  
  const [renderTrigger, setRenderTrigger] = useState(0); // Simple counter to trigger renders
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Effect to get container dimensions and update on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize dots when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const initialDots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      initialDots.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5 * speedMultiplier,
        vy: (Math.random() - 0.5) * 0.5 * speedMultiplier,
      });
    }
    dotsRef.current = initialDots;
    setRenderTrigger(prev => prev + 1); // Trigger initial render
  }, [dotCount, dimensions, speedMultiplier]);

  // Animation loop
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || dotsRef.current.length === 0) {
      return;
    }

    const animate = () => {
      // Update dots in ref (no state update)
      dotsRef.current = dotsRef.current.map(dot => {
        let newX = dot.x + dot.vx;
        let newY = dot.y + dot.vy;
        let newVx = dot.vx;
        let newVy = dot.vy;

        if (newX <= 0 || newX >= dimensions.width) {
          newVx *= -1;
          newX = Math.max(dotRadius, Math.min(newX, dimensions.width - dotRadius));
        }
        if (newY <= 0 || newY >= dimensions.height) {
          newVy *= -1;
          newY = Math.max(dotRadius, Math.min(newY, dimensions.height - dotRadius));
        }
        
        return { ...dot, x: newX, y: newY, vx: newVx, vy: newVy };
      });

      // Trigger re-render periodically for smooth animation
      setRenderTrigger(prev => prev + 1);
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [dimensions, dotRadius, speedMultiplier]); // Stable dependencies only

  // Calculate lines based on current dot positions
  const calculateLines = useCallback((): Line[] => {
    if (dotsRef.current.length === 0) return [];

    const newLines: Line[] = [];
    const dots = dotsRef.current;
    
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const d1 = dots[i];
        const d2 = dots[j];
        const distance = Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2));

        if (distance < connectionDistance) {
          newLines.push({
            id: `${d1.id}-${d2.id}`,
            d1,
            d2,
            opacity: Math.max(0, 1 - distance / connectionDistance),
          });
        }
      }
    }
    return newLines;
  }, [connectionDistance]);

  // Get current lines for rendering
  const lines = calculateLines();
  const dots = dotsRef.current;

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" aria-hidden="true">
        {/* Lines are drawn first so dots appear on top */}
        {lines.map(line => (
          <motion.line
            key={line.id}
            x1={line.d1.x}
            y1={line.d1.y}
            x2={line.d2.x}
            y2={line.d2.y}
            stroke={lineColor}
            strokeWidth={lineWidth}
            initial={{ opacity: 0 }}
            animate={{ opacity: line.opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        ))}
        {dots.map(dot => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dotRadius}
            fill={dotColor}
          />
        ))}
      </svg>
    </div>
  );
};

export default DataNetwork;