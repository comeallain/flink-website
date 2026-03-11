<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";

	const benefits = [
		{
			icon: "💰",
			title: "Up to 90% Revenue",
			description:
				"You set your price, you keep your earnings. Blockchain-transparent royalties with no hidden fees.",
		},
		{
			icon: "🆓",
			title: "Zero Cost to List",
			description:
				"No upfront fees. No subscription. List your films and only pay a small platform fee when you sell.",
		},
		{
			icon: "🌍",
			title: "190+ Countries",
			description:
				"Global reach with region-based pricing aligned to the UN HDI — your film finds audiences everywhere.",
		},
		{
			icon: "🔒",
			title: "You Keep Your IP",
			description:
				"FLINK never takes ownership of your content. Full intellectual property rights remain with you. Always.",
		},
		{
			icon: "🎛️",
			title: "Creator-Set Pricing",
			description:
				"You decide what your work is worth. Set and adjust your content pricing on your terms.",
		},
		{
			icon: "♻️",
			title: "Earn on Every Resale",
			description:
				"Audiences can resell, and you earn a royalty on every single transaction. Revenue that never stops.",
		},
	];
</script>

<PageSection
	className="benefits-section mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20"
>
	<div
		class="benefits-label text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
		use:revealOnScrollAction
	>
		Why FLINK
	</div>
	<div
		class="benefits-grid mt-9 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
	>
		{#each benefits as benefit, i}
			<div
				class="benefit-card rounded-2xl border border-white/5 bg-white/[0.015] p-7 text-center transition hover:border-[var(--orange-20)] hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
				use:revealOnScrollAction
			>
				<div class="benefit-icon mb-3 text-4xl leading-none">
					{benefit.icon}
				</div>
				<h3
					class="text-base font-semibold tracking-tight text-white"
				>
					{benefit.title}
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--gray)]">
					{benefit.description}
				</p>
			</div>
		{/each}
	</div>
</PageSection>
