import React from "react";
import BlogNewsletter from "./blog-newsletter";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container bg-white  2xl:max-w-[1400px] mx-auto border-x border-gray-200 p-4 relative py-12 overflow-hidden border-y">
        <div className="grid items-end grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black/80 lg:text-balance">
              Subscribe to our newsletter
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mt-4 font-medium text-gray-600 tracking-tight md:text-balance leading-snug">
              Enjoy the latest news and updates from our team and community.
            </p>
          </div>
          <BlogNewsletter />
        </div>
      </div>
    </section>
  );
}
