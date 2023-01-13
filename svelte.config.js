import adapter from 'svelte-adapter-static-digitalocean';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			spec: '.do/spec.yaml',
			name: ''
		})
	},
};

export default config;
