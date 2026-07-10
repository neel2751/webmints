import { SITE_URL } from "@/lib/site";
export default function SupportFaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AggregateOffer",
              name: "SaaS Maintenance & Support Plans",
              priceCurrency: "USD", // Change to your active currency code (e.g., "INR")
              seller: {
                "@id": `${SITE_URL}/#organization`,
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "On-Demand Support",
                  description:
                    "Hourly or ticket-based reactive technical support.",
                  url: `${SITE_URL}/maintenance-support`,
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Monthly Maintenance Retainer",
                  description:
                    "Proactive monthly support packages for security, optimization, and bug fixes.",
                  url: `${SITE_URL}/maintenance-support`,
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Dedicated Support Team",
                  description:
                    "A dedicated team assigned directly to your SaaS platform maintenance.",
                  url: `${SITE_URL}/maintenance-support`,
                  availability: "https://schema.org/InStock",
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I reset my password?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email to create a new password.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I add more users to my account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can add more users to your account at any time. Please contact our support team for assistance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I integrate with my existing systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform offers seamless integration with popular existing systems. Please contact our support team for more information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data backed up?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, your data is automatically backed up on a regular basis to ensure its safety and availability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I report a bug or issue?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can report a bug or issue by contacting our support team through the help desk or by submitting a ticket directly from your account.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are your support hours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our support hours are from 9:00 AM to 6:00 PM EST, Monday through Friday.",
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
