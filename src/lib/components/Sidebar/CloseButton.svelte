<script lang="ts">
	import { functionReadStore } from '$lib/functions/functionReadStore.js';

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
</script>

<button
	class="ml-auto text-slate-500 hover:text-slate-400 lg:hidden"
	aria-controls="sidebar"
	aria-expanded="false"
	onclick={() => (storeMobileMenu.value = !storeMobileMenu.value)}
>
	<!--<span class="sr-only">Close sidebar</span>-->
	<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
	</svg>
</button>
