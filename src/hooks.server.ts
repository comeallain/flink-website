import { env } from "$env/dynamic/public";
import { envSchema } from "./lib/schemas/env";

function getPublicSiteUrl(): string {
	try {
		const raw = (typeof env !== "undefined" && env?.PUBLIC_SITE_URL) ?? "";
		const value = String(raw).trim() || "http://localhost:5173";
		envSchema.parse({ PUBLIC_SITE_URL: value });
		return value;
	} catch {
		return "http://localhost:5173";
	}
}

getPublicSiteUrl();
