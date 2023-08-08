<script lang="ts">
	import { functionReadActiveMenuStore, functionReadExpandedMenuStore } from '$lib/index.js';
	import type { typeMenuNames } from '../data/arraySidebarData.js';

	const storeActiveMenu = functionReadActiveMenuStore<typeMenuNames>();
	const storeExpandedMenu = functionReadExpandedMenuStore<typeMenuNames>();
	$storeActiveMenu = 'menuPackages';
	$storeExpandedMenu = '';
</script>

THIS IS THE 'PACKAGES' ROUTE
