import { SITE_URL } from "@/lib/site";
export default function ServicesSchema() {
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
                  name: "Services",
                  item: `${SITE_URL}/services`,
                },
              ],
            },
            {
              "@type": "Service",
              name: "Custom SaaS platform development",
              description:
                "Tailored SaaS solutions built to fit your unique business needs.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#custom-saas-platform-development`,
            },
            {
              "@type": "Service",
              name: "Business process automation",
              description:
                "Streamline operations and improve efficiency with automated workflows.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#business-process-automation`,
            },
            {
              "@type": "Service",
              name: "CRM & workflow automation",
              description:
                "Integrate CRM systems and automate workflows to enhance customer management.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#crm-and-workflow-automation`,
            },
            {
              "@type": "Service",
              name: "Cloud-based software solutions",
              description:
                "Leverage cloud technology to build scalable and accessible software solutions.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#cloud-based-software-solutions`,
            },
            {
              "@type": "Service",
              name: "SaaS product modernization",
              description:
                "Update and enhance existing SaaS products to improve performance and user experience.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#saas-product-modernization`,
            },
            {
              "@type": "Service",
              name: "API integration & third-party tools",
              description:
                "Seamlessly connect your SaaS applications with third-party services through robust API integrations.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#api-integration-and-third-party-tools`,
            },
          ],
        }),
      }}
    />
  );
}
