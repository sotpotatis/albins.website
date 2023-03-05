/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			animation: {
				'reverse-spin-slow': 'reverse-spin 15s linear infinite' // Create an animation for a slow spinning effect
			},
			// Note: thank you https://github.com/tailwindlabs/tailwindcss/discussions/2220#discussioncomment-596742
			// for reverse spinning effect.
			keyframes: {
				'reverse-spin': {
					from: {
						transform: 'rotate(360deg)'
					}
				}
			}
		}
	},
	plugins: []
};
