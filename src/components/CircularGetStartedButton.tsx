// src/components/CircularGetStartedButton.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import { FiArrowDown } from 'react-icons/fi'; // Arrow icon
import { FaWhatsapp } from 'react-icons/fa';
import { myBusinessWhatsAppNumber, prefilledWhatsappMessage } from './animations/variants';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';



const CircularGetStartedButton: React.FC = () => {
  const text = "• REACH OUT NOW • REACH OUT NOW • REACH OUT NOW  "; // Repeat for full circle, adjust as needed
  const radius = 45; // Radius of the text path
  const circleId = "getStartedCirclePath";

    const cleanPhoneNumber = myBusinessWhatsAppNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(prefilledWhatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    const navigate = useNavigate()
  

  return (
    <motion.a
      // href={whatsappUrl}
      onClick={() => navigate("/contact")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={'Chat with us on WhatsApp'}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(175, 255, 173, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      className="relative w-32 h-32 sm:w-36 sm:h-36 group bg-brand-yellow rounded-full flex items-center justify-center text-footer-bg font-bold shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-footer-accent-green-dark focus:ring-offset-2 focus:ring-offset-footer-bg"
    >
      {/* Circular Text using SVG */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-spin-around-slow overflow-visible" // Spinning animation
      >
        <defs>
          <path
            id={circleId}
            d={`M 50, 50 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <text dy="10" fontSize="8.5" letterSpacing="1.5" fill="currentColor" className="text-footer-bg"> {/* dy to adjust baseline */}
          <textPath href={`#${circleId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Arrow Icon in the Center */}
      <FiArrowRight className="text-footer-bg w-8 h-8 transform group-hover:-rotate-[50deg] ease-in-out duration-300" />
    </motion.a>
  );
};

export default CircularGetStartedButton;