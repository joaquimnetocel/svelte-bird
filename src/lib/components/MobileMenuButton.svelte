<svelte:options runes={true} />

<script lang="ts">
	import { functionReadStore } from '$lib/functions/functionReadStore.js';

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
</script>

<button
	onclick={() => (storeMobileMenu.value = !storeMobileMenu.value)}
	class="mr-3 text-slate-500 hover:text-slate-600 lg:hidden"
>
	<!--<span class="sr-only">Open sidebar</span>-->
	<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<rect x="4" y="5" width="16" height="2" />
		<rect x="4" y="11" width="16" height="2" />
		<rect x="4" y="17" width="16" height="2" />
	</svg>
</button>
