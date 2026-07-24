import Link from "next/link";

/**
 * Shown when the portal returns no content for this website (no published
 * blogs / no categories). Keeps the page honest instead of rendering an
 * empty grid or placeholder tags that look like real data.
 */
export default function EmptyState({
  title = "No articles published yet",
  message = "We're busy writing. Fresh insights on custom software, SaaS, and web development are on the way — check back soon.",
  showHomeLink = true,
}) {
  return (
    <section>
      <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-gray-200 p-4 border-t">
        <div className="flex flex-col items-center justify-center text-center gap-3 py-16 px-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="max-w-md text-sm text-gray-500">{message}</p>
          {showHomeLink && (
            <Link
              href="/"
              className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Back to home
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
