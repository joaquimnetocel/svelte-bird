import type { typeSidebarData } from '$lib/index.js';
import { iconGoogle } from '../icons/iconGoogle.js';
import { iconHome } from '../icons/iconHome.js';
import { iconTeaching } from '../icons/iconTeaching.js';

export const arraySidebarData: typeSidebarData = [
	{
		stringSection: 'PAGES:',
		arrayMenus: [
			{
				stringTitle: 'HOME',
				stringHref: '/',
				stringIcon: iconHome,
				stringName: 'menuHome',
			},
			{
				stringTitle: 'TEACHING',
				stringIcon: iconTeaching,
				arraySubmenus: [
					{
						stringTitle: 'COURSES',
						stringHref: '/',
						stringName: 'menuCourses',
					},
					{
						stringTitle: 'APPLETS',
						stringHref: '/',
						stringName: 'menuApplets',
					},
					{
						stringTitle: 'ARTICLES',
						stringHref: '/',
						stringName: 'menuArticles',
					},
				],
				stringName: 'menuTeaching',
			},
			{
				stringName: 'menuMessages',
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
		stringSection: 'LINKS:',
		arrayMenus: [
			{
				stringName: 'menuGoogle',
				stringTitle: 'GOOGLE',
				stringHref: 'http://www.google.com.br',
				stringIcon: iconGoogle,
				stringTarget: '_blank',
				stringBadge: 'NOVO',
			},
		],
	},
];
