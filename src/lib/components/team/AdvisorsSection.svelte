<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";

	const advisors = [
		{
			focus: "Marketing",
			name: "Sarah Greenberg",
			bio: "Former Netflix and Hulu marketing executive. Deep platform launch experience across content marketing, audience acquisition, and brand strategy at scale.",
		},
		{
			focus: "Production",
			name: "Felipe Marino",
			bio: "Founder of Occupant Films. Experienced independent film producer with a track record in production, financing, and festival-to-distribution pipelines.",
		},
		{
			focus: "Legal",
			name: "Cheyenne Barmettler",
			bio: "Facing East Entertainment. Specialist in entertainment law, IP protection, and the legal frameworks surrounding digital content distribution and rights management.",
		},
		{
			focus: "Regulation",
			name: "Fernanda Juppet",
			bio: "CryptoMkt. Expert in digital asset regulation, compliance, and the evolving policy landscape for blockchain-based platforms across multiple jurisdictions.",
		},
	];
</script>

<PageSection className="advisors-section relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
	<div
		class="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-[var(--orange-30)] to-transparent sm:left-6 sm:right-6"
		aria-hidden="true"
	></div>
	<div
		class="section-label text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
		use:revealOnScrollAction
	>
		Advisory Board
	</div>
	<div
		class="advisor-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
	>
		{#each advisors as advisor, i}
			<div
				class="advisor-card border-t-2 border-[var(--dim)] pt-6 transition hover:border-[var(--orange)]"
				use:revealOnScrollAction
			>
				<div
					class="advisor-focus text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
				>
					{advisor.focus}
				</div>
				<h4 class="mt-3 text-base font-semibold tracking-tight text-white">
					{advisor.name}
				</h4>
				<p class="mt-1.5 text-[13px] leading-relaxed text-[var(--gray)]">
					{advisor.bio}
				</p>
			</div>
		{/each}
	</div>
</PageSection>
