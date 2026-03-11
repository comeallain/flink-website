<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { ArrowRightIcon } from "$lib/icons";
	import { ContactLink } from "$lib/constants/links";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	className="cta-strip relative px-4 py-16 text-center sm:px-6"
>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(230,126,0,0.05)_0%,transparent_70%)] pointer-events-none"
		aria-hidden="true"
	></div>
	<p
		class="relative z-10 text-base text-[var(--gray)]"
		use:revealOnScrollAction
	>
		Interested in joining the team or advising?
	</p>
	<a
		href={`mailto:${ContactLink.Email}`}
		class="btn-hero relative z-10 mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-9 py-3.5 text-[15px] font-semibold text-black shadow-lg shadow-[var(--orange-glow)] transition hover:bg-[var(--orange-hover)] hover:shadow-[var(--orange-glow)] hover:-translate-y-0.5"
		use:revealOnScrollAction
	>
		Get in Touch
		<ArrowRightIcon />
	</a>
</PageSection>
