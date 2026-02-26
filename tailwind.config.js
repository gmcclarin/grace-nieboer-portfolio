
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
      'serif': ['Noto Serif Display']
    },
    textColors : {
      'primary' : "#22292f",
      
    },
    extend: {
       keyframes: {
        'marquee-y': {
          '0%':   { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }, // scroll one full copy height
        },
      },
      animation: {
        'marquee-slow': 'marquee-y 50s linear infinite',
        'marquee-med':  'marquee-y 35s linear infinite',
        'marquee-fast': 'marquee-y 24s linear infinite',
      },
      colors :{
        brown :{
          100:"#9D928B",
          200: "#84766E",
          400: "#7A695F",
          700: "#564940",
          900: "#2E2722"
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

