import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New primary color system
        primary: '#138651',
        secondary: '#093C33',
        // Backward compatibility with existing colors
        deepNavy: '#1E293B',
        warmGray: '#64748B',
        pristineWhite: '#FFFFFF',
        accentCoral: '#FF6B6B',
        softGold: '#F59E0B',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Instrument Serif', 'serif'],
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1' }],
        'section': ['2.5rem', { lineHeight: '1.2' }],
        'subsection': ['1.75rem', { lineHeight: '1.3' }]
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'grow': 'grow 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
        'stagger-fade-in': 'fadeIn 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        grow: {
          '0%': { height: '0' },
          '100%': { height: 'var(--final-height, 100%)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'inner-white-20': 'inset 0 0 20px 0 rgba(255, 255, 255, 0.2)',
        'inner-white-50': 'inset 0 0 12px 4px rgba(255, 255, 255, 0.5)',
        'inner-white-8': 'inset 0 0 8px 2px rgba(255, 255, 255, 0.5)',
        'inner-black-50': 'inset 0 0 12px 4px rgba(0, 0, 0, 0.5)',
        'inner-black-50-sm': 'inset 0 0 12px 2px rgba(0, 0, 0, 0.5)',
        'drop-white': '0 1px 0 rgba(255, 255, 255, 0.5)',
        'spread-secondary': '0 0 0 4px #093C33',
        'glow-primary': '0 0 30px rgba(19, 134, 81, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #093C33, #138651)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
