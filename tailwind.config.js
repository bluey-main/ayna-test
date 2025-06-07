/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Path to your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to all your component files
  ],
  theme: {
    // tailwind.config.js (add to your existing theme.extend)
    // ...
    extend: {
      colors: {
        "brand-yellow": "#fccd42",
        "data-primary": "#3B82F6", // A strong blue (e.g., blue-500)
        "data-secondary": "#10B981", // A vibrant green/teal (e.g., emerald-500)
        "data-accent": "#F59E0B", // A warm yellow/orange accent (e.g., amber-500)
        "data-light-bg": "#F9FAFB", // Very light gray background
        "data-text-main": "#1F2937", // Dark gray for text
        "data-text-muted": "#6B7280", // Lighter gray for subtext
        "data-highlight-bg": "#E0E7FF", // Light blue for highlighting text (like the yellow in example)
        "data-highlight-text": "#3B82F6",
        "about-bg": "#FDFDFD", // Very light, almost white
        "about-card-dark-bg": "#1A1E23", // Dark background for the left card
        "about-card-text": "#E0E0E0", // Light text for the dark card
        "about-title": "#111827", // Dark gray for main titles (e.g., text-gray-900)
        "about-text": "#4B5563", // Medium gray for descriptions (e.g., text-gray-700)
        "about-tag-bg": "#FFFFFF",
        "about-tag-text": "#374151", // Darker gray for tag text
        "about-tag-border": "#E5E7EB",
        "about-tag-hover-bg": "#F3F4F6",
        "accent-glow-start": "rgba(255, 100, 0, 0.6)", // For the glowing effect
        "accent-glow-end": "rgba(230, 0, 0, 0.1)",
        "footer-bg": "#0D0D0D", // Very dark gray / off-black for the footer
        "footer-text-primary": "#FFFFFF", // White text
        "footer-text-secondary": "#A0A0A0", // Lighter gray for descriptions/links
        "footer-accent-green": "#AFFFAD", // The vibrant green for the button
        "footer-accent-green-dark": "#8BEF8B",
        "footer-divider": "#333333", // Dark gray for the divider line
        "social-icon-bg": "#222222",
        "social-icon-hover-bg": "#333333",
        "tech-bg": "#0D0D0D", // Very dark background for the section
        "tech-card-bg": "rgba(28, 28, 32, 0.7)", // Semi-transparent dark card bg (adjust alpha for glass effect)
        "tech-card-border": "rgba(255, 255, 255, 0.08)", // Subtle border for cards
        "tech-text-primary": "#F3F4F6", // Light gray / off-white for main text
        "tech-text-secondary": "#9CA3AF", // Dimmer gray for descriptions
        "tech-accent-glow": "#FFA500", // Bright orange/yellow for glows
        "tech-accent-glow-light": "#FFC53D",
         'global-bg': '#0A0A0F', // Very dark, almost black
        'global-text-primary': '#FFFFFF',
        'global-text-secondary': '#A0AEC0', // Lighter gray (e.g., gray-400)
        'globe-dot': '#E2E8F0',          // Light gray/white for globe dots (e.g., slate-200)
        'globe-glow-start': 'rgba(255, 190, 0, 0.6)', // Vibrant orange/yellow
        'globe-glow-mid': 'rgba(255, 165, 0, 0.3)',
        'globe-glow-end': 'rgba(255, 140, 0, 0.05)',
        'contact-bg-light': '#FFFFFF',
        'contact-bg-dark': '#111111', // Very dark gray / off-black
        'contact-text-dark': '#0D0D0D', // For text on light bg
        'contact-text-light': '#F3F4F6', // For text on dark bg (labels, form title)
        'contact-text-muted': '#6B7280', // For less prominent text on light bg
        'contact-accent-yellow': '#F7FF00', // Vibrant yellow/lime
        'contact-accent-yellow-dark': '#D4DB00',
        'contact-border': '#4B5563', // Border for form fields on dark bg
        'contact-placeholder': '#9CA3AF', // For placeholder-like labels
      },
      fontFamily: {
        sans: ["Archivo", "Poppins", "sans-serif"], // Inter is great for data/tech UIs
      },
      borderRadius: {
        cta: "2rem", // ~32px for the CTA button
        "2.5xl": "1.25rem", // ~20px
        "3.5xl": "1.75rem", // ~28px for the large card
        tag: "1rem", // For the service tags
        "card-tech": "1.5rem", // ~24px for the service cards
        // 'icon-container': '1rem', // For the icon background
              'form-card': '1.5rem', // ~24px for the dark form container
        'button-contact': '0.5rem', // ~8px for the send button
      },
       gridTemplateColumns: {
        // Simple 16 column grid
        '38': 'repeat(38, minmax(0, 1fr))',

        
        
      },
      boxShadow: {
        "card-about":
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "inner-glow": "inset 0 0 15px 5px rgba(255, 255, 255, 0.03)",
        "card-tech-main": "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        "card-tech-hover":
          "0 15px 35px -10px rgba(0, 0, 0, 0.4), 0 0 25px -5px rgba(255, 165, 0, 0.3)", // Added glow
        "icon-glow": "0 0 15px 2px var(--tw-shadow-color)", // Used with shadow-tech-accent-glow
      },
      backgroundImage: {
        "tech-card-gradient":
          "radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(var(--color-tech-accent-glow-rgb),0.1) 0%, transparent 50%)",
      },

      keyframes: {
        floatXYZ: {
          // More complex floating
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(5px, -8px) rotate(2deg)" },
          "50%": { transform: "translate(-3px, 6px) rotate(-1deg)" },
          "75%": { transform: "translate(-6px, -4px) rotate(3deg)" },
        },
        subtlePulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },

        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        softPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
          "50%": { transform: "scale(1.02)", opacity: 1 },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
          slowSpin: {
          '0%': { transform: 'rotateY(0deg) rotateX(10deg)' }, // Slight tilt for 3D effect
          '100%': { transform: 'rotateY(360deg) rotateX(10deg)' },
        },
        subtlePulseGlow: {
          '0%, 100%': { opacity: '0.7', filter: 'blur(10px)' },
          '50%': { opacity: '1', filter: 'blur(15px)' },
        },
               swingLeftRight: {
          '0%, 100%': { transform: 'translateX(-15%) rotate(-30deg)' }, // Start and end slightly left, tilted
          '50%': { transform: 'translateX(15%) rotate(30deg)' },    // Swing to the right, tilted other way
        },
        gentleSwing: { // A slightly different, perhaps more subtle swing
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-8px) rotate(-1.5deg)' },
          '75%': { transform: 'translateX(8px) rotate(1.5deg)' },
        }

      },
      animation: {
        "float-xyz": "floatXYZ 10s ease-in-out infinite alternate",
        "subtle-pulse-scale":
          "subtlePulseScale 3s ease-in-out infinite alternate",
        "subtle-gradient-shift": "gradientShift 15s ease infinite alternate",
        "soft-pulse": "softPulse 3s infinite ease-in-out",
        "glow-pulse": "glowPulse 3s infinite ease-in-out alternate",
        'slow-spin': 'slowSpin 45s linear infinite', // Adjust duration for spin speed
        'subtle-pulse-glow': 'subtlePulseGlow 4s infinite ease-in-out alternate',
            'swing-gentle': 'swingLeftRight 6s ease-in-out infinite alternate', // Uses swingLeftRight keyframes
        'swing-subtle': 'gentleSwing 8s ease-in-out infinite alternate', // Uses gentleSwing 
      },
    },
    // ...
  },
  plugins: [
    // Add any Tailwind plugins here if you use them
    // require('@tailwindcss/forms'), // Example for enhanced form styling
    // require('@tailwindcss/typography'), // Example for prose styling
  ],
};
