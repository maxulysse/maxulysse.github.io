import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

let cachedPosts: BlogEntry[] | null = null;

/** Every blog post, newest first. Shared cache, so read-only. */
export async function getAllPosts(): Promise<readonly BlogEntry[]> {
    if (!cachedPosts) {
        cachedPosts = (await getCollection("blog")).sort(
            (a, b) => b.data.date.getTime() - a.data.date.getTime(),
        );
    }
    return cachedPosts;
}
