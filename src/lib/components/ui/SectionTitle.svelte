<script lang="ts">
	export let as: "h1" | "h2" | "h3" | "h4" = "h2";
	export let align: "left" | "center" = "left";
	export let className = "";

	const baseByLevel: Record<typeof as, string> = {
		h1: "text-4xl sm:text-5xl font-semibold tracking-tight",
		h2: "text-2xl sm:text-3xl font-semibold",
		h3: "text-base font-semibold",
		h4: "text-sm font-semibold",
	};

	$: base = baseByLevel[as];
	$: alignClass = align === "center" ? "text-center" : "";
</script>

<svelte:element this={as} class={`${base} ${alignClass} ${className}`}>
	<slot />
</svelte:element>

