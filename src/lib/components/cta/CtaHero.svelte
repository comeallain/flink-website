<script lang="ts">
	import { onMount } from "svelte";
	import { PageSection } from "$lib/components/ui";

	export let variant: "dark" | "light" = "dark";
	/** When false, only the background is shown (headline is rendered by HeroScene as a shared layer). */
	export let showHeadline = true;

	interface VideoConfig {
		src: string;
		brightness: number;
		/** Mark exactly one video as the first-impression default (first ever visit only). */
		isDefault?: boolean;
		/** First-visit only: start playback at this exact second in the video. */
		defaultStart?: number;
	}

	const VIDEOS: VideoConfig[] = [
		{ src: "/videos/bodies.mp4", brightness: 1 },
		{ src: "/videos/irish-diver.mp4", brightness: 1 },
		{
			src: "/videos/surfer.mp4",
			brightness: 1,
		},
		{
			src: "/videos/mulbury-end.mp4",
			brightness: 3,
			isDefault: true,
			defaultStart: 8,
		},
		{ src: "/videos/mulbury-front.mp4", brightness: 3 },
	];

	const STORAGE_KEY = "flink_hero_video_idx";

	/** Delay (ms) before starting playback on first visit only. 0 = start as soon as video is ready. */
	const FIRST_VISIT_PLAY_DELAY_MS = 0;

	// ─── First visit: use video with isDefault: true and its defaultStart (seconds). After that: random video, random time ──────
	// All localStorage access is client-only (SSR-safe).
	let isFirstVisit = true;
	let currentIndex = 0;
	let brightness = 1;
	let videoEl: HTMLVideoElement | null = null;
	let videoOpacity = 0;
	let targetTime = 0;
	let firstVisitPlayScheduled = false;

	onMount(() => {
		if (typeof window === "undefined") return;

		const stored = window.localStorage.getItem(STORAGE_KEY);
		isFirstVisit = stored === null;

		if (isFirstVisit) {
			const defaultIdx = VIDEOS.findIndex((v) => v.isDefault);
			currentIndex = defaultIdx >= 0 ? defaultIdx : 0;
		} else {
			const storedIdx = parseInt(stored ?? "0", 10);
			currentIndex = (isNaN(storedIdx) ? 0 : storedIdx) % VIDEOS.length;
			// Advance for next visit (returning visitors get rotation)
			window.localStorage.setItem(
				STORAGE_KEY,
				String((currentIndex + 1) % VIDEOS.length),
			);
		}

		brightness = VIDEOS[currentIndex].brightness;
		loadVideo(currentIndex);
	});

	function loadVideo(index: number) {
		if (!videoEl) return;
		const video = VIDEOS[index];
		brightness = video.brightness;

		if (isFirstVisit && video.defaultStart !== undefined) {
			targetTime = video.defaultStart;
		} else {
			targetTime = -1;
		}

		videoEl.src = video.src;
		videoEl.load();
	}

	function onLoadedMetadata() {
		if (!videoEl) return;
		if (targetTime === -1) {
			targetTime = Math.random() * videoEl.duration * 0.6;
		}
		videoEl.currentTime = targetTime;
	}

	function onSeeked() {
		if (!videoEl) return;
		if (Math.abs(videoEl.currentTime - targetTime) > 1) return;

		const wasFirstVisit = isFirstVisit;
		// After first-visit default has been shown, persist so refresh/next visit uses rotation
		if (wasFirstVisit && typeof window !== "undefined") {
			window.localStorage.setItem(
				STORAGE_KEY,
				String((currentIndex + 1) % VIDEOS.length),
			);
			isFirstVisit = false;
		}

		if (
			wasFirstVisit &&
			FIRST_VISIT_PLAY_DELAY_MS > 0 &&
			!firstVisitPlayScheduled
		) {
			firstVisitPlayScheduled = true;
			setTimeout(() => {
				if (!videoEl) return;
				videoEl.play().catch(() => {});
				videoOpacity = 0.6;
			}, FIRST_VISIT_PLAY_DELAY_MS);
			return;
		}

		videoEl.play().catch(() => {});
		videoOpacity = 0.6;
	}

	function onEnded() {
		videoOpacity = 0;
		setTimeout(() => {
			if (isFirstVisit) isFirstVisit = false;
			currentIndex = (currentIndex + 1) % VIDEOS.length;
			if (typeof window !== "undefined") {
				window.localStorage.setItem(
					STORAGE_KEY,
					String((currentIndex + 1) % VIDEOS.length),
				);
			}
			loadVideo(currentIndex);
		}, 700);
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
		<div
			class="pointer-events-none absolute inset-0 z-0 min-h-full min-w-full"
			aria-hidden="true"
		>
			<video
				bind:this={videoEl}
				class="absolute inset-0 h-full min-h-full w-full min-w-full object-cover"
				style="opacity: {videoOpacity}; filter: brightness({brightness}); transition: opacity 700ms ease"
				muted
				playsinline
				preload="auto"
				on:loadedmetadata={onLoadedMetadata}
				on:seeked={onSeeked}
				on:ended={onEnded}
			>
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
