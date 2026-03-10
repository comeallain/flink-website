<script lang="ts">
	import { ExternalLink } from "$lib/constants/links";
	import {
		LinkedinIcon,
		XIcon,
		RedditIcon,
		LetterboxdIcon,
	} from "$lib/icons/social";
	import { IconButtonLink, NavTextLink } from "$lib/components/ui";

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 bg-black/90">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6"
	>
		<div class="f-left flex flex-wrap items-center gap-4">
			<span
				class="f-logo text-sm font-semibold tracking-[0.25em] text-white"
				>FLINK</span
			>
			<NavTextLink href="/team">Team</NavTextLink>
			<NavTextLink href="/privacy">Privacy</NavTextLink>
			<NavTextLink href={ExternalLink.Demo} external>Demo</NavTextLink>
		</div>
		<div
			class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
		>
			<div class="social-icons flex items-center gap-3">
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
		<div class="f-right text-slate-500">
			LA &middot; Dublin &nbsp;|&nbsp; &copy; {currentYear} FLINK Inc.
		</div>
	</div>
</footer>
