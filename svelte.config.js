import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
};

export default config;

/**
 * Atoms:
Button (individual buttons)
Input (text, password, etc.)
Checkbox
Radio
Toggle Switch
Loading Spinner
Slider
Tooltip
Avatar
Progress Bar
Molecules:
Card (combination of atoms like image, text, button)
Navbar (combination of buttons, links)
Tabs (combination of buttons with content)
Alert (combination of text and button)
Organisms:
Modal (combination of molecules like overlay, close button)
Accordion (combination of atoms and molecules)
Dropdown (combination of button and menu)
Date Picker (combination of input and calendar)
 */