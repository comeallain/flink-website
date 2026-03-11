<script lang="ts">
	export let initials: string;
	export let name: string;
	export let role: string;
	export let quote: string;
</script>

<article
	class="quote-card group relative pl-6 transition-colors duration-200 md:pl-8"
	style="border-left: 3px solid var(--orange);"
>
	<blockquote class="mb-5 text-base leading-relaxed text-[var(--black)] md:text-lg md:leading-[1.65]">
		<span class="text-[var(--orange)]/70 text-2xl leading-none md:text-3xl">&ldquo;</span>
		<span class="align-top">{quote}</span>
	</blockquote>
	<footer class="flex items-center gap-3">
		<div
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--orange-10)] text-sm font-semibold text-[var(--orange)]"
			aria-hidden="true"
		>
			{initials}
		</div>
		<div class="min-w-0">
			<p class="text-sm font-semibold text-[var(--black)]">{name}</p>
			<p class="text-xs text-[var(--gray)]">{role}</p>
		</div>
	</footer>
</article>
