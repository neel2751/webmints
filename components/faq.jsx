import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import JsonLd from "./seo/JsonLd";

export default function FAQs({ faqs }) {
  return (
    <>
      {faqs?.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq?.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq?.answer,
              },
            })),
          }}
        />
      )}
      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold tracking-tight text-gray-800">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg font-medium tracking-tight text-gray-600">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
