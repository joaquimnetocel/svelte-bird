// ADDED BY ME
import plugin from 'tailwindcss/plugin';
/////

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// ADDED BY ME
		'./src/**/*.{html,js,svelte,ts}',
		//'./node_modules/svelte-bird/**/*.{html,js,svelte,ts}',
		/////
	],
	// ADDED BY ME
	darkMode: 'class',
	/////
	theme: {
		extend: {
			// ADDED BY ME
			colors: {
				colorDark: '#222834',
			},
			/////
		},
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
