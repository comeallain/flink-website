## FLINK marketing site (SvelteKit)

SvelteKit implementation of the FLINK marketing / landing pages, migrated from the legacy static `legacy/` HTML + CSS + JS.

### Stack

- **Runtime**: SvelteKit, Svelte 5, TypeScript (strict), pnpm, Node 20+
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`), utilities only; base styles on `app.html` and in components
- **Validation**: Zod + `envSchema` for runtime env validation
- **UI/UX**: `svelte-sonner` for global toasts; projector effect and scroll reveals implemented as Svelte actions; counters via Svelte stores; video modal logic lives in the `VideoCarousel` section.
- **Tooling**: Biome, Lefthook, Commitlint, Commitizen, semantic-release, Vitest

### Project structure

- `legacy/` – original static marketing pages (`index.html`, `cta.html`, `team.html`) and their assets (kept for reference)
- `src/app.html` – SvelteKit document shell (body/html classes for base theme)
- `src/routes/+layout.svelte` – root layout; imports Tailwind, favicon, and mounts the global `Toaster` from `svelte-sonner`
- `src/routes/+page.svelte` – main landing page composed from Svelte components; wires up counters
- `src/lib/components/layout` – layout components (`Nav`, `Footer`)
- `src/lib/components/home` – home sections (`Hero`, `VideoCarousel`, `ValueSection`, `QuotesSection`, `CredBar`, `FinalCta`) and their subcomponents
- `src/lib/home` – home-page behaviour (Svelte actions for projector effect and scroll reveal, counters)
- `src/lib/constants` – shared constants such as external links and home-page copy (quotes, credibility items)
- `src/lib/schemas/env.ts` – Zod env schema

### Getting started

```sh
pnpm install
pnpm dev
```

Then open `http://localhost:5173`.

### Scripts

- `pnpm dev` – start dev server
- `pnpm build` – production build
- `pnpm preview` – preview production build
- `pnpm biome:lint` / `biome:format` / `biome:check` – lint/format/check with Biome
- `pnpm typecheck` – run `svelte-check`
- `pnpm test` – run Vitest tests
- `pnpm commit` – Commitizen conventional commit prompt
- `pnpm release` – run semantic-release

### Env configuration

- Set `PUBLIC_SITE_URL` in `.env` for production; it is validated with `src/lib/schemas/env.ts`.

### Notes

- Supabase and any dynamic backend dependencies have been intentionally removed; the marketing site currently uses only static data.
- The `legacy/` folder is not served by SvelteKit and is safe to delete once you no longer need the original HTML/CSS/JS for reference.

A single global `<Toaster />` from `svelte-sonner` is mounted in `+layout.svelte`, ready for any page-level toast notifications you choose to add.

### Architecture overview

- **Layout**: `Nav` and `Footer` live under `src/lib/components/layout` and are imported into `+page.svelte`.
- **Sections**: Each major section of the landing page (`Hero`, `VideoCarousel`, `ValueSection`, `QuotesSection`, `CredBar`, `FinalCta`) has its own folder under `src/lib/components/home`, often with small subcomponents.
- **UI primitives**: Reusable, low-level pieces like `PrimaryCtaLink`, `SectionTitle`, `ValueStat`, `DevBadge`, `CounterPill`, and `PageSection` live in `src/lib/components/ui`.
- **Behaviour**: Svelte actions and effects for the home page (projector effect, scroll reveal, counters, toast schedule) live in `src/lib/home`.
- **Content**: Marketing copy that is reused or structured (quotes, credibility items, external links) lives in `src/lib/constants`.

### How to add a new section

1. Create a new folder under `src/lib/components/home`, for example `NewSection/`, and add a `NewSection.svelte` file with your markup.
2. Reuse UI primitives from `src/lib/components/ui` (`PageSection`, `SectionTitle`, `PrimaryCtaLink`, etc.) so the look and feel stays consistent.
3. If the section needs scroll-based animation, apply the `revealOnScroll` action from `src/lib/home` with `use:revealOnScroll` on the elements you want to animate.
4. If the section needs structured copy (lists of items, cards, quotes), add that data to a constants file in `src/lib/constants` and import it into your section.
5. Export the new section from `src/lib/components/home/index.ts`, then render it in `src/routes/+page.svelte` alongside the existing sections.

