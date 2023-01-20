/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-1": "#291F1E",
        "black-2": "#181312",
        main: "#F71735",
        "main-dark": "#BB0D24",
        secondary: "#477998",
        accent: "#FEB95F",
        text: "#f1edeb",
      },
      backgroundImage: {
        mainBG: "url('/public/wave-haikei.png')",
      },
      animation: {
        "left-to-right": "move 10s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(-1000%,0)" },
          "100%": { transform: "translate(100%,0)" },
        },
      },
    },
  },
  plugins: [],
};
