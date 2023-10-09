/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fb923c",
        secondary: "#dfd9ff",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
      screens: {
        xs: "450px"
      },
      backgroundImage: {
        "hero-bg": "url('../src/assets/images/bg-hero.webp')"
      }
    }
  },
  plugins: ["tailwindcss ,autoprefixer"]
};