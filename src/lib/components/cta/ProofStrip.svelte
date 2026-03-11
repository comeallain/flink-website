<script lang="ts">
	import CredItem from "$lib/components/home/CredBar/CredItem.svelte";
</script>

<div
	class="proof-strip flex flex-wrap items-center justify-center gap-4 border-t border-white/5 bg-[color-mix(in_srgb,var(--black)_80%,transparent)] px-4 py-10 text-sm text-[var(--gray)] sm:gap-8 sm:px-6"
>
	<CredItem><strong class="font-medium text-white">Award winning</strong>&nbsp;team</CredItem>
	<CredItem>Showcased at <strong class="font-medium text-white">&nbsp;Cannes 2025</strong></CredItem>
	<CredItem>Backed by <strong class="font-medium text-white">&nbsp;creators</strong>&nbsp;worldwide</CredItem>
	<CredItem><strong class="font-medium text-white">Non-binding</strong> &middot; withdraw any time</CredItem>
</div>
