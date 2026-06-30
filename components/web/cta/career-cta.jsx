import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function CareerCta({
  title,
  description,
  buttonText,
  supportedText,
}) {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">
            {title || "Stay Updated on New Opportunities"}
          </h2>
          <p className="text-lg mb-8 font-medium tracking-tight text-white/90">
            {description ||
              "Subscribe to our job alerts and be the first to know when we post new openings that match your skills and interests."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black border-0"
            />
            <Button className="bg-white text-indigo-600 font-semibold hover:bg-gray-100 border-0">
              {buttonText || "Subscribe Now"}
            </Button>
          </div>
          <p className="text-sm mt-4 text-white/80 font-medium tracking-tight">
            {supportedText ||
              "By subscribing, you agree to receive job alerts and updates from Webmints. You can unsubscribe at any time."}
          </p>
        </div>
      </div>
    </section>
  );
}
