<script lang="ts">
	// Renders the "How?" + chevrons scroll-down link. Use in a context where it can sit on top (e.g. HeroScene with z-[30]).
	// When showLabel is false, only the chevrons are shown (e.g. on hero slides 1 and 2).
	// chevronVariant: "white" (slide 1), "black" (slide 2), "dim" (slide 3, default).
	// When scrollOneViewport is true, click scrolls by a fraction of viewport instead of going to #about (use on hero slides 1–2).
	// Hero uses 160% vh total; one slide ≈ 1/3 of that, so we scroll ~30% vh per click to avoid overshooting.
	interface Props {
		showLabel?: boolean;
		chevronVariant?: "white" | "black" | "dim";
		scrollOneViewport?: boolean;
	}
	let {
		showLabel = true,
		chevronVariant = "dim",
		scrollOneViewport = false,
	}: Props = $props();

	const chevronClass = $derived(
		chevronVariant === "white"
			? "text-white"
			: chevronVariant === "black"
				? "text-[var(--black)]"
				: "text-[var(--dim)]",
	);

	function handleClick(e: MouseEvent) {
		if (scrollOneViewport) {
			e.preventDefault();
			// ~30% viewport per click so we advance one hero slide without overshooting (hero total = 160% vh)
			const step = Math.round(window.innerHeight * 0.5);
			window.scrollBy({ top: step, behavior: "smooth" });
		}
	}
</script>

<a
	href="#about"
	class="scroll-hint-link flex flex-col items-center justify-center gap-1.5 pb-8 {chevronClass} no-underline hover:no-underline cursor-pointer transition-colors duration-300"
	aria-label="Scroll to How it works"
	onclick={handleClick}
>
	<span class="scroll-hint scroll-bounce flex flex-col items-center gap-1.5">
		{#if showLabel}
			<span class="scroll-hint-label-wrapper relative inline-block">
				<span
					class="scroll-hint-label text-sm font-semibold tracking-wide"
					>How?</span
				>
				<span class="scroll-hint-underline" aria-hidden="true"></span>
			</span>
		{/if}
		<span class="scroll-chevrons inline-flex flex-col items-center">
			<svg
				class="h-5 w-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
			</svg>
		</span>
	</span>
</a>

<style>
	.scroll-hint-label {
		display: inline-block;
	}
	.scroll-hint-label-wrapper {
		position: relative;
		display: inline-block;
	}
	.scroll-hint-underline {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		width: 100%;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.25s ease-out;
		pointer-events: none;
	}
	.scroll-hint-link:hover .scroll-hint-underline,
	.scroll-hint-link:focus-visible .scroll-hint-underline {
		transform: scaleX(1);
	}
	.scroll-bounce {
		animation: scroll-pulse 1.8s ease-in-out infinite;
	}
	@keyframes scroll-pulse {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(4px);
		}
	}
</style>
