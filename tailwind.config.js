/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "#2C514C",
        "primary-hover": "#15EC9A",
        secondary: "#494b4b",
        terciary: "#122932",
        contrast: "#BB2F2F"
      },
      boxShadow: {
        xl: '5px 5px 0px #000000'
      },
      backgroundImage: {
        'banner': "url('../public/images/mario.jpg')",      
       
      },
      fontFamily: {
        'sans': 'Fira Code, monospace',
      },
    },
  },
  plugins: [],
}
