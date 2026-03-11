import { dev } from "$app/environment";
import { env as envPrivate } from "$env/dynamic/private";
import { env as envPublic } from "$env/dynamic/public";
import { createClient } from "@supabase/supabase-js";

// PUBLIC_ vars are in dynamic/public; private vars in dynamic/private (server may not see PUBLIC_ in private)
const url = (
	(envPublic?.PUBLIC_SUPABASE_URL ??
		envPrivate?.PUBLIC_SUPABASE_URL ??
		"") as string
).trim();

function getServiceRoleKey(): string {
	const a = (envPrivate?.SUPABASE_SERVICE_ROLE_KEY ?? "") as string;
	const b =
		typeof process !== "undefined"
			? (process.env?.SUPABASE_SERVICE_ROLE_KEY ?? "")
			: "";
	return (a || b || "").trim();
}

/**
 * Server-only Supabase client with service role (bypasses RLS).
 * Use for admin operations like counting signups. Never expose this key to the client.
 * Key is read on each call so process.env is up to date (Vite may not expose .env.local at module load).
 */
export function getSupabaseAdmin() {
	const serviceRoleKey = getServiceRoleKey();
	if (
		!url ||
		!serviceRoleKey ||
		!url.startsWith("https://") ||
		!url.includes(".supabase.co")
	) {
		if (dev && !serviceRoleKey) {
			console.warn(
				"[Supabase] SUPABASE_SERVICE_ROLE_KEY is missing; signup count will stay 0. Add it to .env.local and restart the dev server.",
			);
		}
		return null;
	}
	return createClient(url, serviceRoleKey, { auth: { persistSession: false } });
}
