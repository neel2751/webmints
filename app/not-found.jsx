import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <div className="flex items-center justify-center bg-amber-100 rounded-full  mb-6">
        <Image
          src={"/images/not-found.svg"}
          alt="Not Found"
          width={200}
          height={200}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 font-grotesk">
        Industry Not Found
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
        We're constantly expanding our industry-specific solutions. The industry
        you're looking for isn't available yet, but we'd love to discuss how we
        can help your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
          <Link href="/contact-us">
            Request Custom Solution <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/industries">Explore Available Industries</Link>
        </Button>
      </div>
    </div>
  );
}
