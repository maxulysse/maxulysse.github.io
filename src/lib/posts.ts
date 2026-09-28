import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

let cachedPosts: BlogEntry[] | null = null;

/**
 * Every blog post, newest first. The returned array is a copy, so callers are
 * free to filter or sort it without affecting anyone else.
 */
export async function getAllPosts(): Promise<BlogEntry[]> {
    if (!cachedPosts) {
        cachedPosts = (await getCollection("blog")).sort(
            (a, b) => b.data.date.getTime() - a.data.date.getTime(),
        );
    }
    return [...cachedPosts];
}
