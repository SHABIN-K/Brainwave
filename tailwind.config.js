/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#dfd9fa',
          200: '#c0b2f5',
          300: '#a08cef',
          400: '#8165ea',
          500: '#613fe5',
          600: '#4e32b7',
          700: '#3a2689',
          800: '#27195c',
          900: '#130d2e',
        },
        dark: {
          100: '#d0cfd0',
          200: '#a09fa2',
          300: '#716e73',
          400: '#413e45',
          500: '#120e16',
          600: '#0e0b12',
          700: '#0b080d',
          800: '#070609',
          900: '#040304',
        },
        light: {
          100: '#fdfdfd',
          200: '#fbfbfc',
          300: '#fafafa',
          400: '#f8f8f9',
          500: '#f6f6f7',
          600: '#c5c5c6',
          700: '#949494',
          800: '#626263',
          900: '#313131',
        },
      },
      backgroundImage: {
        darkGradient: ' linear-gradient(to right, #434343 0%, black 100%);',
        accentGradient:
          'linear-gradient(to right, rgba(160,140,239,1) 0%, rgba(97,63,229,1) 100%);',
        accentGradientV2:
          'linear-gradient(to bottom, rgba(160,140,239,1) 0%, rgba(97,63,229,1) 100%);',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

module.exports = config;
