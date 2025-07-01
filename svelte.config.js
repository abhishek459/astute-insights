import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown.
			pages: 'build', // Output directory for pages (index.html will go here)
			assets: 'build', // Output directory for assets
			fallback: 'index.html', // Crucial for SPA-like fallback
			precompress: false, // Set to true if you want gzip/brotli precompression
			strict: true
		}),
		// Ensure that SvelteKit knows your application should be fully static
		prerender: {
			entries: ['*', '/'] // '*' prerenders all found routes, '/' ensures index.html is there
		}
	}
};

export default config;
