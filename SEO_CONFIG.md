# SEO Configuration Guide

All SEO content is now optimized for "Frederick Altrock" + "AI researcher" + "mathematics PhD" + "University of Münster".

All SEO content is configurable through MDX frontmatter and config files. No hard-coding needed.

## Blog Posts (MDX Files)

Add SEO fields to blog post frontmatter in `src/content/blog/*.mdx`:

```mdx
---
title: "Your Post Title"
description: "150-160 character description for search results"
pubDate: 2025-01-01
topics: ["Coding", "AI"]
keywords: ["keyword1", "keyword2", "keyword3"]  # Optional: SEO keywords
image: "/images/post-image.jpg"                  # Optional: Social media image (1200x630)
---
```

**Example:**
```mdx
---
title: "Reverse Engineering Cython Binaries"
description: "Inner workings of Cpython and how AI models read decompiled Cython code."
pubDate: 2025-10-31
topics: ["Coding", "AI"]
keywords: ["reverse engineering", "Cython", "CPython", "decompilation", "AI code analysis"]
image: "/images/cython-post.jpg"
---
```

## Blog Post Keywords Already Added

All blog posts now have relevant keywords:

1. **Manual Mapper Part 1**: PE format, DLL injection, Windows internals, reverse engineering, PE header
2. **Manual Mapper Part 2**: manual mapper implementation, PE format, Windows API, relocation table, import address table
3. **Rolling Code Lock**: CTF writeup, cryptography, linear algebra, bitwise operations, security
4. **SSD1306 OLED**: MicroPython optimization, embedded systems, I2C, font rendering, display driver
5. **Reversing Cython**: reverse engineering, Cython, CPython, decompilation, AI code analysis

## Main Site Pages (Config File)

Edit `site.config.ts` → `pages` section for non-blog pages:

```typescript
pages: {
  home: {
    title: 'Frederick Altrock - AI Researcher & Math PhD | University of Münster',
    description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster (Uni Münster) specializing in artificial intelligence and deep learning. Published at NeurIPS. Research on neural tangent kernels, training dynamics, and neural network theory.',
    keywords: ['Frederick Altrock', 'AI researcher', 'mathematics PhD', 'University of Münster', 'Uni Münster', 'neural tangent kernels', 'NeurIPS', 'deep learning researcher', 'machine learning', 'PyTorch'],
  },
  about: {
    title: 'About Frederick Altrock',
    description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster studying neural tangent kernels and deep learning training dynamics. Published at NeurIPS. Expertise in AI, probability theory, PyTorch, and systems engineering.',
    keywords: ['Frederick Altrock', 'mathematics PhD', 'University of Münster', 'Uni Münster', 'AI researcher', 'neural tangent kernels', 'training dynamics', 'NeurIPS researcher'],
  },
  // ... other pages
}
```

## Global Site Info

Edit `site.config.ts` → `site` section:

```typescript
site: {
  name: 'Frederick Altrock',
  author: 'Frederick Altrock',
  url: 'https://FrederickAlt.github.io',
  description: 'Frederick Altrock - Mathematics PhD researcher at University of Münster specializing in AI and deep learning theory. Published at NeurIPS. Expertise in neural tangent kernels, training dynamics, PyTorch, probability theory, and systems programming.',
}
```

**Key SEO elements in current config:**
- Name mentioned prominently
- Institution: "University of Münster"
- Role: "Mathematics PhD researcher"
- Specialization: "AI and deep learning theory"
- Publication venue: "NeurIPS"
- Research areas: "neural tangent kernels, training dynamics"

## SEO Best Practices

### Keywords
- Include "Frederick Altrock" in page keywords for name recognition
- 5-8 keywords per page/post
- Use specific, long-tail keywords
- Don't keyword stuff

### Descriptions
- 150-160 characters for optimal search result display
- Include target keyword in first 100 characters
- Make it compelling - it's your ad copy

### Images
- Blog post images: 1200x630px (social media optimal)
- Place in `/public/images/`
- Reference as `/images/filename.jpg`
- Default fallback: `/images/profile.jpg`

## Current SEO Focus

All pages are optimized for:
- **Your name**: Frederick Altrock (appears in every page)
- **Your role**: AI researcher, Mathematics PhD
- **Institution**: University of Münster (Uni Münster)
- **Research areas**: Neural tangent kernels, training dynamics, deep learning
- **Publications**: NeurIPS

## What Gets Auto-Generated

These are handled automatically:
- ✓ Canonical URLs
- ✓ Open Graph tags
- ✓ Twitter Card tags
- ✓ JSON-LD structured data for blog posts
- ✓ Article metadata (published/modified times)
- ✓ Sitemap (via Astro sitemap integration)
- ✓ robots.txt
- ✓ Keywords meta tags (when specified)

## Files You Edit

1. **Blog SEO**: `src/content/blog/*.mdx` (frontmatter)
2. **Page SEO**: `site.config.ts` (pages section)
3. **Site-wide**: `site.config.ts` (site section)

That's it! No touching layout files needed.
