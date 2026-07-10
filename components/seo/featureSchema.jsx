import { SITE_URL } from "@/lib/site";
export default function FeaturesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/features`,
              url: `${SITE_URL}/features`,
              name: "Platform Features & Capabilities | WebMints",
              description:
                "Explore the powerful features built into our custom SaaS platforms, automation workflows, and enterprise software solutions.",
              isPartOf: {
                "@id": `${SITE_URL}/#website`,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE_URL}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Features",
                  item: `${SITE_URL}/features`,
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
