/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{html,js}"],
  theme: {
    extend: {
      screens: {
        "xs": "480px"
      },
      spacing: {
        "big": "48rem"
      }
    },
  },
  fontFamily:{
    parkinsans:["Parkinsans", "sans-serif"]
  },
  plugins: [],
}

