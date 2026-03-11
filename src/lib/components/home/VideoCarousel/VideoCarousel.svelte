<script lang="ts">
	import { PageSection } from "$lib/components/ui";

	type VideoKind = "explainer" | "demo";

	const VIDEO_URLS: Record<VideoKind, string> = {
		explainer: "",
		demo: "",
	};

	let activeVideo: VideoKind | null = null;

	function openVideo(kind: VideoKind) {
		const url = VIDEO_URLS[kind];
		if (!url) {
			// eslint-disable-next-line no-alert
			alert(
				"Video coming soon! Upload your video to YouTube (as Unlisted) or Vimeo, then add the embed URL to VIDEO_URLS in VideoCarousel.svelte.",
			);
			return;
		}
		activeVideo = kind;
	}

	function closeVideo() {
		activeVideo = null;
	}

	function currentVideoUrl() {
		return activeVideo ? (VIDEO_URLS[activeVideo] ?? "") : "";
	}
</script>

<PageSection className="video-section relative border-t border-white/5 py-16">
	<div class="mx-auto max-w-[88rem] px-6">
		<div
			class="video-label reveal mb-6 text-left text-xs font-medium uppercase tracking-[0.2em] text-[var(--gray)]"
		>
			<span>See FLINK in action</span>
		</div>
		<div
			class="video-carousel flex gap-6 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]"
		>
			<div
				class="video-card reveal min-w-[min(520px,85vw)] scroll-mx-4 rounded-xl border border-white/5 bg-[color-mix(in_srgb,var(--dark)_60%,transparent)] shadow-sm shadow-black/40 transition hover:-translate-y-1 hover:border-[var(--orange-25)] hover:shadow-lg hover:shadow-[var(--orange-20)]"
			>
				<button
					type="button"
					class="video-thumb vt-explainer relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden bg-linear-to-br from-[var(--black)] via-amber-950/60 to-[var(--black)]"
					on:click={() => openVideo("explainer")}
					aria-label="Play FLINK explainer video"
				>
					<div
						class="play-btn relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--orange)] text-black shadow-lg shadow-[var(--orange-40)] transition hover:scale-105"
					>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="h-7 w-7 fill-black"
						>
							<polygon points="8,5 20,12 8,19" />
						</svg>
					</div>
					<div
						class="pointer-events-none absolute inset-0 bg-radial-at-center from-[var(--orange-10)] via-transparent to-transparent"
					></div>
				</button>
				<div
					class="video-meta flex items-center justify-between px-5 py-4"
				>
					<div class="video-meta-left space-y-1">
						<p class="text-sm font-semibold text-white">
							FLINK Explainer
						</p>
						<p class="text-xs text-[var(--gray)]">
							How FLINK is changing film distribution for
							independent creators
						</p>
					</div>
					<div
						class="video-badge inline-flex items-center rounded-md border border-[var(--orange-20)] bg-[var(--orange-10)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--orange)]"
					>
						Watch
					</div>
				</div>
			</div>
			<div
				class="video-card reveal s1 min-w-[min(520px,85vw)] scroll-mx-4 rounded-xl border border-white/5 bg-[color-mix(in_srgb,var(--dark)_60%,transparent)] shadow-sm shadow-black/40 transition hover:-translate-y-1 hover:border-[var(--orange-25)] hover:shadow-lg hover:shadow-[var(--orange-20)]"
			>
				<button
					type="button"
					class="video-thumb vt-demo relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden bg-linear-to-br from-[var(--black)] via-[var(--darker)] to-[var(--black)]"
					on:click={() => openVideo("demo")}
					aria-label="Play FLINK demo video"
				>
					<div
						class="play-btn relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--orange)] text-black shadow-lg shadow-[var(--orange-40)] transition hover:scale-105"
					>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="h-7 w-7 fill-black"
						>
							<polygon points="8,5 20,12 8,19" />
						</svg>
					</div>
					<div
						class="pointer-events-none absolute inset-0 bg-radial-at-center from-[var(--orange-10)] via-transparent to-transparent"
					></div>
				</button>
				<div
					class="video-meta flex items-center justify-between px-5 py-4"
				>
					<div class="video-meta-left space-y-1">
						<p class="text-sm font-semibold text-white">
							FLINK Platform Demo
						</p>
						<p class="text-xs text-[var(--gray)]">
							Walk through the platform &mdash; upload, sell,
							resell, and earn royalties
						</p>
					</div>
					<div
						class="video-badge inline-flex items-center rounded-md border border-[var(--orange-20)] bg-[var(--orange-10)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--orange)]"
					>
						Watch
					</div>
				</div>
			</div>
		</div>
	</div>
</PageSection>

{#if activeVideo}
	<div
		class="video-modal fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 sm:p-10"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		on:click={(event) => {
			if (event.currentTarget === event.target) closeVideo();
		}}
		on:keydown={(event) => {
			if (event.key === "Escape") closeVideo();
		}}
	>
		<div
			class="video-modal-inner relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-black"
		>
			<button
				class="video-modal-close absolute -top-10 right-0 text-3xl text-[var(--light)] opacity-70 transition hover:opacity-100"
				on:click={closeVideo}
				aria-label="Close video"
			>
				&times;
			</button>
			<iframe
				title="FLINK video"
				allow="autoplay; fullscreen"
				allowfullscreen
				class="h-full w-full border-0"
				src={currentVideoUrl()}
			></iframe>
		</div>
	</div>
{/if}
