import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Blog – Guides, Reviews & News UK",
  description:
    "The Newton IPTV blog covers everything about IPTV in the UK: best providers, setup guides, free trials, and how to get the most from your IPTV subscription.",
  keywords: ["iptv blog uk", "iptv guides", "best iptv uk", "iptv news"],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-4">
            IPTV Blog &amp; Guides
          </h1>
          <p className="text-brand-gray max-w-xl mx-auto">
            Expert guides on the best IPTV providers UK, setup tutorials, free trial reviews,
            and everything you need to know about IPTV subscriptions.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-brand-border rounded-2xl p-7 hover:border-brand-red/30 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-xs text-brand-gray/60 mb-3">
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
              <h2 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-brand-gray text-sm leading-6">{post.description}</p>
              <span className="inline-block mt-4 text-brand-orange text-sm font-medium group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-brand-gray">Articles coming soon.</p>
        )}
      </div>
    </section>
  );
}
