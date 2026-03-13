<script lang="ts">
	import { onMount } from "svelte";

	let SignupForm: import("svelte").Component<{ embedded: boolean }> | null = $state(null);

	onMount(async () => {
		const mod = await import("$lib/components/cta/SignupForm.svelte");
		SignupForm = mod.default;
	});
</script>

{#if SignupForm}
	<SignupForm embedded={true} />
{/if}
