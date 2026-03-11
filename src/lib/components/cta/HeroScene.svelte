<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	import { createThreeFadeScene } from "$lib/home/scrollScene";
	import { navTheme, heroProgress } from "$lib/home/navTheme";
	import CtaHero from "./CtaHero.svelte";
	import HeroCopyPanel from "./HeroCopyPanel.svelte";

	let sceneEl: HTMLElement;
	let heroEl: HTMLElement;
	let whiteHeroEl: HTMLElement;
	let panelEl: HTMLElement;

	let destroyScene: (() => void) | null = null;

	onMount(() => {
		if (typeof window === "undefined") return;

		// Ensure we're at top so timeline progress starts at 0
		window.scrollTo(0, 0);

		// Delay GSAP until after first paint so slide 1 is visible before any animation
		const raf = requestAnimationFrame(() => {
			destroyScene = createThreeFadeScene(
				sceneEl,
				heroEl,
				whiteHeroEl,
				panelEl,
				{
					end: "+=160%",
					onProgress: (p) => {
						heroProgress.set(p);
						navTheme.set(p > 0.12 ? "dark" : "light");
					},
				},
			);
		});

		return () => {
			cancelAnimationFrame(raf);
			destroyScene?.();
			destroyScene = null;
		};
	});

	onDestroy(() => {
		destroyScene?.();
		destroyScene = null;
	});
</script>

<!-- Single pinned section: all three slides stacked, scroll drives 1 → 2 → 3 -->
<section bind:this={sceneEl} class="hero-scene relative z-0 w-full bg-[color-mix(in_srgb,white_85%,var(--orange))]">
	<!-- Slide 2 (middle): white hero background only, full width -->
	<div
		bind:this={whiteHeroEl}
		class="hero-slide absolute left-0 top-0 z-[5] flex h-screen w-full items-center justify-center opacity-0"
	>
		<CtaHero variant="light" showHeadline={false} />
	</div>
	<!-- Slide 1 (front): dark hero background only, full width -->
	<div
		bind:this={heroEl}
		class="hero-slide absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center"
	>
		<CtaHero variant="dark" showHeadline={false} />
	</div>
	<!-- Slide 3 (back): copy panel -->
	<div
		bind:this={panelEl}
		class="hero-slide absolute left-0 top-0 z-[1] flex h-screen w-full items-center justify-center opacity-0 bg-[color-mix(in_srgb,white_85%,var(--orange))]"
	>
		<HeroCopyPanel />
	</div>
	<!-- Shared headline: hide before slide 3 so "Your film deserves / true ownership" never stacks with slide 3 copy -->
	<div
		class="hero-headline pointer-events-none absolute left-0 top-0 z-20 flex h-screen w-full items-center justify-center px-4 text-center transition-opacity duration-200"
		aria-hidden="true"
		style="opacity: {$heroProgress < 0.38 ? 1 : 0};"
	>
		<h1
			class="max-w-6xl text-balance text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl transition-colors duration-1000 ease-out"
			style="color: {$heroProgress < 0.12 ? '#fff' : 'var(--black)'};"
		>
			{#if $heroProgress < 0.12}
				Your film deserves<br /><span class="text-[var(--orange)]"
					>a global audience.</span
				>
			{:else}
				Your film deserves<br /><span class="text-[var(--orange)]"
					>true ownership.</span
				>
			{/if}
		</h1>
	</div>
</section>

<style>
	.hero-scene {
		height: 200vh;
		width: 100%;
	}

	.hero-slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}
</style>
