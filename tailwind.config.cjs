/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        black: "#2c2c2c",
        gray: {
          600: "#444444",
        },
        brown: {
          600: "#996830",
        },
      },
    },
  },
  plugins: [],
};
