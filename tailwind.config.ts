import type { Config } from 'tailwindcss';
// ADDED BY ME:
import plugin from 'tailwindcss/plugin';
/////

export default {
	content: [
		// TAILWIND CONFIG:
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-bird/**/*.{html,js,svelte,ts}',
		/////
	],
	// ADDED BY ME:
	darkMode: 'class',
	/////
	theme: {
		extend: {
			// ADDED BY ME:
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
		// ADDED BY ME:
		plugin(({ addVariant }) => {
			addVariant('classSidebarExpanded', `:merge(.classSidebarExpanded) &`);
		}),
		/////
	],
} as Config;
