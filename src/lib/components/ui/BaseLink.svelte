<script lang="ts">
	import { ctaModalOpen } from "$lib/stores/modal";

	export let href: string;
	export let external = false;
	export let className = "";

	function handleClick(event: MouseEvent) {
		if (!external && href === "#signup") {
			event.preventDefault();
			ctaModalOpen.open();
			return;
		}
		if (!external && href?.startsWith("#")) {
			const target = document.querySelector<HTMLElement>(href);
			if (target) {
				event.preventDefault();
				target.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	}
</script>

<a
	{href}
	target={external ? "_blank" : undefined}
	rel={external ? "noopener" : undefined}
	class={className}
	on:click={handleClick}
>
	<slot />
</a>
