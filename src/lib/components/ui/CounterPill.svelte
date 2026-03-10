<script lang="ts">
	export let value: number;
	export let label: string;
</script>

<div
	class="counter-wrap inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-400"
>
	<div class="counter-dot h-2 w-2 rounded-full bg-orange-500"></div>
	<span class="counter-text flex items-center gap-1 font-mono tracking-wide">
		<span class="counter-num text-sm font-semibold">{value}</span>
		<span class="text-[11px] uppercase tracking-[0.18em] text-slate-300"
			>{label}</span
		>
	</span>
</div>
