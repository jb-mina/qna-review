module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A2C2A",
        secondary: "#A8A9AD",
        accent: "#FFC72C",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
