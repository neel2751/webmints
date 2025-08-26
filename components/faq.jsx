import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQs({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-xl font-grotesk">
            {faq?.question}
          </AccordionTrigger>
          <AccordionContent className="text-base font-sans tracking-normal text-gray-700 font-normal">
            {faq?.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
