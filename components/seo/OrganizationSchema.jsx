import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";
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
              "@id": `${SITE_URL}/#organization`,
              name: "WebMints",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/images/webmints.svg`,
              email: CONTACT_EMAIL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gana",
                addressLocality: "Gana",
                addressRegion: "Gujarat",
                postalCode: "388345",
                addressCountry: "IN",
              },
              sameAs: [
                "https://twitter.com/webmints27",
                "https://www.linkedin.com/company/webmints",
                "https://www.instagram.com/webmints/",
              ],
            },
          ],
        }),
      }}
    />
  );
}
