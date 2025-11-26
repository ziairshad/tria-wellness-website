# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `src/app`, with route folders such as `about`, `blog`, and `contact`; shared layout code sits in `layout.tsx` and `globals.css`. Presentation logic is broken into reusable primitives inside `src/components`, with page-specific assemblies under `src/components/sections`. Typed data (carousel entries, copy decks) is stored in `src/data`, utilities sit in `src/lib`, and shared interfaces live in `src/types`. Static assets (fonts, icons, images) belong under `public`.

## Build, Test, and Development Commands
- `npm run dev` launches the local dev server on `http://localhost:3000` with hot reload.
- `npm run build` performs a production Next.js build and surfaces type errors.
- `npm run start` boots the compiled app; use this to validate deployment bundles.
- `npm run lint` runs the repo-wide ESLint config (`eslint.config.mjs`) and should pass before every commit.

## Coding Style & Naming Conventions
Use TypeScript with React Server Components by default; client components must include `"use client"`. Stick to 2-space indentation and favor small, typed props objects. Name components with `PascalCase` (`HeroBanner`), hooks/utilities with `camelCase`, and Tailwind utility groups with semantic wrappers via `clsx` or `tailwind-merge`. Keep styling inside JSX using Tailwind 4 tokens or CSS variables defined in `globals.css`; avoid ad hoc inline styles. Group section-level files under `src/components/sections/<feature>` to keep imports predictable.

## Testing Guidelines
A formal test runner is not yet configured. When adding coverage, prefer React Testing Library + Vitest colocated in `__tests__` folders beside the component (`src/components/sections/classes/__tests__/classes.test.tsx`). Smoke-test critical flows manually after each change by confirming the landing page renders all sections without console warnings. Document any gaps (e.g., carousel interactions) in the PR description until automated coverage exists.

## Commit & Pull Request Guidelines
Git history uses short, imperative subjects (“Update background to white…”). Follow that pattern, keep commits scoped to a single concern, and include relevant issue IDs when available. Pull requests should describe the visual or behavioral change, list test evidence (`npm run lint`, manual browser screenshots), and mention affected routes or data files. Always request review before merging and confirm Vercel previews render without layout regressions.
