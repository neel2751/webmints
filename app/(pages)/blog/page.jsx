import BlogCategory from "@/components/blog/blog-category";
import BlogCTA from "@/components/blog/blog-cta";
import BlogHero from "@/components/blog/blog-hero";
import Blogs from "@/components/blog/blogs";
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

  const blogPosts = await getBlogs(category || "All");
  const blogs = blogPosts.blogs;
  if (blogs?.length === 0) {
    return (
      <main className="grow font-grotesk pb-10">
        <BlogHero />
        <BlogCategory categories={categories} />
        <section>
          <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-base-200 p-4 py-4 border-t">
            <p className="text-center text-base-600">
              No blog posts found in this category.
            </p>
          </div>
        </section>
        <BlogCTA />
      </main>
    );
  }

  return (
    <main className="grow font-grotesk pb-10">
      <BlogHero />
      <BlogCategory categories={categories} />
      <Blogs blogs={blogs} />
      <BlogCTA />
    </main>
  );
}
