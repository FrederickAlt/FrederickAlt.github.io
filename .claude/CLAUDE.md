# Blog Website Project

## Stack
- **Astro 5.x** - Static site generator
- **MDX** - Markdown with components for blog posts
- **Pagefind** - Static site search (only works after build)
- **Tailwind CSS** - Styling with custom color scheme
- **Playwright** - E2E testing

## Color Scheme
- Background: `#23282b` (dark neutral, user-specified)
- Surface: `#2d3235` (cards/elevated content)
- Primary: Cyan (`#06b6d4`) - CTAs and links
- Accent: Purple (`#a855f7`) - highlights
- All defined in `tailwind.config.mjs`

## Design Principles
- Dark mode aesthetic, mid-grey with bluish tint
- Clean, modern, minimal
- Smooth transitions/animations

## Project Structure
- `src/content/blog/*.mdx` - Blog posts
- `src/pages/index.astro` - Home page
- `src/pages/topics/[topic].astro` - Topic pages
- `src/pages/blog/[...slug].astro` - Individual posts
- `src/layouts/BaseLayout.astro` - Main layout
- `src/components/` - Reusable components

## Blog Post Schema
```typescript
{
  title: string,
  description: string,
  pubDate: date,
  topics: string[],
  draft?: boolean
}
```

## Development Commands
- `npm run dev` - Start dev server (port 4321)
- `npm run build` - Build + generate Pagefind index
- `npm test` - Run Playwright tests headless

## Testing
- **E2E tests**: `tests/carousel.spec.ts`
- Always test with `npm test` after changes
- Add new test files in `tests/` directory
- Playwright auto-discovers all `.spec.ts` files

