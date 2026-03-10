<script lang="ts">
	import { Nav, Footer } from "$lib/components/layout";
	import {
		Hero,
		VideoCarousel,
		ValueSection,
		QuotesSection,
		CredBar,
		FinalCta,
	} from "$lib/components/home";
</script>

<svelte:head>
	<title>FLINK — The Film Platform Built for Creators</title>
	<meta
		name="description"
		content="FLINK is the first film platform where audiences buy, sell, and truly own independent cinema. Filmmakers keep up to 90% revenue."
	/>
</svelte:head>

<Nav />
<Hero />
<VideoCarousel />
<ValueSection />
<QuotesSection />
<CredBar />
<FinalCta />
<Footer />
