<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<div class="value-card border-t border-white/20 pt-8">
	<div class="value-num mb-3 text-4xl font-bold text-[var(--orange)]">{value}</div>
	<div class="value-card-content">
		<slot name="title">
			<p class="mb-2 text-base font-semibold text-white">{label}</p>
		</slot>
		<slot />
	</div>
</div>

