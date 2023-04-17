/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			'gray': '#E5E5E5',
			'khaki': '#E0A565',
			'green-blue': '#22A39F',
			'brown': '#413635',
			'light-yelow': '#F6F6EE',
		  },
		  fontFamily: {
			sans: ['Barlow Condensed', 'Noto Sans TC', 'sans-serif'],
		  },
		  extend: {
			fontSize: {
			  'normal': '1rem',
			  'xl': '1.5rem',
			  '2xl': '1.875rem',
			  '3xl': '3.4375rem',
			  'h1': '21.875rem',
			  'h2': '12.5rem',
			  'h3': '9rem',
			}
		  }
	},
	plugins: [],
};
