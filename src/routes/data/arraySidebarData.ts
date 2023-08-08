import type { typeSidebarData } from '$lib/index.js';
import { iconGoogle } from '../icons/iconGoogle.js';
import { iconHome } from '../icons/iconHome.js';
import { iconPackages } from '../icons/iconPackages.js';
import { iconTeaching } from '../icons/iconTeaching.js';

export type typeMenuNames =
	| ''
	| 'menuHome'
	| 'menuTeaching'
	| 'menuCourses'
	| 'menuArticles'
	| 'menuPackages'
	| 'menuGoogle';
export const arraySidebarData: typeSidebarData<typeMenuNames> = [
	{
		stringSection: 'PAGES:',
		arrayMenus: [
			{
				stringText: 'HOME',
				stringHref: '/',
				stringIcon: iconHome,
				stringName: 'menuHome',
			},
			{
				stringText: 'TEACHING',
				stringIcon: iconTeaching,
				arraySubmenus: [
					{
						stringText: 'COURSES',
						stringHref: 'routeCourses',
						stringName: 'menuCourses',
						stringBadge: 'NOVO',
					},
					{
						stringText: 'ARTICLES',
						stringHref: '/routeArticles',
						stringName: 'menuArticles',
					},
				],
				stringName: 'menuTeaching',
			},
			{
				stringName: 'menuPackages',
				stringIcon: iconPackages,
				stringText: 'PACKAGES',
				stringHref: '/routePackages',
			},
		],
	},
	{
		stringSection: 'LINKS:',
		arrayMenus: [
			{
				stringName: 'menuGoogle',
				stringText: 'GOOGLE',
				stringHref: 'http://www.google.com.br',
				stringIcon: iconGoogle,
				stringTarget: '_blank',
				stringBadge: 'NOVO',
			},
		],
	},
];
