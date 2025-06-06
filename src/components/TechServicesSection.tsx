// src/components/TechServicesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import TechServiceCard, { type TechService } from './TechServiceCard';
import { AnimatedWrapper } from './AnimatedWrapper';
import { fadeInUp, staggerContainer } from './animations/variants';

// Example Icons from react-icons/fi (Feather Icons) - replace with your choices
import { FiZap, FiDatabase, FiShield, FiLayers, FiCpu, FiCode, FiBarChart2 } from 'react-icons/fi';

// --- Example Service Data ---
const techServicesData: TechService[] = [
  {
    id: 'privacy',
    title: 'Data Privacy and Security',
    description: 'Utilize pre-trained foundational models or your own custom-trained models with robust security and privacy measures.',
    IconComponent: <FiShield size={40} className="text-tech-accent-glow" />,
    // visualElement: <CustomPrivacyVisual />, // If you have a more complex visual
    spanCols: 1, // Example: this card takes 1 column
  },
  {
    id: 'storage',
    title: 'Unlimited Object Storage',
    description: 'Leverage scalable S3-compatible cloud storage that dynamically grows with your data needs and requirements.',
    IconComponent: <FiDatabase size={40} className="text-tech-accent-glow" />,
    spanCols: 1,
  },
  {
    id: 'mlmodels',
    title: 'Pre-trained & Custom ML Models',
    description: 'Access a rich Model Hub or deploy your own models for diverse AI tasks. Streamline your ML workflows with ease.',
    IconComponent: <FiCpu size={40} className="text-tech-accent-glow" />,
    // Example of a more complex visual element (conceptual)
    visualElement: (
      <div className="w-full h-full flex flex-col items-start justify-end p-4 space-y-2 opacity-80">
        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg text-xs text-tech-text-secondary">
          <FiLayers size={14} className="text-tech-accent-glow-light" /> <span>Gcore ML Model Hub</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg text-xs text-tech-text-secondary">
          <FiDatabase size={14} className="text-tech-accent-glow-light" /> <span>Data Collection & Prep</span>
        </div>
         <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg text-xs text-tech-text-secondary">
          <FiBarChart2 size={14} className="text-tech-accent-glow-light" /> <span>Checking for anom...</span>
        </div>
      </div>
    ),
    spanCols: 1, // This card could span 2 columns if its visual is wide: lg:col-span-2
    spanRows: 1, // This card could span 2 rows if its visual is tall: lg:row-span-2
  },
  {
    id: 'autoscaling',
    title: 'Model Autoscaling',
    description: 'Set up intelligent autoscaling to handle load spikes efficiently. Pay only for the compute resources your models require.',
    IconComponent: <FiZap size={40} className="text-tech-accent-glow" />,
    // Example of a different visual - subtle background lines
    visualElement: (
        <div className="w-full h-full relative overflow-hidden">
            <FiZap size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-accent-glow opacity-20 animate-glow-pulse" />
            {/* Subtle circuit lines */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-tech-accent-glow/30"
                    initial={{ width: 0, left: `${20 + i*10}%` }}
                    animate={{ width: `${30 + Math.random()*30}%` }}
                    transition={{ duration: 1.5 + Math.random(), delay: i * 0.2 + 0.5, ease:'circOut' }}
                    style={{ top: `${20 + i * 15}%` }}
                />
            ))}
        </div>
    ),
    spanCols: 1,
  },
  {
    id: 'gpus',
    title: 'NVIDIA L40S GPUs',
    description: 'Boost model performance with the latest NVIDIA accelerators, perfect for GenAI and LLM inference tasks.',
    IconComponent: <FiCpu size={40} className="text-tech-accent-glow" />, // Placeholder, NVIDIA logo would be better
    visualElement: (
        <div className="w-full h-full flex flex-col items-center justify-end p-1 text-left opacity-80">
             <div className="p-2 mb-2 bg-tech-accent-glow/20 rounded-card-tech self-start">
                <img src="/path/to/nvidia-logo.svg" alt="NVIDIA" className="h-8 w-auto" /> {/* Replace with actual Nvidia logo */}
             </div>
            <pre className="bg-black/30 p-2 rounded-md text-[10px] sm:text-xs text-green-400 font-mono overflow-x-auto w-full">
{`class nvidiaL40s_gpu:
  def __init__(self, model, vram_size):
    self.model = model
    self.vram_size = vram_size
    self.cuda_cores = #cuda_cores`}
            </pre>
        </div>
    ),
    spanCols: 2, // This card will span two columns on large screens
  },
  // Add more services as needed
];

function TechServicesSection() {
  return (
    <section id="tech-services" className="py-20 md:py-28 bg-tech-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper variants={fadeInUp(0.6)} className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tech-text-primary tracking-tight">
            Advanced AI & ML Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-tech-text-secondary max-w-3xl mx-auto mt-4 leading-relaxed">
            Leverage our powerful infrastructure and tools to build, deploy, and scale your intelligent applications with unparalleled speed and efficiency.
          </p>
        </AnimatedWrapper>

        {/* Use a more flexible grid that allows for spanning */}
        <AnimatedWrapper
          variants={staggerContainer(0.15, 0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" // Base grid
        >
          {techServicesData.map((service) => (
            <TechServiceCard key={service.id} service={service} />
          ))}
        </AnimatedWrapper>
      </div>
    </section>
  );
}

export default TechServicesSection;