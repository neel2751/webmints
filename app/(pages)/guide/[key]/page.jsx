export default async function GuidePage({ params }) {
  const { key } = await params;
  const res = await fetch(`http://localhost:3000/api/guide/${key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
    cache: "no-store",
  });
  const guide = (await res.ok) ? await res.json() : null;

  if (!guide) return <div>Guide not found or link expired.</div>;

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="bg-blue-50 p-4 rounded-lg mb-8 text-blue-800 text-sm font-medium">
        ✨ This guide was custom-generated for you based on your interests.
      </div>
      <h1 className="text-4xl font-black mb-10">{guide.title}</h1>
      <article
        className="prose prose-lg prose-blue"
        dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
      />
      <button
        onClick={() => window.print()}
        className="mt-10 border px-4 py-2 rounded hover:bg-gray-50 transition"
      >
        Save as PDF
      </button>
    </main>
  );
}
