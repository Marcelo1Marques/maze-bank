/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      custom1: "#78dcca",
      customBlack: {
        blacklight: "#272727",
        blacklightdark: "#1C1C1C",
        blackdark: "#202020",
      },
      customGreen: {
        greenlight: "#6BAE8A",
      },
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
};

