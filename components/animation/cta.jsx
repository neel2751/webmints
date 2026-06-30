"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Interface for component props remains the same for easy integration.

const AnimatedFeatureSpotlight = React.forwardRef(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = "Feature illustration",
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full max-w-7xl mx-auto p-8 md:p-12 rounded-2xl bg-background border overflow-hidden", // Added overflow-hidden for cleaner animations
          className,
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Animated Text Content */}
          <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
            <div className="flex items-center space-x-2 text-sm font-semibold text-indigo-600 animate-in fade-in slide-in-from-top-4 duration-700">
              {preheaderIcon}
              <span>{preheaderText}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-snug text-black/90 animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
              {heading}
            </h2>
            <p className="text-lg font-medium text-muted-foreground tracking-tight animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
              {description}
            </p>
            <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-400">
              <Link
                href={buttonProps?.href || "#"}
                target={buttonProps?.target || "_self"}
                rel={buttonProps?.rel || undefined}
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300 group"
              >
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Visual */}
          <div className="relative w-full min-h-[250px] md:min-h-[320px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-700 delay-200">
            {/* Main Image with both entrance and continuous animations */}
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt={imageAlt}
              className="w-full max-w-md object-contain animate-float"
            />
          </div>
        </div>
      </section>
    );
  },
);
AnimatedFeatureSpotlight.displayName = "AnimatedFeatureSpotlight";

export { AnimatedFeatureSpotlight };
