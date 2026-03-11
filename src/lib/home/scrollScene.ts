import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ScrollSceneOptions = {
	end?: string;
	scrub?: number | boolean;
	onProgress?: (progress: number) => void;
};

export function createFadeScene(
	scene: HTMLElement,
	fromEl: HTMLElement,
	toEl: HTMLElement,
	{ end = "+=160%", scrub = 1, onProgress }: ScrollSceneOptions = {},
) {
	const timeline = gsap
		.timeline({
			scrollTrigger: {
				trigger: scene,
				start: "top top",
				end,
				scrub,
				pin: true,
				onUpdate: (self) => {
					onProgress?.(self.progress);
				},
			},
		})
		.fromTo(
			fromEl,
			{ opacity: 1, scale: 1 },
			{ opacity: 0, scale: 0.8, ease: "none", duration: 0.4 },
		)
		.fromTo(
			toEl,
			{ opacity: 0 },
			{ opacity: 1, ease: "none", duration: 0.1 },
			0,
		);

	return () => {
		timeline.scrollTrigger?.kill();
		timeline.kill();
	};
}

export function createThreeFadeScene(
	scene: HTMLElement,
	fromEl: HTMLElement,
	midEl: HTMLElement,
	toEl: HTMLElement,
	{ end = "+=100%", scrub = 1, onProgress }: ScrollSceneOptions = {},
) {
	// Force scene 1 visible before any scrub; GSAP will take over from here
	gsap.set(fromEl, { opacity: 1, scale: 1 });
	gsap.set(midEl, { opacity: 0 });
	gsap.set(toEl, { opacity: 0, y: 40 });

	const rectGroups = toEl.querySelectorAll<HTMLElement>(".group-rectangles");
	const vividRects = toEl.querySelectorAll<HTMLElement>(".highlight-vivid");
	if (rectGroups.length >= 3) {
		gsap.set(rectGroups, { xPercent: -100 });
	}
	if (vividRects.length >= 3) {
		gsap.set(vividRects, { scaleX: 0, transformOrigin: "left center" });
	}

	const timeline = gsap
		.timeline({
			scrollTrigger: {
				trigger: scene,
				start: "top top",
				end,
				scrub,
				pin: true,
				onUpdate: (self) => {
					onProgress?.(self.progress);
				},
			},
		})
		// Scene 1: zoom out just a little — reveal the video was in the cinema all along
		.fromTo(
			fromEl,
			{ opacity: 1, scale: 1 },
			{ opacity: 0, scale: 0.96, ease: "none", duration: 0.22 },
		)
		// Scene 2: fade in (white hero) — shorter visibility so it's fully out before slide 3
		.fromTo(
			midEl,
			{ opacity: 0 },
			{ opacity: 1, ease: "none", duration: 0.28 },
			0.2,
		)
		// Scene 2: fade out earlier and quicker — more gap before slide 3
		.fromTo(
			midEl,
			{ opacity: 1 },
			{ opacity: 0, ease: "none", duration: 0.14 },
			0.38,
		)
		// Scene 3: start after a clear gap so 2 and 3 never overlap
		.fromTo(
			toEl,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, ease: "none", duration: 0.28 },
			0.84,
		);

	if (rectGroups.length >= 3) {
		timeline
			.fromTo(
				rectGroups[0],
				{ xPercent: -100 },
				{ xPercent: 0, ease: "none", duration: 0.18 },
				0.89,
			)
			.fromTo(
				rectGroups[1],
				{ xPercent: -100 },
				{ xPercent: 0, ease: "none", duration: 0.18 },
				0.91,
			)
			.fromTo(
				rectGroups[2],
				{ xPercent: -100 },
				{ xPercent: 0, ease: "none", duration: 0.18 },
				0.93,
			);
	}
	if (vividRects.length >= 3) {
		timeline
			.fromTo(
				vividRects[0],
				{ scaleX: 0 },
				{ scaleX: 1, ease: "none", duration: 0.18 },
				0.89,
			)
			.fromTo(
				vividRects[1],
				{ scaleX: 0 },
				{ scaleX: 1, ease: "none", duration: 0.18 },
				0.91,
			)
			.fromTo(
				vividRects[2],
				{ scaleX: 0 },
				{ scaleX: 1, ease: "none", duration: 0.18 },
				0.93,
			);
	}

	timeline
		// Hold slide 3: long scroll before value section
		.to({}, { duration: 1.0 }, 1.14);

	return () => {
		timeline.scrollTrigger?.kill();
		timeline.kill();
	};
}

/** Two-panel scene: fromEl fades in, then out, while toEl fades in. Use when scene 1 is rendered separately above. */
export function createTwoPanelScene(
	scene: HTMLElement,
	fromEl: HTMLElement,
	toEl: HTMLElement,
	{ end = "+=120%", scrub = 1, onProgress }: ScrollSceneOptions = {},
) {
	gsap.set(fromEl, { opacity: 0 });
	gsap.set(toEl, { opacity: 0, y: 40 });

	const timeline = gsap
		.timeline({
			scrollTrigger: {
				trigger: scene,
				start: "top top",
				end,
				scrub,
				pin: true,
				onUpdate: (self) => {
					onProgress?.(self.progress);
				},
			},
		})
		.fromTo(
			fromEl,
			{ opacity: 0 },
			{ opacity: 1, ease: "none", duration: 0.25 },
			0,
		)
		.fromTo(
			fromEl,
			{ opacity: 1 },
			{ opacity: 0, ease: "none", duration: 0.2 },
			0.35,
		)
		.fromTo(
			toEl,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, ease: "none", duration: 0.3 },
			0.4,
		);

	return () => {
		timeline.scrollTrigger?.kill();
		timeline.kill();
	};
}
