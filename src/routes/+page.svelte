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
	import { PUBLIC_SITE_URL } from "$env/static/public";
</script>

<svelte:head>
	<title>FLINK — The Film Platform Built for Creators</title>
	<meta
		name="description"
		content="FLINK is the first film platform where audiences buy, sell, and truly own independent cinema. Join the pilot, list your films, and keep up to 90% revenue."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={PUBLIC_SITE_URL} />
	<meta property="og:title" content="FLINK — The Film Platform Built for Creators" />
	<meta
		property="og:description"
		content="FLINK is the first film platform where audiences buy, sell, and truly own independent cinema. Join the pilot, list your films, and keep up to 90% revenue."
	/>
	<meta property="og:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FLINK — The Film Platform Built for Creators" />
	<meta
		name="twitter:description"
		content="FLINK is the first film platform where audiences buy, sell, and truly own independent cinema. Join the pilot, list your films, and keep up to 90% revenue."
	/>
	<meta name="twitter:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<link rel="canonical" href={PUBLIC_SITE_URL} />
</svelte:head>

<Nav />
<HeroScene />
<ValueSection />
<QuotesSection />
<FinalCta />
<Footer />
