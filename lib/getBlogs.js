import { SITE_URL } from "@/lib/site";

// Portal backend base URL (http://localhost:3001 in dev,
// https://portal.webmints.com in production).
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
).replace(/\/+$/, "");

// The single-post and related-posts routes resolve the website from the
// Origin/Referer header or ?site= param instead of the API key. These
// fetches run server-side (no Origin header), so pass the domain explicitly.
const SITE_HOST = new URL(SITE_URL).hostname;

// The list/categories routes are server-to-server and authenticate with
// the per-website key issued by the portal.
const KEY_HEADERS = {
  "Content-Type": "application/json",
  "x-api-key": process.env.BLOG_API_KEY,
};

export async function getBlogs(query) {
  try {
    const res = await fetch(
      `${API_URL}/api/blog?category=${encodeURIComponent(query || "All")}`,
      {
        method: "GET",
        headers: KEY_HEADERS,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("Failed to fetch blogs");
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlog(slug) {
  try {
    const res = await fetch(
      `${API_URL}/api/blog/${encodeURIComponent(slug)}?site=${SITE_HOST}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/api/categories`, {
      method: "GET",
      headers: KEY_HEADERS,
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch categories");
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getRelatedBlogs(category, excludeSlug) {
  try {
    const res = await fetch(
      `${API_URL}/api/blog/relatedPosts?category=${encodeURIComponent(
        category
      )}&slug=${encodeURIComponent(excludeSlug)}&site=${SITE_HOST}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch related blogs");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}
