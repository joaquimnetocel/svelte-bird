<svelte:options runes={true} />

<script lang="ts">
	import { functionSetMenuStates } from '$lib/functions/index.js';
	import Download from './Download.svelte';
	import type { typeMenuNames } from './types/typeMenuNames.js';

	functionSetMenuStates<typeMenuNames>({
		parActiveMenu: 'menuHome',
		parExpandedMenu: '',
	});
</script>

<div class="max-w-9xl mx-auto w-full sm:px-6">
	<div class="relative mb-8 overflow-hidden rounded-xs bg-indigo-200 p-4 sm:p-6 dark:bg-indigo-500">
		<div
			class="pointer-events-none absolute top-0 right-0 -mt-4 mr-16 hidden xl:block"
			aria-hidden="true"
		>
			<svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
				<defs>
					<path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
					<path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
					<path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
					<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
						<stop stop-color="#A5B4FC" offset="0%" />
						<stop stop-color="#818CF8" offset="100%" />
					</linearGradient>
					<linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
						<stop stop-color="#4338CA" offset="0%" />
						<stop stop-color="#6366F1" stop-opacity="0" offset="100%" />
					</linearGradient>
				</defs>
				<g fill="none" fill-rule="evenodd">
					<g transform="rotate(64 36.592 105.604)">
						<mask id="welcome-d" fill="#fff"><use xlink:href="#welcome-a" /></mask>
						<use fill="url(#welcome-b)" xlink:href="#welcome-a" />
						<path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
					</g>
					<g transform="rotate(-51 91.324 -105.372)">
						<mask id="welcome-f" fill="#fff"><use xlink:href="#welcome-e" /></mask>
						<use fill="url(#welcome-b)" xlink:href="#welcome-e" />
						<path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
					</g>
					<g transform="rotate(44 61.546 392.623)">
						<mask id="welcome-h" fill="#fff"><use xlink:href="#welcome-g" /></mask>
						<use fill="url(#welcome-b)" xlink:href="#welcome-g" />
						<path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
					</g>
				</g>
			</svg>
		</div>
		<div class="relative">
			<h1 class="mb-1 text-2xl font-bold text-slate-800 md:text-3xl dark:text-slate-100">
				Good afternoon, Acme Inc. 👋
			</h1>
			<p class="dark:text-indigo-200">Here is what’s happening with your projects today:</p>
		</div>
	</div>
</div>
<Download />
