<script lang="ts">
	export let value: number;
	export let label: string;
</script>

<div
	class="counter-wrap inline-flex items-center gap-[10px] rounded-full border px-6 py-[10px]"
	style="
		background: rgba(230,126,0,.08);
		border-color: rgba(230,126,0,.2);
		animation: pulse-border 3s ease-in-out infinite;
	"
>
	<div
		class="counter-dot rounded-full animate-pulse"
		style="
			width: 8px;
			height: 8px;
			background: var(--orange);
		"
	></div>
	<span
		class="counter-text flex items-center gap-[6px]"
		style="
			font-family: 'Space Grotesk', sans-serif;
			font-size: 14px;
			color: var(--orange);
			font-weight: 500;
			letter-spacing: .3px;
		"
	>
		<span class="counter-num" style="font-weight: 700;">
			{value}
		</span>
		<span>{label}</span>
	</span>
</div>

<style>
	@keyframes pulse-border {
		0%, 100% {
			border-color: rgba(230,126,0,.2);
		}

		50% {
			border-color: rgba(230,126,0,.5);
		}
	}

	/* dot uses Tailwind animate-pulse */
</style>
