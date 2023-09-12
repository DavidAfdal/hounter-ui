/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1C57',
        secondary: {
          100: '#D1FAE5',
          700: '#047857',
        },
        'text-color': '#626687',
        'nav-bg': 'rgba(255, 255, 255, 0.10)',
      },
    },
  },
  plugins: [],
};
