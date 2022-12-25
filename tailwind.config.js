/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262322",
        main: "#d4aa7d",
        secondary: "#efd09e",
        accent: "#f2e5d7",
        text: "#272727",
      },
      backgroundImage: {
        mainBG: "url('/public/wave-haikei.png')",
      },
      boxShadow: {
        middle:
          "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
      },
    },
  },
  plugins: [],
};
