/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#FDBFBF',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray': '#878787',
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#FF0000',
    },
    extend: {},
  },
  plugins: [],
};

