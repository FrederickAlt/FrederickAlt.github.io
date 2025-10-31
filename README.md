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
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.astro
│   │   ├── PostCard.astro
│   │   └── Search.astro
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (MDX files)
│   │   └── config.ts    # Content schema
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   └── pages/           # Routes
│       ├── index.astro  # Home page
│       ├── about.astro  # About page
│       ├── blog/
│       │   └── [...slug].astro  # Blog post pages
│       └── topics/
│           ├── index.astro      # Topics overview
│           └── [topic].astro    # Individual topic pages
├── astro.config.mjs     # Astro configuration
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

| Command           | Action                                           |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Start dev server at `localhost:4321`             |
| `npm run build`   | Build production site to `./dist/`               |
| `npm run preview` | Preview your build locally before deploying      |

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

- **Site name**: Edit `src/components/Navigation.astro` (line 13-15)
- **Site description**: Edit `src/pages/index.astro` (lines 21-25)
- **Footer**: Edit `src/layouts/BaseLayout.astro` (line 28)
- **About page**: Edit `src/pages/about.astro`

### Styling

The site uses Tailwind CSS. Customize colors in `tailwind.config.mjs`:

```js
colors: {
  primary: {
    // Your custom color scale
  }
}
```

### Topics

Topics are automatically extracted from blog post frontmatter. Just add new topics to your posts!

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

## License

MIT

## Contributing

Feel free to customize this blog for your own use!
