<script lang="ts">
	import { PageSection } from "$lib/components/ui";
	import { LinkedinIcon } from "$lib/icons/social";
	import { revealOnScrollAction } from "$lib/home";

	const team = [
		{
			initials: "KO",
			name: "Kevin O'Meallain",
			role: "Co-Founder & Finance",
			bio: "Finance executive and FLINK co-founder. Brings deep expertise in corporate finance, commercial strategy, and operational scaling to the platform's growth.",
			linkedin: "https://www.linkedin.com/in/comeallain/",
		},
		{
			initials: "ER",
			name: "Emanuele Ragnoli",
			role: "Blockchain & Cryptography",
			bio: "PhD mathematician and former IBM Research scientist. 43 publications, multiple patents in blockchain, ZK proofs, and distributed systems. Co-founded Provably.ai.",
			linkedin: "https://www.linkedin.com/in/emanuele-ragnoli-a33b57/",
		},
		{
			initials: "AR",
			name: "Aurimas Rimkus",
			role: "Technical Product Lead",
			bio: "Full-stack engineer specialising in web platforms, AI tooling, and product development. Builds the systems that bring FLINK's infrastructure to life.",
			linkedin: "https://www.linkedin.com/in/rimkusaurimas/",
		},
	];
</script>

<PageSection className="team-section relative mx-auto max-w-[88rem] px-6 py-20">
	<div
		class="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:left-6 sm:right-6"
		aria-hidden="true"
	></div>
	<div
		class="section-label text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]"
		use:revealOnScrollAction
	>
		Core Team
	</div>
	<div class="team-grid mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
		{#each team as member, i}
			<div
				class="team-card rounded-2xl border border-white/5 bg-white/[0.015] p-8 transition hover:border-[var(--orange-20)] hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
				use:revealOnScrollAction
			>
				<div
					class="team-avatar mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/5 bg-[var(--dim)] text-lg font-bold text-[var(--orange)]"
				>
					{member.initials}
				</div>
				<h3 class="text-lg font-semibold tracking-tight text-white">
					{member.name}
				</h3>
				<div
					class="role mt-1 text-xs font-medium tracking-wide text-[var(--orange)]"
				>
					{member.role}
				</div>
				<p class="mt-3.5 text-sm leading-relaxed text-[var(--gray)]">
					{member.bio}
				</p>
				<div class="mt-4">
					<a
						href={member.linkedin}
						target="_blank"
						rel="noopener"
						class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-[var(--gray)] transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)] hover:text-[var(--orange)]"
						title="LinkedIn"
					>
						<LinkedinIcon />
					</a>
				</div>
			</div>
		{/each}
	</div>
</PageSection>
