/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			headers: ['Oleo Script', 'sans-serif'],
			body: ['Raleway', 'sans-serif'],
		},
		extend: {
			colors: {
				main: {
					100: '#FF8C8C',
					300: '#FF3030',
					500: '#D70000',
					700: '#8F0000',
					900: '#4B0000',
				},
			},
			spacing: {
				112: '28rem',
				128: '32rem',
				144: '36rem',
			},
		},
	},
	plugins: [],
}
