<script lang="ts">
	import BaseLink from "./BaseLink.svelte";

	export let href: string;
	export let external = false;
	export let className = "";
</script>

<BaseLink {href} {external} className={`underline-offset-4 hover:underline ${className}`}>
	<slot />
</BaseLink>
