const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"black-1": "#191919",
				"black-2": "#1E1E24",
				main: "#CED0CE",
				// main: "#ACC196",
				"main-dark": "#05798A",
				secondary: "#404E4D",
				accent: "#FAA916",
				"semi-light": "#B9BAA3",
				light: "#FFFFFF",
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
	],
};
