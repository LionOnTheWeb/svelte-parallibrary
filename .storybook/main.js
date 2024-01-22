/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
	stories: ['../src/lib/**/__STORIES__/*.mdx', '../src/lib/**/__STORIES__/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
		'@storybook/addon-a11y'
    ],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	}
};
export default config;
