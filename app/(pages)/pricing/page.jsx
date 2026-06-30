import { CtaSection } from "@/components/pricing/cta-section";
import { EngagementModels } from "@/components/pricing/engagement-model";
import { FaqSection } from "@/components/pricing/faq-section";
import { HeroSection } from "@/components/pricing/hero-section";
import { HowItWorks } from "@/components/pricing/how-pricing-work";
import { ProjectCategories } from "@/components/pricing/project-categories";
import { WhatsIncluded } from "@/components/pricing/whats-include";
import React from "react";

// metadata
export const metadata = {
  title: "Custom SaaS Development Pricing & Plans UK",
  description:
    "See transparent custom SaaS development pricing for UK businesses, from $25,000 starter builds to enterprise platforms. Compare tiers and request a free quote.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/pricing",
    images: ["/opengraph-image.png"],
  },
};

export default function PricingPage() {
  return (
    <main className="font-grotesk bg-white ">
      <HeroSection />
      <HowItWorks />
      <EngagementModels />
      <ProjectCategories />
      <WhatsIncluded />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
