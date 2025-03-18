<svelte:options runes={true} />

<script lang="ts">
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import imageAvatar from '$lib/images/logo.webp';
	import type { typeUserData } from '$lib/types/typeUserData.js';
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	let {
		children,
		propButtonText = 'SIGN OUT',
		onClick,
		propImage,
		propTitle = 'John Smith',
		propInternalTitle,
		propInternalSubtitle,
		propUserMenuArray = [
			{
				stringText: 'GITHUB',
				stringHref: 'https://github.com/joaquimnetocel/svelte-bird',
				stringTarget: '_blank',
			},
			{
				stringText: 'NPM',
				stringHref: 'https://www.npmjs.com/package/svelte-bird',
				stringTarget: '_blank',
			},
		],
	}: {
		onClick?: MouseEventHandler<HTMLButtonElement>;
		propButtonText?: string;
		propButtonLink?: string;
		propImage?: string;
		propTitle?: string;
		propInternalTitle?: string;
		propInternalSubtitle?: string;
		propUserMenuArray?: typeUserData;
		children?: Snippet;
	} = $props();

	let stateExpanded = $state(false);
</script>

<div use:functionClickOutside={() => (stateExpanded = false)} class="relative inline-flex">
	<button
		onclick={() => (stateExpanded = !stateExpanded)}
		class="group inline-flex items-center justify-center"
		aria-haspopup="true"
		aria-expanded="false"
	>
		<img
			class="h-8 w-8 rounded-full"
			src={propImage ?? imageAvatar}
			width="32"
			height="32"
			alt="User"
		/>
		<div class="flex items-center truncate">
			<span
				class="ml-2 truncate font-medium group-hover:text-slate-800 dark:text-slate-300 dark:group-hover:text-slate-200 !md:text-sm"
			>
				{propTitle}
			</span>
			<svg class="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
				<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
			</svg>
		</div>
	</button>
	{#if stateExpanded}
		<div
			transition:slide
			class="absolute right-0 top-full z-10 mt-1 min-w-44 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800"
			class:enter-done={stateExpanded}
			class:exit-done={!stateExpanded}
		>
			<div>
				<div class="mb-1 border-b border-slate-200 px-3 pb-2 pt-0.5 dark:border-slate-700">
					{#if propInternalTitle !== undefined}
						<div class="font-medium text-slate-800 dark:text-slate-100">{propInternalTitle}</div>
					{/if}
					{#if propInternalSubtitle !== undefined}
						<div class="text-xs italic text-slate-500 dark:text-slate-400">
							{propInternalSubtitle}
						</div>
					{/if}
					{#if children}
						{@render children()}
					{/if}
				</div>
				<ul>
					{#each propUserMenuArray as currentUserMenu}
						<li>
							<a
								class="flex items-center px-3 py-1 text-sm font-medium hover:bg-gray-200 dark:hover:text-indigo-400"
								href={currentUserMenu.stringHref}
								target={currentUserMenu.stringTarget}
							>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html currentUserMenu.stringText}
							</a>
						</li>
					{/each}
				</ul>

				{#if propButtonText !== ''}
					<div
						class:border-t={propUserMenuArray.length > 0}
						class="mt-1 flex justify-center border-slate-200 px-3 pb-0.5 pt-2 dark:border-slate-700"
					>
						<button
							onclick={(event) => {
								stateExpanded = !stateExpanded;
								if (onClick) {
									onClick(event);
								}
							}}
							class="block whitespace-nowrap rounded border border-zinc-700 bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700 hover:border-transparent hover:bg-zinc-300"
						>
							{propButtonText}
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
