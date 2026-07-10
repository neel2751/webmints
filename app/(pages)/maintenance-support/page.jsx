import { MaintenanceHero } from "@/components/maintenance/hero-section";
import { WhyCritical } from "@/components/maintenance/why-critical";
import { ServicesSection } from "@/components/maintenance/services-section";
import { SupportModels } from "@/components/maintenance/support-models";
import { WhoNeeds } from "@/components/maintenance/who-needs";
import { ReliableSupport } from "@/components/maintenance/reliable-support";
import { MaintenanceFaq } from "@/components/maintenance/faq-section";
import { MaintenanceCta } from "@/components/maintenance/cta-section";
import MaintenanceSupportSchema from "@/components/seo/matinaceSchema";

export const metadata = {
  title: "SaaS Maintenance & Support",
  description:
    "Reliable ongoing support for your SaaS platform. Technical support, performance optimization, security updates, and cloud infrastructure management by WebMints.",
  alternates: {
    canonical: "/maintenance-support",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/maintenance-support",
    images: ["/opengraph-image.png"],
  },
};

export default function MaintenanceSupportPage() {
  return (
    <main className="min-h-screen font-grotesk">
      <MaintenanceSupportSchema />
      <MaintenanceHero />
      <WhyCritical />
      <ServicesSection />
      <SupportModels />
      <WhoNeeds />
      <ReliableSupport />
      <MaintenanceFaq />
      <MaintenanceCta />
    </main>
  );
}
