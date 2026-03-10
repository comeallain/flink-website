import { z } from "zod";

export const envSchema = z.object({
	PUBLIC_SITE_URL: z.string().min(1, "PUBLIC_SITE_URL is required"),
});
