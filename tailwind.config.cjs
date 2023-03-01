/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '584px',
			lg: '768px',
			xl: '976px',
			'2xl': '1440px',
		},
		fontFamily: {
			headers: ['Raleway', 'sans-serif'],
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
				google: {
					blue: '#4185F4',
				},
				toast: {
					success: '#4BB543',
					error: '#FF3333',
					warning: '#EED202',
					info: '#24A0ED',
				},
			},
			spacing: {
				88: '22rem',
				112: '28rem',
				128: '32rem',
				144: '36rem',
			},
		},
	},
	plugins: [],
}
