<script lang="ts">
	import { onMount } from "svelte";
	import { Modal } from "$lib/components/ui";

	let SignupForm: import("svelte").Component<{ embedded: boolean }> | null = $state(null);

	onMount(async () => {
		const mod = await import("$lib/components/cta/SignupForm.svelte");
		SignupForm = mod.default;
	});
</script>

<Modal>
	{#if SignupForm}
		<SignupForm embedded={true} />
	{/if}
</Modal>
