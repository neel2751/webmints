import Link from "next/link";

export default function TagCard({ title, href }) {
  return (
    <li
      className="p-2 aspect-square bg-whit outline outline-gray-200 group rounded-xl shadow flex justify-center items-center group relative hover:shadow-2xl duration-300
    bg-gradient-to-br from-indigo-50 via-white to-white overflow-hidden
    "
    >

      <Link href={href || "#"} className="absolute inset-0"></Link>
      <p className="text-xl sm:text-xl md:text-2xl capitalize font-medium group-hover:text-indigo-600">
        {title || "tag"}
      </p>
    </li>
  );
}
