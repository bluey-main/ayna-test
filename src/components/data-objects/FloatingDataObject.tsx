// src/components/data-objects/FloatingDataObject.tsx
import React from 'react';
import { motion,type MotionProps } from 'framer-motion';

interface FloatingDataObjectProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  floatDelay?: number; // For staggered floating
  initialX?: number | string;
  initialY?: number | string;
}

const FloatingDataObject: React.FC<FloatingDataObjectProps> = ({
  children,
  className = '',
  floatDelay = 0,
  initialX = 0,
  initialY = 0,
  ...rest
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.5 }}
      animate={{
        opacity: 1,
        x: 0, // Animate to final position defined by Tailwind layout
        y: 0,
        scale: 1,
        transition: { duration: 0.8, delay: floatDelay + 0.3, ease: [0.6, -0.05, 0.01, 0.99] },
      }}
      // Add a continuous, subtle floating animation to the object itself
      whileInView={{ // Ensure this animation only runs when visible
        y: [0, -8, 0, 5, 0], // Simple up and down float
        x: [0, 3, 0, -4, 0], // Simple side to side float
        rotate: [0, 1, -1, 0.5, 0],
        transition: {
          duration: Math.random() * 5 + 8, // Random duration between 8-13s
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay: floatDelay + Math.random() * 2, // Stagger the start of floating
        }
      }}
      viewport={{ once: false, amount: 0.2 }} // Keep animating when in view
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Example Data Objects
export const DataCircleDots: React.FC<{ size?: string; colorClass?: string }> = ({ size = "w-24 h-24", colorClass = "bg-data-secondary" }) => (
  <div className={`${size} ${colorClass} rounded-full p-3 sm:p-4 flex items-center justify-center opacity-80 shadow-lg`}>
    <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/70 rounded-full"></div>
      ))}
    </div>
  </div>
);

export const DataBarSegments: React.FC<{ size?: string; colorClass?: string }> = ({ size = "w-20 h-32", colorClass = "bg-data-primary" }) => (
  <div className={`${size} ${colorClass} rounded-2xl p-2 sm:p-3 flex flex-col justify-end space-y-1 sm:space-y-1.5 opacity-80 shadow-lg`}>
    <div className="h-1/4 w-full bg-white/60 rounded-sm"></div>
    <div className="h-1/2 w-full bg-white/80 rounded-sm"></div>
    <div className="h-1/3 w-full bg-white/70 rounded-sm"></div>
  </div>
);

export const DataConcentricCircles: React.FC<{ size?: string; colorClass?: string }> = ({ size = "w-28 h-28", colorClass = "border-data-accent" }) => (
  <div className={`${size} relative bg-transparent opacity-80 `}>
    {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
      <div
        key={i}
        className={`absolute inset-0 m-auto border-2 ${colorClass} rounded-full opacity-${100 - i*20}`}
        style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
      ></div>
    ))}
  </div>
);

export const DataPillShape: React.FC<{ width?: string; height?: string; colorClass?: string }> = ({ width = "w-48", height = "h-24", colorClass = "bg-data-primary" }) => (
    <div className={`${width} ${height} ${colorClass} rounded-full opacity-80 shadow-lg`}></div>
);


export default FloatingDataObject;