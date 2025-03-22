<svelte:options runes={true} />

<script lang="ts">
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import { iconNotification } from '$lib/icons/iconNotification.js';
	import type { typeNotificationsData } from '$lib/types/typeNotificationsData.js';
	import { slide } from 'svelte/transition';

	let {
		propNewNotifications = true,
		propTitle = 'NOTIFICATIONS:',
		propData = [],
		propNotFoundMessage = 'NO NOTIFICATION FOUND!',
		propIcon = iconNotification,
	}: {
		propNewNotifications?: boolean;
		propTitle?: string;
		propData?: typeNotificationsData;
		propNotFoundMessage?: string;
		propIcon?: string;
	} = $props();

	let stateExpanded = $state(false);
</script>

<div use:functionClickOutside={() => (stateExpanded = false)} class="relative inline-flex">
	<button
		onclick={() => (stateExpanded = !stateExpanded)}
		class="false flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
	>
		<span class="sr-only">{propTitle}</span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html propIcon}
		{#if propNewNotifications}
			<div
				class="absolute top-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500 dark:border-[#182235]"
			></div>
		{/if}
	</button>
	{#if stateExpanded}
		<div
			transition:slide
			class:enter-done={stateExpanded}
			class="absolute top-full right-0 z-10 mt-1 -mr-48 w-80 min-w-80 origin-top-right overflow-hidden rounded-sm border border-slate-200 bg-white py-1.5 shadow-lg sm:mr-0 sm:w-96 dark:border-slate-700 dark:bg-slate-800"
		>
			<div>
				<div
					class="px-4 pt-1.5 pb-2 text-xs font-semibold text-slate-400 uppercase dark:text-slate-500"
				>
					{propTitle}
				</div>
				{#if propData.length === 0}
					<div class="flex justify-center">
						<small>{propNotFoundMessage}</small>
					</div>
				{:else}
					<ul>
						{#each propData as current (current.stringText)}
							<li class="border-b border-slate-200 last:border-0 dark:border-slate-700">
								<a
									class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20"
									href={current.stringHref}
									target={current.stringTarget}
								>
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html current.stringText}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>
