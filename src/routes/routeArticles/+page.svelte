<script lang="ts">
	import { functionReadActiveMenuStore, functionReadExpandedMenuStore } from '$lib/stores/index.js';
	import type { typeMenuNames } from '../types/typeMenuNames.js';

	const storeActiveMenu = functionReadActiveMenuStore<typeMenuNames>();
	const storeExpandedMenu = functionReadExpandedMenuStore<typeMenuNames>();
	$storeActiveMenu = 'menuArticles';
	$storeExpandedMenu = 'menuTeaching';
</script>

THIS IS THE ARTICLES ROUTE
