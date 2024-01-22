/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		port: 4173
	},
	testDir: 'src/lib/**/__TEST__/',
	testMatch: /(.+\.)?integration\.test\.[jt]s/
};

export default config;
