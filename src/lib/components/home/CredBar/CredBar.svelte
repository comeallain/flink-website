<script lang="ts">
	import CredItem from "./CredItem.svelte";
	import { CRED_ITEMS } from "$lib/constants/homeContent";
</script>

<div
	class="cred-bar mt-16 grid w-full grid-cols-2 place-items-start gap-x-4 gap-y-3 border-y border-[var(--black)]/10 bg-[color-mix(in_srgb,white_75%,var(--orange))] px-4 py-5 text-xs text-[var(--dim)] [&>*]:w-full sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:px-6 sm:[&>*]:w-auto"
>
	{#each CRED_ITEMS as item}
		<CredItem>
			{item}
		</CredItem>
	{/each}
</div>

