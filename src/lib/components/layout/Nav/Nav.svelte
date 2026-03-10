<script lang="ts">
	import FlinkLogo from "$lib/icons/FlinkLogo.svelte";
	import { ExternalLink } from "$lib/constants/links";
	import { NavTextLink, PrimaryCtaLink } from "$lib/components/ui";
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur"
>
	<div
		class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
	>
		<a
			href="/"
			class="nav-logo flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-white"
			aria-label="FLINK home"
		>
			<FlinkLogo className="h-6 w-auto" />
		</a>
		<div class="nav-links flex items-center gap-6 text-sm text-slate-300">
			<NavTextLink
				href={ExternalLink.Demo}
				external
				className="text-slate-300 hover:text-white"
			>
				Demo
			</NavTextLink>
			<NavTextLink
				href="/team"
				className="hidden sm:inline-flex text-slate-300 hover:text-white"
			>
				Team
			</NavTextLink>
			<PrimaryCtaLink href="/cta" label="Join the Waitlist" size="sm" />
		</div>
	</div>
</nav>
