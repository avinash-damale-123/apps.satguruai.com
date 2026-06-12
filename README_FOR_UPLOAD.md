# Satguru AI Central Portal - PRD Package for Codex

This repository contains the Codex-ready PRD files for building the Satguru AI Central Portal.

Recommended reading order:

1. `docs/prd/00-start-here.md`
2. `docs/prd/01-product-overview-goals.md`
3. `docs/prd/02-user-roles-domain-mvp.md`
4. `docs/prd/03-pages-and-ui-requirements.md`
5. `docs/prd/04-core-features-and-flows.md`
6. `docs/prd/05-data-model-and-seed-data.md`
7. `docs/prd/06-api-requirements.md`
8. `docs/prd/07-security-nonfunctional-env.md`
9. `docs/prd/08-ai-and-analytics-requirements.md`
10. `docs/prd/09-backlog-testcases-roadmap-deployment.md`

After these files are added to the repo, open Codex and use this prompt:

```text
Read all Markdown files in docs/prd/. Start with docs/prd/00-start-here.md.

Implement the MVP of the Satguru AI Central Portal in this repo using Next.js, TypeScript, Tailwind CSS, Supabase/PostgreSQL-ready architecture, Vercel deployment readiness, and app.satguruai.com domain readiness.

Do not build this as a static link page.

Build database-backed admin-managed portal registry, approved-domain signup, dashboard, portal directory, user management, allowed domain management, and support flow first.
```
