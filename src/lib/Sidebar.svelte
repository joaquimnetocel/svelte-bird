<script lang="ts">
	import Bottom from './Sidebar/Bottom.svelte';
	import CloseButton from './Sidebar/CloseButton.svelte';
	import Logo from './Sidebar/Logo.svelte';
	import MenuItemWithSubmenus from './Sidebar/MenuItemWithSubmenus.svelte';
	import MenuItemWithoutSubmenus from './Sidebar/MenuItemWithoutSubmenus.svelte';
	import { functionReadMobileMenuStore } from './stores/storeMobileMenu.js';
	import type { typeSidebarData } from './types/typeSidebarData.js';

	export let propSidebarExpanded: boolean;
	export let propSidebarData: typeSidebarData;

	const storeMobileMenu = functionReadMobileMenuStore();
</script>

<div>
	<!-- Sidebar backdrop (mobile only) -->
	<div
		class="fixed inset-0 z-40 transition-opacity duration-200 opacity-0 pointer-events-none bg-slate-900 bg-opacity-30 lg:z-auto lg:hidden"
		aria-hidden="true"
	/>
	<!---->

	<div
		id="sidebar"
		class:translate-x-0={$storeMobileMenu}
		class:-translate-x-64={!$storeMobileMenu}
		class="classNoScrollbar lg:classSidebarExpanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 -translate-x-64 flex-col overflow-y-scroll bg-colorDark p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-64"
		data-simplebar
	>
		<div class="flex justify-between pr-3 mb-10 sm:px-2">
			<Logo />
			<CloseButton />
		</div>
		<div class="space-y-8">
			{#each propSidebarData as currentSection}
				<div>
					{#if currentSection.stringSection !== undefined}
						<h3 class="pl-3 text-xs font-semibold uppercase text-slate-500">
							<span
								class="hidden w-6 text-center lg:classSidebarExpanded:hidden lg:block 2xl:hidden"
								aria-hidden="true">•••</span
							>
							<span class="lg:classSidebarExpanded:block lg:hidden 2xl:block text-slate-400">
								{currentSection.stringSection}
							</span>
						</h3>
					{/if}
					<ul class="mt-3">
						{#each currentSection.arrayMenus as currentMenu}
							{#if 'stringHref' in currentMenu}
								<MenuItemWithoutSubmenus
									propTitle={currentMenu.stringTitle}
									propHref={currentMenu.stringHref}
									propIcon={currentMenu.stringIcon}
								/>
							{:else}
								<MenuItemWithSubmenus
									propTitle={currentMenu.stringTitle}
									propData={currentMenu.arraySubmenus}
									propIcon={currentMenu.stringIcon}
								/>
							{/if}
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<!-- <div class="mb-8">
			<h3 class="pl-3 text-xs font-semibold uppercase text-slate-500">
				<span
					class="hidden w-6 text-center lg:classSidebarExpanded:hidden lg:block 2xl:hidden"
					aria-hidden="true">•••</span
				><span class="lg:classSidebarExpanded:block lg:hidden 2xl:block">More</span>
			</h3>
			<ul class="mt-3">
				<li class="undefined mb-0.5 rounded-sm px-3 py-2 last:mb-0">
					<a
						href="#0"
						class="block truncate transition duration-150 text-slate-200 hover:text-white"
						><div class="flex items-center justify-between">
							<div class="flex items-center">
								<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
									<path class="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
									<path class="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" /></svg
								><span
									class="ml-3 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
									>Authentication</span
								>
							</div>
							<div class="flex ml-2 shrink-0">
								<svg
									class="w-3 h-3 ml-1 fill-current undefined shrink-0 text-slate-400"
									viewBox="0 0 12 12"
								>
									<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
								</svg>
							</div>
						</div></a
					>
					<div class="lg:classSidebarExpanded:block lg:hidden 2xl:block">
						<ul class="hidden mt-1 pl-9">
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/signin"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Sign in</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/signup"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Sign up</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/reset-password"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Reset Password</span
									></a
								>
							</li>
						</ul>
					</div>
				</li>
				<li class="undefined mb-0.5 rounded-sm px-3 py-2 last:mb-0">
					<a
						href="#0"
						class="block truncate transition duration-150 text-slate-200 hover:text-white"
						><div class="flex items-center justify-between">
							<div class="flex items-center">
								<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
									<path
										class="fill-current text-slate-600"
										d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
									/>
									<path
										class="fill-current text-slate-400"
										d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
									/></svg
								><span
									class="ml-3 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
									>Onboarding</span
								>
							</div>
							<div class="flex ml-2 shrink-0">
								<svg
									class="w-3 h-3 ml-1 fill-current undefined shrink-0 text-slate-400"
									viewBox="0 0 12 12"
								>
									<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
								</svg>
							</div>
						</div></a
					>
					<div class="lg:classSidebarExpanded:block lg:hidden 2xl:block">
						<ul class="hidden mt-1 pl-9">
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/onboarding-01"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Step 1</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/onboarding-02"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Step 2</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/onboarding-03"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Step 3</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/onboarding-04"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Step 4</span
									></a
								>
							</li>
						</ul>
					</div>
				</li>
				<li class="false mb-0.5 rounded-sm px-3 py-2 last:mb-0">
					<a
						href="#0"
						class="block truncate transition duration-150 text-slate-200 hover:text-white"
						><div class="flex items-center justify-between">
							<div class="flex items-center">
								<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
									<circle class="fill-current text-slate-600" cx="16" cy="8" r="8" />
									<circle class="fill-current text-slate-400" cx="8" cy="16" r="8" /></svg
								><span
									class="ml-3 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
									>Components</span
								>
							</div>
							<div class="flex ml-2 shrink-0">
								<svg
									class="w-3 h-3 ml-1 fill-current false shrink-0 text-slate-400"
									viewBox="0 0 12 12"
								>
									<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
								</svg>
							</div>
						</div></a
					>
					<div class="lg:classSidebarExpanded:block lg:hidden 2xl:block">
						<ul class="hidden mt-1 pl-9">
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/button"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Button</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/form"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Input Form</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/dropdown"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Dropdown</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/alert"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Alert &amp; Banner</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/modal"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Modal</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/pagination"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Pagination</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/tabs"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Tabs</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/breadcrumb"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Breadcrumb</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/badge"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Badge</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/avatar"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Avatar</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/tooltip"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Tooltip</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/accordion"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Accordion</span
									></a
								>
							</li>
							<li class="mb-1 last:mb-0">
								<a
									class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
									href="/component/icons"
									><span
										class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
										>Icons</span
									></a
								>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div> -->
		<Bottom bind:propSidebarExpanded />
	</div>
</div>

<style>
	/* Chrome, Safari and Opera */
	.classNoScrollbar::-webkit-scrollbar {
		display: none;
	}

	.classNoScrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
