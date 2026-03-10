<script lang="ts">
	export let initials: string;
	export let name: string;
	export let role: string;
	export let quote: string;
	export let delayClass = "";
</script>

<div
	class={`quote-card reveal ${delayClass} rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/40 transition hover:border-orange-400/40`}
>
	<div class="quote-mark mb-2 text-5xl text-orange-400/60">&ldquo;</div>
	<blockquote class="mb-4 text-sm italic leading-relaxed text-slate-100">
		{quote}
	</blockquote>
	<div class="quote-attr flex items-center gap-3">
		<div
			class="quote-avatar flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-orange-300"
		>
			{initials}
		</div>
		<div>
			<div class="quote-name text-xs font-semibold text-white">
				{name}
			</div>
			<div class="quote-role text-[11px] text-slate-400">{role}</div>
		</div>
	</div>
</div>
