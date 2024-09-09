// import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		}),
		prerender: {
			// default: true,
			crawl: true,
			entries: ['/'],
		},
		// prerender: { crawl: true, entries: ['/'] },
		//prerender: { crawl: false, entries: ['/','json-list/1','json-list/2'] },
	},
	preprocess: [
		vitePreprocess({
			defaults: {
				style: 'postcss',
			},
			postcss: {
				plugins: [tailwind, autoprefixer],
			},
		}),
	],

	// preprocess: vitePreprocess(),
};

export default config;
