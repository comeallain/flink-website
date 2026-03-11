import { dev } from "$app/environment";
import { env } from "$env/dynamic/public";
import { createClient } from "@supabase/supabase-js";

const url = (env.PUBLIC_SUPABASE_URL ?? "").trim();
const key = (env.PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

/** Minimal schema for waitlist_signups so insert() is typed without codegen. */
export interface WaitlistSignupInsert {
	email: string;
	full_name: string;
	company: string | null;
	country: string;
	film_count: number;
	loi_agree: boolean;
	investor_ref: string;
	source: string | null;
	utm_campaign: string | null;
}

interface Database {
	public: {
		Tables: {
			waitlist_signups: { Insert: WaitlistSignupInsert };
		};
	};
}

function createSupabaseClient(): ReturnType<
	typeof createClient<Database>
> | null {
	if (!url || !key) return null;
	// Supabase expects https://*.supabase.co — avoid SSR crash on malformed URL
	if (!url.startsWith("https://") || !url.includes(".supabase.co")) {
		if (dev) {
			console.warn(
				"[Supabase] PUBLIC_SUPABASE_URL must be https://<project>.supabase.co",
			);
		}
		return null;
	}
	try {
		return createClient<Database>(url, key, {
			auth: { persistSession: false },
		});
	} catch {
		if (dev) {
			console.warn(
				"[Supabase] Failed to create client. Check PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY.",
			);
		}
		return null;
	}
}

/** Supabase client for browser. Only valid when env vars are set and URL is valid. */
export const supabase = createSupabaseClient();

export function isSupabaseConfigured(): boolean {
	return supabase !== null;
}
