import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ imageSrc, title, date, excerpt, href }) {
  return (
    <div className="relative overflow-hidden group flex h-full justify-between flex-col gap-12 lg:gap-24 bg-white group group transition-all md:min-h-[150px] cursor-pointer hover:bg-shadow-2xl shadow hover:shadow-2xl duration-500 outline outline-gray-200 rounded-2xl p-2">
      <Link
        href={href || "#"}
        title={title || "Blog Post"}
        className="absolute inset-0 z-10"
      ></Link>
      <div>
        <Image
          src={
            imageSrc ||
            "https://spaziobianco.netlify.app/_astro/10.C7KuUtYo_ZHv2DR.webp"
          }
          alt={title || "Blog Post"}
          loading="lazy"
          decoding="async"
          fetchPriority="auto"
          width="1000"
          height="1000"
          className="object-cover object-center aspect-12/9 rounded-lg lg:rounded-xl"
        />
        <div className="mt-2 px-4">
          <p className="text-xs font-medium uppercase text-gray-500">{date}</p>
          <h3 className="text-lg font-bold mt-2 tracking-tight text-gray-800 line-clamp-2 group-hover:underline lg:text-2xl text-balance group-hover:text-indigo-600">
            {title}
          </h3>
          <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-600 text-balance line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="px-4 pb-2">
        <p className="text-base tracking-tight flex items-center font-medium gap-2 text-gray-800">
          Read further
          <ChevronRight className="size-4 duration-300 easy-out-in group-hover:translate-x-2" />
        </p>
      </div>
    </div>
  );
}
