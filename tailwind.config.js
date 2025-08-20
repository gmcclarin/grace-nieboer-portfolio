
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    nightwind: {
      colors : {
        zinc :{
          200: 'indigo.950'
        },
         brown: {
          100: "brown.900",
          400: "brown.700",
          700: "brown.400",
          900: "brown.100",
        },
      }
    },
    fontFamily: {
      'body': 'Arial, Helvetica, sans-serif',
      'display' : 'Bodoni Moda, serif',
      'fun' : 'font-family, serif',
      'nyght' : 'nyght',
    },
    textColors : {
      'primary' : "#22292f",
      
    },
    extend: {
      colors :{
        brown :{
          100:"#796D63",
          400: "#736356",
          700: "#4C3E32",
          900: "#423429"
        }
      },
      backgroundImage: {
        'main': "url('texturePaint.avif')"
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("nightwind")],
}

