<script lang="ts">
	import {
		CounterPill,
		PrimaryCtaLink,
		PageSection,
		SectionTitle,
	} from "$lib/components/ui";
	import { revealOnScrollAction, slotRemaining } from "$lib/home";
</script>

<PageSection
	navTheme="light"
	className="final-cta relative overflow-hidden border-t border-white/5 bg-[var(--black)] py-20 min-h-[calc(100vh-var(--footer-height))] flex flex-col justify-center"
>
	<!-- Faded background image -->
	<div
		class="final-cta-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 blur-xs"
		style="background-image: url('/images/seats.jpg');"
		aria-hidden="true"
	></div>
	<div
		class="final-cta-overlay absolute inset-0 bg-gradient-to-b from-[var(--black)]/50 via-[var(--black)]/75 to-[var(--black)]"
		aria-hidden="true"
	></div>
	<div
		class="final-content relative z-10 mx-auto max-w-xl px-4 text-center sm:px-0"
		use:revealOnScrollAction
	>
		<div class="mb-7">
			<CounterPill value={$slotRemaining} label="places remaining" />
		</div>
		<SectionTitle
			as="h2"
			align="center"
			className="reveal s1 text-balance text-3xl sm:text-4xl text-white"
		>
		500 filmmakers.<br />
			First come, first featured.
		</SectionTitle>
		<p
			class="sub reveal s2 mt-4 text-sm leading-relaxed text-[var(--gray)] flex flex-col items-center"
		>
			<span>Content uploading starts in ~3 months.</span><span
				>Reserve your featured placement and <span
					class="font-medium text-[var(--orange)]"
					>6-month fee holiday</span
				> now.</span
			>
		</p>
		<div class="reveal s3 mt-8 inline-flex justify-center">
			<PrimaryCtaLink href="#signup" label="Join the Waitlist" />
		</div>
	</div>
</PageSection>
