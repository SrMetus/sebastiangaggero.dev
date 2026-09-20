# Project Architecture

## Purpose and Constraints

`sebastiangaggero.dev` supports remote Python backend job opportunities and selected freelance work. The site itself should demonstrate deliberate engineering: simplicity, clarity, technical judgment, and evidence through real work.

It must not look or read like a generic AI-generated developer portfolio. Before adopting a common portfolio pattern, identify its concrete narrative, technical, usability, or commercial purpose.

## Stack and Current State

| State                    | Foundations                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implemented              | Astro 7.3.3, strict TypeScript, Node.js 24, npm, ESLint flat config, Prettier with Astro support, Astro Check, sitemap integration, verification scripts |
| Decided, not implemented | Native CSS design system, mobile-first UI, full SEO metadata, accessibility implementation, portfolio sections                                           |
| Future; outside issue #3 | Playwright, GitHub Actions, deployment, final copy, project screenshots                                                                                  |

The current page is an Astro starter. Tooling being configured does not mean the portfolio UI or accessibility work is complete.

## Static Rendering and Client-Side JavaScript

Astro builds static pages into `dist/`; no server adapter or backend service is configured. Keep content available in generated HTML. Add client-side JavaScript only for a demonstrated interaction need, keeping it minimal.

Use strict TypeScript to catch mistakes during development. Run `astro check` separately from the build through the verification script; a successful build alone is not type verification.

## Repository Structure

- `src/pages/`: Astro routes; currently only `index.astro`.
- `public/`: files copied as static assets; currently starter favicons.
- `docs/`: architecture, design, development, and content decisions.
- Root configuration: Astro, TypeScript, ESLint, Prettier, and npm scripts.
- `.astro/` and `dist/`: generated output, excluded from Git.

Add component, layout, and style directories when implementation needs them. Do not scaffold unused abstractions.

## Components and Styling Boundaries

Use small Astro components with a clear responsibility. Share a component when reuse or responsibility separation justifies it, not merely to wrap a CSS layout concept.

Implement the [approved design tokens](design-system.md) with native CSS and reusable custom properties. Start with small-screen styles and progressively enhance layouts at the agreed breakpoints. No CSS framework is needed.

## SEO Foundations

The configured production URL is `https://sebastiangaggero.dev`. The official sitemap integration generates sitemap files during the static build; this does not establish deployment status.

When implementing pages, provide meaningful titles, descriptions, canonical URLs, social metadata, semantic headings, and crawlable links. The starter title is still “Astro”; full metadata remains planned. Verify generated URLs and page metadata before publication.

## Dependency Policy

Explain each dependency's purpose before adding it. Prefer platform features and the existing stack when they satisfy the requirement.

Do not add React, Vue, Next.js, Tailwind, Bootstrap, UI frameworks, backend services, databases, authentication, or state-management libraries unless the assigned task explicitly requires them and the technical justification is clear.

Keep dependency changes scoped and review the lockfile. See [development workflow](development.md) for verification and Git rules, and [content strategy](content-strategy.md) for the narrative the architecture supports.
