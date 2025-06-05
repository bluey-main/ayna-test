// src/components/effects/FloatingGeometricShapes.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { gentleDrift } from './effectVariants';

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'triangle';
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
  initialRotate: number;
}

interface FloatingGeometricShapesProps {
  count?: number;
  colors?: string[]; // e.g., ['#FFD700', '#3B82F6', '#10B981']
  className?: string;
}

const FloatingGeometricShapes: React.FC<FloatingGeometricShapesProps> = ({
  count = 8,
  colors = ['rgba(255,255,255,0.1)', 'rgba(var(--color-primary-rgb),0.15)'],
  className = '',
}) => {
  const shapes = useMemo(() => {
    const newShapes: Shape[] = [];
    const shapeTypes: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle'];
    for (let i = 0; i < count; i++) {
      newShapes.push({
        id: i,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        size: Math.random() * 40 + 20, // 20px to 60px
        left: `${Math.random() * 90}%`, // Keep them from edges a bit
        top: `${Math.random() * 90}%`,
        duration: Math.random() * 10 + 10, // 10-20 seconds drift
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.2, // 0.2 to 0.5
        initialRotate: Math.random() * 90 - 45, // -45 to 45 deg
      });
    }
    return newShapes;
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: shape.left,
            top: shape.top,
            backgroundColor: shape.type !== 'triangle' ? shape.color : undefined,
            borderLeft: shape.type === 'triangle' ? `${shape.size / 2}px solid transparent` : undefined,
            borderRight: shape.type === 'triangle' ? `${shape.size / 2}px solid transparent` : undefined,
            borderBottom: shape.type === 'triangle' ? `${shape.size}px solid ${shape.color}` : undefined,
            borderRadius: shape.type === 'circle' ? '50%' : (shape.type === 'square' ? '4px' : undefined),
            opacity: shape.opacity,
            transform: `rotate(${shape.initialRotate}deg)`,
            filter: 'blur(1px)',
          }}
          variants={gentleDrift}
          animate="animate"
          custom={{
            xRange: [0, Math.random() * 20 - 10, Math.random() * -20 + 10, 0],
            yRange: [0, Math.random() * -20 + 10, Math.random() * 20 - 10, 0],
            duration: shape.duration,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};
export default FloatingGeometricShapes;