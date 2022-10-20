/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DD6527",
        secondary: "#282560",
      },
      boxShadow: {
        xl: '5px 5px 0px #000000'
      }
    },
  },
  plugins: [],
}
