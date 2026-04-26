import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Newton IPTV" },
    publisher: {
      "@type": "Organization",
      name: "Newton IPTV",
      url: "https://newtoniptv.co.uk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-brand-orange text-sm hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-brand-gray/60 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-brand-gray text-lg">{post.description}</p>
          </header>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none
            prose-headings:text-brand-dark prose-headings:font-bold
            prose-p:text-brand-gray prose-p:leading-7
            prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline
            prose-strong:text-brand-dark
            prose-li:text-brand-gray
            prose-hr:border-brand-border
            prose-blockquote:border-brand-red prose-blockquote:text-brand-gray">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 pt-10 border-t border-brand-border text-center">
            <p className="text-brand-gray mb-4">Ready to start streaming?</p>
            <Link
              href="/free-trial"
              className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
