// Disable SSR app-wide so the server never runs app code (avoids Vercel 500).
// The server only sends a shell; the client hydrates and renders everything.
export const ssr = false;
