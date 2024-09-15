<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	// TAILWIND CONFIG.

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

{@render children()}
