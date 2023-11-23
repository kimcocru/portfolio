const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Colors you want to add go here
        primary: "#B6BDAE",
        secondary: "#A89073",
        verde: "#698166",
        quartery: "#72522C",
        brown: "#2E210A",
        blue: "gray-800"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}