<script lang="ts">
	import { functionReadStore } from '$lib/functions/functionReadStore.js';
	import type { typeMenuWithoutSubmenus } from '$lib/types/typeSidebarData.js';

	let {
		propData,
		propSidebarExpanded,
	}: {
		propSidebarExpanded: boolean;
		propData: typeMenuWithoutSubmenus<string>;
	} = $props();

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
	const storeActiveMenu = functionReadStore<string>('contextActiveMenu');
	const storeExpandedMenu = functionReadStore('contextExpandedMenu');
</script>

<li
	class="mb-0.5 rounded-xl px-3 py-2 last:mb-0"
	class:bg-gradient-to-r={storeActiveMenu.value === propData.stringName}
	class:from-[#fcb69f]={storeActiveMenu.value === propData.stringName}
	class:to-[#ffecd2]={storeActiveMenu.value === propData.stringName}
>
	<a
		class="block transition duration-150"
		href={propData.stringHref}
		class:text-slate-200={storeActiveMenu.value !== propData.stringName}
		class:text-black={storeActiveMenu.value === propData.stringName}
		target={propData.stringTarget}
		onclick={() => {
			storeMobileMenu.value = false;
			storeActiveMenu.value = propData.stringName;
			storeExpandedMenu.value = '';
		}}
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html propData.stringIcon ?? ''}
				<div
					class="ml-2 text-sm font-medium duration-200 2xl:opacity-100"
					class:lg:opacity-100={propSidebarExpanded}
					class:lg:opacity-0={!propSidebarExpanded}
				>
					{propData.stringText}
				</div>
			</div>
			{#if propData.stringBadge !== undefined}
				<div class="ml-2 flex">
					<span
						class:text-white={storeActiveMenu.value === propData.stringName}
						class:bg-slate-800={storeActiveMenu.value === propData.stringName}
						class:text-slate-700={storeActiveMenu.value !== propData.stringName}
						class:bg-slate-100={storeActiveMenu.value !== propData.stringName}
						class="inline-flex h-5 items-center justify-center rounded-sm px-2 text-xs font-medium"
					>
						{propData.stringBadge}
					</span>
				</div>
			{/if}
		</div></a
	>
</li>
