<script lang="ts">
	export let propTitle = 'CLICK HERE';
	export let propHref = '/';
	export let propIcon: string | undefined;
</script>

<li class="false mb-0.5 rounded-sm px-3 py-2 last:mb-0">
	<a class="block truncate transition duration-150 text-slate-200 hover:text-white" href={propHref}>
		<div class="flex items-center justify-between">
			<div class="flex items-center grow">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html propIcon ?? ''}
				<span
					class="ml-3 text-sm font-medium duration-200 lg:classSidebarExpanded:opacity-100 lg:opacity-0 2xl:opacity-100"
				>
					{propTitle}
				</span>
			</div>
			<div class="flex flex-shrink-0 ml-2">
				<span
					class="inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white bg-indigo-500 rounded"
				>
					4
				</span>
			</div>
		</div></a
	>
</li>
