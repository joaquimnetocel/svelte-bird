<svelte:options runes={true} />

<script lang="ts">
	import { functionClickOutside } from '$lib/functions/functionClickOutside.js';
	import { iconSearch } from '$lib/icons/iconSearch.js';
	import { slide } from 'svelte/transition';

	let stateVisible = $state(false);
</script>

<div>
	<button
		onclick={() => (stateVisible = !stateVisible)}
		class="false ml-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
		aria-controls="search-modal"
	>
		<!--<span class="sr-only">Search</span>-->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html iconSearch}
	</button>

	<div
		class:hidden={!stateVisible}
		class="bg-opacity-30 fixed inset-0 z-50 bg-slate-900 transition-opacity"
		aria-hidden="true"
	></div>
	{#if stateVisible}
		<div
			transition:slide
			id="search-modal"
			class="fixed inset-0 top-20 z-50 mb-4 flex items-start justify-center overflow-hidden px-4 sm:px-6"
			role="dialog"
			aria-modal="true"
		>
			<div
				use:functionClickOutside={() => (stateVisible = false)}
				class="max-h-full w-full max-w-2xl overflow-auto rounded-sm border border-transparent bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
			>
				<form class="border-b border-slate-200 dark:border-slate-700">
					<div class="relative">
						<label for="search" class="sr-only">Search</label><input
							id="search"
							class="w-full appearance-none border-0 bg-white py-3 pr-4 pl-10 placeholder-slate-400 focus:ring-transparent dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500"
							type="search"
							placeholder="Search Anything…"
						/><button class="group absolute inset-0 right-auto" type="submit" aria-label="Search">
							<svg
								class="mr-2 ml-4 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400"
								viewBox="0 0 16 16"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
								/>
								<path
									d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
								/>
							</svg>
						</button>
					</div>
				</form>
				<div class="px-2 py-4">
					<div class="mb-3 last:mb-0">
						<div
							class="mb-2 px-2 text-xs font-semibold text-slate-400 uppercase dark:text-slate-500"
						>
							Recent searches
						</div>
						<ul class="text-sm">
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Form Builder - 23 hours on-demand video</span></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Access Mosaic on mobile and TV</span></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Product Update - Q4 2021</span></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Master Digital Marketing Strategy course</span></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Dedicated forms for products</span></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
										/></svg
									><span>Product Update - Q4 2021</span></a
								>
							</li>
						</ul>
					</div>
					<div class="mb-3 last:mb-0">
						<div
							class="mb-2 px-2 text-xs font-semibold text-slate-400 uppercase dark:text-slate-500"
						>
							Recent pages
						</div>
						<ul class="text-sm">
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
										/></svg
									><span
										><span class="font-medium">Messages</span> -
										<span class="text-slate-600 group-hover:text-white dark:text-slate-400"
											>Conversation / … / Mike Mills</span
										></span
									></a
								>
							</li>
							<li>
								<a
									class="group flex items-center rounded-sm p-2 text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
									href="/#0"
									><svg
										class="group-hover:text-opacity-50 mr-3 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-white dark:text-slate-500"
										viewBox="0 0 16 16"
									>
										<path
											d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
										/></svg
									><span
										><span class="font-medium">Messages</span> -
										<span class="text-slate-600 group-hover:text-white dark:text-slate-400"
											>Conversation / … / Eva Patrick</span
										></span
									></a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
