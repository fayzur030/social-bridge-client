<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# impacthub-client

Next.js 16.4 App Router frontend for ImpactHub (community events site). React 19.3, strict TypeScript, Tailwind v4, shadcn `base-nova` style on **Base UI** (not Radix).

## Commands

- `npm run dev` — dev server on :3000. Turbopack is the Next 16 default; never add `--turbopack`.
- `npm run lint` — runs `eslint` directly (`next lint` no longer exists).
- `npx tsc --noEmit` — typecheck; there is no `typecheck` script.
- `npm run build` / `npm start` — production build and serve.
- No test runner, CI workflow, or formatter config exists. Don't invent a test pipeline; verify with lint + `tsc --noEmit`, and `npm run build` when routes/types change.
- Node 20.9+ is required by Next 16.

## Structure

- `src/app/(website)/` — public pages wrapped by `Navbar`; `src/app/(auth)/` — login/register with no navbar. Add pages to the matching route group rather than a new top-level folder.
- `src/components/<feature>/` — feature components (`home`, `layout`); `src/components/ui/` — shadcn-generated primitives. Regenerate or keep edits minimal there instead of hand-rewriting.
- `@/*` maps to `src/*`.
- No API routes, data layer, auth, or state management yet; pages are placeholders.

## Next.js 16 specifics

- Read the bundled, version-matched docs in `node_modules/next/dist/docs/` before using framework APIs.
- `params`/`searchParams` are Promises. Prefer the global `PageProps<'/path'>` / `LayoutProps<'/path'>` helpers (already used in `src/app/layout.tsx`) over hand-written prop types.
- `middleware.ts` is now `proxy.ts`, and `next lint` was removed.

## Styling

- Tailwind v4 is CSS-first: there is no `tailwind.config.*` and no PostCSS config. Theme tokens live in `src/app/globals.css` under `@theme inline`; CSS is compiled by the `@tailwindcss/turbopack` rule in `next.config.ts`. Don't add a PostCSS pipeline.
- `cn` is the `cn` npm package (drop-in clsx + tailwind-merge), re-exported from `src/lib/utils.ts`. Import `{ cn } from '@/lib/utils'` in app code; `src/components/ui/*` import from `'cn'` directly — leave those alone.
- Base UI composition uses the `render` prop; `asChild` does not exist in this setup.
- Add primitives with the locally pinned CLI, `npx shadcn add <name>` (not `@latest`), so output matches `components.json`; files land in `src/components/ui`.
- Brand colors are hardcoded hex in components (`#087F5B` primary, `#066B4D` hover, gradient `#23AD56` → `#1C87ED`); shadcn CSS variables are still neutral. Reuse these hexes instead of inventing new colors.
- `font-heading` resolves to Plus Jakarta Sans (`--font-heading` set in `src/app/layout.tsx`); body text is Inter applied on `<html>`. Don't re-add a `--font-heading: var(--font-sans)` override in `@theme` — it silently swaps headings to the system stack.
- Hand-written app code uses single quotes and no semicolons; generated `ui/` files use double quotes and semicolons. Static images live in `src/assets` and are imported, then passed to `next/image`.
