<svelte:options runes={true} />

<script lang="ts">
	let stateVisible = $state(true);
</script>

{#if stateVisible}
	<div class="fixed bottom-10 right-12 z-50 w-auto">
		<div
			class="flex justify-between border border-transparent bg-slate-800 p-3 text-sm text-slate-50 shadow-lg dark:border-slate-700 md:rounded"
		>
			<div class="inline-flex space-x-1 text-slate-500">
				<span>CHECK IT ON</span>
				<a
					class="font-medium text-slate-50 hover:underline"
					href="https://github.com/joaquimnetocel/svelte-bird"
					target="_blank"
					rel="noreferrer"
				>
					GITHUB
				</a>
				<span class="italic">OR</span>
				<a
					class="font-medium text-emerald-400 hover:underline"
					href="https://www.npmjs.com/package/svelte-bird"
					target="_blank"
					rel="noreferrer"
				>
					NPM
				</a>
			</div>
			<button
				onclick={() => (stateVisible = !stateVisible)}
				class="ml-3 border-l border-gray-700 pl-2 text-slate-500 hover:text-slate-400"
			>
				<span class="sr-only">Close</span>
				<svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
					<path
						d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
