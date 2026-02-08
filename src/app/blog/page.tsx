import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export default function BlogIndexPage() {
  return (
    <section className="space-y-8 py-10 md:py-14">
      <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">Transmissions</h1>
      <div className="space-y-5">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border border-phosphor/20 bg-tape/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{post.date}</p>
            <h2 className="mt-2 font-mono text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 max-w-prose text-signal/85">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-block font-mono text-sm uppercase tracking-nav underline underline-offset-4">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
