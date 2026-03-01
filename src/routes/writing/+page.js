export const prerender = true;

const posts = import.meta.glob('../../writing/*.md');

export async function load() {
  const entries = await Promise.all(
    Object.entries(posts).map(async ([path, loader]) => {
      const post = await loader();
      const slug = path.replace('../../writing/', '').replace('.md', '');
      return { slug, meta: post.metadata };
    })
  );

  return {
    posts: entries.sort((a, b) => {
      if (!a.meta?.date) return 1;
      if (!b.meta?.date) return -1;
      return new Date(b.meta.date) - new Date(a.meta.date);
    }),
  };
}
