import { SITE_URL } from "@/lib/site";
export default function HomeSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "WebMints",
              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
            },
            {
              "@type": "Service",
              serviceType: "Custom SaaS & Business Automation Development",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "IN",
              description:
                "Custom SaaS platform development, business process automation, CRM & workflow automation, cloud-based software solutions, SaaS product modernization, and API integration for startups and enterprises.",
              url: `${SITE_URL}/services`,
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Core Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom SaaS platform development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business process automation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CRM & workflow automation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud-based software solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS product modernization",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "API integration & third-party tools",
                    },
                  },
                ],
              },
            },
          ],
        }),
      }}
    />
  );
}
