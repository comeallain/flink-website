<script lang="ts">
	import { onMount } from "svelte";
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
	import { ctaModalOpen } from "$lib/stores/modal";
	import { PUBLIC_SITE_URL } from "$env/static/public";

	onMount(() => {
		ctaModalOpen.open();
	});
</script>

<svelte:head>
	<title>Join the FLINK Filmmaker Waitlist</title>
	<meta
		name="description"
		content="Reserve your spot among the first 500 filmmakers on FLINK. Keep up to 90% revenue and reach a global audience."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_SITE_URL}/join" />
	<meta property="og:title" content="Join the FLINK Filmmaker Waitlist" />
	<meta
		property="og:description"
		content="Reserve your spot among the first 500 filmmakers on FLINK. Keep up to 90% revenue and reach a global audience."
	/>
	<meta property="og:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Join the FLINK Filmmaker Waitlist" />
	<meta
		name="twitter:description"
		content="Reserve your spot among the first 500 filmmakers on FLINK. Keep up to 90% revenue and reach a global audience."
	/>
	<meta name="twitter:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<link rel="canonical" href="{PUBLIC_SITE_URL}/join" />
</svelte:head>

<Nav />
<HeroScene />
<ValueSection />
<QuotesSection />
<FinalCta />
<Footer />
