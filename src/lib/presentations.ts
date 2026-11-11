import { getCollection, type CollectionEntry } from "astro:content";
import { formatDateIso } from "./date";

type Presentation = CollectionEntry<"presentations">;

const trimSlashes = (path: string) => path.trim().replace(/^\/+|\/+$/g, "");

/**
 * Every path a deck is served at. The first one is canonical: the first
 * frontmatter redirect if there is one, else the folder name.
 */
export function deckPaths(presentation: Presentation): string[] {
    const slug = trimSlashes(presentation.id);
    return [...presentation.data.redirects.map(trimSlashes), slug, `slides/${slug}`];
}

const postKey = (data: { date: Date; title: string }) =>
    `${formatDateIso(data.date)}|${data.title}`;

let cachedDeckUrls: Map<string, string> | null = null;

/**
 * The deck URL for a blog post that announces a presentation, matched by
 * date and title, or null.
 */
export async function findSlideRedirect(
    post: CollectionEntry<"blog">,
): Promise<string | null> {
    if (!post.data.tags.includes("presentation")) return null;
    cachedDeckUrls ??= new Map(
        (await getCollection("presentations")).map((presentation) => [
            postKey(presentation.data),
            `/${deckPaths(presentation)[0]}/`,
        ]),
    );
    return cachedDeckUrls.get(postKey(post.data)) ?? null;
}
