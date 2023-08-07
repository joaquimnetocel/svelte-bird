export type typeSubmenu = {
	stringName: string;
	stringText: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
	stringBadge?: string;
};

export type typeMenuWithSubmenus = {
	stringName: string;
	stringIcon: string;
	stringText: string;
	arraySubmenus: typeSubmenu[];
};

export type typeMenuWithoutSubmenus = {
	stringName: string;
	stringIcon: string;
	stringText: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
	stringBadge?: string;
};

type typeSection = {
	stringSection?: string;
	arrayMenus: (typeMenuWithSubmenus | typeMenuWithoutSubmenus)[];
};

export type typeSidebarData = typeSection[];
