/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191E32",
        secondary: "#D67D51",
        third: "#F4F4F4",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        subheading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
