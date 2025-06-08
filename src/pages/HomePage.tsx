// src/pages/HomePage.tsx
import React from 'react';
import HeroDataAnalytics from '../components/HeroDataAnalytics';
import AboutSection from '../components/AboutSection';
import TechServicesSection from '../components/TechServicesSection';
import GlobalNetworkSection from '../components/GlobalNetworkSection';

function HomePage() {

    // Replace with your actual WhatsApp number and desired pre-filled message
  return (
    <>
    
       <HeroDataAnalytics /> {/* Use the new Hero */}
       <TechServicesSection/>
       <AboutSection /> {/* Add the new section */}
       <GlobalNetworkSection /> {/* Add the new section */}
      {/* <PortfolioSectionV2 /> 
      <ServicesSection/>

       <FloatingWhatsAppButton 

          message={prefilledMessage}
        /> */}
    </>
  );
}

export default HomePage;