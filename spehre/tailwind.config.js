/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona-Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#F6F9FF",
          300: "#DFDCFF",
          400: "#716EA6",
          500: "#7976FF",
          DEFAULT: "#7976FF",
          700: "#2C2670",
        },
        secondary: {
          100: "#F5F5F5",
          500: "#757575",
          DEFAULT: "#757575",
        },
      },
    },
  },
  plugins: [],
};
