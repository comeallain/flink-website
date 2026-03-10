<script lang="ts">
	import {
		CounterPill,
		PrimaryCtaLink,
		PageSection,
		SectionTitle,
	} from "$lib/components/ui";
	import { ContactLink } from "$lib/constants/links";
	import { revealOnScrollAction, slotRemaining } from "$lib/home";
</script>

<PageSection
	className="final-cta relative overflow-hidden border-t border-white/5 bg-black py-20"
>
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
		<p class="sub reveal s2 mt-4 text-sm leading-relaxed text-slate-400">
			Content uploading starts in ~3 months. Reserve your featured
			placement and 6-month fee holiday now.
		</p>
		<div class="reveal s3 mt-8 inline-flex justify-center">
			<PrimaryCtaLink href="/cta" label="Join the Waitlist" />
		</div>
		<p class="hero-fine reveal s3 mt-4 text-xs text-slate-500">
			Questions?
			<a
				href={`mailto:${ContactLink.Email}`}
				class="font-medium text-orange-400 hover:text-orange-300"
				>{ContactLink.Email}</a
			>
		</p>
	</div>
</PageSection>
