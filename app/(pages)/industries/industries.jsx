"use client";
import {
  IndustriesContantUSCard,
  ProjectCard,
} from "@/components/web/industries-card";
import { HomePageIndustries } from "@/data/data";
import React from "react";

export default function Industries() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {HomePageIndustries.map((industry) => (
        // <Card
        //   key={industry.id}
        //   className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg"
        // >
        //   <div className="relative h-48 w-full">
        //     <Image
        //       src={industry.image || "/placeholder.svg"}
        //       alt={industry.title}
        //       fill
        //       className="object-cover"
        //     />
        //   </div>
        //   <CardHeader>
        //     <CardTitle>{industry.title}</CardTitle>
        //     <CardDescription>{industry.description}</CardDescription>
        //   </CardHeader>
        //   <CardFooter className="mt-auto">
        //     <Button
        //       asChild
        //       className="w-full bg-indigo-600 hover:bg-indigo-700"
        //     >
        //       <Link href={`/request-quote?industries=${industry.id}`}>
        //         Request a Demo
        //         <ChevronRight className="ml-2 h-4 w-4" />
        //       </Link>
        //     </Button>
        //   </CardFooter>
        // </Card>
        <ProjectCard key={industry.id} {...industry} />
      ))}
      <IndustriesContantUSCard />
    </div>
  );
}
