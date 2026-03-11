<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { PrimaryCtaLink } from "$lib/components/ui";
	import { ContactLink } from "$lib/constants/links";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	className="cta-strip relative border-t border-white/5 px-4 py-20 text-center sm:px-6"
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
	<div class="relative z-10 mt-6" use:revealOnScrollAction>
		<PrimaryCtaLink
			href={`mailto:${ContactLink.Email}`}
			label="Get in Touch"
		/>
	</div>
</PageSection>
