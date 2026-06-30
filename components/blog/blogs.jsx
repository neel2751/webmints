import React from "react";
import BlogCard from "./blog-card";

export default function Blogs({ blogs }) {
  return (
    <section>
      <div className="container bg-white  2xl:max-w-[1400px] mx-auto border-x border-base-200 p-4 py-4 border-t">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {blogs &&
            blogs.map((blog, index) => (
              <BlogCard
                key={index}
                imageSrc={
                  blog.coverImage.url ||
                  "https://spaziobianco.netlify.app/_astro/9.DLOcDIbR_Zvk5VN.webp"
                }
                title={
                  blog.headlines[0].text ||
                  "Join us in exploring the latest trends and insights in technology, programming, and web development. Stay ahead with our expert analysis and in-depth articles."
                }
                date={
                  new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) ||
                  new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }
                excerpt={
                  blog.description ||
                  "Discover the latest trends and insights in technology, programming, and web development. Stay ahead with our expert analysis and in-depth articles."
                }
                href={`/blog/${blog.slug}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
