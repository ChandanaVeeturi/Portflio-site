import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: 'Chandana Veetori',
    description: 'Writing on data, finance, and the product craft.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
      })),
  });
}
