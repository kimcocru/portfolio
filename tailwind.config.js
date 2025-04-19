const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Colors you want to add go here
        primary: "#2C7A7B",     
        secondary: "#393E46",   
        verde: "#222831",      
        quartery: "#F8B500",    
        brown: "#222831",       
        blue: "#8F9BA8"  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}