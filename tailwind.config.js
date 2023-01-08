/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0554f2",
        secondary: "#333",
        heading: "#0e2258",
      },
      container: {
        width: "70%",
      },
    },
  },
  plugins: [],
};
