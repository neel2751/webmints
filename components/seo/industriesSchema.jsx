import { SITE_URL } from "@/lib/site";
export default function IndustriesSchema({
  pageUrl,
  pageName,
  serviceName,
  serviceDescription,
  breadcrumbs,
  faqs = [],
}) {
  // 1. Build the Breadcrumb Array dynamically
  const breadcrumbElements = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  }));

  // 2. Build the base schema graph array
  const schemaGraph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbElements,
    },
    {
      "@type": "Service",
      name: serviceName,
      description: serviceDescription,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      url: pageUrl,
    },
  ];

  // 3. Conditionally append FAQs if they exist for this service
  if (faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemaGraph,
        }),
      }}
    />
  );
}
