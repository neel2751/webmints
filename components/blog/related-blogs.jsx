import Image from "next/image";
import Link from "next/link";

// components/blog/RelatedPosts.tsx
export default function RelatedPosts({ posts }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-20 border-t pt-10">
      <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-3">
              <Image
                width={500}
                height={500}
                src={post.url}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                alt={post.headlines[0].text}
              />
            </div>
            <h4 className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
              {post.headlines[0].text}
            </h4>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {post.description ||
                "Explore more insights in this related post."}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
