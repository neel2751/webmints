"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FAQ1({ faqItems = [] }) {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto container px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="font-bold text-black/80  text-5xl tracking-tighter">
                Frequently Asked Questions
              </h2>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mt-4 tracking-tight">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        {item.icon || (
                          // Default icon if none provided
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-sm tracking-tight font-medium text-gray-600 lg:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
