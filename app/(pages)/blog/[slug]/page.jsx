import BlogContent from "@/components/blog/blog-content";
import { CoverImage } from "@/components/blog/cover-image";
import RelatedPosts from "@/components/blog/related-blogs";
import SmartNewsletter from "@/components/blog/smartNewsletter";
import { getBlog, getRelatedBlogs } from "@/lib/getBlogs";
import React from "react";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);
  const relatedPosts = await getRelatedBlogs(post.data.category, slug);

  if (!post) {
    return (
      <main className="grow font-grotesk pb-10">
        <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 pt-16 pb-12">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-800 lg:text-balance">
            Blog Not Found
          </h1>
          <p className="text-lg md:text-xl max-w-lg mt-4 font-medium text-gray-800 md:text-balance">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="grow font-grotesk pb-10">
      <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 pt-16 pb-12">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-800 lg:text-balance">
          {post.data.headlines.text}
        </h1>
        <p className="text-lg md:text-xl max-w-lg mt-4 font-medium text-gray-800 md:text-balance">
          {post.data.description}
        </p>
        <CoverImage
          url={post.data.coverImage.url}
          alt={post.data.headlines.text}
        />
        {post.data.contentHtml && <BlogContent html={post.data.contentHtml} />}
        {relatedPosts.posts.length === 0 ? null : (
          <section className="container bg-white 2xl:max-w-[1400px] mx-auto p-4 pt-16 pb-12">
            <RelatedPosts posts={relatedPosts.posts || []} />
          </section>
        )}
        <SmartNewsletter
          category={post.data.category}
          postTitle={post.data.headlines.text}
          id={post.data._id}
          slug={slug}
        />
      </div>
    </main>
  );
}
