<script lang="ts">
	import BaseLink from "./BaseLink.svelte";
	import { ArrowRightIcon } from "$lib/icons";
	import {
		primaryCtaBaseClass,
		primaryCtaSizeClassBySize,
		type PrimaryCtaSize
	} from "./primaryCtaConfig";

	export let href: string;
	export let label: string;
	export let size: PrimaryCtaSize = "md";

	$: sizeClass = primaryCtaSizeClassBySize[size];
</script>

<BaseLink
	{href}
	className={`${primaryCtaBaseClass} ${sizeClass}`}
>
	{label}
	<ArrowRightIcon />
</BaseLink>

