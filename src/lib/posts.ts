import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

let cachedPosts: BlogEntry[] | null = null;

export async function getAllPosts(): Promise<BlogEntry[]> {
    if (!cachedPosts) {
        cachedPosts = await getCollection("blog");
    }
    return cachedPosts;
}
