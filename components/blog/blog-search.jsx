"use client";
import { ArrowRight, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Input } from "../ui/input";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const currentSearch = searchParams.get("search") || "";

  const handleSearchChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    const searchTerm = e.target.value;
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    // startTransition keeps the UI responsive while Next.js fetches the data
    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="relative">
      <div className="relative">
        <Input
          className="peer pe-9 ps-9
          w-2
          hover:w-64 transition-all duration-300 ease-in-out
          "
          placeholder="Search..."
          type="search"
          value={currentSearch}
          onChange={handleSearchChange}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
      {isPending && (
        <div className="absolute top-2 right-2">
          <svg
            className="animate-spin h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
