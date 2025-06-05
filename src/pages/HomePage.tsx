// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero';
import PortfolioSectionV2 from '../components/PortfolioSectionV2';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import ServicesSection from '../components/ServicesSection';
import HeroDataAnalytics from '../components/HeroDataAnalytics';
import AboutSection from '../components/AboutSection';

function HomePage() {

    // Replace with your actual WhatsApp number and desired pre-filled message
  const prefilledMessage = "Hello! I'm interested in your digital agency services.";
  return (
    <>
       <HeroDataAnalytics /> {/* Use the new Hero */}
       <AboutSection /> {/* Add the new section */}
      {/* <PortfolioSectionV2 /> 
      <ServicesSection/>

       <FloatingWhatsAppButton 

          message={prefilledMessage}
        /> */}
    </>
  );
}

export default HomePage;