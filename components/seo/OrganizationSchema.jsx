export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.webmints.in/#organization",
              name: "WebMints",
              url: "https://www.webmints.in",
              logo: "https://www.webmints.in/images/webmints.svg",
              sameAs: [
                "https://www.linkedin.com/company/webmints",
                "https://twitter.com/webmints27",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.webmints.in/#website",
              name: "WebMints",
              url: "https://www.webmints.in",
              publisher: { "@id": "https://www.webmints.in/#organization" },
            },
          ],
        }),
      }}
    />
  );
}
