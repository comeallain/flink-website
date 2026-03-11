import { env } from "$env/dynamic/public";
import { envSchema } from "./lib/schemas/env";

const publicSiteUrl =
	(env.PUBLIC_SITE_URL ?? "").trim() || "http://localhost:5173";
envSchema.parse({ PUBLIC_SITE_URL: publicSiteUrl });
