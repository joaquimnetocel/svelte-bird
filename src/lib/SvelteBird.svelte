<script lang="ts">
	import 'simplebar';
	import 'simplebar/dist/simplebar.css';
	import HamburgerButton from './Header/HamburgerButton.svelte';
	// or "import SimpleBar from 'simplebar';" if you want to use it manually.
	import Sidebar from './Sidebar.svelte';
	import { functionIsRunningOnBrowser } from './functionIsRunningOnBrowser.js';
	import {
		functionCreateDarkModeStore,
		functionReadDarkModeStore,
	} from './stores/storeDarkMode.js';
	import { functionCreateMobileMenuStore } from './stores/storeMobileMenu.js';

	functionCreateMobileMenuStore();
	functionCreateDarkModeStore();
	const storeDarkMode = functionReadDarkModeStore();

	function functionSidebarExpanded() {
		if (functionIsRunningOnBrowser()) {
			return localStorage.getItem('storageSidebarExpanded') === 'false' ? false : true;
		}
		return true;
	}
	let stateSidebarExpanded = functionSidebarExpanded();
</script>

<div id="idHtml" class:dark={$storeDarkMode} style:color-scheme={$storeDarkMode ? 'dark' : ''}>
	<div
		id="idBody"
		class:classSidebarExpanded={stateSidebarExpanded}
		class="antialiased font-inter bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400"
	>
		<div class="flex h-screen overflow-hidden">
			<Sidebar bind:propSidebarExpanded={stateSidebarExpanded} />
			<div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-hidden">
				<header
					class="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#182235]"
				>
					<div class="flex px-4 sm:px-6 lg:px-8">
						<HamburgerButton />
						<div class="flex items-center justify-between flex-grow h-16 -mb-px">
							<slot name="slotHeader" />
						</div>
					</div>
				</header>
				<main class="flex-grow overflow-y-auto">
					<slot />
				</main>
				<footer
					class="px-2 sm:px-4 lg:px-4 sticky z-30 border-t border-slate-400 bg-white dark:border-slate-700 dark:bg-[#182235]"
				>
					<slot name="slotFooter" />
				</footer>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.simplebar-scrollbar::before) {
		background-color: darkgrey;
	}
</style>
