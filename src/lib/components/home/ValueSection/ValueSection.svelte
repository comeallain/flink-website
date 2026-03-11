<script lang="ts">
	import { ValueShieldIcon } from "$lib/icons";
	import { LineChart, CircleDollarSign } from "lucide-svelte";
	import {
		PageSection,
		SectionTitle,
		ValueStat,
	} from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";

	const valueIconSize = 44;
	const valueIconColor = "var(--orange)";
</script>

<PageSection
	id="about"
	navTheme="light"
	className="value-section relative z-10 -mt-[100vh] flex min-h-screen flex-col border-t border-white/5 bg-[var(--black)] py-20"
>
	<div class="mx-auto max-w-[88rem] px-6">
		<h2
			class="value-section-title mb-20 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
		>
			How it works
		</h2>
		<div
			class="value-section-reveal"
			use:revealOnScrollAction={{ threshold: 0.2 }}
		>
			<div class="value-grid grid gap-10 md:grid-cols-3">
			<ValueStat label="Keep what you earn" value="90%">
				<p class="text-sm leading-relaxed text-[var(--gray)]">
					You set the price. Blockchain-transparent royalties. No
					hidden fees, no opaque algorithms.
				</p>
			</ValueStat>
			<ValueStat
				label="Audiences resell, you earn forever"
				value="&infin;"
			>
				<p class="text-sm leading-relaxed text-[var(--gray)]">
					Every resale triggers a royalty back to you. Your film keeps
					generating revenue indefinitely.
				</p>
			</ValueStat>
			<ValueStat label="Countries, fair pricing" value="190+">
				<p class="text-sm leading-relaxed text-[var(--gray)]">
					Region-based pricing aligned to the UN HDI. Your film
					reaches the whole world.
				</p>
			</ValueStat>
			<div
				class="value-card border-t border-white/20 pt-8"
			>
				<div class="value-num mb-3">
					<ValueShieldIcon />
				</div>
				<div class="value-card-content">
					<SectionTitle as="h3" className="mb-2"
						>Your IP. Your control. Always.</SectionTitle
					>
					<p class="text-sm leading-relaxed text-[var(--gray)]">
						FLINK never takes ownership of your content. You retain full
						IP rights. We&rsquo;re a tool to reach your audience &mdash;
						not a gatekeeper standing in the way.
					</p>
				</div>
			</div>
			<div
				class="value-card border-t border-white/20 pt-8"
			>
				<div class="value-num mb-3">
					<LineChart size={valueIconSize} color={valueIconColor} />
				</div>
				<div class="value-card-content">
					<SectionTitle as="h3" className="mb-2"
						>Real-time transparent analytics</SectionTitle
					>
					<p class="text-sm leading-relaxed text-[var(--gray)]">
						See exactly how your content performs &mdash; views, sales,
						resales, and royalties in real time. No black-box reporting.
						You see what we see.
					</p>
				</div>
			</div>
			<div
				class="value-card border-t border-white/20 pt-8"
			>
				<div class="value-num mb-3">
					<CircleDollarSign size={valueIconSize} color={valueIconColor} />
				</div>
				<div class="value-card-content">
					<SectionTitle as="h3" className="mb-2">
						AI segmentation &mdash; monetise your raw data
					</SectionTitle>
					<p class="text-sm leading-relaxed text-[var(--gray)]">
						Your rushes, VFX assets, and production metadata have
						untapped value. FLINK&rsquo;s AI pipeline lets you segment
						and license creative data to third parties &mdash; an
						additional revenue stream from work you&rsquo;ve already
						done.
					</p>
				</div>
			</div>
		</div>
		</div>
	</div>
</PageSection>
