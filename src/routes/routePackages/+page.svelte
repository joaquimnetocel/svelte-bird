<script lang="ts">
	import { functionReadActiveMenuStore, functionReadExpandedMenuStore } from '$lib/stores/index.js';
	import type { typeMenuNames } from '../types/typeMenuNames.js';

	const storeActiveMenu = functionReadActiveMenuStore<typeMenuNames>();
	const storeExpandedMenu = functionReadExpandedMenuStore<typeMenuNames>();
	$storeActiveMenu = 'menuPackages';
	$storeExpandedMenu = '';
</script>

THIS IS THE 'PACKAGES' ROUTE
