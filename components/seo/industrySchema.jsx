import { SITE_URL } from "@/lib/site";
export default function IndustrySchema() {
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
                  name: "Industries",
                  item: `${SITE_URL}/industries`,
                },
              ],
            },
            {
              "@type": "ItemList",
              name: "Industry-Specific Solutions",
              description:
                "Tailored software and automation solutions across various industry sectors including Enterprise, E-commerce, Education, Healthcare, and Construction.",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Enterprise Solutions",
                  url: `${SITE_URL}/industries/enterprise`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "E-commerce",
                  url: `${SITE_URL}/industries/ecommerce`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Education",
                  url: `${SITE_URL}/industries/education`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Healthcare",
                  url: `${SITE_URL}/industries/healthcare`,
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Construction",
                  url: `${SITE_URL}/industries/construction`,
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
