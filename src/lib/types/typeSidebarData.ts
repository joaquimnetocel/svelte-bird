export type typeSubmenus = {
	stringName: string;
	stringTitle: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
};

type typeMenuWithSubmenus = {
	stringName: string;
	stringIcon: string;
	stringTitle: string;
	arraySubmenus: typeSubmenus[];
};

export type typeMenuWithoutSubmenus = {
	stringName: string;
	stringIcon: string;
	stringTitle: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
	stringBadge?: string;
};

type typeSection = {
	stringSection?: string;
	arrayMenus: (typeMenuWithSubmenus | typeMenuWithoutSubmenus)[];
};

export type typeSidebarData = typeSection[];
