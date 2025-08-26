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
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          // className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </div>
      <h1
        className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 font-grotesk
        bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent
      "
      >
        Oops! Page Not Found
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
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
