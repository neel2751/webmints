import { SITE_URL } from "@/lib/site";
export default function MaintenanceSupportSchema() {
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
                  name: "Maintenance & Support",
                  item: `${SITE_URL}/maintenance-support`,
                },
              ],
            },
            {
              "@type": "Service",
              name: "SaaS Maintenance & Support",
              description:
                "Ongoing technical support, performance optimization, security updates, and cloud infrastructure management for SaaS platforms, offered as On-Demand Support, Monthly Maintenance Retainer, and Dedicated Support Team plans.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/maintenance-support`,
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Support Models",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "On-Demand Support",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Monthly Maintenance Retainer",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dedicated Support Team",
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
