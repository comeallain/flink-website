<script lang="ts">
	import { z } from "zod";
	import { toast } from "svelte-sonner";
	import { CounterPill, PageSection } from "$lib/components/ui";
	import { ArrowRightIcon } from "$lib/icons";
	import { COUNTRIES } from "$lib/constants/countries";
	import { slotCount } from "$lib/home";
	import { revealOnScrollAction } from "$lib/home";
	import { browser } from "$app/environment";

	const { embedded = false } = $props();

	const signupSchema = z.object({
		email: z.string().min(1, "Email is required").email("Enter a valid email"),
		full_name: z.string().min(1, "Full name is required").min(2, "Enter your full name"),
		company: z.string().optional(),
		country: z.string().min(1, "Please select a country").refine((c) => (COUNTRIES as readonly string[]).includes(c), "Invalid country"),
		film_count: z.coerce.number().min(1, "Enter at least 1"),
		loi_agree: z
			.union([z.literal("on"), z.boolean()])
			.transform((v) => v === "on" || v === true)
			.pipe(z.literal(true)),
		investor_ref: z.enum(["named", "anonymous"]),
	});

	type FieldErrors = Partial<Record<keyof z.infer<typeof signupSchema>, boolean>>;

	let submitted = $state(false);
	let submitting = $state(false);
	let fieldErrors = $state<FieldErrors>({});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (submitting || submitted) return;

		fieldErrors = {};

		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const raw = {
			email: formData.get("email") ?? "",
			full_name: formData.get("full_name") ?? "",
			company: (formData.get("company") ?? "") as string,
			country: formData.get("country") ?? "",
			film_count: formData.get("film_count") ?? "",
			loi_agree: formData.get("loi_agree"),
			investor_ref: formData.get("investor_ref") ?? "",
		};

		const result = signupSchema.safeParse(raw);

		if (!result.success) {
			// Build field errors from issues[].path so highlighting always works (Zod 4)
			const knownKeys = new Set([
				"email",
				"full_name",
				"company",
				"country",
				"film_count",
				"loi_agree",
				"investor_ref",
			]);
			const errors: FieldErrors = {};
			for (const issue of result.error.issues) {
				const path = issue.path;
				const key = Array.isArray(path) && path.length > 0 ? path[0] : null;
				if (typeof key === "string" && knownKeys.has(key)) {
					errors[key as keyof FieldErrors] = true;
				}
			}
			// Fallback: flattenError in case path is nested differently
			try {
				const flattened = z.flattenError(result.error);
				const fe = (flattened as { fieldErrors?: Record<string, string[]> }).fieldErrors;
				if (fe) {
					for (const key of Object.keys(fe)) {
						if (fe[key]?.length && knownKeys.has(key)) {
							errors[key as keyof FieldErrors] = true;
						}
					}
				}
			} catch {
				// ignore
			}
			fieldErrors = { ...errors };

			const messages: string[] = [];
			for (const issue of result.error.issues) {
				if (issue.message && !messages.includes(issue.message)) {
					messages.push(issue.message);
				}
			}
			if (messages.length === 1) {
				toast.error(messages[0]);
			} else {
				toast.error("Please check your inputs and try again.");
			}

			return;
		}

		submitting = true;
		await new Promise((r) => setTimeout(r, 600));
		submitted = true;
		submitting = false;
		slotCount.update((n) => Math.min(500, n + 1));
	}

	function hasError(field: keyof FieldErrors): boolean {
		return !!fieldErrors[field];
	}

	const errorBorderStyle = "border-color: #ef4444; box-shadow: 0 0 0 2px rgba(239,68,68,0.4);";
	const inputBaseClass =
		"rounded-lg border border-white/5 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-[var(--dim)] focus:border-[var(--orange-20)] focus:ring-2 focus:ring-[var(--orange-20)]";

	const shareUrl = $derived(
		browser ? encodeURIComponent(`${window.location.origin}/cta`) : "",
	);
	const shareText = $derived(
		encodeURIComponent(
			"I just reserved my place on FLINK, the first platform where filmmakers keep up to 90% revenue. 500 slots, first come first featured. Join here:",
		),
	);
	const linkedInShare = $derived(
		shareUrl ? `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` : "#",
	);
	const xShare = $derived(
		shareUrl ? `https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}` : "#",
	);
</script>

