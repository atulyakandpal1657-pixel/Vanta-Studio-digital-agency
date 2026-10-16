# Vanta Studio

Portfolio website for a fictional digital agency. All clients, case studies, team members and quotes are fictional.

## Stack
TanStack Start (React 19, Vite, file-based routing in `src/routes`), Tailwind CSS v4 (tokens in `src/styles.css`), Lucide icons, Zod.

## Setup
```bash
bun install
bun run dev      # http://localhost:8080
bunx vitest run  # tests
bun run build
```

## Environment variables
None required. The contact form opens the visitor's email app addressed to `hello@vanta.studio` (change `STUDIO_EMAIL` in `src/routes/contact.tsx`).

## Content
Projects live in `src/lib/projects.ts`; services in `src/components/site/PageHero.tsx`.

## Deployment
Publish from Lovable, or run `bun run build` and deploy the output to any edge/worker host.
