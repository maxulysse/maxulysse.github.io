import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

let cachedPosts: BlogEntry[] | null = null;

/**
 * Every blog post, newest first. Returns a shallow copy so callers can
 * filter or sort freely without mutating the shared cache.
 */
export async function getAllPosts(): Promise<BlogEntry[]> {
    if (!cachedPosts) {
        cachedPosts = (await getCollection("blog")).sort(
            (a, b) => b.data.date.getTime() - a.data.date.getTime(),
        );
    }
    return [...cachedPosts];
}
