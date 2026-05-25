// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: 'w4n109hm',
			dataset: 'production',
			apiVersion: '2026-03-01',
			useCdn: false,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
