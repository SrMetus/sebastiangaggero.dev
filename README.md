# sebastiangaggero.dev

Personal developer portfolio for **Sebastian Gaggero**, focused on Python backend development, REST APIs, automation, integrations, and practical engineering projects.

Built as a static-first Astro site with bilingual content, engineering case studies, responsive design, light/dark themes, downloadable CVs, and a technical SEO foundation.

## Features

- English homepage at `/`
- Spanish homepage at `/es/`
- English and Spanish navigation
- Light and dark themes
- Persistent user theme preference
- Operating-system theme fallback
- Responsive design, including ultra-narrow mobile layouts
- Downloadable CVs in English and Spanish
- Engineering case study for Job Radar
- Localized metadata and canonical URLs
- EN / ES / x-default `hreflang`
- Open Graph metadata
- Twitter/X metadata
- Sitemap and `robots.txt`
- Minimal Person JSON-LD structured data
- Accessible navigation, focus states, language selector, and theme controls

## Tech Stack

- Astro
- TypeScript
- Native CSS
- HTML
- Node.js 24
- npm
- ESLint
- Prettier
- Astro Check
- Git
- GitHub

The project intentionally avoids unnecessary frontend frameworks and dependencies.

## Routes

### Portfolio

| Language | Homepage | Job Radar case study     |
| -------- | -------- | ------------------------ |
| English  | `/`      | `/projects/job-radar`    |
| Español  | `/es/`   | `/es/projects/job-radar` |

### CV

| Language | HTML source | PDF                            |
| -------- | ----------- | ------------------------------ |
| English  | `/cv/en/`   | `/sebastian-gaggero-cv-en.pdf` |
| Español  | `/cv/es/`   | `/sebastian-gaggero-cv-es.pdf` |

The HTML CV routes are print-oriented sources and are excluded from normal search indexing.

## Featured Project

### Job Radar

Job Radar is a backend project designed to collect, normalize, store, filter, and prioritize remote Python/backend job opportunities.

The project uses:

- Python 3.12
- FastAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- Docker
- pytest
- GitHub Actions

The engineering case study covers decisions such as:

- source-specific data ingestion
- normalization
- exact URL deduplication
- PostgreSQL persistence
- filtering
- pagination
- rule-based scoring
- REST API design
- automated testing
- CI workflows

Job Radar imports job listings from multiple sources, normalizes source-specific data into a shared model, prevents duplicate records through exact URL identity, and exposes filtered job data through a REST API.

Its scoring system uses explicit rules to prioritize junior remote Python/backend opportunities.

### Live project

https://job-radar-bonw.onrender.com/

### Repository

https://github.com/SrMetus/Job-Radar

## Selected Work

### Surtr Alert

Surtr Alert is a Python plugin for WeeChat that provides desktop notifications for IRC activity on Linux.

It supports:

- private messages
- mentions
- notices
- friend join events
- friend leave events
- ignored nick filtering
- channel filtering
- native WeeChat configuration
- desktop notifications
- terminal notifications
- Zenity notifications
- optional custom sounds
- logging

### Repository

https://github.com/SrMetus/surtr-alert

## Localization

The site uses an explicit static localization architecture rather than a client-side i18n framework.

Localized content is organized through typed EN/ES modules and shared Astro templates.

Current localized routes:

```text
/
/es/
/projects/job-radar
/es/projects/job-radar
```

The architecture uses shared page templates rather than duplicating entire English and Spanish pages.

Localized content is stored in:

```text
src/i18n/
├── home.ts
├── job-radar.ts
├── metadata.ts
├── routes.ts
└── ui.ts
```

Project names, technologies, API paths, commands, and technical identifiers are preserved when translating them would reduce clarity.

## Theme Support

The portfolio supports light and dark themes using semantic CSS custom properties.

Theme behavior follows this priority:

1. explicit saved user preference
2. operating-system `prefers-color-scheme`
3. light theme fallback

