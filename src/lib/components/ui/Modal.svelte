<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import { X } from "lucide-svelte";
	import { ctaModalOpen } from "$lib/stores/modal";

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			ctaModalOpen.close();
		}
	}

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
			if (e.key === " ") e.preventDefault();
			ctaModalOpen.close();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			ctaModalOpen.close();
		}
	}

	onMount(() => {
		const handler = (e: KeyboardEvent) => handleKeydown(e);
		document.addEventListener("keydown", handler);

		const unsubscribe = ctaModalOpen.subscribe((open) => {
			document.body.style.overflow = open ? "hidden" : "";
		});

		return () => {
			document.removeEventListener("keydown", handler);
			document.body.style.overflow = "";
			unsubscribe();
		};
	});
</script>

{#if $ctaModalOpen}
	<!-- Backdrop -->
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
		class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
		on:click={handleBackdropClick}
		on:keydown={handleBackdropKeydown}
		transition:fade={{ duration: 200 }}
	>
		<!-- Panel -->
		<div
			role="presentation"
			class="modal-panel relative max-h-[95vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--black)] shadow-2xl"
			transition:fly={{ y: 20, duration: 250 }}
			on:click|stopPropagation
		>
			<button
				type="button"
				aria-label="Close modal"
				class="absolute right-4 top-4 z-10 cursor-pointer rounded-lg p-1.5 text-[var(--gray)] transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
				on:click={() => ctaModalOpen.close()}
			>
				<X class="h-5 w-5" />
			</button>
			<div class="modal-content max-h-[95vh] overflow-y-auto p-6 pt-12">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		background: rgba(0, 0, 0, 0.75);
		backdrop-filter: blur(4px);
	}
</style>
