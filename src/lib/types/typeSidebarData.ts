export type typeSubmenus = {
	stringTitle: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
};

type typeMenuWithSubmenus = {
	stringIcon: string;
	stringTitle: string;
	arraySubmenus: typeSubmenus[];
};

type typeMenuWithoutSubmenus = {
	stringIcon: string;
	stringTitle: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
};

type typeSection = {
	stringSection?: string;
	arrayMenus: (typeMenuWithSubmenus | typeMenuWithoutSubmenus)[];
};

export type typeSidebarData = typeSection[];
