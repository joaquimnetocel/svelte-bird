<script lang="ts">
	import 'simplebar';
	import 'simplebar/dist/simplebar.css';
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
			<div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	:global(.simplebar-scrollbar::before) {
		background-color: darkgrey;
	}
</style>
