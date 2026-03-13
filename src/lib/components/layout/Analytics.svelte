<script lang="ts">
	import { onMount } from "svelte";

	const gaId: string =
		(import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string) || "G-Z88E24SRG0";
	const pixelId: string = (import.meta.env.PUBLIC_META_PIXEL_ID as string) || "";

	onMount(() => {
		// GA4
		if (gaId) {
			const s = document.createElement("script");
			s.async = true;
			s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
			document.head.appendChild(s);
			(window as any).dataLayer = (window as any).dataLayer || [];
			(window as any).gtag = function (...args: any[]) {
				(window as any).dataLayer.push(args);
			};
			(window as any).gtag("js", new Date());
			(window as any).gtag("config", gaId);
		}

		// Meta Pixel
		if (pixelId) {
			const win = window as any;
			if (!win.fbq) {
				const n: any = (win.fbq = function (...args: any[]) {
					n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
				});
				win._fbq = n;
				n.push = n;
				n.loaded = true;
				n.version = "2.0";
				n.queue = [];
				const s = document.createElement("script");
				s.async = true;
				s.src = "https://connect.facebook.net/en_US/fbevents.js";
				document.head.appendChild(s);
			}
			win.fbq("init", pixelId);
			win.fbq("track", "PageView");
		}

		// Contentsquare (formerly Hotjar) – no API key; script ID is in the URL
		const cs = document.createElement("script");
		cs.async = true;
		cs.src = "https://t.contentsquare.net/uxa/027b3d03e761d.js";
		document.head.appendChild(cs);
	});
</script>
