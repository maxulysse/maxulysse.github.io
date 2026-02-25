import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional().default('maxulysse'),
    tags: z.array(z.string()).optional(),
    image: z.object({
      path: z.string(),
    }).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const presentationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional().default('maxulysse'),
    tags: z.array(z.string()).optional(),
    image: z.object({
      path: z.string(),
    }).optional(),
    duration: z.string().optional(),
    location: z.object({
      city: z.string().optional(),
      country: z.string().optional(),
    }).optional(),
    redirects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  presentations: presentationsCollection,
};
