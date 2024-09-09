/** @type {import('tailwindcss').Config} */
import tailwindVectorEffect from 'tailwind-vector-effect';

// const px0_60 = { ...Array.from(Array(61)).map((_, i) => `${i/16}rem`) };
const pxRem = props => {
	const rem = Array(props)
		.fill()
		.map((_, i) => `${i / 16}rem`);

	return { ...rem };
};
const BASE = 16; // your base size
const rem = (px, key = px) => ({ [key]: `${px / BASE}rem` });

export default {
	content: [
		'./*.{svelte,html,js,ts}',
		'./public/**/*.{svelte,html,js,ts}',
		'./public/**/*.{svelte,html,js,ts}',
		'./public/static/**/*.{svelte,html,js,ts}',
		'./src/**/*.{svelte,html,js,ts}',
		'./node_modules/flowbite/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		screens: {
			sm: { max: '640px' },
			'sm-md': { min: '0', max: '1366px' },
			'md-min': { min: '641px' },
			'md-max': { max: '1366px' },
			md: { min: '641px', max: '1366px' },
			lg: { min: '1367px' },
			'sm-h-min': { raw: '(min-height: 641px)' },
			'sm-cs': { max: '640px' },
			'max-320': { max: '320px' },
			'max-384': { max: '384px' },
			'max-448': { max: '448px' },
			'max-512': { max: '512px' },
			'max-576': { max: '576px' },
			'max-672': { max: '672px' },
			'max-768': { max: '768px' },
			'max-896': { max: '896px' },
			'max-960': { max: '960px' },
			'max-1024': { max: '1024px' },
			'max-1152': { max: '1152px' },
			'max-1200': { max: '1200px' },
			'max-1280': { max: '1280px' },
			'md-cs': { max: '1200px' },
			'sm-md-cs': { min: '640px', max: '1200px' },
			'min-320': { min: '320px' },
			'min-384': { min: '384px' },
			'min-448': { min: '448px' },
			'min-512': { min: '512px' },
			'min-576': { min: '576px' },
			'min-672': { min: '672px' },
			'min-768': { min: '768px' },
			'min-896': { min: '896px' },
			'min-960': { min: '960px' },
			'min-1024': { min: '1024px' },
			'min-1152': { min: '1152px' },
			'min-1200': { min: '1200px' },
			'min-1280': { min: '1280px' },
		},
		container: {
			// 'xs': '320px',
			// 'sm': '384px',
			// 'md': '448px',
			// 'lg': '512px',
			// 'xl': '576px',
			// '2xl': '672px',
			// '3xl': '768px',
			// '4xl': '896px',
			// '5xl': '1024px',
			// '6xl': '1152px',
			// '7xl': '1280px',
			center: true,
			'min-320': '320px',
			'min-384': '384px',
			'min-448': '448px',
			'min-512': '512px',
			'min-576': '576px',
			'min-672': '672px',
			'min-768': '768px',
			'min-896': '896px',
			'min-960': '960px',
			'min-1024': '1024px',
			'min-1152': '1152px',
			'min-1200': '1200px',
			'min-1280': '1280px',
		},
		extend: {
			spacing: pxRem(1200),
			width: pxRem(1200),
			height: pxRem(1200),
			maxWidth: pxRem(1200),
			maxHeight: pxRem(1200),
			minWidth: pxRem(1200),
			minHeight: pxRem(1200),
			borderRadius: pxRem(200),
			fontSize: pxRem(200),
			animation: {
				marquee: 'marquee 100s linear infinite',
				marquee2: 'marquee2 100s linear infinite',
				'marquee-half': 'marquee-half 100s linear infinite',
				'marquee2-half': 'marquee2-half 100s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(9280px)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(-9280px)' },
					'100%': { transform: 'translateX(0%)' },
				},
				'marquee-half': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(290rem)' },
				},
				'marquee2-half': {
					'0%': { transform: 'translateX(-290rem)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		},
		// fontWeight: {
		// 	w3: '300',
		// 	w4: '400',
		// 	w5: '500',
		// 	w6: '600',
		// 	w7: '700',
		// 	w8: '800',
		// 	w9: '900',
		// },
	},
	variants: {
		gridTemplateAreas: ['responsive'],
	},
	styles: {},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/container-queries'),
		require('tailwind-scrollbar'),
		require('tailwindcss-border-image'),
		tailwindVectorEffect,
	],
};
