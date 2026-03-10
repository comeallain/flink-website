export type PrimaryCtaSize = "sm" | "md";

export const primaryCtaBaseClass =
	"inline-flex items-center gap-2 rounded-lg bg-orange-500 font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:bg-orange-400";

export const primaryCtaSizeClassBySize: Record<PrimaryCtaSize, string> = {
	md: "px-8 py-3 text-base",
	sm: "px-4 py-2 text-sm",
};
