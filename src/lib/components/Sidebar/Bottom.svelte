<script lang="ts">
	let {
		propSidebarExpanded = $bindable(),
	}: {
		propSidebarExpanded: boolean;
	} = $props();

	function functionClick() {
		propSidebarExpanded = !propSidebarExpanded;
		localStorage.setItem('storageSidebarExpanded', propSidebarExpanded ? 'true' : 'false');
	}
</script>

<div class="mt-auto hidden justify-end pt-3 lg:flex 2xl:hidden">
	<div class="px-3 py-2">
		<button onclick={functionClick}>
			<span class="sr-only">Expand / collapse sidebar</span><svg
				class="h-6 w-6 fill-current"
				class:rotate-180={propSidebarExpanded}
				viewBox="0 0 24 24"
			>
				<path
					class="text-slate-400"
					d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
				/>
				<path class="text-slate-600" d="M3 23H1V1h2z" />
			</svg>
		</button>
	</div>
</div>
