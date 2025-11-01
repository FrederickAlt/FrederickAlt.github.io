# Printables Collection Guide

## How to Add Printables

Simply paste Printables URLs into `src/config/printables.json`:

```json
[
  "https://www.printables.com/model/1415173-print-in-place-fully-articulated-skeleton-hand",
  "https://www.printables.com/model/another-model"
]
```

That's it! The site automatically fetches preview metadata (title, description, image) using the **Open Graph protocol** - the same mechanism messengers like WhatsApp use to show link previews.

## How It Works

When you paste a Printables link in WhatsApp/Messenger, it shows a preview with:
- Title
- Description
- Thumbnail image

This data comes from **Open Graph meta tags** in the page's HTML:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

Our Printables page uses the same protocol at build time to automatically fetch and display this metadata.

## Viewing the Page

- **Dev:** `npm run dev` → http://localhost:4321/printables
- **Build:** `npm run build` → opens `dist/printables/index.html`

The Printables link appears in the main navigation menu.

## Troubleshooting

If a URL fails to fetch metadata, the card will show a fallback title derived from the URL. Check build logs for fetch errors.
