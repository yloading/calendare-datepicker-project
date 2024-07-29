/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#9DB2BF",
        "nav-border-color": "#DDDDDD",
        "main-color": "#DB3D44",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
