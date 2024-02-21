const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				josefin: ["var(--font-josefin)", "sans-serif"],
			},
			colors: {
				secondary: "#CD5334",
				accent: "#CD5334",
				dark: "#2E282A",
				light: "#F9FCFB",
			},
			backgroundImage: {
				mainBG: "url('/public/wave-haikei.png')",
			},
			animation: {
				marquee: "marquee 25s linear infinite",
				marquee2: "marquee2 25s linear infinite",
				"animation-pause": "animation-play-state: paused",
				slideDown: "slideDown 300ms ease-out",
				slideUp: "slideUp 300ms ease-out",
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
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-10%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideUp: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-10%)" },
				},
			},
		},
		textShadow: {
			sm: "0px 1px 4px var(--tw-shadow-color)",
			DEFAULT: "0 2px 4px var(--tw-shadow-color)",
			lg: "0 4px 8px var(--tw-shadow-color)",
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				".arrow-hide": {
					"&::-webkit-inner-spin-button": {
						"-webkit-appearance": "none",
						margin: 0,
					},
					"&::-webkit-outer-spin-button": {
						"-webkit-appearance": "none",
						margin: 0,
					},
				},
			});
		}),
	],
};
