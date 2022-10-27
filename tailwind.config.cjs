/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
