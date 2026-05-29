import rss from "@astrojs/rss";
import { getAllPosts } from "../lib/posts";

export async function GET(context) {
  const allPosts = await getAllPosts();
  const posts = allPosts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "maxulysse.github.io",
    description:
      "Interested in Bioinformatics, Reproducible Research, Automation, Data Integration and Visualization...",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.body?.substring(0, 150) || "",
      link: `/blog/${post.id}/`,
    })),
  });
}
