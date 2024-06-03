/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
        madimi:["Madimi One", "sans-serif"],
        briem: ['Briem Hand', 'sans-serif'],
        poetsen: ['Poetsen One', 'sans-serif'],
        
      },
      colors: {
        'custom-dark': '#0c0702',
        'custom-gray': '#49463e',
      },
    },
  },
  plugins: [],
});