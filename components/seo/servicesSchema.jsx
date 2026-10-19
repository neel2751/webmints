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
              name: "Custom SaaS Development",
              description:
                "Scalable, secure and easy-to-use SaaS products built around your business needs.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#custom-saas-platform-development`,
            },
            {
              "@type": "Service",
              name: "Business Process Automation Services",
              description:
                "Streamline operations by eliminating manual activities and increasing productivity through automation.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#business-process-automation`,
            },
            {
              "@type": "Service",
              name: "CRM & Workflow Automation",
              description:
                "Custom CRM systems to manage customer relations, sales cycles and workflows from one interface.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#crm-and-workflow-automation`,
            },
            {
              "@type": "Service",
              name: "Cloud Application Development",
              description:
                "Cloud-based applications that support present-day business needs and future scalability.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#cloud-based-software-solutions`,
            },
            {
              "@type": "Service",
              name: "Software Modernisation Services",
              description:
                "Enhance legacy systems using contemporary technology and techniques.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              url: `${SITE_URL}/services#saas-product-modernization`,
            },
            {
              "@type": "Service",
              name: "API Development & Third-Party Integrations",
              description:
                "Integrate your systems using secure APIs for exchanging data.",
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
