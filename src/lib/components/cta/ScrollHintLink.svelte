<script lang="ts">
	// Renders the "How?" + chevrons scroll-down link. Use in a context where it can sit on top (e.g. HeroScene with z-[30]).
</script>

<a
	href="#about"
	class="scroll-hint-link flex flex-col items-center justify-center gap-1.5 pb-8 text-[var(--dim)] no-underline hover:no-underline cursor-pointer"
	aria-label="Scroll to How it works"
>
	<span class="scroll-hint scroll-bounce flex flex-col items-center gap-1.5">
		<span class="scroll-hint-label-wrapper relative inline-block">
			<span class="scroll-hint-label text-sm font-semibold tracking-wide">How?</span>
			<span class="scroll-hint-underline" aria-hidden="true"></span>
		</span>
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
