import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export const IndustryCard = ({ industry }) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="mb-2 text-3xl">{industry.icon}</div>
        <CardTitle className="font-grotesk">{industry.title}</CardTitle>
        {industry.pricingNote && (
          <CardDescription className="font-sans">
            {industry.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4 font-sans">
          {industry.pricingNote ? (
            <p className="text-sm text-muted-foreground mb-4">
              {industry.pricingNote}
            </p>
          ) : (
            industry.description
          )}
        </CardDescription>
        <Button asChild variant="outline" className="w-full font-grotesk">
          <Link href={`/industries/${industry.id}`}>
            {industry.btnName || "Learn More"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
