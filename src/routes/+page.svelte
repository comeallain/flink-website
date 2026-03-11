<script lang="ts">
	import { Nav, Footer } from "$lib/components/layout";
	import {
		ValueSection,
		QuotesSection,
		FinalCta,
	} from "$lib/components/home";
	import {
		HeroScene,
		FounderStatement,
	} from "$lib/components/cta";
</script>

<svelte:head>
	<title>FLINK — The Film Platform Built for Creators</title>
	<meta
		name="description"
		content="FLINK is the first film platform where audiences buy, sell, and truly own independent cinema. Join the pilot, list your films, and keep up to 90% revenue."
	/>
</svelte:head>

<Nav />
<HeroScene />
<ValueSection />
<QuotesSection />
<FinalCta />
<Footer />
