<script lang="ts">
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	let {
		children,
		propTitle = 'NEED HELP?',
		propIcon = `
		<svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path
				class="fill-current text-slate-500 dark:text-slate-400"
				d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
			/>
		</svg>
	`,
	}: {
		children?: Snippet;
		propTitle?: string;
		propIcon?: string;
	} = $props();

	let stateVisible = $state(false);
</script>

<div use:functionClickOutside={() => (stateVisible = false)} class="relative inline-flex">
	<button
		onclick={() => (stateVisible = !stateVisible)}
		class="false flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
		aria-haspopup="true"
		aria-expanded="false"
	>
		<span class="sr-only">{propTitle}</span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html propIcon}
	</button>

	{#if stateVisible}
		<div
			transition:slide
			class="absolute top-full right-0 z-10 mt-1 min-w-44 origin-top-right overflow-hidden rounded-sm border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800"
		>
			<div>
				<div
					class="px-3 pt-1.5 pb-2 text-xs font-semibold whitespace-nowrap text-slate-400 uppercase dark:text-slate-500"
				>
					{propTitle}
				</div>
				{#if children}
					{@render children()}
				{:else}
					<ul>
						<li>
							<a
								class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
								href="/"
							>
								<svg
									class="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
									viewBox="0 0 12 12"
								>
									<rect y="3" width="12" height="9" rx="1" />
									<path d="M2 0h8v2H2z" /></svg
								>
								<span>DOCUMENTATION</span>
							</a>
						</li>
						<li>
							<a
								class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
								href="/#0"
							>
								<svg
									class="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
									viewBox="0 0 12 12"
								>
									<path
										d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
									/>
								</svg>
								<span>SUPPORT SITE</span>
							</a>
						</li>
						<li>
							<a
								class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
								href="/#0"
								><svg
									class="mr-2 h-3 w-3 shrink-0 fill-current text-indigo-300 dark:text-indigo-500"
									viewBox="0 0 12 12"
								>
									<path
										d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
									/>
								</svg>
								<span> CONTACT US </span>
							</a>
						</li>
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>
