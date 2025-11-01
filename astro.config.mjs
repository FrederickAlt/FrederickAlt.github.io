import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import { remarkSpoiler } from './src/utils/remarkSpoiler';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkSpoiler],
    rehypePlugins: [rehypeKatex],
  },
  site: 'https://example.com', // Update with your actual domain
});
