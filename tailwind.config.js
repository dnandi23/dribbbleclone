/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        bodycolor1: "#F8F7F4",
        bodycolor2: "#FFFFFF",
        sectioncolor: "#FFDA7A",
      },
      fontFamily : {
        SourceSerif: ['Source-Serif','sans-serif'],
        MonaSans: ['Mona-Sans', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.04em',     // 0.1em ka custom letter spacing
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5))',
      },
    },
  },
  plugins: [],
}