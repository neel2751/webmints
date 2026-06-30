import React from "react";
import BlogNewsletter from "./blog-newsletter";

export default function BlogHero({ title, description }) {
  return (
    <section>
      <div className="container bg-white 2xl:max-w-[1400px] mx-auto p-4 pt-16 pb-12">
        <div className="grid items-end grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-black/90 lg:text-balance">
              {title || "Stay Informed with Our Latest News"}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mt-4 font-medium text-gray-600 tracking-tight md:text-balance leading-snug">
              {description ||
                "Subscribe to our newsletter to receive the latest updates, articles, and exclusive content directly in your inbox."}
            </p>
          </div>
          <BlogNewsletter />
        </div>
      </div>
    </section>
  );
}
