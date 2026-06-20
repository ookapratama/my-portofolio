# Ooka Pratama — Developer Portfolio

Personal portfolio of **Judhistira Ooka Pratama**, a Backend Developer. Built with the Next.js App Router, TypeScript, and Tailwind/shadcn/ui, with a bilingual (EN/ID) UI and a live GitHub contributions dashboard.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Animation:** Framer Motion
- **State:** Zustand (language, modal)
- **Data fetching:** SWR + axios
- **Deployment:** Vercel

## Getting started

Requires **pnpm** (the package manager is pinned in `package.json`).

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Other scripts:

```bash
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # next lint
```

## Environment variables

Create a `.env.local` with:

```
# GitHub contributions dashboard
GITHUB_READ_USERNAME=your-github-username
GITHUB_READ_USER_TOKEN_PERSONAL=ghp_xxx   # read-only PAT, server-side only

# Contact form (proxies to a Google Form)
GOOGLE_FORM_LINK=https://docs.google.com/forms/d/e/.../viewform
GOOGLE_FORM_FIELD_ID_NAME=entry.xxx
GOOGLE_FORM_FIELD_ID_EMAIL=entry.xxx
GOOGLE_FORM_FIELD_ID_MESSAGE=entry.xxx
GOOGLE_FORM_FIELD_ID_SOCIAL=entry.xxx

# Optional analytics (degrades gracefully if unset)
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-xxxx
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxx
```

The GitHub token is read only on the server (`lib/github.ts` → `app/api/github/route.ts`) and never reaches the client bundle.

## Customizing content

All portfolio content is data-driven from `config/` — edit these, not the components:

- `config/site.ts`, `config/socials.ts`, `config/routes.ts` — site metadata, social links, nav
- `config/skills.ts`, `config/experience.ts`, `config/career.ts`, `config/education.ts`, `config/certificate.ts`, `config/organization.ts` — section content
- `config/translations.ts` — EN/ID UI strings (keep both languages in sync)
- `config/constants.ts` — shared union types (`ValidSkills`, `ValidCategory`, …) and the About bio

New skills/categories must be added to the union types in `config/constants.ts`, or the build will reject the config entry.

## License

MIT. Originally based on the open-source [`minimal-next-portfolio`](https://github.com/namanbarkiya/minimal-next-portfolio) template, since heavily customized.
