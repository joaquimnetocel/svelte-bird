<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { typeSubmenus } from '../types/typeSidebarData.js';
	export let propExpanded = false;
	export let propActive = !false;
	export let propTitle = 'CLICK HERE';
	export let propData: typeSubmenus[];
	export let propIcon: string | undefined = undefined;
</script>

<li class:bg-slate-900={propActive} class="mb-0.5 rounded-sm px-3 py-2 last:mb-0">
	<a
		on:click={() => (propExpanded = !propExpanded)}
		href="#0"
		class="block truncate transition duration-150 text-slate-200 hover:text-slate-200"
	>
		<div class="flex items-center justify-between">
			<slot>
				<div class="flex items-center">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html propIcon ?? ''}
					<span
						class="ml-3 text-sm font-medium duration-200 classSidebarExpanded:whitespace-normal lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
					>
						{propTitle}
					</span>
				</div>
			</slot>
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
				{#each propData as currentSubmenu}
					<li class="mb-1 last:mb-0">
						<a
							aria-current="page"
							class="block text-indigo-500 truncate transition duration-150"
							href={currentSubmenu.stringHref}
							target={currentSubmenu.stringTarget ?? '_self'}
						>
							<span
								class="text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
							>
								{currentSubmenu.stringTitle}
							</span>
						</a>
					</li>
				{/each}
				<!-- <li class="mb-1 last:mb-0">
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
				</li> -->
			</ul>
		</div>
	{/if}
</li>
