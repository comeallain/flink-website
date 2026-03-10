<script lang="ts">
	import {
		CounterPill,
		PageSection,
		PrimaryCtaLink,
		SectionTitle,
	} from "$lib/components/ui";
	import { FlinkLogo } from "$lib/icons";
	import { revealOnScrollAction, slotCount } from "$lib/home";
</script>

<PageSection
	className="hero relative flex min-h-screen flex-col items-center justify-center bg-black px-4 pb-20 pt-28 text-center"
>
	<div
		class="hero-content relative z-10 mx-auto flex max-w-3xl flex-col items-center"
	>
		<div class="mb-8">
			<CounterPill value={$slotCount} label="of 500 places filled" />
		</div>
		<SectionTitle as="h1" align="center" className="mb-6">
			<FlinkLogo
				className="hero-logo mx-auto h-auto w-[min(520px,80vw)]"
			/>
		</SectionTitle>
		<p
			class="hero-sub proj-reveal max-w-xl text-balance text-base text-slate-300 opacity-0 sm:text-lg"
			use:revealOnScrollAction
		>
			The first film platform where audiences buy, sell, and truly own
			independent cinema. Filmmakers keep up to 90%.
		</p>
		<div class="proj-reveal mt-8 opacity-0" use:revealOnScrollAction>
			<PrimaryCtaLink href="/cta" label="Reserve Your Place" />
		</div>
		<p
			class="hero-fine proj-reveal mt-4 text-xs text-slate-500 opacity-0"
			use:revealOnScrollAction
		>
			60 seconds &middot; Non-binding &middot; Zero cost
		</p>
	</div>
</PageSection>
