import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional().default("maxulysse"),
    tags: z.array(z.string()).optional(),
    image: z
      .object({
        path: z.string(),
      })
      .optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const presentationsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/presentations",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional().default("maxulysse"),
    tags: z.array(z.string()).optional(),
    image: z
      .object({
        path: z.string(),
      })
      .optional(),
    duration: z.string().optional(),
    location: z
      .object({
        city: z.string().optional(),
        country: z.string().optional(),
      })
      .optional(),
    redirects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  presentations: presentationsCollection,
};
