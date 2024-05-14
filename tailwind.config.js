/** @type {import('tailwindcss').Config} */
import colors from './tailwind/color.json';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
};
