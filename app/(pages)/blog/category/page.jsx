import BlogCTA from "@/components/blog/blog-cta";
import BlogHero from "@/components/blog/blog-hero";
import TagCard from "@/components/blog/tag-card";
import { getCategories } from "@/lib/getBlogs";
import React from "react";

export const dynamic = "force-dynamic";

export default async function TagPage() {
  const allCategories = await getCategories();
  const categories = allCategories?.categories?.categories || [
    "Technology",
    "Programming",
    "Web Development",
    "AI",
    "Data Science",
    "Cloud Computing",
    "Cybersecurity",
    "DevOps",
    "Mobile Development",
    "Software Engineering",
    "Tutorials",
    "Industry News",
  ];
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
