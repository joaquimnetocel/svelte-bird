<script lang="ts">
	export let propTitle = 'CLICK HERE';
	export let propHref = '/';
	export let propIcon: string | undefined;
	export let propBadge: string | undefined = undefined;
	export let propActiveMenu: string | undefined = undefined;
	export let propMenuName: string;
</script>

<li
	class="mb-0.5 rounded-xl px-3 py-2 last:mb-0"
	class:bg-gradient-to-r={propActiveMenu === propMenuName}
	class:from-[#fcb69f]={propActiveMenu === propMenuName}
	class:to-[#ffecd2]={propActiveMenu === propMenuName}
>
	<a
		class="block truncate transition duration-150"
		href={propHref}
		class:text-slate-200={propActiveMenu !== propMenuName}
		class:text-black={propActiveMenu === propMenuName}
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html propIcon ?? ''}
				<span
					class="ml-2 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
				>
					{propTitle}
				</span>
			</div>
			{#if propBadge !== undefined}
				<div class="flex ml-2">
					<span
						class:text-white={propActiveMenu === propMenuName}
						class:bg-slate-800={propActiveMenu === propMenuName}
						class:text-slate-600={propActiveMenu !== propMenuName}
						class:bg-yellow-400={propActiveMenu !== propMenuName}
						class="inline-flex items-center justify-center h-5 px-2 text-xs font-medium rounded"
					>
						{propBadge}
					</span>
				</div>
			{/if}
		</div></a
	>
</li>
