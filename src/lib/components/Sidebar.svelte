<svelte:options runes={true} />

<script lang="ts">
	import Bottom from '$lib/components/Sidebar/Bottom.svelte';
	import CloseButton from '$lib/components/Sidebar/CloseButton.svelte';
	import Logo from '$lib/components/Sidebar/Logo.svelte';
	import MenuItemWithSubmenus from '$lib/components/Sidebar/MenuItemWithSubmenus.svelte';
	import MenuItemWithoutSubmenus from '$lib/components/Sidebar/MenuItemWithoutSubmenus.svelte';
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import { functionReadStore } from '$lib/functions/functionReadStore.js';
	import type { typeSidebarData } from '$lib/types/typeSidebarData.js';

	let {
		propSidebarExpanded = $bindable(),
		propSidebarData,
		propExpandAllMenus,
		propLogoImage,
		propLogoWidth,
		propLogoHref,
		propTitle,
	}: {
		propSidebarExpanded: boolean;
		propSidebarData: typeSidebarData<string>;
		propExpandAllMenus: boolean;
		propLogoImage?: string;
		propLogoWidth?: number;
		propLogoHref?: string;
		propTitle?: string;
	} = $props();

	const storeMobileMenu = functionReadStore<boolean>('contextIsMobileMenuVisible');
</script>

<div use:functionClickOutside={() => (storeMobileMenu.value = false)}>
	<!-- Sidebar backdrop (mobile only) -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-slate-900 bg-opacity-30 opacity-0 transition-opacity duration-200 lg:z-auto lg:hidden"
		aria-hidden="true"
	></div>
	<!---->

	<div
		class:translate-x-0={storeMobileMenu.value}
		class:-translate-x-64={!storeMobileMenu.value}
		class:classContractedScrollWidth={!propSidebarExpanded}
		class:classExpandedScrollWidth={propSidebarExpanded}
		class:lg:!w-64={propSidebarExpanded}
		class="absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 -translate-x-64 flex-col overflow-y-auto overflow-x-hidden bg-colorDark p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 2xl:!w-64"
	>
		<div class="mb-10 flex justify-between pr-3 sm:px-2">
			<Logo
				{propSidebarExpanded}
				propLogo={propLogoImage}
				propWidth={propLogoWidth}
				{propTitle}
				propHref={propLogoHref}
			/>
			<CloseButton />
		</div>
		<div class="space-y-8">
			{#each propSidebarData as currentSection}
				<div>
					{#if currentSection.stringSection !== undefined}
						<h3 class="pl-3 text-xs font-semibold uppercase text-slate-500">
							<span
								class="hidden w-6 text-center"
								class:lg:hidden={propSidebarExpanded}
								class:lg:block={!propSidebarExpanded}
								aria-hidden="true">•••</span
							>
							<span
								class="text-slate-400 2xl:block"
								class:lg:hidden={!propSidebarExpanded}
								class:lg:block={propSidebarExpanded}
							>
								{currentSection.stringSection}
							</span>
						</h3>
					{/if}
					<ul class="mt-3">
						{#each currentSection.arrayMenus as currentMenu}
							{#if 'stringHref' in currentMenu}
								<MenuItemWithoutSubmenus {propSidebarExpanded} propData={currentMenu} />
							{:else}
								<MenuItemWithSubmenus
									propData={currentMenu}
									{propExpandAllMenus}
									bind:propSidebarExpanded
								/>
							{/if}
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<Bottom bind:propSidebarExpanded />
	</div>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(80, 80, 80, 0.99);
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
	:hover::-webkit-scrollbar {
		display: inline;
	}
	.classExpandedScrollWidth::-webkit-scrollbar {
		width: 20px;
	}
	.classContractedScrollWidth::-webkit-scrollbar {
		width: 0px;
	}
</style>
