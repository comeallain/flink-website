import { derived, writable } from "svelte/store";

const CAPACITY = 500;

/** Total signups from Supabase (source of truth). Fetched from API; update after signup. */
export const signupCount = writable<number | null>(null);

/** Places filled (for "of 500 places filled"). Derived from signupCount; 0 until loaded. */
export const slotCount = derived(signupCount, (c) => c ?? 0);

/** Places remaining (for "X places remaining"). Derived from signupCount. */
export const slotRemaining = derived(signupCount, (c) =>
	Math.max(0, CAPACITY - (c ?? 0)),
);

/** Fetch signup count from API and update signupCount. Call on load and after a successful signup. */
export async function fetchSignupCount(): Promise<number> {
	const res = await fetch("/api/signup-count", { cache: "no-store" });
	const data = await res.json().catch(() => ({ count: 0 }));
	const count = typeof data.count === "number" ? data.count : 0;
	signupCount.set(count);
	return count;
}
