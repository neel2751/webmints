import { SITE_URL } from "@/lib/site";
export default function SolutionsSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
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
                  name: "Solutions",
                  item: `${SITE_URL}/solution`,
                },
              ],
            },
            {
              "@type": "Service",
              name: "Enterprise Resource Planning (ERP) Solutions",
              description:
                "Comprehensive ERP solutions integrating finance, HR, and operations with real-time data synchronization and customizable workflows.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/solution`,
            },
            {
              "@type": "Service",
              name: "Customer Relationship Management (CRM) Solutions",
              description:
                "CRM tools with a 360° customer view, sales pipeline management, and marketing automation.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/solution`,
            },
            {
              "@type": "Service",
              name: "Supply Chain Management Solutions",
              description:
                "End-to-end supply chain visibility, inventory management, and logistics optimization.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/solution`,
            },
          ],
        }),
      }}
    />
  );
}