The selected theme is persisted locally.

A small early initializer applies the selected theme before the visible page renders where possible, reducing theme flashing during navigation or reloads.

The theme implementation uses:

- semantic CSS tokens
- `data-theme`
- `localStorage`
- `prefers-color-scheme`
- minimal vanilla JavaScript

No theme library or frontend framework is required.

## Responsive Design

The portfolio is mobile-first.

The header adapts across desktop, tablet, mobile, and ultra-narrow screens.

At normal mobile widths it preserves a compact two-row structure.

At widths below approximately 320px, the header uses a deliberate fallback layout with:

- brand on its own row
- utility controls grouped separately
- navigation displayed as a compact two-column grid

This avoids overlapping controls or unreadable text on extremely narrow viewports.

## SEO

The portfolio includes a technical SEO foundation for its public EN/ES routes.

Implemented features include:

- localized page titles
- localized meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X summary metadata
- reciprocal `hreflang`
- `x-default`
- sitemap generation
- `robots.txt`
- homepage Person JSON-LD
- `noindex` on HTML CV source routes

### Public indexable routes

```text
/
/es/
/projects/job-radar
/es/projects/job-radar
```

### CV source routes

```text
/cv/en/
/cv/es/
```

The HTML CV routes are excluded from the sitemap and contain:

```html
<meta name="robots" content="noindex" />
```

The PDF CV files remain available as downloadable public assets.

Social preview images are planned separately.

## Structured Data

The localized homepages include a minimal `Person` JSON-LD entity using verified public information only.

The structured data includes:

- Sebastian Gaggero
- portfolio URL
- localized professional positioning
- GitHub profile
- LinkedIn profile

It intentionally does not include invented employer, address, phone number, awards, certifications, or organization relationships.

## Intended Production Domain

The intended production domain is:

```text
https://sebastiangaggero.dev
```

The domain and production hosting configuration are not yet finalized.

Production verification of redirects, HTTPS behavior, and trailing-slash canonicalization will be completed after deployment.

## Project Structure

```text
src/
├── components/
│   ├── About.astro
│   ├── Capabilities.astro
│   ├── Contact.astro
│   ├── FeaturedJobRadar.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── HomePage.astro
│   ├── HowIWork.astro
│   ├── JobRadarPage.astro
│   ├── LanguageSelector.astro
│   ├── SelectedWork.astro
│   ├── Services.astro
│   └── ThemeToggle.astro
│
├── i18n/
│   ├── home.ts
│   ├── job-radar.ts
│   ├── metadata.ts
│   ├── routes.ts
│   └── ui.ts
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── cv/
│   │   └── [lang].astro
│   ├── es/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── job-radar.astro
│   ├── projects/
│   │   └── job-radar.astro
│   └── index.astro
│
└── styles/
    ├── global.css
    └── tokens.css
```

Additional project files include:

```text
public/
scripts/
docs/
astro.config.mjs
eslint.config.js
package.json
tsconfig.json
AGENTS.md
```

## Local Development

### Requirements

- Node.js 24.x
- npm

The required Node major version is defined by the project.

Check your version:

