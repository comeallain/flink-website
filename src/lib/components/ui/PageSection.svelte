<script lang="ts">
	import type { NavTheme } from "$lib/home/navTheme";

	export let id: string | undefined = undefined;
	export let className = "";
	export let navTheme: NavTheme | undefined = undefined;
</script>

<section id={id} class={className} {...(navTheme != null ? { "data-nav-theme": navTheme } : {})}>
	<slot />
</section>

