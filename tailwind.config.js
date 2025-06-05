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
        'data-primary': '#3B82F6',    // A strong blue (e.g., blue-500)
        'data-secondary': '#10B981',  // A vibrant green/teal (e.g., emerald-500)
        'data-accent': '#F59E0B',     // A warm yellow/orange accent (e.g., amber-500)
        'data-light-bg': '#F9FAFB',   // Very light gray background
        'data-text-main': '#1F2937',  // Dark gray for text
        'data-text-muted': '#6B7280', // Lighter gray for subtext
        'data-highlight-bg': '#E0E7FF', // Light blue for highlighting text (like the yellow in example)
        'data-highlight-text': '#3B82F6',
        'about-bg': '#FDFDFD', // Very light, almost white
        'about-card-dark-bg': '#1A1E23', // Dark background for the left card
        'about-card-text': '#E0E0E0',   // Light text for the dark card
        'about-title': '#111827',      // Dark gray for main titles (e.g., text-gray-900)
        'about-text': '#4B5563',       // Medium gray for descriptions (e.g., text-gray-700)
        'about-tag-bg': '#FFFFFF',
        'about-tag-text': '#374151',   // Darker gray for tag text
        'about-tag-border': '#E5E7EB',
        'about-tag-hover-bg': '#F3F4F6',
        'accent-glow-start': 'rgba(255, 100, 0, 0.6)', // For the glowing effect
        'accent-glow-end': 'rgba(230, 0, 0, 0.1)',
         'footer-bg': '#0D0D0D', // Very dark gray / off-black for the footer
        'footer-text-primary': '#FFFFFF', // White text
        'footer-text-secondary': '#A0A0A0', // Lighter gray for descriptions/links
        'footer-accent-green': '#AFFFAD',   // The vibrant green for the button
        'footer-accent-green-dark': '#8BEF8B',
        'footer-divider': '#333333', // Dark gray for the divider line
        'social-icon-bg': '#222222',
        'social-icon-hover-bg': '#333333',
      },
      fontFamily: {
        sans: ['Archivo', 'Poppins', 'sans-serif'], // Inter is great for data/tech UIs
      },
      borderRadius: {
        'cta': '2rem',    // ~32px for the CTA button
        '2.5xl': '1.25rem', // ~20px
        '3.5xl': '1.75rem', // ~28px for the large card
        'tag': '1rem',      // For the service tags
      },
            boxShadow: {
        'card-about': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 0 15px 5px rgba(255, 255, 255, 0.03)',
      },

      keyframes: {
        floatXYZ: { // More complex floating
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5px, -8px) rotate(2deg)' },
          '50%': { transform: 'translate(-3px, 6px) rotate(-1deg)' },
          '75%': { transform: 'translate(-6px, -4px) rotate(3deg)' },
        },
        subtlePulseScale: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.03)' },
        },

        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        softPulse: {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
            '50%': { transform: 'scale(1.02)', opacity: 1 },
        }
      },
      animation: {
        'float-xyz': 'floatXYZ 10s ease-in-out infinite alternate',
        'subtle-pulse-scale': 'subtlePulseScale 3s ease-in-out infinite alternate',
          'subtle-gradient-shift': 'gradientShift 15s ease infinite alternate',
        'soft-pulse': 'softPulse 3s infinite ease-in-out',
      }
    },
// ...
  },
  plugins: [
    // Add any Tailwind plugins here if you use them
    // require('@tailwindcss/forms'), // Example for enhanced form styling
    // require('@tailwindcss/typography'), // Example for prose styling
  ],
}