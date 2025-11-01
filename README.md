# Modern Blog Website

A clean, modern blog built with **Astro**, **MDX**, and **Pagefind** for fast, searchable content.

## Features

- 🚀 **Fast**: Built with Astro for optimal performance
- 📝 **MDX Support**: Write blog posts with Markdown + React components
- 🔍 **Search**: Full-text search powered by Pagefind
- 🏷️ **Topics**: Organize posts by multiple topics/categories
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- 🎨 **Modern UI**: Clean, professional design
- ⚡ **SEO Friendly**: Optimized for search engines

## Project Structure

```
/
├── public/              # Static assets
│   └── images/          # Blog images (WebP format)
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.astro
│   │   ├── PostCard.astro
│   │   ├── PrintableCard.astro
│   │   └── Search.astro
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (MDX files)
│   │   └── config.ts    # Content schema
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro  # Home page
│   │   ├── about.astro  # About page
│   │   ├── printables.astro
│   │   ├── 404.astro    # Error page
│   │   ├── blog/
│   │   │   └── [...slug].astro  # Blog post pages
│   │   └── topics/
│   │       ├── index.astro      # Topics overview
│   │       └── [topic].astro    # Individual topic pages
│   ├── types/           # TypeScript type definitions
│   │   ├── index.ts     # Type exports
│   │   ├── blog.ts
│   │   ├── config.ts
│   │   └── printable.ts
│   └── utils/           # Utility functions
│       └── fetchMetadata.ts
├── scripts/             # Utility scripts
│   └── process_blog_entry.sh
├── tests/               # E2E tests
│   └── carousel.spec.ts
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── astro.config.mjs     # Astro configuration
├── playwright.config.ts # Playwright test configuration
├── site.config.ts       # Unified site configuration (top level!)
├── tailwind.config.mjs  # Tailwind CSS configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

## Development Commands

| Command              | Action                                           |
|----------------------|--------------------------------------------------|
| `npm run dev`        | Start dev server at `localhost:4321`             |
| `npm run build`      | Build production site to `./dist/`               |
| `npm run preview`    | Preview your build locally before deploying      |
| `npm test`           | Run Playwright E2E tests                         |
| `npm run lint`       | Check code quality with ESLint                   |
| `npm run lint:fix`   | Auto-fix ESLint issues                           |
| `npm run format`     | Format code with Prettier                        |
| `npm run format:check` | Check code formatting                          |

## Creating Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-02-15
topics: ["Topic1", "Topic2"]
---

# Your Post Title

Your content here...
```

### Frontmatter Fields

- `title` (required): Post title
- `description` (required): Short description for cards and SEO
- `pubDate` (required): Publication date
- `topics` (required): Array of topic strings
- `draft` (optional): Set to `true` to hide from production

## Customization

### Add Your Profile Image

1. Add your image to `public/profile.jpg`
2. Update `src/pages/about.astro` to use your image
3. Update the about page content with your information

### Update Site Information

All site configuration is centralized in `site.config.ts` at the project root:

```typescript
export const siteConfig = {
  site: {
    name: 'Your Blog Name',
    author: 'Your Name',
    url: 'https://yourdomain.com',
    description: 'Your site description',
  },
  contact: {
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  // ... colors, topics, printables, etc.
};
```

### Styling

The site uses Tailwind CSS. Customize colors in `site.config.ts` under the `theme.colors` section. Changes are automatically applied throughout the site.

### Topics

Topics are defined in `site.config.ts`. Add new topics to the `topics` array with:
- `name`: Display name
- `slug`: URL-friendly slug
- `description`: Topic description
- `icon`: Emoji or image path
- `isEmoji`: Boolean flag

## Deployment

Build the site for production:

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to deploy to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Important: Pagefind

The build command includes Pagefind indexing (`npx pagefind --site dist`). This creates the search index after the site is built.

## Technologies

- [Astro](https://astro.build) - Static site generator
- [MDX](https://mdxjs.com) - Markdown with components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Pagefind](https://pagefind.app) - Static search library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Playwright](https://playwright.dev) - E2E testing
- [ESLint](https://eslint.org) - Code quality
- [Prettier](https://prettier.io) - Code formatting

## Features

- ✅ Unified configuration system
- ✅ WebP image optimization
- ✅ Dark theme with customizable colors
- ✅ Full TypeScript support
- ✅ Comprehensive E2E tests
- ✅ ESLint + Prettier for code quality
- ✅ 404 error page
- ✅ Responsive carousel
- ✅ Search functionality

## Printables Collection

### How to Add Printables

Add Printables URLs to the `printables.urls` array in `site.config.ts`:

```typescript
printables: {
  urls: [
    'https://www.printables.com/model/1415173-print-in-place-fully-articulated-skeleton-hand',
    'https://www.printables.com/model/another-model'
  ],
}
```

That's it! The site automatically fetches preview metadata (title, description, image) using the **Open Graph protocol** - the same mechanism messengers like WhatsApp use to show link previews.

### How It Works

When you paste a Printables link in WhatsApp/Messenger, it shows a preview with title, description, and thumbnail. This data comes from **Open Graph meta tags** in the page's HTML:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

Our Printables page uses the same protocol at build time to automatically fetch and display this metadata.

### Viewing the Page

- **Dev:** `npm run dev` → http://localhost:4321/printables
- **Build:** `npm run build` → opens `dist/printables/index.html`

The Printables link appears in the main navigation menu.

### Troubleshooting

If a URL fails to fetch metadata, the card will show a fallback title derived from the URL. Check build logs for fetch errors.

## License

MIT

## Contributing

Feel free to customize this blog for your own use!
