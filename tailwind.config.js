// ADDED BY ME
import plugin from 'tailwindcss/plugin';
/////

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// ADDED BY ME
	darkMode: 'class',
	/////
	theme: {
		extend: {},
	},
	plugins: [
		// ADDED BY ME
		plugin(({ addVariant, e }) => {
			addVariant('classSidebarExpanded', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.classSidebarExpanded .${e(`classSidebarExpanded${separator}${className}`)}`,
				);
			});
		}),
		/////
	],
};
