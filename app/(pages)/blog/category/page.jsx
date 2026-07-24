import BlogCTA from "@/components/blog/blog-cta";
import BlogHero from "@/components/blog/blog-hero";
import EmptyState from "@/components/blog/empty-state";
import TagCard from "@/components/blog/tag-card";
import { getCategories } from "@/lib/getBlogs";
import React from "react";

export const dynamic = "force-dynamic";

export default async function TagPage() {
  const allCategories = await getCategories();
  // Real categories from the portal — may be empty when nothing is published
  // for this website. We show a notice rather than placeholder tags.
  const categories = allCategories?.categories?.categories || [];

  if (categories.length === 0) {
    return (
      <main className="grow font-grotesk pb-10">
        <BlogHero />
        <EmptyState
          title="No categories yet"
          message="Categories appear here once articles are published. We're working on it — check back soon."
        />
        <BlogCTA />
      </main>
    );
  }

  return (
    <main className="grow font-grotesk pb-10">
      <BlogHero />
      <div className="container bg-white  2xl:max-w-[1400px] mx-auto border-x border-gray-200 p-4 relative py-12 overflow-hidden border-t">
        <ul
          role="list"
          className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4"
        >
          {categories.map((cat, index) => (
            <TagCard
              title={`${cat}`}
              key={index}
              href={`/blog?category=${encodeURIComponent(cat)}`}
            />
          ))}
        </ul>
      </div>
      <BlogCTA />
    </main>
  );
}
