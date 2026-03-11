import { dev } from "$app/environment";
import { createClient } from "@supabase/supabase-js";

function getEnv(name: string): string {
	if (typeof process === "undefined" || !process.env) return "";
	return (process.env[name] ?? "").trim();
}

/**
 * Server-only Supabase client with service role (bypasses RLS).
 * Uses process.env only so it never imports $env/dynamic (avoids Vercel serverless 500).
 */
export function getSupabaseAdmin() {
	const url = getEnv("PUBLIC_SUPABASE_URL");
	const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");
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
