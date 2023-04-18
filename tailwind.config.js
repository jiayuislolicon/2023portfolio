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
		},
		fontFamily: {
			sans: ["Barlow Condensed", "Noto Sans TC", "sans-serif"],
		},
		extend: {
			fontSize: {
				normal: "1rem",
				xl: "1.143rem",
				"xl-lg": "1.5rem",
				"2xl": "1.875rem",
				"2xl-lg": "1.875rem",
				"3xl": "1.5rem",
				"3xl-lg": "3.4375rem",
				h1: "9rem",
				"h1-lg": "21.875rem",
				h2: "8rem",
				"h2-lg": "12.5rem",
				h3: "5.5rem",
				"h3-lg": "9rem",
			},
		},
	},
	plugins: [],
};
