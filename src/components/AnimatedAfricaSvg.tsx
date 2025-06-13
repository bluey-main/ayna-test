import React from 'react';

// Animation type definitions
type AnimationType = 
  | 'bounce' 
  | 'pulse' 
  | 'spin' 
  | 'swing' 
  | 'shake' 
  | 'float' 
  | 'glow' 
  | 'none';

type AnimationSpeed = 'slow' | 'normal' | 'fast';

// Responsive size configuration
interface ResponsiveSizes {
  /** Size for mobile devices (< 640px) */
  mobile?: number | string;
  /** Size for tablet devices (640px - 1024px) */
  tablet?: number | string;
  /** Size for desktop devices (> 1024px) */
  desktop?: number | string;
}

// Component props interface
interface AnimatedSVGProps {
  /** Animation type to apply */
  animation?: AnimationType;
  /** Animation speed */
  speed?: AnimationSpeed;
  /** Size of the SVG (default fallback) */
  size?: number | string;
  /** Responsive sizes for different screen sizes */
  responsiveSizes?: ResponsiveSizes;
  /** Enable automatic responsive sizing */
  autoResponsive?: boolean;
  /** Custom className for additional styling */
  className?: string;
  /** Fill color of the SVG */
  fillColor?: string;
  /** Whether animation should pause on hover */
  pauseOnHover?: boolean;
  /** Custom CSS properties */
  style?: React.CSSProperties;
  /** Click handler */
  onClick?: () => void;
  /** Maximum width constraint */
  maxWidth?: number | string;
  /** Minimum width constraint */
  minWidth?: number | string;
}

