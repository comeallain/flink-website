<script lang="ts">
	import BaseLink from "./BaseLink.svelte";

	export let href: string;
	export let external = false;
	export let className = "";
</script>

<BaseLink
	{href}
	{external}
	className={`hover:text-slate-100 ${className}`}
>
	<slot />
</BaseLink>

