// ADDED BY ME
import plugin from 'tailwindcss/plugin';
/////

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// TAILWIND CONFIG:
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-bird/**/*.{html,js,svelte,ts}',
		/////
	],
	theme: {
		extend: {
			// ADDED BY ME
			colors: {
				colorDark: '#222834',
			},
			screens: {
				'!sm': { max: '640px' },
				'!md': { max: '768px' },
				'!lg': { max: '1024px' },
				'!xl': { max: '1280px' },
				'!2xl': { max: '1536px' },
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
