import { SITE_URL } from "@/lib/site";
export default function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              url: `${SITE_URL}/about-us`,
              mainEntity: {
                "@id": `${SITE_URL}/#organization`,
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
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: `${SITE_URL}/about-us`,
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
