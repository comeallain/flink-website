import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";
import { getSupabaseAdmin } from "$lib/supabase/server";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const CAPACITY = 500;

export const GET: RequestHandler = async () => {
	const admin = getSupabaseAdmin();
	const envCheck = dev
		? {
				key_in_sveltekit_env: !!(env.SUPABASE_SERVICE_ROLE_KEY ?? "").trim(),
				url_in_sveltekit_env: !!(env.PUBLIC_SUPABASE_URL ?? "").trim(),
				key_in_process_env:
					typeof process !== "undefined" &&
					!!process.env?.SUPABASE_SERVICE_ROLE_KEY,
				url_in_process_env:
					typeof process !== "undefined" && !!process.env?.PUBLIC_SUPABASE_URL,
			}
		: undefined;

	if (!admin) {
		return json({
			count: 0,
			remaining: CAPACITY,
			...(dev && {
				_debug: "admin_not_configured",
				_hint:
					"SUPABASE_SERVICE_ROLE_KEY must be in .env.local on its own line. Restart dev server (Ctrl+C, pnpm dev). If still missing, try copying .env.local to .env.",
				_env_check: envCheck,
			}),
		});
	}
	const { count, error } = await admin
		.from("waitlist_signups")
		.select("*", { count: "exact", head: true });
	if (error) {
		return json(
			{
				count: 0,
				remaining: CAPACITY,
				...(dev && { _debug: "supabase_error", _hint: error.message }),
			},
			{ status: 500 },
		);
	}
	const total = typeof count === "number" ? count : 0;
	return json({
		count: total,
		remaining: Math.max(0, CAPACITY - total),
		...(dev &&
			total === 0 && {
				_debug: "count_zero",
				_hint:
					"Query succeeded but count is 0. If the table has rows, you may be using the Publishable key instead of the SECRET key. In .env.local, SUPABASE_SERVICE_ROLE_KEY must be the Secret key (Dashboard → API → Secret keys), not the same as PUBLIC_SUPABASE_ANON_KEY.",
			}),
	});
};
