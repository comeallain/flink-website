<script lang="ts">
	import { ValueShieldIcon, BarChartIcon } from "$lib/icons";
	import {
		DevBadge,
		PageSection,
		SectionTitle,
		ValueStat,
	} from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	id="about"
	className="value-section border-t border-white/5 bg-linear-to-b from-black via-slate-950 to-black py-20"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="value-grid grid gap-10 md:grid-cols-3">
			<ValueStat label="Keep what you earn" value="90%">
				<p class="text-sm leading-relaxed text-slate-400">
					You set the price. Blockchain-transparent royalties. No
					hidden fees, no opaque algorithms.
				</p>
			</ValueStat>
			<ValueStat
				label="Audiences resell, you earn forever"
				value="&infin;"
			>
				<p class="text-sm leading-relaxed text-slate-400">
					Every resale triggers a royalty back to you. Your film keeps
					generating revenue indefinitely.
				</p>
			</ValueStat>
			<ValueStat label="Countries, fair pricing" value="190+">
				<p class="text-sm leading-relaxed text-slate-400">
					Region-based pricing aligned to the UN HDI. Your film
					reaches the whole world.
				</p>
			</ValueStat>
			<div
				class="value-card reveal s3 border-t border-slate-800 pt-8"
				use:revealOnScrollAction
			>
				<div class="value-num mb-3">
					<ValueShieldIcon />
				</div>
				<SectionTitle as="h3"
					>Your IP. Your control. Always.</SectionTitle
				>
				<p class="text-sm leading-relaxed text-slate-400">
					FLINK never takes ownership of your content. You retain full
					IP rights. We&rsquo;re a tool to reach your audience &mdash;
					not a gatekeeper standing in the way.
				</p>
			</div>
			<div
				class="value-card reveal s4 border-t border-slate-800 pt-8"
				use:revealOnScrollAction
			>
				<div class="value-num mb-3">
					<BarChartIcon />
				</div>
				<SectionTitle as="h3"
					>Real-time transparent analytics</SectionTitle
				>
				<p class="text-sm leading-relaxed text-slate-400">
					See exactly how your content performs &mdash; views, sales,
					resales, and royalties in real time. No black-box reporting.
					You see what we see.
				</p>
			</div>
			<div
				class="value-card reveal s4 border-t border-slate-800 pt-8"
				use:revealOnScrollAction
			>
				<div class="value-num mb-3">
					<BarChartIcon />
				</div>
				<SectionTitle as="h3">
					AI segmentation &mdash; monetise your raw data
				</SectionTitle>
				<p class="text-sm leading-relaxed text-slate-400">
					Your rushes, VFX assets, and production metadata have
					untapped value. FLINK&rsquo;s AI pipeline lets you segment
					and license creative data to third parties &mdash; an
					additional revenue stream from work you&rsquo;ve already
					done.
				</p>
				<DevBadge />
			</div>
		</div>
	</div>
</PageSection>
