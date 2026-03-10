<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import { Toaster } from "svelte-sonner";

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
<Toaster />

<style>
	@import "tailwindcss";
</style>
