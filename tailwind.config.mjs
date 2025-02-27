/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'generation': {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#00afaf', // Primary teal color
          600: '#008c8c',
          700: '#006969',
          800: '#004646',
          900: '#002323',
        },
        'generation-blue': {
          50: '#e6f1f9',
          100: '#cce3f3',
          200: '#99c7e7',
          300: '#66abdb',
          400: '#338fcf',
          500: '#0073c3', // Primary blue color
          600: '#005c9c',
          700: '#004575',
          800: '#002e4e',
          900: '#001727',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    forms,
  ],
} 