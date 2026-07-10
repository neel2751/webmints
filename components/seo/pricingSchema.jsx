import { SITE_URL } from "@/lib/site";
export default function PricingSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/pricing`,
              url: `${SITE_URL}/pricing`,
              name: "Custom Pricing & Estimates | WebMints",
              description:
                "Get a custom quote for SaaS development, business automation, CRM workflows, and API integrations based on your specific project requirements.",
              isPartOf: {
                "@id": `${SITE_URL}/#website`,
              },
            },
            {
              "@type": "Service",
              "@id": `${SITE_URL}/pricing#custom-quote`,
              name: "Custom SaaS & Software Development Estimation",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              offers: {
                "@type": "Offer",
                description:
                  "Custom project pricing available on request. Contact our team for a detailed proposal.",
                url: `${SITE_URL}/pricing`,
                priceCurrency: "INR", // Keeps Google happy while showing pricing is project-dependent
              },
            },
          ],
        }),
      }}
    />
  );
}
