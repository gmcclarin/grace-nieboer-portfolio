
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
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

