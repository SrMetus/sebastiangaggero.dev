# Development Workflow

## Local Setup

The project supports **Node.js 24.x**. Use `.nvmrc` as the source for local environment selection (`nvm use` when using nvm), then install the locked dependencies with `npm ci`. The current foundation has been verified on Node **24.21.0**.

Use npm and keep `package-lock.json` in sync with intentional dependency changes. Explain why any new dependency is necessary before adding it.

## Development and Preview Commands

| Command           | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the Astro development server              |
| `npm run build`   | Generate the static site and sitemap in `dist/` |
| `npm run preview` | Preview an existing production build locally    |

Build before using preview. Generated `.astro/` and `dist/` files are not source files and must not be committed.

## Formatting, Linting, and Type Checking

Prettier handles formatting with Astro support: semicolons enabled, single quotes, trailing commas set to `all`, and print width **100**. Respect `.prettierignore`; `AGENTS.md` is excluded from formatting.

ESLint uses `eslint.config.js` with recommended JavaScript, TypeScript, and Astro rules, including TypeScript inside Astro files. Type-aware linting is intentionally not enabled. TypeScript extends Astro's strict configuration; Astro Check provides diagnostics separately from the build.

## Verification Commands

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run format`       | Apply formatting; review resulting changes   |
| `npm run format:check` | Check formatting without rewriting files     |
| `npm run lint`         | Lint with zero warnings allowed              |
| `npm run check`        | Run Astro and TypeScript diagnostics         |
| `npm run verify`       | Run format check → lint → type check → build |
| `git diff --check`     | Check tracked changes for whitespace errors  |

Review new, untracked files explicitly; ordinary `git diff` does not include them. Run applicable tests when they exist. Playwright and GitHub Actions are not configured, and `verify` does not perform browser testing or an accessibility audit.

## Git and GitHub Workflow

Work from the assigned GitHub issue and its acceptance criteria. Keep changes small and scoped; leave unrelated improvements for another issue. Review the complete diff before requesting review.

Do not change branches, commit, or push unless explicitly asked. Never rewrite Git history. Stage files only when authorized and inspect the selected changes. When a commit is requested, use simple Conventional Commits, for example `docs: document project foundations`.

When preparing a requested pull request, reference the issue, explain the concrete result, report verification, and flag limitations. Do not imply that CI ran when only local checks ran.

## Working with Codex

Read [AGENTS.md](../AGENTS.md), the active issue, and relevant files before editing. Propose a short plan for non-trivial work and respect approval boundaries and explicit user instructions. Never silently add dependencies or expand the architecture.

Codex-assisted work must preserve the non-generic portfolio philosophy: question common patterns, use technology for a reason, and substantiate claims with real evidence. Do not invent professional facts, project outcomes, or missing requirements.

After implementation, run applicable checks, inspect all changed and new files, and report what changed, what passed, and what could not be verified. Stop for review when requested; do not treat implementation approval as permission to commit or publish.

## Definition of Done

- The assigned issue's acceptance criteria are satisfied without unrelated changes.
- Formatting, linting, type checking, relevant tests, and the build pass.
- Mobile and desktop behavior and accessibility are checked when relevant to the change.
- The complete diff, including new files and dependency changes, has been reviewed.
- Documentation is updated where necessary; remaining limitations are explicit.
