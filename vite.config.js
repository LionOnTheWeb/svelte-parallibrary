import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: [ 'src/lib/**/__TEST__/*.{unit,integration}.test.{js,ts}' ]
	}
});
