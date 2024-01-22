/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      salsa: ["Salsa", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F5BD24",
        white: "#FFFFFF",
        grayWhite: "#D0D0D0",
        grayDark: "#2E2E2E",
      },
    },
  },
  plugins: [],
}
