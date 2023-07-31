<script lang="ts">
	import { slide } from 'svelte/transition';
	export let propExpanded = false;
	export let propActive = !false;
</script>

<li class:bg-slate-900={propActive} class="mb-0.5 rounded-sm px-3 py-2 last:mb-0">
	<a
		on:click={() => (propExpanded = !propExpanded)}
		href="#0"
		class="block truncate transition duration-150 text-slate-200 hover:text-slate-200"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
					<path
						class="text-indigo-500 fill-current"
						d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
					/>
					<path
						class="text-indigo-600 fill-current"
						d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
					/>
					<path
						class="text-indigo-200 fill-current"
						d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
					/>
				</svg>
				<span
					class="ml-3 text-sm font-medium duration-200 classSidebarExpanded:whitespace-normal lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
				>
					Teorema Central do Limite e Suas aplicações
				</span>
			</div>
			<div class="flex ml-2 shrink-0">
				<svg
					class:rotate-90={propExpanded}
					class="w-3 h-3 ml-1 fill-current false shrink-0 text-slate-400"
					viewBox="0 0 12 12"
				>
					<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
				</svg>
			</div>
		</div></a
	>
	{#if propExpanded}
		<div transition:slide class="lg:classSidebarExpanded:block lg:hidden 2xl:block">
			<ul class="mt-1 false pl-9">
				<li class="mb-1 last:mb-0">
					<a
						aria-current="page"
						class="block text-indigo-500 truncate transition duration-150"
						href="/"
						><span
							class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
							>Main</span
						></a
					>
				</li>
				<li class="mb-1 last:mb-0">
					<a
						class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
						href="/dashboard/analytics"
						><span
							class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
							>Analytics</span
						></a
					>
				</li>
				<li class="mb-1 last:mb-0">
					<a
						class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
						href="/dashboard/fintech"
						><span
							class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
							>Fintech</span
						></a
					>
				</li>
			</ul>
		</div>
	{/if}
</li>
