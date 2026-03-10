type RevealOnScrollOptions = {
	rootMargin?: string;
	threshold?: number;
	activeClass?: string;
};

export function revealOnScrollAction(
	node: HTMLElement,
	options: RevealOnScrollOptions = {},
) {
	const {
		rootMargin = "0px",
		threshold = 0.15,
		activeClass = "visible",
	} = options;

	const obs = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add(activeClass);
					obs.unobserve(entry.target);
				}
			}
		},
		{ threshold, rootMargin },
	);

	obs.observe(node);

	return {
		destroy() {
			obs.disconnect();
		},
	};
}
