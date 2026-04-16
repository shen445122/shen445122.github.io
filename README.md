# shen445122.github.io

A modern Astro replatform of the legacy Jekyll blog **雨沐苍树**.

## Current direction

The site now has three layers living side by side:

- **Legacy source** in `_posts/` — preserved as historical input
- **Synced legacy collection content** in `src/content/posts/legacy/` — generated automatically for Astro
- **New authored posts** in `src/content/posts/original/` — where future writing should live

This keeps the migration safe while making future publishing simple and maintainable.

## Stack

- [Astro](https://astro.build/)
- TypeScript
- Tailwind CSS
- Astro Content Collections
- Gray Matter for one-way legacy sync during migration

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run new:post -- --type essay "Your Post Title"
```

## Authoring workflow

### For new posts
Use the generator:

```bash
npm run new:post -- --type essay "How to Learn Slowly"
npm run new:post -- --type note "A Small Working Note"
npm run new:post -- --type reading-list "Spring Reading Shelf"
npm run new:post -- --list-templates
```

This creates a new markdown file under:

- `src/content/posts/original/`

That location is intentionally separate from legacy-synced files, so future posts are never overwritten by the migration sync.

Available templates today:

- `essay` – longer-form writing with section scaffolding
- `note` – compact, returnable note stub
- `reading-list` – shelf-style post with `books` frontmatter scaffold

### For legacy posts
Legacy content remains in:

- `_posts/**/*.md`

Before `dev`, `build`, or `check`, the repo automatically runs:

```bash
npm run sync:content
```

That script mirrors legacy posts into:

- `src/content/posts/legacy/`

You should treat `src/content/posts/legacy/` as generated output, not as the primary place to author new work.

## Key paths

- `src/layouts/` – site and post layouts
- `src/components/` – reusable editorial UI pieces
- `src/pages/` – homepage, writing, archive, about, and post routes
- `src/content.config.ts` – Astro collection schema
- `src/content/posts/legacy/` – generated legacy posts for Astro
- `src/content/posts/original/` – new native Astro-authored posts
- `src/lib/posts.ts` – collection helpers and post shaping
- `scripts/sync-content.mjs` – legacy `_posts` → Astro content sync
- `scripts/new-post.mjs` – create a new maintainable post stub
- `.github/workflows/deploy.yml` – GitHub Pages build/deploy workflow

## Editorial goals

- warm editorial light theme
- dark text and restrained blue accent
- slower, more intentional reading experience
- support multiple content shapes, including essay pages and reading shelves
- make future publishing easier than legacy maintenance

## Notes on maintainability

- New posts should be created in `src/content/posts/original/`
- Legacy posts stay preserved until a later cleanup phase
- Collection-backed content means future templates, metadata rules, and page variants are easier to maintain
- Book-list posts already support a specialized rendering path via structured `books` frontmatter
