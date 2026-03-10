<script lang="ts">
	export let href: string;
	export let external = false;
	export let className = "";
</script>

<a
	{href}
	target={external ? "_blank" : undefined}
	rel={external ? "noopener" : undefined}
	class={className}
>
	<slot />
</a>
