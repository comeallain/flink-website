import { env } from "$env/dynamic/public";
import { envSchema } from "./lib/schemas/env";

envSchema.parse({
	PUBLIC_SITE_URL: env.PUBLIC_SITE_URL ?? "http://localhost:5173",
});
