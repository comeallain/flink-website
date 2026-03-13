<script lang="ts">
	import FlinkLogo from "$lib/icons/FlinkLogo.svelte";
	import { ExternalLink, ContactLink } from "$lib/constants/links";
	import {
		LinkedinIcon,
		XIcon,
		RedditIcon,
		LetterboxdIcon,
	} from "$lib/icons/social";
	import { IconButtonLink, NavTextLink } from "$lib/components/ui";

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="border-t border-white/5 bg-[color-mix(in_srgb,var(--black)_90%,transparent)]"
>
	<div
		class="mx-auto flex max-w-[88rem] flex-col items-center gap-4 px-6 py-8 text-xs text-[var(--gray)] sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="f-left flex w-full max-w-[200px] flex-wrap items-center justify-between gap-4 sm:w-auto sm:max-w-none sm:justify-start">
			<a
				href="/"
				class="f-logo flex items-center gap-1.5 text-[11px] font-bold tracking-[0.35em] text-white no-underline"
				aria-label="FLINK home"
			>
				<FlinkLogo variant="white" className="h-3 w-auto" />
			</a>
			<div class="footer-links flex items-center gap-4">
				<NavTextLink
					href="/team"
					className="footer-nav-link team-link-animated relative inline-block no-underline hover:no-underline text-[var(--gray)]"
				>
					<span class="team-link-label">Team</span>
					<span class="team-link-underline" aria-hidden="true"></span>
				</NavTextLink>
				<NavTextLink
					href="https://docs.google.com/document/d/1FlZ6E3f-iVqR1vIBtJ_GrJDAa7-bA1X5/edit?usp=sharing&ouid=108926816697858975065&rtpof=true&sd=true"
					external
					className="footer-nav-link team-link-animated relative inline-block no-underline hover:no-underline text-[var(--gray)]"
				>
					<span class="team-link-label">Privacy</span>
					<span class="team-link-underline" aria-hidden="true"></span>
				</NavTextLink>
			</div>
		</div>
		<div
			class="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6"
		>
			<div class="social-icons flex items-center gap-3">
				<IconButtonLink
					href={`mailto:${ContactLink.Email}`}
					title="Email"
				>
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="5" width="18" height="14" rx="2" />
						<polyline points="4 6 12 12 20 6" />
					</svg>
				</IconButtonLink>
				<IconButtonLink href={ExternalLink.X} title="X">
					<XIcon className="h-4 w-4 fill-current" />
				</IconButtonLink>
				<IconButtonLink href={ExternalLink.LinkedIn} title="LinkedIn">
					<LinkedinIcon />
				</IconButtonLink>
				<IconButtonLink href={ExternalLink.Reddit} title="Reddit">
					<RedditIcon className="h-4 w-4 fill-current" />
				</IconButtonLink>
				<IconButtonLink
					href={ExternalLink.Letterboxd}
					title="Letterboxd"
				>
					<LetterboxdIcon className="h-4 w-4" />
				</IconButtonLink>
			</div>
		</div>
		<div class="f-right text-center text-[var(--dim)] sm:text-left">
			LA &middot; Dublin &nbsp;|&nbsp; &copy; {currentYear} FLINK Inc.
		</div>
	</div>
</footer>
