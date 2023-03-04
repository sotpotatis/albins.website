import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// I am using Netlify. You can adjust the adapter function to any other adapter if you're using
		// another platform.
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
