import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/content';

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  const letterFormat = post.slug === 'open-letter-to-podcasters';

  return (
    <article className="space-y-6 py-10 md:py-14">
      <header className="space-y-3 border-b border-phosphor/20 pb-6">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{post.date}</p>
        <h1 className="font-mono text-3xl font-bold md:text-5xl">{post.title}</h1>
      </header>

      <div className="space-y-5 text-base leading-relaxed text-signal/90 md:text-lg">
        {post.content.map((paragraph, index) => {
          if (letterFormat) {
            return (
              <blockquote key={index} className="border-l-2 border-phosphor/40 pl-5 whitespace-pre-line">
                {paragraph}
              </blockquote>
            );
          }

          const [headline, ...rest] = paragraph.split('\n');
          if (/^\d+\./.test(headline) && rest.length > 0) {
            return (
              <div key={index}>
                <p className="font-semibold">{headline}</p>
                <p>{rest.join('\n')}</p>
              </div>
            );
          }

          return (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          );
        })}
        {post.signOff ? <p className="font-mono text-phosphor">{post.signOff}</p> : null}
      </div>

      <Link href="/blog" className="inline-block font-mono text-sm uppercase tracking-nav underline underline-offset-4">
        ← Back to Transmissions
      </Link>
    </article>
  );
}
