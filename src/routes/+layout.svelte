<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { get } from "svelte/store";
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
	import { fetchSignupCount } from "$lib/home";
	import ScrollHintLink from "$lib/components/cta/ScrollHintLink.svelte";
	import { Modal } from "$lib/components/ui";
	import SignupForm from "$lib/components/cta/SignupForm.svelte";

	const { children } = $props();

	onMount(() => {
		fetchSignupCount();
		let rafId = 0;
		const vh = () => window.innerHeight;
		const updateNavTheme = () => {
			const pathname = get(page).url.pathname;
			// Team page: always light nav (white elements on dark background)
			if (pathname === "/team") {
				navTheme.set("light");
				inHeroView.set(false);
				return;
			}
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
		const unsubscribe = page.subscribe(() => updateNavTheme());
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateNavTheme);
		return () => {
			unsubscribe();
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
<!-- Scroll hint: on home, for all hero slides (1–3). Text "How?" only on slide 3; chevrons only on slides 1 and 2. -->
<Modal>
	<SignupForm embedded={true} />
</Modal>
<!-- Chevrons: white on slide 1 (p < 0.2), black on slide 2 (0.2–0.6), dim on slide 3 (0.6+). 0.2 aligns with slide 2 fade-in. -->
{#if $page.url.pathname === "/" && $heroProgress < 0.995}
	<div
		class="pointer-events-auto fixed inset-x-0 bottom-0 z-[30] flex justify-center"
		in:fade={{ duration: 280 }}
		out:fade={{ duration: 350 }}
	>
		<ScrollHintLink
			showLabel={$heroProgress >= 0.6}
			chevronVariant={
				$heroProgress < 0.2
					? "white"
					: $heroProgress < 0.6
						? "black"
						: "dim"
			}
			scrollOneViewport={$heroProgress < 0.6}
		/>
	</div>
{/if}
<Toaster richColors theme="dark" />

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

	/* Sonner: error toasts in red */
	:global([data-sonner-toast][data-type="error"]) {
		background: rgb(185 28 28 / 0.95);
		border-color: rgb(220 38 38);
		color: white;
	}
	:global([data-sonner-toast][data-type="error"] [data-title]) {
		color: white;
	}
</style>
