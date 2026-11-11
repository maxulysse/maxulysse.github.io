import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional().default("maxulysse"),
    tags: z.array(z.string()).optional(),
    image: z
      .object({
        path: z.string(),
      })
      .optional(),
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
    redirects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  presentations: presentationsCollection,
};
