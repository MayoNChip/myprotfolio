/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-1": "#2C2C34",
        "black-2": "#3A3940",
        main: "#F71735",
        "main-dark": "#BB0D24",
        secondary: "#477998",
        accent: "#FEB95F",
        "semi-light": "#d3cac6",
        light: "#f1edeb",
      },
      backgroundImage: {
        mainBG: "url('/public/wave-haikei.png')",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "animation-pause": "animation-play-state: paused",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
