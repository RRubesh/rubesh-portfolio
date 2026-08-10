/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgLight: '#F8FAFC',
        bgDark: '#0B0F19',
        cardLight: 'rgba(255, 255, 255, 0.72)',
        cardDark: 'rgba(17, 24, 39, 0.75)',
        primary: '#4F46E5', // Indigo
        secondary: '#7C3AED', // Violet
        accent: '#06B6D4', // Cyan
        textPrimaryLight: '#111827',
        textPrimaryDark: '#F9FAFB',
        textSecondaryLight: '#64748B',
        textSecondaryDark: '#9CA3AF',
        borderLight: 'rgba(148, 163, 184, 0.25)',
        borderDark: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(79, 70, 229, 0.08)',
        glass: '0 8px 32px 0 rgba(79, 70, 229, 0.08)',
        glowViolet: '0 0 35px rgba(124, 58, 237, 0.25)',
        glowCyan: '0 0 35px rgba(6, 182, 212, 0.25)',
        glowPrimary: '0 0 35px rgba(79, 70, 229, 0.25)',
      },
      animation: {
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-reverse': 'floatReverse 12s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-4deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}
