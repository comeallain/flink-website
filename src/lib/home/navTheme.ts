import { writable } from "svelte/store";

export type NavTheme = "light" | "dark";

// light = white-on-dark (hero); dark = dark-on-light (white panels)
export const navTheme = writable<NavTheme>("light");

/** 0–1 progress through the hero scroll scene; used for headline color (e.g. white → black) */
export const heroProgress = writable(0);

/** True while the viewport is still in the pinned hero (scrollY < 100vh). Used to hide scroll hint once we scroll into section 4. */
export const inHeroView = writable(true);

/** Sample Y in viewport (px from top) to probe content under the nav. Just below nav (nav is h-16). */
export const SAMPLE_Y = 90;

/**
 * Get nav theme from the section under the nav (data-nav-theme).
 * Returns the theme of the first section that contains the sample point, or null if none.
 */
export function getNavThemeFromSection(): NavTheme | null {
	if (typeof document === "undefined") return null;
	const centerX = window.innerWidth / 2;
	const elements = document.elementsFromPoint(centerX, SAMPLE_Y);
	const contentEl = elements.find((el) => !el.closest("nav"));
	const start = contentEl ?? document.elementFromPoint(centerX, SAMPLE_Y);
	const section = start?.closest?.("[data-nav-theme]");
	if (!section) return null;
	const theme = section.getAttribute("data-nav-theme");
	if (theme === "light" || theme === "dark") return theme;
	return null;
}

/**
 * Get the effective background color of the content *behind* the nav at (centerX, sampleY).
 * Uses elementsFromPoint and skips the nav so we sample the page content, then walks up for opaque background.
 */
function getBackgroundRgbAtPoint(
	doc: Document,
	centerX: number,
	sampleY: number,
): number[] | null {
	const elements = doc.elementsFromPoint(centerX, sampleY);
	// Skip nav and its descendants so we sample the content behind it
	const contentEl = elements.find((el) => !el.closest("nav"));
	const start = contentEl ?? doc.elementFromPoint(centerX, sampleY);
	let el: Element | null = start;
	while (el && el !== doc.body) {
		const bg = getComputedStyle(el).backgroundColor;
		const rgb = parseRgb(bg);
		if (rgb && rgb[3] >= 0.5) return [rgb[0], rgb[1], rgb[2]];
		el = el.parentElement;
	}
	const bg = getComputedStyle(doc.body).backgroundColor;
	const rgb = parseRgb(bg);
	return rgb ? [rgb[0], rgb[1], rgb[2]] : null;
}

/** Parse css color string to [r, g, b, a] 0–255, 0–1. Returns null if unparseable. */
function parseRgb(css: string): [number, number, number, number] | null {
	if (!css || css === "transparent" || css === "rgba(0, 0, 0, 0)") return null;
	const rgb = css.match(
		/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/,
	);
	if (rgb)
		return [
			Number(rgb[1]),
			Number(rgb[2]),
			Number(rgb[3]),
			rgb[4] != null ? Number(rgb[4]) : 1,
		];
	const hex = css.match(/^#([0-9a-fA-F]{3,8})$/);
	if (hex) {
		const h = hex[1];
		if (h.length === 3)
			return [
				Number.parseInt(h[0] + h[0], 16),
				Number.parseInt(h[1] + h[1], 16),
				Number.parseInt(h[2] + h[2], 16),
				1,
			];
		if (h.length === 6)
			return [
				Number.parseInt(h.slice(0, 2), 16),
				Number.parseInt(h.slice(2, 4), 16),
				Number.parseInt(h.slice(4, 6), 16),
				1,
			];
		if (h.length === 8)
			return [
				Number.parseInt(h.slice(0, 2), 16),
				Number.parseInt(h.slice(2, 4), 16),
				Number.parseInt(h.slice(4, 6), 16),
				Number.parseInt(h.slice(6, 8), 16) / 255,
			];
	}
	return null;
}

/** Relative luminance (0–1) from sRGB. Dark background → use light nav; light background → use dark nav. */
function luminance(r: number, g: number, b: number): number {
	const [rl, gl, bl] = [r, g, b].map((c) => {
		const x = c / 255;
		return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}

/** Decide nav theme from brightness of content under the nav. Single source of truth for scroll-driven theme. */
export function getNavThemeFromBrightness(): NavTheme {
	if (typeof document === "undefined") return "light";
	const centerX = window.innerWidth / 2;
	const rgb = getBackgroundRgbAtPoint(document, centerX, SAMPLE_Y);
	if (!rgb) return "light";
	const L = luminance(rgb[0], rgb[1], rgb[2]);
	// Dark background (low L) → light nav (white logo). Light background (high L) → dark nav (dark logo).
	return L > 0.45 ? "dark" : "light";
}
