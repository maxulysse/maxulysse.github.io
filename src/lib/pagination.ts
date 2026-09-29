import { getAllPosts } from "./posts";

export const POSTS_PER_PAGE = 6;

export async function getPaginatedPosts(page: number) {
    const allPosts = await getAllPosts();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const posts = allPosts.slice(start, start + POSTS_PER_PAGE);
    return { posts, currentPage, totalPages };
}

export async function getTotalPages() {
    const allPosts = await getAllPosts();
    return Math.ceil(allPosts.length / POSTS_PER_PAGE);
}
