import { getAllPosts } from "./posts";
import { projects } from "../data/projects";

export type TagItem =
    | { kind: "post"; label: string; href: string; date: Date }
    | { kind: "project"; label: string; href: string; years: string };

export type TagEntry = {
    /** Lowercase tag. Also the display label, the URL slug and the anchor id. */
    tag: string;
    /** Every post and project carrying this tag, newest posts first. */
    items: TagItem[];
};

let cachedTags: TagEntry[] | null = null;

/**
 * Builds a unified index of every tag used by blog posts and projects, so
 * both share the same tag cloud, the same counts, and the same detail pages.
 */
export async function getTagIndex(): Promise<TagEntry[]> {
    if (cachedTags) {
        return cachedTags;
    }

    const itemsByTag = new Map<string, TagItem[]>();

    function add(tag: string, item: TagItem) {
        const key = tag.toLowerCase();
        const items = itemsByTag.get(key);
        if (items) {
            items.push(item);
        } else {
            itemsByTag.set(key, [item]);
        }
    }

    for (const post of await getAllPosts()) {
        for (const tag of post.data.tags ?? []) {
            add(tag, {
                kind: "post",
                label: post.data.title,
                href: `/blog/${post.id}/`,
                date: post.data.date,
            });
        }
    }

    for (const project of projects) {
        for (const tag of project.tags) {
            add(tag, {
                kind: "project",
                label: project.name,
                href: `/projects/#${project.id}`,
                years: project.years,
            });
        }
    }

    cachedTags = Array.from(itemsByTag, ([tag, items]) => ({ tag, items })).sort(
        (a, b) => a.tag.localeCompare(b.tag),
    );
    return cachedTags;
}

export function itemsOfKind<K extends TagItem["kind"]>(
    entry: TagEntry,
    kind: K,
): Extract<TagItem, { kind: K }>[] {
    return entry.items.filter(
        (item): item is Extract<TagItem, { kind: K }> => item.kind === kind,
    );
}
