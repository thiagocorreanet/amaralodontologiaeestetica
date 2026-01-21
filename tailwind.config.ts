import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#CFA15D',
          light: '#DEC08A',
          dark: '#B08643',
          dim: '#8a6d3b',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#141414',
          card: '#111111',
        },
        viottoBlue: '#1578F7',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shine: 'shine 8s ease-in-out infinite',
        'zoom-slow': 'zoomSlow 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
