<script lang="ts">
	import { Nav, Footer } from "$lib/components/layout";
	import {
		TeamPageHeader,
		FounderSection,
		TeamGrid,
		AdvisorsSection,
		PartnersSection,
		CtaStrip,
	} from "$lib/components/team";
	import { PUBLIC_SITE_URL } from "$env/static/public";
</script>

<svelte:head>
	<title>FLINK — Team</title>
	<meta
		name="description"
		content="Meet the FLINK team: filmmakers, engineers, and industry veterans building the platform for independent creators."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_SITE_URL}/team" />
	<meta property="og:title" content="FLINK — Team" />
	<meta
		property="og:description"
		content="Meet the FLINK team: filmmakers, engineers, and industry veterans building the platform for independent creators."
	/>
	<meta property="og:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FLINK — Team" />
	<meta
		name="twitter:description"
		content="Meet the FLINK team: filmmakers, engineers, and industry veterans building the platform for independent creators."
	/>
	<meta name="twitter:image" content="{PUBLIC_SITE_URL}/images/og.jpg" />
	<link rel="canonical" href="{PUBLIC_SITE_URL}/team" />
</svelte:head>

<Nav />
<TeamPageHeader />
<FounderSection />
<TeamGrid />
<AdvisorsSection />
<PartnersSection />
<CtaStrip />
<Footer />
