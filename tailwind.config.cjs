/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite' // Create an animation for a slow spinning effect
			}
		}
	},
	plugins: []
};
