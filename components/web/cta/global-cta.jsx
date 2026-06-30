import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function GlobalCta({ title, desc, mainBtn, btn }) {
  return (
    <section className="container mx-auto">
      <div
        className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-14    text-white"
        style={{
          opacity: 1,
          willChange: "opacity transform",
          transform: "none",
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 text-white hover:bg-white/30 rounded-xl">
              Let's Go 🤟
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
              {title}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">{desc}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-white text-indigo-700 hover:bg-white/90"
                asChild
              >
                <Link href={mainBtn?.link || "/contact-us"}>
                  {mainBtn.name}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-white hover:text-indigo-700"
                asChild
              >
                <Link href={btn?.link || "/contact-sales"}>{btn?.name}</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className="relative h-80 w-60"
              style={{
                willChange: "transform",
                transform: "rotate(64.0712deg)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-white/20 animate-pulse delay-150"></div>
              <div className="absolute inset-8 rounded-full bg-white/30 animate-pulse delay-200"></div>
              <div className="absolute inset-12 rounded-full bg-white/40 animate-pulse delay-300"></div>
              <div className="absolute inset-16 rounded-full bg-white/50 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
