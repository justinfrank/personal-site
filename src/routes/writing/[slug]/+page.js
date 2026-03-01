export const prerender = true;

// Glob all .md files at build time — Vite resolves this statically
const posts = import.meta.glob('../../../writing/*.md');

export function entries() {
  // Derive slugs from the glob keys so you never have to maintain a list manually
  return Object.keys(posts).map((path) => ({
    slug: path.replace('../../../writing/', '').replace('.md', ''),
  }));
}

export async function load({ params }) {
  const loader = posts[`../../../writing/${params.slug}.md`];
  if (!loader) throw new Error(`Post not found: ${params.slug}`);

  const post = await loader();
  return {
    content: post.default,
    meta: post.metadata,
  };
}
