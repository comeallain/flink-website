export type PrimaryCtaSize = "sm" | "md";

export const primaryCtaBaseClass =
	"inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] font-semibold text-black shadow-lg shadow-[var(--orange-glow)] transition hover:bg-[var(--orange-hover)]";

export const primaryCtaSizeClassBySize: Record<PrimaryCtaSize, string> = {
	md: "px-8 py-3 text-base",
	sm: "px-4 py-2 text-sm",
};
