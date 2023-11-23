/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"black-1": "#2C2C34",
				"black-2": "#3A3940",
				main: "#08A4BD",
				// main: "#ACC196",
				"main-dark": "#05798A",
				secondary: "#799496",
				accent: "#F4F3EE",
				"semi-light": "#d3cac6",
				light: "#F4F3EE",
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
	},
	plugins: [],
};
