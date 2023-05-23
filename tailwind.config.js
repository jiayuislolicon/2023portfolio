/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			gray: "#E5E5E5",
			khaki: "#E0A565",
			"green-blue": "#22A39F",
			brown: "#413635",
			"light-yelow": "#F6F6EE",
			white: "#ffffff",
			"light-green": "#90D1CF",
			"cat-black": "#424242",
		},
		fontFamily: {
			sans: ["Barlow Condensed", "Noto Sans TC", "sans-serif"],
		},
		extend: {
			fontSize: {
				normal: "1rem",
				"xxl-lg": "1.125rem",
				xl: "1.143rem",
				"xl-lg": "1.5rem",
				"2xl": "1.5rem",
				"2xl-lg": "1.875rem",
				"3xl": "1.875rem",
				"3xl-lg": "3.4375rem",
				h1: "9rem",
				"h1-lg": "21.875rem",
				h2: "8rem",
				"h2-lg": "12.5rem",
				h3: "5.5rem",
				"h3-lg": "10rem",
			},
			keyframes: {
				scale: {
					"0%": { transform: "scale(0) translate(var(--pX)px, var(--py)px)" },
					"100%": { transform: "scale(1) translate(var(--pX)px, var(--py)px)" },
				},
				marquee: {
					"0%": { transform: "translate(0, 0)" },
					"100%": { transform: "translate(-50%, 0)" },
				},
				move: {
					"0%": { transform: "translate(0, -60%)" },
					"100%": { transform: "translate(0, 60%)" },
				},
				yarnMove: {
					"0%": { transform: "translate(100%, 0%)" },
					"33%": { transform: "translate(0%, 0%)" },
					"66%": { transform: "translate(0%, 0%)" },
					"100%": { transform: "translate(100%, 0%)" },
				},
				yarnRotaion: {
					"0%": { transform: "rotate(360deg)" },
					"33%": { transform: "rotate(0deg)" },
					"66%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				catMove: {
					"0%": { transform: "translate(-110%, 0%)" },
					"100%": { transform: "translate(110vw, 0%)" },
				},
				catBounce: {
					"0%": { transform: "translateY(0%) scale(1.2, 1)" },
					"50%": { transform: "translateY(-100%) scale(1, 1.2)" },
					"100%": { transform: "translateY(0%) scale(1.2, 1)" },
				},
			},
			animation: {
				"scale-large": "scale 0.3s",
				"scale-large-reverse": "scale 0.3s reverse",
				marquee: "marquee 3s linear infinite",
				move: "move 0.3s linear infinite",
				"move-xl": "move 0.5s linear infinite",
				"move-2xl": "move 1s linear infinite",
				catMove: "catMove 3s linear var(--delay) both",
				yarnMove: "yarnMove 3s forwards",
				yarnRotaion: "yarnRotaion 3s forwards",
				catBounce:
					"catBounce 1s forwards infinite  var(--delay) cubic-bezier(0.87, 0, 0.13, 1)",
			},
		},
	},
	plugins: [],
};
