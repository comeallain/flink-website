<script lang="ts">
	import { PageSection } from "$lib/components/ui";

	export let variant: "dark" | "light" = "dark";
	/** When false, only the background is shown (headline is rendered by HeroScene as a shared layer). */
	export let showHeadline = true;

	let videoEl: HTMLVideoElement | null = null;

	function playVideo(e: Event) {
		const el = (e.currentTarget as HTMLVideoElement) ?? videoEl;
		el?.play().catch(() => {});
	}
</script>

<PageSection
	className={`cta-hero relative flex min-h-screen w-full min-w-full flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-2 text-center ${
		variant === "light"
			? "bg-[color-mix(in_srgb,white_85%,var(--orange))]"
			: "bg-[#0c0c0c]"
	}`}
>
	{#if variant === "dark"}
		<!-- temporary background video to approximate future hero video -->
		<div
			class="pointer-events-none absolute inset-0 z-0 min-h-full min-w-full"
			aria-hidden="true"
		>
			<video
				bind:this={videoEl}
				class="absolute inset-0 h-full min-h-full w-full min-w-full object-cover opacity-60"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				on:loadeddata={playVideo}
				on:canplay={playVideo}
			>
				<source
					src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					type="video/mp4"
				/>
			</video>
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.92)_85%)]"
			></div>
		</div>
	{/if}
	{#if showHeadline}
		<div class="relative z-10 flex flex-col items-center justify-center">
			<h1
				class="max-w-6xl text-balance text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
				class:text-white={variant === "dark"}
				class:text-[var(--black)]={variant === "light"}
				style={variant === "dark" ? "color: #fff;" : ""}
			>
				Your film deserves<br /><span class="text-[var(--orange)]"
					>a global audience.</span
				>
			</h1>
		</div>
	{/if}
</PageSection>
