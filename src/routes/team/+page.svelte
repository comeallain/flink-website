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
</script>

<svelte:head>
	<title>FLINK — Team</title>
	<meta
		name="description"
		content="Meet the FLINK team: filmmakers, engineers, and industry veterans building the platform for independent creators."
	/>
</svelte:head>

<Nav />
<TeamPageHeader />
<FounderSection />
<TeamGrid />
<AdvisorsSection />
<PartnersSection />
<CtaStrip />
<Footer />
