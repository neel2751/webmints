import { SITE_URL } from "@/lib/site";
// components/WebPageSchema.tsx

export default function WebPageSchema({
  pageUrl,
  pageName,
  description = "WebMints legal policies and terms documentation.",
  dateModified,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: pageName,
    description: description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };

  // Only add dateModified if it's explicitly provided
  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
