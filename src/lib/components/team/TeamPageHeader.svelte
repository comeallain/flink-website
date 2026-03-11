<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection
	className="page-header mx-auto max-w-[88rem] px-6 pb-16 pt-36 md:pt-40"
>
	<div
		class="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:left-6 sm:right-6"
		aria-hidden="true"
	></div>
	<div
		class="label text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
		use:revealOnScrollAction
	>
		The Team
	</div>
	<h1
		class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
		use:revealOnScrollAction
	>
		Built by creators.<br />For creators.
	</h1>
	<p
		class="mt-4 max-w-xl text-lg leading-relaxed text-[var(--gray)]"
		use:revealOnScrollAction
	>
		Filmmakers, engineers, and industry veterans building the platform we
		wished existed when we were trying to get our own work seen.
	</p>
</PageSection>
