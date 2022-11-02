/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/src/asset/bg.jpg')",
      },
      backdropBlur: {
        xs: '2px',
      },
      left: {
        ls: '0.23rem',
      },
      fontFamily: {
        Nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
