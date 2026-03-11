<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import favicon from "$lib/assets/favicon.svg";
	import { Toaster } from "svelte-sonner";
	import {
		navTheme,
		getNavThemeFromSection,
		getNavThemeFromBrightness,
		heroProgress,
		inHeroView,
	} from "$lib/home/navTheme";
	import ScrollHintLink from "$lib/components/cta/ScrollHintLink.svelte";

	const { children } = $props();

	onMount(() => {
		let rafId = 0;
		const vh = () => window.innerHeight;
		const updateNavTheme = () => {
			const scrollY = window.scrollY;
			const h = vh();
			inHeroView.set(scrollY < h);
			// Stay dark until well past the hero pin; only then use section/brightness.
			// 2.2 = viewports (220vh) so value section is clearly under nav before we switch to light.
			const heroPinEnd = 2.5 * h;
			if (scrollY >= heroPinEnd) {
				const theme =
					getNavThemeFromSection() ?? getNavThemeFromBrightness();
				navTheme.set(theme);
			} else if (scrollY >= h) {
				navTheme.set("dark");
			}
			// 0–100vh: HeroScene onProgress sets the theme (light on slide 1, dark on 2/3)
		};
		const onScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(() => {
				rafId = 0;
				updateNavTheme();
			});
		};
		updateNavTheme();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateNavTheme);
		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updateNavTheme);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
<!-- Scroll hint: on home, while on slide 3 (progress in [0.6, 0.995]) so it stays visible until value section -->
{#if $page.url.pathname === "/" && $heroProgress >= 0.6 && $heroProgress < 0.995}
	<div
		class="pointer-events-auto fixed inset-x-0 bottom-0 z-[30] flex justify-center"
		in:fade={{ duration: 280 }}
		out:fade={{ duration: 350 }}
	>
		<ScrollHintLink />
	</div>
{/if}
<Toaster />

<style>
	@import "tailwindcss";

	/* Legacy design tokens – neutral black/warm gray, orange #E67E00 */
	:global(:root) {
		--black: #0d0d0d;
		--dark: #111;
		--darker: #0a0a0a;
		--dim: #333;
		--gray: #888;
		--light: #ccc;
		--orange: #e67e00;
		--orange-hover: #b86300;
		--orange-glow: rgba(230, 126, 0, 0.25);
		--orange-10: rgba(230, 126, 0, 0.1);
		--orange-20: rgba(230, 126, 0, 0.2);
		--orange-25: rgba(230, 126, 0, 0.25);
		--orange-30: rgba(230, 126, 0, 0.3);
		--orange-40: rgba(230, 126, 0, 0.4);
		--white: #fff;
		--footer-height: 160px;
	}
	@media (min-width: 640px) {
		:global(:root) {
			--footer-height: 88px;
		}
	}

	:global(body) {
		font-family: "Space Grotesk", sans-serif;
		background: var(--black);
		color: var(--white);
		min-height: 100vh;
		-webkit-font-smoothing: antialiased;
	}
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(.reveal.visible),
	:global(.proj-reveal.visible) {
		opacity: 1;
		transform: translateY(0);
	}

	/* Value section: whole card group reveals on scroll (one observer on section) */
	:global(.value-section-reveal .value-grid > *) {
		opacity: 0;
		transform: translateY(14px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out,
			border-color 0.25s ease;
	}
	:global(.value-section-reveal.visible .value-grid > *) {
		opacity: 1;
		transform: translateY(0);
	}
	:global(.value-section-reveal .value-grid .value-num) {
		opacity: 0;
		transform: scale(0.72);
		transition:
			opacity 0.55s ease-out,
			transform 0.55s ease-out;
	}
	:global(.value-section-reveal.visible .value-grid .value-num) {
		opacity: 1;
		transform: scale(1);
	}
	:global(.value-section-reveal .value-grid .value-card-content) {
		opacity: 0;
		transition: opacity 0.5s ease-out 0.18s;
	}
	:global(.value-section-reveal.visible .value-grid .value-card-content) {
		opacity: 1;
	}

	/* Value cards: border turns orange on hover */
	:global(.value-card:hover) {
		border-color: var(--orange);
	}
</style>
