// src/components/TechServiceCard.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { type IconType } from 'react-icons'; // To type the icon prop

export interface TechService {
  id: string;
  title: string;
  description: string;
  IconComponent: React.ReactNode; // Can be a direct SVG or a component rendering an icon
  visualElement?: React.ReactNode; // For complex visuals like mockups or code snippets
  spanCols?: number; // For grid spanning (e.g., 1 or 2)
  spanRows?: number; // For grid spanning
}

interface TechServiceCardProps {
  service: TechService;
  className?: string;
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const TechServiceCard: React.FC<TechServiceCardProps> = ({ service, className = '' }) => {
  const colSpanClass = service.spanCols ? `lg:col-span-${service.spanCols}` : 'lg:col-span-1';
  const rowSpanClass = service.spanRows ? `lg:row-span-${service.spanRows}` : ''; // md:row-span- is also an option

  return (
    <motion.div
      variants={cardVariant}
      className={`relative ${colSpanClass} ${rowSpanClass} 
                  bg-tech-card-bg backdrop-blur-md border border-tech-card-border 
                  rounded-card-tech p-6 sm:p-8 shadow-card-tech-main 
                  flex flex-col overflow-hidden group
                  transition-all duration-300 ease-out hover:shadow-card-tech-hover hover:border-white/20 ${className}`}
    >
      {/* Optional: Subtle background gradient/pattern inside card */}
      <div className="absolute inset-0 bg-tech-card-gradient opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

      <div className="flex-shrink-0 mb-5 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-semibold text-tech-text-primary leading-tight">
          {service.title}
        </h3>
        {/* Icon is now part of visualElement or can be placed here */}
      </div>

      <p className="text-tech-text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      {/* Visual Element Area (Icon, Mockup, Code Snippet) */}
      <div className="mt-auto flex-shrink-0 h-40 sm:h-48 md:h-56 relative flex items-center justify-center">
        {/* This is where the prominent icon or more complex visual from the image goes */}
        {service.visualElement ? (
          service.visualElement
        ) : (
          <motion.div
            className="p-3 bg-tech-accent-glow/10 rounded-card-tech shadow-icon-glow shadow-tech-accent-glow animate-glow-pulse"
            // If using CSS var for shadow: style={{ '--tw-shadow-color': 'var(--color-tech-accent-glow)' } as React.CSSProperties}
          >
            {service.IconComponent}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TechServiceCard;