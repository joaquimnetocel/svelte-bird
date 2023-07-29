<script>
	import HamburgerButton from './Header/HamburgerButton.svelte';
</script>

<header
	class="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#182235]"
>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 -mb-px">
			<HamburgerButton />

			<div class="flex items-center space-x-3">
				<slot />
			</div>
		</div>
	</div>
</header>
