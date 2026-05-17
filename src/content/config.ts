import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string(),
    readTime: z.number().default(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      domain: z.string(),
      title: z.string(),
      description: z.string(),
      role: z.string().optional(),
      period: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      stack: z.array(z.string()),
      category: z.enum(['data', 'finance', 'product']),
      order: z.number().default(0),
      image: image().optional(),
      imageAlt: z.string().optional(),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          }),
        )
        .default([]),
    }),
});

const timeline = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.number(),
    endYear: z.number().optional(),
    type: z.enum(['work', 'education', 'life']),
    title: z.string(),
    org: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { posts, projects, timeline };
