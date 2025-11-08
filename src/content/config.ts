import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    topics: z.array(z.string()),
    draft: z.boolean().optional(),
    keywords: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const researchFocus = defineCollection({
  type: 'content',
  schema: z.object({
    tags: z.array(z.string()).optional(),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    publisher: z.string(),
    link: z.string().url().optional(),
    comingSoon: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  'research-focus': researchFocus,
  publications
};
