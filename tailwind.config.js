/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#9DB2BF",
        "nav-border-color": "#DDDDDD",
      },
      fontFamily: {
        "montserrat": "Montserrat",
      },
    },
  },
  plugins: [],
};
