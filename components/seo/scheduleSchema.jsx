import { SITE_URL } from "@/lib/site";
export default function ScheduleCallSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/schedule-call`,
              url: `${SITE_URL}/schedule-call`,
              name: "Schedule a Call | WebMints",
              description:
                "Book a discovery call or consultation meeting with the WebMints team to discuss your custom SaaS development or business automation needs.",
              isPartOf: {
                "@id": `${SITE_URL}/#website`,
              },
            },
          ],
        }),
      }}
    />
  );
}
