<script lang="ts">
	import QuoteCard from "./QuoteCard.svelte";
	import { PageSection } from "$lib/components/ui";
	import { revealOnScrollAction } from "$lib/home";
	import { QUOTES } from "$lib/constants/homeContent";
</script>

<PageSection
	className="quotes-section relative border-t border-white/5 bg-slate-950/80 py-20"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="quotes-grid grid gap-8 md:grid-cols-2">
			{#each QUOTES as quote}
				<div use:revealOnScrollAction>
					<QuoteCard
						initials={quote.initials}
						name={quote.name}
						role={quote.role}
						quote={quote.quote}
						delayClass={quote.delayClass}
					/>
				</div>
			{/each}
		</div>
	</div>
</PageSection>
