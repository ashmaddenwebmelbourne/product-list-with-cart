/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			tablet: '768px',
			desktop: '1024px',
		},
		fontFamily: {
			'red-hat-text': ['Red Hat Text', 'sans-serif'],
		},
		colors: {
			red: '#C73B0F',
			'rose-900': '#260F08',
			'rose-500': '#87635A',
			'rose-400': '#AD8A85',
			'rose-300': '#CAAFA7',
			'rose-100': '#F5EEEC',
			'rose-50': '#FCF8F6',
			green: '#1EA575',
			black: '#000000',
			white: '#FFFFFF',
		},
	},
	plugins: [],
};
