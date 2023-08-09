<script lang="ts">
	import { functionReadActiveMenuStore, functionReadExpandedMenuStore } from '$lib/stores/index.js';
	import type { typeMenuNames } from '../data/arraySidebarData.js';

	const storeActiveMenu = functionReadActiveMenuStore<typeMenuNames>();
	const storeExpandedMenu = functionReadExpandedMenuStore<typeMenuNames>();
	$storeActiveMenu = 'menuCourses';
	$storeExpandedMenu = 'menuTeaching';
</script>

THIS IS THE COURSES ROUTE
