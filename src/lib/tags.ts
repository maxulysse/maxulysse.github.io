import type { CollectionEntry } from "astro:content";
import { getAllPosts } from "./posts";
import { projects, type Project } from "../data/projects";

type BlogEntry = CollectionEntry<"blog">;

export type TagEntry = {
    /** Lowercase key, used for URLs and matching. */
    tag: string;
    /** Display label, preserving the casing from the first entry seen. */
    label: string;
    posts: BlogEntry[];
    projects: Project[];
    /** Total number of items carrying this tag. */
    count: number;
};

export type TagIndex = {
    tags: TagEntry[];
    byTag: Map<string, TagEntry>;
};

let cachedIndex: TagIndex | null = null;

/**
 * Builds a unified index of every tag used by blog posts and projects, so
 * both share the same tag cloud, the same counts, and the same detail pages.
 */
export async function getTagIndex(): Promise<TagIndex> {
    if (cachedIndex) {
        return cachedIndex;
    }

    const allPosts = (await getAllPosts()).sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    );

    const byTag = new Map<string, TagEntry>();

    function entryFor(tag: string): TagEntry {
        const key = tag.toLowerCase();
        let entry = byTag.get(key);
        if (!entry) {
            entry = { tag: key, label: tag, posts: [], projects: [], count: 0 };
            byTag.set(key, entry);
        }
        return entry;
    }

    for (const post of allPosts) {
        for (const tag of post.data.tags ?? []) {
            entryFor(tag).posts.push(post);
        }
    }

    for (const project of projects) {
        for (const tag of project.tags) {
            entryFor(tag).projects.push(project);
        }
    }

    for (const entry of byTag.values()) {
        entry.count = entry.posts.length + entry.projects.length;
    }

    cachedIndex = {
        tags: Array.from(byTag.values()).sort((a, b) =>
            a.tag.localeCompare(b.tag),
        ),
        byTag,
    };
    return cachedIndex;
}
