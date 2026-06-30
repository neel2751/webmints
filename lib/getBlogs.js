export async function getBlogs(query) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/blog?category=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        cache: "no-store",
      }
    );

    // const res = await fetch(`http://localhost:3000/api/blog`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    //   },
    //   cache: "no-store",
    //   credentials: "include",
    // });
    if (!res.ok) {
      // throw new Error("Failed to fetch blogs");
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
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    });
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
    const res = await fetch(`http://localhost:3000/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
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
      `http://localhost:3000/api/blog/relatedPosts?category=${category}&slug=${excludeSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
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
