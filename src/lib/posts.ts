import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { formatDateIso } from "./date";

type BlogEntry = CollectionEntry<"blog">;

let cachedPosts: BlogEntry[] | null = null;
let cachedPresentationRedirects: Map<string, string> | null = null;

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

/**
 * Builds a map of presentation redirects keyed by date|title for fast lookup.
 */
async function getPresentationRedirects(): Promise<Map<string, string>> {
    if (cachedPresentationRedirects) {
        return cachedPresentationRedirects;
    }

    const presentations = await getCollection("presentations");
    const redirects = new Map<string, string>();

    for (const presentation of presentations) {
        const key = `${formatDateIso(presentation.data.date)}|${presentation.data.title}`;
        const redirect = (presentation.data.redirects || [])[0] || presentation.id;
        redirects.set(key, redirect.replace(/^\/+/, ""));
    }

    cachedPresentationRedirects = redirects;
    return redirects;
}

/**
 * Find a redirect URL for a blog post that matches a presentation.
 * Returns the redirect path or null if no match found.
 */
export async function findSlideRedirect(
    postEntry: BlogEntry,
): Promise<string | null> {
    const tags = (postEntry.data.tags || []).map((tag: string) => tag.toLowerCase());
    if (!tags.includes("presentation")) return null;

    const redirects = await getPresentationRedirects();
    const key = `${formatDateIso(postEntry.data.date)}|${postEntry.data.title}`;

    const redirect = redirects.get(key);
    return redirect ? `/${redirect}/` : null;
}
