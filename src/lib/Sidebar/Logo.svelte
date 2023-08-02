<script lang="ts">
	import imageLogo from './imageLogo.webp';

	export let propLogo = imageLogo;
	export let propWidth = 30;
</script>

<a aria-current="page" class="flex items-center space-x-2" href="/">
	<img src={propLogo} alt="Logo" width={propWidth} />
	<slot>
		<span
			class="hidden text-xl font-bold text-gray-300 lg:text-2xl classSidebarExpanded:inline bold"
		>
			SVELTE-BIRD
		</span>
	</slot>
</a>
