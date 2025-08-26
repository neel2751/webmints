import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Users, Phone, Video, Check, Info } from "lucide-react";
import SalesForm from "../contact-sales/sales-form";
import CalForm from "./schedule-form";

export const metadata = {
  title: "Schedule a Call | SaaS Solutions",
  description:
    "Schedule a call with our sales team to discuss your custom SaaS solution needs.",
};

export default function ScheduleCallPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk">
              Schedule a Call
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Book a convenient time to speak with our sales team about your
              custom SaaS solution needs.
            </p>
          </div>
        </div>
      </section>
      <div className="px-32">
        <Card>
          <CardHeader>
            <CardTitle>Book Your Consultation</CardTitle>
            <CardDescription>
              Select your preferred date, time, and provide some details about
              your project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CalForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
