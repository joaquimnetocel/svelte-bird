import type { typeSidebarData } from '$lib/index.js';

export const arraySidebarData: typeSidebarData = [
	{
		stringSection: 'PAGES:',
		arrayMenus: [
			{
				stringTitle: 'TEOREMA CENTRAL DO LIMITE',
				stringIcon: `
					<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
						<path
							class="text-indigo-500 fill-current"
							d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
						/>
						<path
							class="text-indigo-600 fill-current"
							d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
						/>
						<path
							class="text-indigo-200 fill-current"
							d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
						/>
					</svg>
				`,
				arraySubmenus: [
					{
						stringTitle: 'GOOGLE',
						stringHref: 'http://www.google.com.br',
						stringTarget: '_blank',
					},
					{
						stringTitle: 'BOL',
						stringHref: 'http://www.bol.com.br',
					},
					{
						stringTitle: 'IG',
						stringHref: 'http://www.ig.com.br',
					},
				],
			},
			{
				stringIcon: `
					<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
						<path
							class="text-indigo-500 fill-current"
							d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
						/>
						<path
							class="text-indigo-600 fill-current"
							d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
						/>
						<path
							class="text-indigo-200 fill-current"
							d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
						/>
					</svg>
				`,
				stringTitle: 'MESSAGES',
				stringHref: '/',
			},
		],
	},
	{
		stringSection: 'MORE:',
		arrayMenus: [
			{
				stringTitle: 'AUTHENTICATION',
				stringHref: '/auth',
				stringIcon: `
					<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
						<path
							class="fill-current text-slate-600"
							d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
						/>
						<path
							class="fill-current text-slate-400"
							d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
						/>
					</svg>
				`,
			},
			{
				stringTitle: 'ONBOARDING',
				stringHref: '/onbo',
				stringIcon: `
					<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
						<path
							class="text-indigo-500 fill-current"
							d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
						/>
						<path
							class="text-indigo-600 fill-current"
							d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
						/>
						<path
							class="text-indigo-200 fill-current"
							d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
						/>
					</svg>
				`,
			},
			{
				stringTitle: 'COMPONENTS',
				stringHref: '/compo',
				stringIcon: `
					<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
						<path
							class="text-indigo-500 fill-current"
							d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
						/>
						<path
							class="text-indigo-600 fill-current"
							d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
						/>
						<path
							class="text-indigo-200 fill-current"
							d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
						/>
					</svg>
				`,
			},
		],
	},
];
