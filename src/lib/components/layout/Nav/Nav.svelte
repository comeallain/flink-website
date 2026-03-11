<script lang="ts">
	import { page } from "$app/stores";
	import { Home, Users } from "lucide-svelte";
	import FlinkLogo from "$lib/icons/FlinkLogo.svelte";
	import { NavTextLink, PrimaryCtaLink } from "$lib/components/ui";
	import { navTheme } from "$lib/home/navTheme";

	const isTeamPage = $derived($page.url.pathname === "/team");
</script>

<nav class="fixed inset-x-0 top-0 z-50">
	<div
		class="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6"
	>
		<a
			href="/"
			class="nav-logo relative flex h-4 items-center gap-1.5 text-[11px] font-bold tracking-[0.35em]"
			aria-label="FLINK home"
		>
			<span class="relative block h-4 w-16">
				<FlinkLogo
					className="absolute left-0 top-0 h-4 w-auto transition-opacity duration-1000 ease-out {$navTheme === 'dark' ? 'opacity-0' : 'opacity-100'}"
					variant="white"
				/>
				<FlinkLogo
					className="absolute left-0 top-0 h-4 w-auto transition-opacity duration-1000 ease-out {$navTheme === 'dark' ? 'opacity-100' : 'opacity-0'}"
					variant="color"
				/>
			</span>
		</a>
		<div class="nav-links flex items-center gap-2 sm:gap-4 text-sm">
			{#if isTeamPage}
				<a
					href="/"
					aria-label="Home"
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition hover:opacity-80 sm:hidden {$navTheme === 'dark' ? 'text-[var(--black)]' : 'text-white'}"
				>
					<Home class="h-4 w-4" />
				</a>
				<NavTextLink
					href="/"
					className={`team-link-animated hidden font-semibold sm:inline-block no-underline hover:no-underline transition-colors duration-300 ease-out ${
						$navTheme === "dark"
							? "text-[var(--dim)] hover:text-[var(--dim)]"
							: "text-white hover:text-white"
					}`}
				>
					<span class="team-link-label">Home</span>
					<span class="team-link-underline" aria-hidden="true"></span>
				</NavTextLink>
			{:else}
				<a
					href="/team"
					aria-label="Team"
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition hover:opacity-80 sm:hidden {$navTheme === 'dark' ? 'text-[var(--black)]' : 'text-white'}"
				>
					<Users class="h-4 w-4" />
				</a>
				<NavTextLink
					href="/team"
					className={`team-link-animated hidden font-semibold sm:inline-block no-underline hover:no-underline transition-colors duration-300 ease-out ${
						$navTheme === "dark"
							? "text-[var(--dim)] hover:text-[var(--dim)]"
							: "text-white hover:text-white"
					}`}
				>
					<span class="team-link-label">Team</span>
					<span class="team-link-underline" aria-hidden="true"></span>
				</NavTextLink>
			{/if}
			<PrimaryCtaLink href="/cta" label="Be one of the 500" size="sm" />
		</div>
	</div>
</nav>

<style>
	:global(.team-link-animated) {
		position: relative;
	}
	:global(.team-link-label) {
		display: inline-block;
	}
	:global(.team-link-underline) {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		width: 100%;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.25s ease-out;
		pointer-events: none;
	}
	:global(.team-link-animated:hover .team-link-underline) {
		transform: scaleX(1);
	}
</style>
