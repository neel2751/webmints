"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import BlogSearch from "./blog-search";

export default function BlogCategory({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentCategory = searchParams.get("category") || "All";

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    // startTransition keeps the UI responsive while Next.js fetches the data
    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <section>
      <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-gray-200 p-4 border-t overflow-scroll">
        <div className="flex items-center gap-2">
          <div className="relative">
            <BlogSearch />
          </div>
          <div className="relative flex gap-2 h-full px-2 py-2 overflow-x-scroll whitespace-nowrap snap-x snap-proximity no-scrollbar">
            {["All", ...categories].map((cat) => (
              <div
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`cursor-pointer text-sm capitalize bg-gray-100 p-1.5 rounded-md font-medium  ${
                  currentCategory === cat
                    ? "text-indigo-600 font-semibold bg-indigo-100 hover:bg-indigo-200"
                    : "text-gray-500 hover:text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
          {isPending && (
            <p className="text-xs text-gray-400 mt-4 animate-pulse">
              Updating results...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
