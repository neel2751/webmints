"use client";

import React from "react";
import { AnimatedFeatureSpotlight } from "../animation/cta";
import { Eye } from "lucide-react";

export function IndustyCta({
  heading = "Looking for an industy-specific SaaS solution?",
  description = "If your industry has unique challenges, we can help you solve them with tailored SaaS and automation solutions.",
}) {
  return (
    <div className="flex items-center justify-center w-full  p-4 font-grotesk">
      <AnimatedFeatureSpotlight
        preheaderIcon={<Eye className="h-4 w-4" />}
        preheaderText="Industry-Specific Solutions"
        heading={heading}
        description={description}
        buttonText="Schedule a Free Consultation"
        buttonProps={{
          href: "/schedule-call",
          className: " hover:bg-indigo-700 text-white",
        }}
        imageUrl="/images/cta-new.svg"
        imageAlt="A screenshot of the market screener feature"
      />
    </div>
  );
}

export function IndustryDetailCta({
  heading,
  description,
  buttonText,
  buttonProps,
}) {
  return (
    <div className="flex items-center justify-center w-full  p-4 font-grotesk">
      <AnimatedFeatureSpotlight
        preheaderIcon={<Eye className="h-4 w-4" />}
        preheaderText="Industry-Specific Solutions"
        heading={heading}
        description={description}
        buttonText={buttonText}
        buttonProps={{
          ...buttonProps,
          className: " hover:bg-indigo-700 text-white",
        }}
        imageUrl="/images/cta-new.svg"
        imageAlt="A screenshot of the market screener feature"
      />
    </div>
  );
}
