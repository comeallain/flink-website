<script lang="ts">
	import QuoteCard from "./QuoteCard.svelte";
	import CredBar from "$lib/components/home/CredBar/CredBar.svelte";
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
	import { QUOTES } from "$lib/constants/homeContent";
</script>

<PageSection
	navTheme="dark"
	className="quotes-section relative flex min-h-screen flex-col border-t border-black/10 bg-[color-mix(in_srgb,white_85%,var(--orange))] pt-20"
>
	<div class="flex flex-1 flex-col">
		<div class="mx-auto max-w-[88rem] px-6">
			<h2
				class="quotes-section-title mb-20 text-center text-4xl font-bold tracking-tight text-[var(--black)] sm:text-5xl md:text-6xl lg:text-7xl"
				use:revealOnScrollAction
			>
				What people are saying
			</h2>
			<div
				class="quotes-grid grid gap-x-12 gap-y-14 sm:grid-cols-1 md:grid-cols-2 lg:gap-x-16 lg:gap-y-16"
			>
				{#each QUOTES as quote}
					<div use:revealOnScrollAction>
						<QuoteCard
							initials={quote.initials}
							name={quote.name}
							role={quote.role}
							quote={quote.quote}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<CredBar />
</PageSection>
