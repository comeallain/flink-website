<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	className="founder-statement relative mx-auto max-w-3xl border-t border-white/5 px-4 py-20 sm:px-6"
>
	<div
		class="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-[var(--orange-30)] to-transparent sm:left-6 sm:right-6"
		aria-hidden="true"
	></div>
	<div
		class="founder-inner flex flex-col gap-8 sm:flex-row sm:items-start"
		use:revealOnScrollAction
	>
		<img
			src="/images/richie.jpg"
			alt="Richie Smyth"
			class="founder-avatar h-20 w-20 flex-shrink-0 rounded-2xl border border-white/10 object-cover"
		/>
		<div class="founder-text">
			<div
				class="label text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
			>
				A message from the founder
			</div>
			<blockquote
				class="mt-3 text-lg italic leading-relaxed text-[var(--light)]"
			>
				&ldquo;I&rsquo;ve spent twenty years directing films, from Netflix
				originals to U2 music videos, and I&rsquo;ve watched too many
				great independent films die in the gap between creation and
				audience. The distribution system is broken: opaque deals,
				vanishing revenue, and gatekeepers who profit while creators
				don&rsquo;t. FLINK exists to fix that. We&rsquo;re building a
				platform where filmmakers keep up to 90% of revenue, control
				their own pricing, retain their IP, and reach audiences in 190+
				countries. No middlemen. No hidden fees. If you&rsquo;ve ever made
				something you believe in and struggled to get it seen, this is
				for you.&rdquo;
			</blockquote>
			<div class="attr mt-4 text-sm font-semibold text-white">
				Richie Smyth <span class="font-normal text-[var(--gray)]"
					>&mdash; Founder &amp; CEO, FLINK</span
				>
			</div>
			<div
				class="founder-credits mt-3 flex flex-wrap gap-1.5"
			>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>The Siege of Jadotville</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>Netflix Original</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>U2</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>The Verve</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>Nike</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>Guinness</span
				>
				<span
					class="credit-pill rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[var(--gray)]"
					>Cannes 2025</span
				>
			</div>
		</div>
	</div>
</PageSection>
