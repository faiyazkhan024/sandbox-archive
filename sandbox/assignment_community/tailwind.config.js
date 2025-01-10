/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fdfeff",
          200: "#fbfdff",
          300: "#fafbff",
          400: "#f8faff",
          500: "#f6f9ff",
          DEFAULT: "#f6f9ff",
          600: "#c5c7cc",
          700: "#949599",
          800: "#626466",
          900: "#313233",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
