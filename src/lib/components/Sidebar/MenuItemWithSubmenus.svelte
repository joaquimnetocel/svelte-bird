<svelte:options runes={true} />

<script lang="ts">
	import { functionReadStore } from '$lib/functions/functionReadStore.js';
	import type { typeMenuWithSubmenus } from '$lib/types/typeSidebarData.js';
	import { slide } from 'svelte/transition';

	let {
		propData,
		propExpandAllMenus,
		propSidebarExpanded = $bindable(),
	}: {
		propData: typeMenuWithSubmenus<string>;
		propExpandAllMenus: boolean;
		propSidebarExpanded: boolean;
	} = $props();

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
	const storeActiveMenu = functionReadStore('contextActiveMenu');
	const storeExpandedMenu = functionReadStore('contextExpandedMenu');

	let stateExpanded = $state(propExpandAllMenus || storeExpandedMenu.value === propData.stringName);

	$effect(() => {
		stateExpanded = propExpandAllMenus || storeExpandedMenu.value === propData.stringName;
	});
</script>

<li
	class:bg-slate-900={storeExpandedMenu.value === propData.stringName}
	class="mb-0.5 rounded-sm px-3 py-2 last:mb-0"
>
	<button
		type="button"
		onclick={() => {
			stateExpanded = !stateExpanded;
			propSidebarExpanded = true;
		}}
		class="items-centertransition flex w-full text-slate-200 duration-150 hover:text-slate-200"
	>
		<div class="flex flex-grow items-center justify-between">
			<div class="flex items-center">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html propData.stringIcon ?? ''}
				<span
					class="ml-3 text-sm font-medium duration-200 classSidebarExpanded:whitespace-normal lg:opacity-0 lg:classSidebarExpanded:opacity-100 2xl:opacity-100"
				>
					{propData.stringText}
				</span>
			</div>
			<div class="ml-2 flex shrink-0">
				<svg
					class:rotate-90={stateExpanded}
					class="false ml-1 h-3 w-3 shrink-0 fill-current text-slate-400"
					viewBox="0 0 12 12"
				>
					<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
				</svg>
			</div>
		</div>
	</button>
	{#if stateExpanded}
		<div transition:slide class="lg:hidden lg:classSidebarExpanded:block 2xl:block">
			<ul class="mt-1 pl-7">
				{#each propData.arraySubmenus as currentSubmenu}
					<li class="mb-1 last:mb-0">
						<a
							onclick={() => {
								storeMobileMenu.value = false;
								storeActiveMenu.value = currentSubmenu.stringName;
								storeExpandedMenu.value = propData.stringName;
							}}
							class:bg-gradient-to-r={currentSubmenu.stringName === storeActiveMenu.value}
							class:from-[#fcb69f]={currentSubmenu.stringName === storeActiveMenu.value}
							class:to-[#ffecd2]={currentSubmenu.stringName === storeActiveMenu.value}
							class:text-black={currentSubmenu.stringName === storeActiveMenu.value}
							class:text-slate-400={currentSubmenu.stringName !== storeActiveMenu.value}
							aria-current="page"
							class="block truncate rounded-md ps-2 transition duration-150"
							href={currentSubmenu.stringHref}
							target={currentSubmenu.stringTarget}
						>
							<div
								class="flex items-center justify-between whitespace-normal py-1 text-sm font-medium duration-200 lg:opacity-0 lg:classSidebarExpanded:opacity-100 2xl:opacity-100"
							>
								{currentSubmenu.stringText}
								{#if currentSubmenu.stringBadge !== undefined}
									<div
										class:text-white={storeActiveMenu.value === currentSubmenu.stringName}
										class:bg-slate-800={storeActiveMenu.value === currentSubmenu.stringName}
										class:text-slate-700={storeActiveMenu.value !== currentSubmenu.stringName}
										class:bg-slate-100={storeActiveMenu.value !== currentSubmenu.stringName}
										class="mr-1 flex h-5 items-center rounded px-2 text-xs font-medium"
									>
										{currentSubmenu.stringBadge}
									</div>
								{/if}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</li>
