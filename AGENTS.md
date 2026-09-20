# AGENTS.md

## Project

This repository contains `sebastiangaggero.dev`, the professional portfolio of Sebastian Gaggero.

The site has two primary goals:

1. Support remote job opportunities as a Python Backend Developer.
2. Support selected freelance work involving backend systems, APIs, automation, integrations, and internal tools.

The portfolio itself should demonstrate professional engineering practices.

## Core Philosophy

This must not become a generic AI-generated developer portfolio.

Every design, content, architecture, and implementation decision should have a clear purpose.

Prefer:

- simplicity over cleverness;
- clarity over decoration;
- real evidence over marketing claims;
- deliberate design over common portfolio templates;
- maintainability over unnecessary abstraction;
- technology chosen for a reason.

Avoid generic developer-portfolio patterns unless they genuinely improve the product.

Do not introduce decorative terminal windows, fake code snippets, skill percentages, excessive gradients, particle effects, typing animations, or generic "passionate developer" copy.

## Professional Positioning

Primary positioning:

Python Backend Developer | FastAPI, REST APIs & Automation

Relevant technologies include:

- Python
- FastAPI
- REST APIs
- PostgreSQL
- SQLAlchemy
- Docker
- Git / GitHub
- Linux
- Web scraping
- Automation
- API integrations
- pytest
- GitHub Actions

Never fabricate professional experience, project results, metrics, clients, skills, or qualifications.

If information is missing, flag it instead of inventing it.

## Architecture

Current stack:

- Astro
- TypeScript
- native CSS
- Node.js 24
- npm

The website is static by default.

Do not add:

- React
- Vue
- Next.js
- Tailwind
- Bootstrap
- UI frameworks
- backend services
- databases
- authentication
- state-management libraries

unless the task explicitly requires them and there is a clear technical justification.

Do not add dependencies without explaining why they are necessary.

## Design Direction

The site should feel:

- professional;
- calm;
- technical;
- intentional;
- editorial;
- distinctive.

Visual direction:

- warm cream dominant background;
- deep forest green;
- muted sage accents;
- near-black text;
- generous whitespace;
- subtle borders;
- restrained shadows;
- rounded cards;
- strong typography.

Job Radar is a visual reference only.

Do not copy Job Radar's layout or visual identity directly.

## Mobile First

CSS must be mobile-first.

Base styles should target small screens first.

Preferred breakpoints:

- 48rem
- 64rem
- 80rem

Avoid device-specific breakpoints unless necessary.

Do not build desktop-first layouts that are later patched for mobile.

## Accessibility

Use semantic HTML.

Maintain:

- keyboard navigation;
- visible focus states;
- correct heading hierarchy;
- accessible labels;
- appropriate alt text;
- sufficient contrast;
- reduced-motion support when animation exists.

Do not remove focus outlines without an accessible replacement.

## Styling

Use native CSS.

Prefer reusable design tokens instead of duplicated magic values.

Do not create unnecessary layout components merely to wrap CSS concepts.

Keep animations subtle and functional.

## Components

Prefer small, purposeful Astro components.

Do not abstract prematurely.

Create a shared component only when reuse or responsibility separation justifies it.

## Content

Content should be concise, credible, and technically defensible.

Avoid vague phrases such as:

- passionate developer;
- cutting-edge solutions;
- innovative digital experiences;
- expert in everything.

Projects should emphasize:

Problem → Solution → Decisions → Technology → Result

Job Radar is the primary case study.

## Workflow

Before modifying code:

1. inspect the relevant files;
2. understand the issue;
3. propose a short plan for non-trivial work;
4. implement only the requested scope.

During implementation:

- keep changes small;
- do not modify unrelated files;
- preserve existing architecture;
- do not silently add dependencies.

After implementation:

1. run relevant checks;
2. review the git diff;
3. report what changed;
4. report what was verified;
5. report anything that could not be verified.

## Git

Do not commit unless explicitly asked.

Do not push unless explicitly asked.

Do not change branches unless explicitly asked.

Do not modify Git history.

Commit messages follow simple Conventional Commits when requested, for example:

- feat: add responsive hero section
- fix: improve mobile navigation focus state
- chore: configure project tooling
- docs: document development workflow

## Current Issue

Work only on the currently assigned issue and its acceptance criteria.

Avoid unrelated improvements.

## Definition of Done

A task is complete only when applicable checks pass and the implementation:

- satisfies the issue acceptance criteria;
- works on mobile and desktop where relevant;
- preserves accessibility;
- introduces no unrelated changes;
- passes formatting;
- passes linting;
- passes type checking;
- passes relevant tests;
- builds successfully;
- has had its git diff reviewed;
- updates documentation when necessary.