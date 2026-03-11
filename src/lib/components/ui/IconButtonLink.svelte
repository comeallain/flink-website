<script lang="ts">
	import BaseLink from "./BaseLink.svelte";

	export let href: string;
	export let title: string;
</script>

<BaseLink
	{href}
	external
	className="flex h-8 w-8 items-center justify-center rounded-md border border-white/5 bg-white/5 text-[var(--light)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
>
	<span class="sr-only">{title}</span>
	<slot />
</BaseLink>
