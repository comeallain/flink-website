<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	className="partners-section relative mx-auto max-w-[88rem] border-t border-white/5 px-6 py-20"
>
	<div
		class="section-label text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
		use:revealOnScrollAction
	>
		Partners
	</div>
	<div
		class="partner-row mt-10 flex flex-wrap gap-8"
		use:revealOnScrollAction
	>
		<a
			href="https://akasha.ie"
			target="_blank"
			rel="noopener"
			class="partner-pill rounded-xl border border-white/5 bg-white/5 px-8 py-4 text-[15px] font-semibold tracking-wide text-[var(--light)] no-underline transition hover:border-[var(--orange-20)] hover:text-white"
		>
			AKASHA
		</a>
		<a
			href="https://ie.superteam.fun/"
			target="_blank"
			rel="noopener"
			class="partner-pill rounded-xl border border-white/5 bg-white/5 px-8 py-4 text-[15px] font-semibold tracking-wide text-[var(--light)] no-underline transition hover:border-[var(--orange-20)] hover:text-white"
		>
			Solana Superteam Ireland
		</a>
	</div>
</PageSection>
