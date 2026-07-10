import { SITE_URL } from "@/lib/site";
export default function ContactSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": `${SITE_URL}/contact-us`,
              url: `${SITE_URL}/contact-us`,
              name: "Contact WebMints | Get in Touch",
              description:
                "Have a custom SaaS or business automation project in mind? Contact the WebMints team today for consultations, support, and inquiries.",
              about: {
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
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact Us",
                  item: `${SITE_URL}/contact-us`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What types of businesses do you typically work with?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with businesses of all sizes across various industries, including enterprise, e-commerce, fintech, healthcare, and construction. Our solutions are scalable and can be customized to meet the specific needs of your organization, whether you're a startup or an established enterprise.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does implementation typically take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The implementation timeline varies based on the complexity and scope of the project. Typically, it takes between 4-12 weeks for a standard implementation, but we can provide a more accurate estimate after discussing your specific requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer custom development services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer custom development services to meet the unique needs of your business. Our team of experienced developers can create tailored solutions that integrate seamlessly with your existing infrastructure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of support do you provide after implementation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide comprehensive post-implementation support to ensure your solution continues to perform at its best. This includes ongoing maintenance, updates, and technical assistance to address any questions or issues that may arise.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can your solutions integrate with our existing systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our solutions are designed to integrate seamlessly with your existing systems and workflows, ensuring minimal disruption to your current operations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What security measures do you have in place to protect our data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer training for our team?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer comprehensive training programs to ensure your team can effectively use and manage our solutions.",
                  },
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
