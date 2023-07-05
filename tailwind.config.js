/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Creepster", "cursive"],
      sans: ["Montserrat", "sans-serif"],
      glitch: ["Rubik Glitch", "cursive"],
      mono: ["JetBrains Mono", "monospace"]
    },
    extend: {},
  },
  plugins: [],
};
