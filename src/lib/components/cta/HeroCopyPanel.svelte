<script lang="ts">
	import FlinkLogo from "$lib/icons/FlinkLogo.svelte";
</script>

<section
	class="hero-copy-panel relative flex min-h-screen items-center justify-center px-6"
>
	<div class="relative z-0 mx-auto max-w-4xl text-center -mt-10">
		<div class="mb-6 flex justify-center sm:mb-10">
			<FlinkLogo
				variant="color"
				className="h-14 w-auto sm:h-20 md:h-18 pb-1"
			/>
		</div>
		<p
			class="hero-copy-lines text-xl leading-relaxed text-[var(--dim)] sm:text-5xl flex flex-col gap-2 font-semibold"
		>
			<span class="block text-center">
				<span
					class="hero-line relative inline-block"
					style="line-height: inherit"
				>
					<span
						class="slide-viewport absolute left-[-3%] right-[-3%] top-0 bottom-0 overflow-hidden"
					>
						<span class="group-rectangles absolute inset-0">
							<span
								class="highlight-clip absolute inset-x-0 top-0 bottom-0"
								style="overflow: hidden"
								aria-hidden="true"
							>
								<span
									class="highlight-bar absolute inset-x-0 top-0 bottom-0 bg-[var(--orange-10)]"
									style="transform: scaleY(0.65) rotate(-1deg); transform-origin: center"
									aria-hidden="true"
								></span>
							</span>
						</span>
					</span>
					<span
						class="highlight-vivid absolute inset-x-0 bg-[var(--orange)]"
						style="top: 7.5%; bottom: 7.5%; opacity: 0.35; transform-origin: left center"
						aria-hidden="true"
					></span>
					<span class="relative">The first film platform where</span>
				</span>
			</span>
			<span class="block text-center">
				<span
					class="hero-line relative inline-block"
					style="line-height: inherit"
				>
					<span
						class="slide-viewport absolute left-[-3%] right-[-3%] top-0 bottom-0 overflow-hidden"
					>
						<span class="group-rectangles absolute inset-0">
							<span
								class="highlight-clip absolute inset-x-0 top-0 bottom-0"
								style="overflow: hidden"
								aria-hidden="true"
							>
								<span
									class="highlight-bar absolute inset-x-0 top-0 bottom-0 bg-[var(--orange-10)]"
									style="transform: scaleY(0.65) rotate(-0.6deg); transform-origin: center"
									aria-hidden="true"
								></span>
							</span>
						</span>
					</span>
					<span
						class="highlight-vivid absolute inset-x-0 bg-[var(--orange)]"
						style="top: 7.5%; bottom: 7.5%; opacity: 0.35; transform-origin: left center"
						aria-hidden="true"
					></span>
					<span class="relative">audiences buy, sell, and truly</span>
				</span>
			</span>
			<span class="block text-center">
				<span
					class="hero-line relative inline-block"
					style="line-height: inherit"
				>
					<span
						class="slide-viewport absolute left-[-3%] right-[-3%] top-0 bottom-0 overflow-hidden"
					>
						<span class="group-rectangles absolute inset-0"></span>
					</span>
					<span
						class="highlight-vivid absolute inset-x-0 bg-[var(--orange)]"
						style="top: 7.5%; bottom: 7.5%; opacity: 0.35; transform-origin: left center"
						aria-hidden="true"
					></span>
					<span class="relative">own independent cinema.</span>
				</span>
			</span>
		</p>
	</div>
</section>
