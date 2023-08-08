/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'Montserrat': ["Montserrat"],
      'DaysOne' : ['Days One'],
      'Pacifico' : ['Pacifico']
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#020617",
      },
      screens: {
        "2xl": "1290px",
      },
    },
  },
  plugins: [],
};
