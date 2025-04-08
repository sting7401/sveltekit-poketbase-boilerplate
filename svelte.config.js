import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
	kit: {
		adapter: adapter(),
		prerender: { crawl: true, entries: ['/'] }
	},
	preprocess: [
		vitePreprocess({
			defaults: { style: 'postcss' },
			postcss: { plugins: [tailwind, autoprefixer] }
		}),
		mdsvex()
	],
	extensions: ['.svelte', '.svx']
};

export default config;
