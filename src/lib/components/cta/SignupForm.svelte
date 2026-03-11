<script lang="ts">
	import { CounterPill, PageSection } from "$lib/components/ui";
	import { ArrowRightIcon } from "$lib/icons";
	import { COUNTRIES } from "$lib/constants/countries";
	import { slotCount } from "$lib/home";
	import { revealOnScrollAction } from "$lib/home";
	import { browser } from "$app/environment";

	let submitted = false;
	let submitting = false;

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (submitting || submitted) return;
		submitting = true;
		// Simulate submit; in production would call form action
		await new Promise((r) => setTimeout(r, 600));
		submitted = true;
		submitting = false;
		slotCount.update((n) => Math.min(500, n + 1));
	}

	$: shareUrl = browser
		? encodeURIComponent(`${window.location.origin}/cta`)
		: "";
	$: shareText = encodeURIComponent(
		"I just reserved my place on FLINK, the first platform where filmmakers keep up to 90% revenue. 500 slots, first come first featured. Join here:",
	);
	$: linkedInShare = shareUrl
		? `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
		: "#";
	$: xShare = shareUrl
		? `https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}`
		: "#";
</script>

<PageSection id="signup" navTheme="light" className="form-section relative px-4 py-20 sm:px-6">
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(230,126,0,0.04)_0%,transparent_70%)] pointer-events-none"
		aria-hidden="true"
	></div>
	<div class="form-wrapper relative z-10 mx-auto max-w-[580px]">
		{#if !submitted}
			<div class="form-header text-center" use:revealOnScrollAction>
				<div class="mb-5">
					<CounterPill
						value={$slotCount}
						label="of 500 places filled"
					/>
				</div>
				<h2
					class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
				>
					Ready to join the FLINK pilot?
				</h2>
				<p class="mt-3 text-[15px] leading-relaxed text-[var(--gray)]">
					Join FLINK&rsquo;s launch program. Early onboarders benefit
					from
					<strong class="text-[var(--orange)]"
						>6 months fee-free</strong
					>
					access.
				</p>
			</div>
			<form
				on:submit={handleSubmit}
				class="mt-10 flex flex-col gap-5"
				autocomplete="on"
			>
				<div class="form-group flex flex-col gap-1.5">
					<label
						for="email"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Email <span class="text-[var(--orange)]">*</span>
					</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						placeholder="you@example.com"
						autocomplete="email"
						class="rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-[var(--dim)] focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)]"
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<label
						for="full_name"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Full Name <span class="text-[var(--orange)]">*</span>
						<span class="text-[11px] font-normal text-[var(--dim)]"
							>(acts as your electronic signature)</span
						>
					</label>
					<input
						id="full_name"
						type="text"
						name="full_name"
						required
						placeholder="Your full name"
						autocomplete="name"
						class="rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-[var(--dim)] focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)]"
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<label
						for="company"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Company / Rights Holder Entity
					</label>
					<input
						id="company"
						type="text"
						name="company"
						placeholder="Company name (if applicable)"
						autocomplete="organization"
						class="rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-[var(--dim)] focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)]"
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<label
						for="country"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Country <span class="text-[var(--orange)]">*</span>
					</label>
					<select
						id="country"
						name="country"
						required
						class="rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 pr-10 text-[15px] text-white outline-none transition focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)] [appearance:auto]"
					>
						<option value="" disabled selected
							>Select your country</option
						>
						{#each COUNTRIES as country}
							<option value={country}>{country}</option>
						{/each}
					</select>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<label
						for="film_count"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						How many films could you potentially list on FLINK?
						<span class="text-[var(--orange)]">*</span>
					</label>
					<input
						id="film_count"
						type="number"
						name="film_count"
						required
						min="1"
						placeholder="e.g. 12"
						class="max-w-[200px] rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-[var(--dim)] focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)]"
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<span
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						LOI Acknowledgement <span class="text-[var(--orange)]"
							>*</span
						>
					</span>
					<div class="checkbox-group flex flex-col gap-2.5">
						<label
							class="checkbox-label flex cursor-pointer items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)]"
						>
							<input
								type="checkbox"
								name="loi_agree"
								required
								class="mt-1 accent-[var(--orange)]"
							/>
							<span
								class="legal-text text-xs leading-relaxed text-[var(--gray)]"
							>
								By submitting this form, I confirm that I am the
								rights holder or authorized representative for
								the films stated above and I intend to explore
								onboarding my catalog to FLINK for launch
								consideration. I understand this is non-binding,
								creates no exclusivity, and does not constitute
								a final distribution agreement. Any go-live is
								subject to rights clearance, content delivery,
								and FLINK&rsquo;s standard Creator Terms.
							</span>
						</label>
					</div>
				</div>
				<div class="form-group flex flex-col gap-1.5">
					<span
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Investor Reference Permission <span
							class="text-[var(--orange)]">*</span
						>
					</span>
					<div class="radio-group flex flex-col gap-2.5">
						<label
							class="radio-label flex cursor-pointer items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)]"
						>
							<input
								type="radio"
								name="investor_ref"
								value="named"
								required
								class="mt-1 accent-[var(--orange)]"
							/>
							<span
								class="text-sm leading-relaxed text-[var(--light)]"
							>
								You may reference my name/company to investors
								as a signed pre-launch LOI
							</span>
						</label>
						<label
							class="radio-label flex cursor-pointer items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)]"
						>
							<input
								type="radio"
								name="investor_ref"
								value="anonymous"
								required
								class="mt-1 accent-[var(--orange)]"
							/>
							<span
								class="text-sm leading-relaxed text-[var(--light)]"
							>
								You may reference me only in
								anonymous/aggregated totals (no name/company)
							</span>
						</label>
					</div>
				</div>
				<button
					type="submit"
					disabled={submitting}
					class="btn-submit mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-10 py-4 text-base font-semibold text-black shadow-lg shadow-[var(--orange-glow)] transition hover:bg-[var(--orange-hover)] hover:shadow-[var(--orange-glow)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
				>
					{submitting ? "Submitting…" : "Reserve Your Slot"}
					{#if !submitting}
						<ArrowRightIcon />
					{/if}
				</button>
				<p class="form-fine mt-3 text-center text-xs text-[var(--dim)]">
					Non-binding &middot; Zero cost &middot; You can withdraw at
					any time
				</p>
			</form>
		{:else}
			<div
				class="form-success py-16 text-center"
				use:revealOnScrollAction
			>
				<div
					class="check mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500/60 bg-green-500/10"
				>
					<svg
						class="h-10 w-10 text-green-500"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						viewBox="0 0 24 24"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-white">You&rsquo;re In!</h3>
				<p
					class="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[var(--gray)]"
				>
					Your pilot slot is reserved. We&rsquo;ll be in touch with
					next steps as we approach launch. Welcome to FLINK.
				</p>
				<div class="share-row mt-7 flex flex-wrap justify-center gap-3">
					<a
						href={linkedInShare}
						target="_blank"
						rel="noopener"
						class="share-btn inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium text-[var(--light)] transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)] hover:text-white"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
						Share on LinkedIn
					</a>
					<a
						href={xShare}
						target="_blank"
						rel="noopener"
						class="share-btn inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium text-[var(--light)] transition hover:border-[var(--orange-20)] hover:bg-[var(--orange-10)] hover:text-white"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
						Share on X
					</a>
				</div>
			</div>
		{/if}
	</div>
</PageSection>
