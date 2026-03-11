<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { IconButtonLink } from "$lib/components/ui";
	import { LinkedinIcon } from "$lib/icons/social";
	import { revealOnScrollAction } from "$lib/home";
</script>

<PageSection className="founder-section relative mx-auto max-w-[88rem] border-t border-white/5 px-6 py-20">
	<div
		class="founder-card grid gap-12 md:grid-cols-[280px_1fr] md:gap-12"
		use:revealOnScrollAction
	>
		<div
			class="founder-photo relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-amber-950/30 to-[var(--dark)]"
		>
			<img
				src="/images/richie2.jpeg"
				alt="Richie Smyth"
				class="h-full w-full object-cover"
			/>
		</div>
		<div>
			<div
				class="founder-role text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
				use:revealOnScrollAction
			>
				Founder &amp; CEO
			</div>
			<h2
				class="founder-name mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
				use:revealOnScrollAction
			>
				Richie Smyth
			</h2>
			<div
				class="founder-bio mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--light)]"
			>
				<p use:revealOnScrollAction>
					Richie is an internationally acclaimed, award-winning film
					director, producer, and photographer from Dublin. He
					directed <em>The Siege of Jadotville</em>, starring Jamie
					Dornan and Mark Strong, one of Netflix&rsquo;s first
					original feature films, which became one of the
					platform&rsquo;s most-watched titles on release.
				</p>
				<p use:revealOnScrollAction>
					Over a career spanning two decades, Richie has directed
					music videos for U2, The Verve, Bon Jovi, and Melissa
					Etheridge, alongside award-winning commercial campaigns for
					Nike, Pepsi, Guinness, Toyota, and Macy&rsquo;s. His work is
					recognised for its cinematic visual storytelling, humanity,
					and ability to draw powerful performances from actors.
				</p>
				<p use:revealOnScrollAction>
					Richie founded FLINK because he lived the problem
					first-hand. After years watching great independent films
					struggle to find audiences through a broken distribution
					system, he set out to build the infrastructure that gives
					filmmakers real control, transparent revenue, and a global
					audience, without the gatekeepers.
				</p>
			</div>
			<div
				class="founder-credits mt-6 flex flex-wrap gap-2"
				use:revealOnScrollAction
			>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>The Siege of Jadotville</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Netflix Original</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>U2</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Nike</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Guinness</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Pepsi</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Toyota</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>The Verve</span
				>
				<span
					class="credit-tag rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:text-[var(--orange)]"
					>Bon Jovi</span
				>
			</div>
			<div class="founder-links mt-6 flex gap-3" use:revealOnScrollAction>
				<IconButtonLink
					href="https://www.linkedin.com/in/richiesmyth"
					title="LinkedIn"
				>
					<LinkedinIcon />
				</IconButtonLink>
				<IconButtonLink
					href="https://www.imdb.com/name/nm1100217/"
					title="IMDb"
				>
					<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
						<path
							d="M2 4v16h3.2V4H2zm4.8 0v16h3.6l.4-2.4.2 1.2.2 1.2h3.2V4H11v9.6L10.2 4H8.6l-.8 5.2V4H4.8V4zm8 0v16h3.2c1.8 0 2.8-1.2 2.8-3.2V7.2C18.8 5.2 17.8 4 16 4h-3.2zm3.2 2.4c.4 0 .8.4.8 1.2v8.8c0 .8-.4 1.2-.8 1.2h-.8V6.4h.8zM19.6 4v16H22c1.2 0 2-.8 2-2V6c0-1.2-.8-2-2-2h-2.4z"
						/>
					</svg>
				</IconButtonLink>
			</div>
		</div>
	</div>
</PageSection>