```bash
node --version
npm --version
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Astro runs locally at:

```text
http://localhost:4321/
```

## Available Routes in Development

English homepage:

```text
http://localhost:4321/
```

Spanish homepage:

```text
http://localhost:4321/es/
```

English Job Radar case study:

```text
http://localhost:4321/projects/job-radar
```

Spanish Job Radar case study:

```text
http://localhost:4321/es/projects/job-radar
```

English CV source:

```text
http://localhost:4321/cv/en/
```

Spanish CV source:

```text
http://localhost:4321/cv/es/
```

## Verification

Run the complete verification pipeline:

```bash
npm run verify
```

The verification workflow includes:

- Prettier formatting validation
- ESLint
- Astro type checking
- production build

Run the formatting check independently:

```bash
npm run format:check
```

Check Git whitespace errors:

```bash
git diff --check
```

The project should be verified before opening or merging a pull request.

## Production Build

Generate the static production build:

```bash
npm run build
```

Astro generates the output inside:

```text
dist/
```

The build includes the public portfolio routes, sitemap output, metadata, structured data, and static assets.

## CV Generation

The bilingual CVs are generated from dedicated Astro print routes.

### Source routes

```text
/cv/en/
/cv/es/
```

### Generated files

```text
public/sebastian-gaggero-cv-en.pdf
public/sebastian-gaggero-cv-es.pdf
```

CV generation is handled by:

```text
scripts/generate-cvs.mjs
```

The CVs are designed as printable, single-page professional documents with selectable text and embedded links.

The portfolio downloads the appropriate PDF according to the selected language:

```text
EN → /sebastian-gaggero-cv-en.pdf
ES → /sebastian-gaggero-cv-es.pdf
```

## Design Principles

The visual system follows a restrained editorial approach.

The portfolio intentionally avoids common generic developer-portfolio patterns such as:

- fake terminals
- decorative code blocks
- skill percentage bars
- excessive gradients
- particles
- typing effects
- giant technology logos
- generic SaaS-style card grids
- neon dark-mode aesthetics

The design favors:

- typography
- whitespace
- hierarchy
- semantic structure
- restrained color
- responsive layouts
- accessible interactions

## Engineering Principles

The project follows several deliberate engineering constraints:

- static-first architecture
- minimal JavaScript
- simple before clever
- understand before building
- shared components over duplicated markup
- typed localized content
- semantic HTML
- accessible interactions
- mobile-first responsive design
- explicit route architecture
- centralized design tokens
- no unnecessary frontend framework
- no unnecessary runtime dependencies
- no fabricated experience or project claims

## Accessibility

Accessibility is considered throughout the portfolio architecture.

Current considerations include:

- semantic HTML
- keyboard-accessible navigation
- visible focus states
- native buttons and links
- accessible language selector
- accessible theme toggle
- localized document language
- readable contrast in light and dark themes
- responsive layouts
- usable ultra-narrow mobile layouts

A broader final accessibility and QA pass is planned separately.

## Git Workflow

Development follows an issue-based Git workflow.

```text
Issue
→ feature branch
→ implementation
→ verification
→ manual review
→ pull request
→ squash merge
→ main
```

Typical branch naming:

```text
feature/<issue-number>-<description>
```

Examples:

```text
feature/35-spanish-localization
feature/37-theme-support
feature/40-seo-metadata
```

Changes are reviewed before being merged into `main`.

## Development Workflow

For non-trivial changes:

1. Create a GitHub issue.
2. Create a feature branch from the latest `main`.
3. Inspect the existing architecture.
4. Propose the smallest viable implementation.
5. Review the proposal.
6. Implement.
7. Run formatting and verification.
8. Review the complete diff.
9. Perform manual visual review when applicable.
10. Commit and push.
11. Open a pull request.
12. Squash merge into `main`.

This process keeps changes scoped, reviewable, and documented.

## Current Status

Implemented:

- portfolio homepage
- responsive navigation
- Job Radar featured project
- Job Radar engineering case study
- Surtr Alert selected work
- services
- capabilities
- about
- engineering workflow
- contact
- footer
- bilingual CVs
- English/Spanish localization
- language selector
- light/dark themes
- responsive theme controls
- localized SEO metadata
- canonical URLs
- hreflang
- sitemap
- robots.txt
- Person JSON-LD

Planned:

- social preview image
- Open Graph image metadata
- final accessibility review
- final responsive QA
- deployment
- production domain configuration
- production SEO verification

## Contact

**Sebastian Gaggero**

GitHub:  
https://github.com/SrMetus

LinkedIn:  
https://www.linkedin.com/in/sebastiangaggero/

Portfolio domain:  
https://sebastiangaggero.dev _(planned production domain)_
