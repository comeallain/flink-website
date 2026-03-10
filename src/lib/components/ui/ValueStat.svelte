<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<div class="value-card reveal border-t border-slate-800 pt-8">
	<div class="value-num mb-3 text-4xl font-bold text-orange-400">{value}</div>
	<slot name="title">
		<p class="mb-2 text-base font-semibold text-white">{label}</p>
	</slot>
	<slot />
</div>

