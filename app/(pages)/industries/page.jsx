import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { HomePageIndustries } from "@/data/data";

export const industries = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Streamline operations, enhance collaboration, and drive innovation across your enterprise with our scalable solutions.",
    image: "/placeholder.svg?height=400&width=600",
    icon: "🏢",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Boost sales, optimize customer experience, and manage your online store efficiently with our e-commerce tools.",
    image: "/placeholder.svg?height=400&width=600",
    icon: "🛒",
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure, compliant, and innovative solutions for financial institutions and fintech companies.",
    image: "/placeholder.svg?height=400&width=600",
    icon: "💰",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant solutions that improve patient care, streamline administrative tasks, and enhance data security.",
    image: "/placeholder.svg?height=400&width=600",
    icon: "🏥",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Manage projects, resources, and teams efficiently with our construction-specific SaaS solutions.",
    image: "/placeholder.svg?height=400&width=600",
    icon: "🏗️",
  },
];

export default function IndustriesPage() {
  return (
    <div className="container py-12 md:py-24 mx-auto">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk">
          Industry-Specific Solutions
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
          Discover how our SaaS platform can be tailored to meet the unique
          challenges and requirements of your industry.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {HomePageIndustries.map((industry) => (
          <Card
            key={industry.id}
            className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
              <CardDescription>{industry.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button
                asChild
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                <Link href={`/request-quote?industries=${industry.id}`}>
                  Request a Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
