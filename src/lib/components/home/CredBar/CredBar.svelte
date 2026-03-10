<script lang="ts">
	import CredItem from "./CredItem.svelte";
	import { CRED_ITEMS } from "$lib/constants/homeContent";
</script>

<div
	class="cred-bar flex flex-wrap items-center justify-center gap-4 border-y border-white/5 bg-black/80 px-4 py-5 text-xs text-slate-400 sm:gap-8 sm:px-6"
>
	{#each CRED_ITEMS as item}
		<CredItem>
			{item}
		</CredItem>
	{/each}
</div>

