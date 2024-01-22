// import { themes } from '@storybook/theming';
import lD from './themes/lionsDen';


/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		docs: { theme: lD },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
