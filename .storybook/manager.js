import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import defaultTheme from './themes/default.js';

addons.setConfig({
  theme: defaultTheme
});