# Repository guidance

## Stack and commands

- This is a Next.js 16.4.3 App Router app using React 19.3, strict TypeScript, Tailwind CSS v4, and shadcn `base-nova` components built on Base UI.
- Use Node.js 20.9 or newer.
- `npm run dev` starts the local app; `npm run build` creates a production build; `npm start` serves it.
- `npm run lint` runs ESLint. `npx tsc --noEmit` runs the TypeScript check.
- There is no configured test runner or single-test command. For validation, run lint and typecheck; also build when changing routes, framework configuration, or route types.

## Architecture

- `src/app/layout.tsx` provides global fonts, metadata, styles, and the Sonner toaster. Route groups separate layouts without changing URL paths: `src/app/(website)/` wraps public pages in the site navbar, while `src/app/(auth)/` provides login and registration pages without it.
- Interactive page-specific components live beside their route (often in `_Components/`). Shared feature components live in `src/components/<feature>/`; reusable shadcn primitives live in `src/components/ui/`.
- Authentication is wired through Better Auth: `src/lib/auth.ts` configures the server instance and MongoDB adapter, `src/lib/auth-client.ts` exposes the browser client, and `src/app/api/auth/[...all]/route.ts` forwards the auth HTTP handlers. Follow this existing path when extending auth; event screens should not be assumed to have persistence or API wiring.
- `@/*` aliases to `src/*`. Static images are in `src/assets`; import them and render with `next/image`.

## Framework and UI conventions

- Before adding or changing Next.js APIs, consult the version-matched guides under `node_modules/next/dist/docs/`. In this version, `params` and `searchParams` are Promises; prefer generated global `PageProps<'/route'>` and `LayoutProps<'/route'>` types where applicable. Use `proxy.ts` rather than the deprecated `middleware.ts`; `next lint` is not available.
- Tailwind v4 configuration is CSS-first. Theme tokens are in `src/app/globals.css` under `@theme inline`; `next.config.ts` configures the Tailwind Turbopack CSS loader. Do not introduce a Tailwind config or PostCSS pipeline.
- Base UI components use the `render` prop, not Radix's `asChild`. Add shadcn primitives with the locally pinned CLI (`npx shadcn add <name>`, without `@latest`) and keep edits to generated UI components minimal.
- Use `cn` from `@/lib/utils` in app code; generated files in `src/components/ui/` import it directly from `cn`.
- Handwritten app code uses single quotes and omits semicolons. Generated `src/components/ui/` files use double quotes and semicolons; preserve the local style when editing either.
- Inter is the body font and Plus Jakarta Sans is the heading font, configured in `src/app/layout.tsx`. Keep the existing font variables intact. Prefer existing theme tokens and established feature colors over introducing new palette values.
