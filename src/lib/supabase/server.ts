import { dev } from "$app/environment";
import { SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client with service role (bypasses RLS).
 * Uses $env/static/private so the key is reliably available in both
 * dev (from .env.local) and Vercel serverless (from dashboard env vars).
 */
export function getSupabaseAdmin() {
	if (
		!PUBLIC_SUPABASE_URL ||
		!SUPABASE_SERVICE_ROLE_KEY ||
		!PUBLIC_SUPABASE_URL.startsWith("https://") ||
		!PUBLIC_SUPABASE_URL.includes(".supabase.co")
	) {
		if (dev && !SUPABASE_SERVICE_ROLE_KEY) {
			console.warn(
				"[Supabase] SUPABASE_SERVICE_ROLE_KEY is missing; signup count will stay 0. Add it to .env.local and restart the dev server.",
			);
		}
		return null;
	}
	return createClient(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
		auth: { persistSession: false },
	});
}
