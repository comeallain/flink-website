<script lang="ts">
	export let id: string | undefined = undefined;
	export let className = "";
</script>

<section id={id} class={className}>
	<slot />
</section>

