<script lang="ts">
	import { slide } from 'svelte/transition';
	import imageAvatar from './User/avatar.png';
	import type { typeUserMenuArray } from './User/typeUserMenuArray.js';

	export let propButtonText = 'SIGN OUT';
	export let propButtonLink = '/';
	export let propImage = imageAvatar;
	export let propTitle = 'John Smith';
	export let propUserMenuArray: typeUserMenuArray = [
		{
			stringText: 'GITHUB',
			stringHref: 'https://github.com/joaquimnetocel',
			stringTarget: '_blank',
		},
		{
			stringText: 'NPM',
			stringHref: '????',
			stringTarget: '_blank',
		},
	];
	let stateExpanded = false;
</script>

<div class="relative inline-flex">
	<button
		on:click={() => (stateExpanded = !stateExpanded)}
		class="inline-flex items-center justify-center group"
		aria-haspopup="true"
		aria-expanded="false"
	>
		<img class="w-8 h-8 rounded-full" src={propImage} width="32" height="32" alt="User" />
		<div class="flex items-center truncate">
			<span
				class="ml-2 text-sm font-medium truncate group-hover:text-slate-800 dark:text-slate-300 dark:group-hover:text-slate-200"
			>
				{propTitle}
			</span>
			<svg class="w-3 h-3 ml-1 fill-current shrink-0 text-slate-400" viewBox="0 0 12 12">
				<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
			</svg>
		</div>
	</button>
	{#if stateExpanded}
		<div
			transition:slide
			class="min-w-44 absolute right-0 top-full z-10 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800"
			class:enter-done={stateExpanded}
			class:exit-done={!stateExpanded}
		>
			<div>
				<div class="mb-1 border-b border-slate-200 px-3 pb-2 pt-0.5 dark:border-slate-700">
					<slot>
						<div class="font-medium text-slate-800 dark:text-slate-100">John Smith</div>
						<div class="text-xs italic text-slate-500 dark:text-slate-400">Administrator</div>
					</slot>
				</div>
				<ul>
					{#each propUserMenuArray as currentUserMenu}
						<li>
							<a
								class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
								href={currentUserMenu.stringHref}
								target={currentUserMenu.stringTarget}
							>
								{currentUserMenu.stringText}
							</a>
						</li>
					{/each}
				</ul>
				{#if propButtonText !== ''}
					<div class="mt-1 border-t border-slate-200 px-3 pt-2 pb-0.5 dark:border-slate-700">
						<a
							href={propButtonLink}
							class="px-3 py-1 font-semibold border rounded bg-zinc-100 text-zinc-700 border-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-transparent"
						>
							{propButtonText}
						</a>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
