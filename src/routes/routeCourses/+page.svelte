<script lang="ts">
	import { functionReadActiveMenuStore } from '$lib/index.js';
	import type { typeMenuNames } from '../data/arraySidebarData.js';

	const storeActiveMenu = functionReadActiveMenuStore<typeMenuNames>();
	$storeActiveMenu = 'menuCourses';
</script>

THIS IS THE COURSES ROUTE
