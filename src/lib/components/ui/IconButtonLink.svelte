<script lang="ts">
	import BaseLink from "./BaseLink.svelte";

	export let href: string;
	export let title: string;
</script>

<BaseLink
	{href}
	external
	className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:border-orange-400/60 hover:text-orange-300"
>
	<span class="sr-only">{title}</span>
	<slot />
</BaseLink>
