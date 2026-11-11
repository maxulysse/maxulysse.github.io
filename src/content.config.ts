import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  date: z.coerce.date(),
};

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    ...commonFields,
    description: z.string(),
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
    ...commonFields,
    description: z.string().optional(),
    redirects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  presentations: presentationsCollection,
};