{#if embedded}
	<div class="form-wrapper relative z-10 mx-auto w-full max-w-3xl">
		{#if !submitted}
			<div class="form-header text-center">
				<div class="mb-4">
					<CounterPill
						value={$slotCount}
						label="of 500 places filled"
					/>
				</div>
				<h2
					class="text-2xl font-bold tracking-tight text-white sm:text-3xl"
					id="modal-title"
				>
					Ready to join the FLINK pilot?
				</h2>
				<p class="mt-2 text-[15px] leading-relaxed text-[var(--gray)]">
					Join FLINK&rsquo;s launch program. Early onboarders benefit
					from
					<strong class="text-[var(--orange)]"
						>6 months fee-free</strong
					>
					access.
				</p>
			</div>
			<form
				onsubmit={handleSubmit}
				class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
				autocomplete="on"
			>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
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
						placeholder="you@example.com"
						autocomplete="email"
						class={inputBaseClass}
						class:input-error={hasError("email")}
						style={hasError("email") ? errorBorderStyle : ""}
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
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
						placeholder="Your full name"
						autocomplete="name"
						class={inputBaseClass}
						class:input-error={hasError("full_name")}
						style={hasError("full_name") ? errorBorderStyle : ""}
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
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
						class={inputBaseClass}
						class:input-error={hasError("company")}
						style={hasError("company") ? errorBorderStyle : ""}
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
					<label
						for="country"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Country <span class="text-[var(--orange)]">*</span>
					</label>
					<select
						id="country"
						name="country"
						class="select-with-chevron {inputBaseClass} min-w-0 truncate"
						class:input-error={hasError("country")}
						style={hasError("country") ? errorBorderStyle : ""}
					>
						<option value="" disabled selected
							>Select your country</option
						>
						{#each COUNTRIES as country}
							<option value={country}>{country}</option>
						{/each}
					</select>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
					<label
						for="investor_ref"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						Investor Reference Permission <span class="text-[var(--orange)]">*</span>
					</label>
					<select
						id="investor_ref"
						name="investor_ref"
						class="select-with-chevron {inputBaseClass} min-w-0 truncate"
						class:input-error={hasError("investor_ref")}
						style={hasError("investor_ref") ? errorBorderStyle : ""}
					>
						<option value="" disabled>Select</option>
						<option value="named" selected>You may reference my name/company to investors as a signed pre-launch LOI</option>
						<option value="anonymous">You may reference me only in anonymous/aggregated totals (no name/company)</option>
					</select>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-1">
					<label
						for="film_count"
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						How many films could you list on FLINK?
						<span class="text-[var(--orange)]">*</span>
					</label>
					<input
						id="film_count"
						type="number"
						name="film_count"
						placeholder="e.g. 12"
						class={inputBaseClass}
						class:input-error={hasError("film_count")}
						style={hasError("film_count") ? errorBorderStyle : ""}
					/>
				</div>
				<div class="form-group flex flex-col gap-1.5 sm:col-span-2">
					<span
						class="text-sm font-medium tracking-wide text-[var(--light)]"
					>
						LOI Acknowledgement <span class="text-[var(--orange)]"
							>*</span
						>
					</span>
					<div class="checkbox-group flex flex-col gap-2.5">
						<label
							class="checkbox-label flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition"
							class:input-error={hasError("loi_agree")}
							class:input-error-off={!hasError("loi_agree")}
							style={hasError("loi_agree") ? "border-color: #ef4444; background: rgba(239,68,68,0.1);" : ""}
						>
							<input
								type="checkbox"
								name="loi_agree"
								checked
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
				<button
					type="submit"
					disabled={submitting}
					class="btn-submit mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-10 py-3.5 text-base font-semibold text-black shadow-lg shadow-[var(--orange-glow)] transition hover:bg-[var(--orange-hover)] hover:shadow-[var(--orange-glow)] hover:-translate-y-0.5 disabled:cursor-default disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none sm:col-span-2"
				>
					{submitting ? "Submitting…" : "Reserve Your Slot"}
					{#if !submitting}
						<ArrowRightIcon />
					{/if}
				</button>
				<p class="form-fine mt-2 text-center text-xs text-[var(--dim)] sm:col-span-2">
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
{:else}
	<PageSection id="signup" navTheme="light" className="form-section relative px-4 py-20 sm:px-6">
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(230,126,0,0.04)_0%,transparent_70%)] pointer-events-none" aria-hidden="true"></div>
		<div class="form-wrapper relative z-10 mx-auto max-w-[580px]">
			<p class="text-[var(--gray)]">Ready to join the FLINK pilot? Use the modal or scroll to this section.</p>
		</div>
	</PageSection>
{/if}

<style>
	.select-with-chevron {
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.9)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1.25rem center;
		padding-right: 3rem;
	}

	/* Error state: red border so failed fields are always visible */
	:global(.input-error) {
		border-color: #ef4444 !important;
		box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.3);
	}
	:global(.input-error:focus) {
		border-color: #ef4444 !important;
		outline: none;
		box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.4);
	}
	:global(.checkbox-label.input-error) {
		border-color: #ef4444 !important;
		background: rgba(239, 68, 68, 0.1);
	}
	:global(.checkbox-label.input-error-off) {
		border-color: rgba(255, 255, 255, 0.05);
		background: rgba(255, 255, 255, 0.02);
	}
	:global(.checkbox-label.input-error-off:hover) {
		border-color: var(--orange-20);
		background: var(--orange-10);
	}
</style>