export const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  animation = 'bounce',
  speed = 'normal',
  size = 200,
  responsiveSizes,
  autoResponsive = true,
  className = '',
  fillColor = '#fccd42',
  pauseOnHover = false,
  style,
  onClick,
  maxWidth,
  minWidth
}) => {
  // Animation duration mapping
  const getDuration = (speed: AnimationSpeed): string => {
    switch (speed) {
      case 'slow': return '3s';
      case 'fast': return '0.5s';
      default: return '1.5s';
    }
  };

  // Generate animation CSS class
  const getAnimationClass = (): string => {
    if (animation === 'none') return '';
    const pauseClass = pauseOnHover ? 'pause-on-hover' : '';
    return `animate-${animation} ${pauseClass}`.trim();
  };

  // Generate responsive size CSS
  const getResponsiveSizeCSS = (): string => {
    const baseSize = typeof size === 'number' ? `${size}px` : size;
    
    // Default responsive sizes when autoResponsive is enabled
    const defaultResponsive = autoResponsive ? {
      mobile: typeof size === 'number' ? `${Math.max(size * 0.6, 80)}px` : '80px',
      tablet: typeof size === 'number' ? `${Math.max(size * 0.8, 120)}px` : '120px',
      desktop: baseSize
    } : {};

    // Merge with custom responsive sizes
    const finalResponsive = { ...defaultResponsive, ...responsiveSizes };

    let css = `
      .responsive-svg {
        width: ${baseSize};
        height: ${baseSize};
      }
    `;

    // Add responsive breakpoints
    if (finalResponsive.mobile) {
      css += `
        @media (max-width: 639px) {
          .responsive-svg {
            width: ${typeof finalResponsive.mobile === 'number' ? `${finalResponsive.mobile}px` : finalResponsive.mobile};
            height: ${typeof finalResponsive.mobile === 'number' ? `${finalResponsive.mobile}px` : finalResponsive.mobile};
          }
        }
      `;
    }

    if (finalResponsive.tablet) {
      css += `
        @media (min-width: 640px) and (max-width: 1023px) {
          .responsive-svg {
            width: ${typeof finalResponsive.tablet === 'number' ? `${finalResponsive.tablet}px` : finalResponsive.tablet};
            height: ${typeof finalResponsive.tablet === 'number' ? `${finalResponsive.tablet}px` : finalResponsive.tablet};
          }
        }
      `;
    }

    if (finalResponsive.desktop) {
      css += `
        @media (min-width: 1024px) {
          .responsive-svg {
            width: ${typeof finalResponsive.desktop === 'number' ? `${finalResponsive.desktop}px` : finalResponsive.desktop};
            height: ${typeof finalResponsive.desktop === 'number' ? `${finalResponsive.desktop}px` : finalResponsive.desktop};
          }
        }
      `;
    }

    // Add constraints
    if (maxWidth) {
      css += `
        .responsive-svg {
          max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
        }
      `;
    }

    if (minWidth) {
      css += `
        .responsive-svg {
          min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
        }
      `;
    }

    return css;
  };

  const duration = getDuration(speed);

  return (
    <div className="animated-svg-container">
      <style >{`
        .animated-svg-container {
          display: inline-block;
          line-height: 0;
        }
        
        .animated-svg {
          transition: all 0.3s ease;
          cursor: ${onClick ? 'pointer' : 'default'};
        }
        
        .pause-on-hover:hover {
          animation-play-state: paused !important;
        }
        
        /* Responsive sizing */
        ${getResponsiveSizeCSS()}
        
        /* Bounce Animation */
        .animate-bounce {
          animation: bounce-animation ${duration} ease-in-out infinite;
        }
        
        @keyframes bounce-animation {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
        
        /* Pulse Animation */
        .animate-pulse {
          animation: pulse-animation ${duration} ease-in-out infinite;
        }
        
        @keyframes pulse-animation {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Spin Animation */
        .animate-spin {
          animation: spin-animation ${duration} linear infinite;
        }
        
        @keyframes spin-animation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Swing Animation */
        .animate-swing {
          animation: swing-animation ${duration} ease-in-out infinite;
          transform-origin: top center;
        }
        
        @keyframes swing-animation {
          20% {
            transform: rotate(15deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(5deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        /* Shake Animation */
        .animate-shake {
          animation: shake-animation ${duration} ease-in-out infinite;
        }
        
        @keyframes shake-animation {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(10px);
          }
        }
        
        /* Float Animation */
        .animate-float {
          animation: float-animation ${duration} ease-in-out infinite;
        }
        
        @keyframes float-animation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        /* Glow Animation */
        .animate-glow {
          animation: glow-animation ${duration} ease-in-out infinite alternate;
        }
        
        @keyframes glow-animation {
          from {
            filter: drop-shadow(0 0 5px ${fillColor}) drop-shadow(0 0 10px ${fillColor}) drop-shadow(0 0 15px ${fillColor});
          }
          to {
            filter: drop-shadow(0 0 10px ${fillColor}) drop-shadow(0 0 20px ${fillColor}) drop-shadow(0 0 30px ${fillColor});
          }
        }
        
        /* Hover effects */
        .animated-svg:hover {
          transform: scale(1.05);
        }
        
        /* Mobile-first responsive approach */
        @media (max-width: 639px) {
          .animated-svg-container {
            width: 100%;
            max-width: 100%;
          }
          
          /* Reduce animation intensity on mobile */
          .animate-bounce {
            animation: bounce-animation-mobile ${duration} ease-in-out infinite;
          }
          
          @keyframes bounce-animation-mobile {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          
          .animate-shake {
            animation: shake-animation-mobile ${duration} ease-in-out infinite;
          }
          
          @keyframes shake-animation-mobile {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-5px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(5px);
            }
          }
          
          .animate-float {
            animation: float-animation-mobile ${duration} ease-in-out infinite;
          }
          
          @keyframes float-animation-mobile {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        }
        
        /* Tablet adjustments */
        @media (min-width: 640px) and (max-width: 1023px) {
          .animated-svg-container {
            width: auto;
          }
        }
        
        /* Desktop optimizations */
        @media (min-width: 1024px) {
          .animated-svg:hover {
            transform: scale(1.08);
          }
        }
      `}</style>
      
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill={fillColor}
        className={`animated-svg responsive-svg ${getAnimationClass()} ${className}`}
        style={style}
        onClick={onClick}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <style type="text/css">
            {`.st0{fill:${fillColor};}`}
          </style>
          <g>
            <path 
              className="st0" 
              d="M495.001,189.882c-0.938-1.114-2.43-1.587-3.833-1.228l-37.986,9.826c-1.562,0.403-3.194-0.228-4.088-1.562 l-16.51-24.756c-0.193-0.29-0.421-0.554-0.693-0.773l-15.58-13.247c-0.422-0.359-0.755-0.807-0.992-1.316l-19.458-42.969 c-0.088-0.219-0.202-0.42-0.342-0.605L384.122,96.97c-0.027-0.044-0.053-0.079-0.079-0.114l-15.756-24.424 c-0.526-0.825-0.729-1.825-0.526-2.79l0.464-2.317c0.22-1.105,0.922-2.053,1.912-2.587c1.001-0.535,2.176-0.596,3.22-0.167l2.413,1 c1.351,0.562,2.912,0.281,3.991-0.719c1.071-0.992,1.474-2.518,1.036-3.913l-2.711-8.51c-0.403-1.28-1.456-2.246-2.772-2.535 l-26.932-5.992c-0.57-0.122-1.176-0.114-1.737,0.027l-21.44,5.359c-0.632,0.158-1.298,0.149-1.931-0.035l-18.756-5.246 c-0.693-0.192-1.324-0.578-1.798-1.123l-4.861-5.474c-0.676-0.755-1.622-1.211-2.631-1.255l-11.641-0.587 c-1.931-0.088-3.632,1.289-3.913,3.21l-1.403,9.37c-0.158,1.018-0.711,1.93-1.544,2.518c-0.843,0.588-1.886,0.816-2.886,0.632 l-24.73-4.676c-1.351-0.263-2.448-1.22-2.877-2.518l-1.798-5.396c-0.5-1.491-1.878-2.518-3.448-2.57l-19.677-0.676 c-1.15-0.035-2.211-0.596-2.895-1.509l-6.378-8.51c-0.641-0.851-0.886-1.939-0.684-2.982c0.201-1.053,0.842-1.957,1.754-2.509 l1.675-1.009c1.72-1.027,2.325-3.22,1.403-4.992L209.93,2.004c-0.747-1.404-2.29-2.194-3.869-1.966L132.685,10.4 c-0.307,0.035-0.606,0.123-0.895,0.237l-21.432,8.729c-0.386,0.166-0.799,0.254-1.22,0.272L95.4,20.357 c-0.921,0.053-1.78,0.43-2.43,1.071L67.441,46.176c-0.578,0.562-0.965,1.289-1.096,2.079l-2.018,12.08 c-0.166,1.062-0.789,1.992-1.692,2.571l-22.696,14.37c-0.536,0.333-0.983,0.807-1.281,1.359l-20.625,37.294 c-0.342,0.614-0.508,1.298-0.474,2l1.596,34.231c0.009,0.298-0.009,0.588-0.07,0.878l-2.903,15.256 c-0.211,1.114,0.096,2.272,0.824,3.15l55.522,65.831c0.922,1.088,2.378,1.561,3.773,1.237l24.59-5.974 c0.377-0.088,0.763-0.123,1.158-0.097l34.433,2.404c0.474,0.044,0.956-0.026,1.421-0.166l25.608-8.291 c1.219-0.394,2.552-0.14,3.544,0.666l15.519,12.704c0.754,0.605,1.728,0.912,2.702,0.834l14.344-1.202 c1.053-0.079,2.088,0.271,2.859,0.991c0.782,0.71,1.229,1.71,1.229,2.772v13.905c0,0.192-0.018,0.377-0.044,0.562l-2.211,14.712 c-0.149,1.035,0.131,2.105,0.799,2.921l15.905,19.686c0.334,0.42,0.579,0.912,0.719,1.43l12.818,49.69 c0.184,0.692,0.158,1.421-0.061,2.096l-11.694,36.661c-0.28,0.878-0.228,1.834,0.14,2.676l19.976,44.733 c0.149,0.333,0.254,0.684,0.298,1.062l3.938,30.774c0.088,0.711,0.395,1.378,0.843,1.931l19.212,23.046 c0.562,0.685,0.868,1.526,0.868,2.413v16.791c0,1.079,0.465,2.114,1.29,2.833c0.807,0.72,1.894,1.036,2.974,0.895l33.977-4.421 l28.529-3.966c0.895-0.131,1.72-0.57,2.316-1.263l43.312-49.716c0.42-0.49,0.719-1.096,0.842-1.736l2.001-9.957 c0.193-0.974,0.772-1.842,1.605-2.395l4.553-3.026c1.018-0.694,1.649-1.825,1.675-3.053l0.747-30.775 c0.026-0.868,0.35-1.71,0.921-2.368l9.202-10.616c0.474-0.544,1.079-0.93,1.772-1.14l18.686-5.545 c1.606-0.473,2.702-1.938,2.702-3.615v-37.442c0-0.316-0.035-0.624-0.114-0.922l-9.106-35.67c-0.439-1.72,0.377-3.509,1.965-4.308 l3.088-1.543c0.562-0.281,1.035-0.685,1.386-1.185l27.125-38.293c0.386-0.552,0.921-0.982,1.526-1.263l21.871-9.799 c0.834-0.377,1.509-1.053,1.886-1.886l23.599-52.207C496.142,192.532,495.94,190.988,495.001,189.882z"
            />
            <path 
              className="st0" 
              d="M485.606,356.242c-0.588-1.114-1.684-1.868-2.93-2c-1.246-0.14-2.483,0.351-3.29,1.316l-18.265,21.634 c-0.369,0.447-0.834,0.799-1.369,1.027l-10.237,4.483c-1.377,0.596-2.255,1.956-2.255,3.457v21.168 c0,0.316-0.044,0.622-0.123,0.921l-2.948,11.8c-0.167,0.684-0.14,1.395,0.07,2.07l6.799,21.072c0.316,0.974,1.001,1.764,1.912,2.22 c0.904,0.448,1.966,0.518,2.914,0.184l13.632-4.747c1.158-0.404,2.045-1.333,2.395-2.5l16.072-55.488l3.728-12.677 c0.272-0.93,0.176-1.939-0.271-2.808L485.606,356.242z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};