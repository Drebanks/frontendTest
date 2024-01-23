/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { max: "780px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
    },
    colors: {
      black: "#111315",
      light: "#1a1d1f",
      white: "#FFFFFF",
      border: "#33383F",
      yellow: "#E1F16B",
      dark: "#6F767E",
    },
    extend: {
      fontFamily: {
        body: ["ProductSans"],
        heading: ["DrukWide"],
        integral: ["integral"],
      },
      backgroundColor: {
        back: "linear-gradient(90deg, #111315 0%, rgba(17, 19, 21, 0.8604) 34.76%, rgba(17, 19, 21, 0.397736) 74.56%, rgba(17, 19, 21, 0) 98.65%)",
      },
      backgroundImage: {
        female: "url('./assets/images/Frame 45.jpg')",
      },
    },
  },
  plugins: [],
};
