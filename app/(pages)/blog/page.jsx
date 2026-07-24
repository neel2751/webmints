import BlogCategory from "@/components/blog/blog-category";
import BlogCTA from "@/components/blog/blog-cta";
import BlogHero from "@/components/blog/blog-hero";
import Blogs from "@/components/blog/blogs";
import EmptyState from "@/components/blog/empty-state";
import { getBlogs, getCategories } from "@/lib/getBlogs";

export const metadata = {
  title: "Webmints Blog | Custom SaaS Development Insights UK",
  description:
    "Practical guides on custom software development, SaaS pricing, and choosing the right development partner for your business, from the Webmints team in the UK.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/blog",
    images: ["/opengraph-image.png"],
  },
};

export default async function BlogPage({ searchParams }) {
  const { category } = await searchParams;
  const allCategories = await getCategories();
  // Real categories from the portal — may be an empty array when the portal
  // has no published content for this website. We intentionally do NOT
  // substitute placeholder categories, so the UI reflects the true state.
  const categories = allCategories?.categories?.categories || [];
  const hasCategories = categories.length > 0;

  const blogPosts = await getBlogs(category || "All");
  const blogs = blogPosts?.blogs || [];

  // Nothing published for this site at all (no blogs and no categories):
  // show a clear notice instead of an empty page.
  if (blogs.length === 0 && !hasCategories) {
    return (
      <main className="grow font-grotesk pb-10">
        <BlogHero />
        <EmptyState />
        <BlogCTA />
      </main>
    );
  }

  return (
    <main className="grow font-grotesk pb-10">
      <BlogHero />
      {hasCategories && <BlogCategory categories={categories} />}
      {blogs.length === 0 ? (
        <section>
          <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-base-200 p-4 py-4 border-t">
            <p className="text-center text-base-600">
              No blog posts found in this category.
            </p>
          </div>
        </section>
      ) : (
        <Blogs blogs={blogs} />
      )}
      <BlogCTA />
    </main>
  );
}
