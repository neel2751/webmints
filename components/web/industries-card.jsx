import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for merging class names
import Image from "next/image";
import Link from "next/link";

const ProjectCard = React.forwardRef(
  (
    {
      className,
      image,
      title,
      description,
      link,
      linkText = "View Project",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
          className,
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-tight text-black/85">
            {title}
          </h3>
          <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-500">
            {description}
          </p>

          {/* Card Link/CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:underline"
            onClick={(e) => e.stopPropagation()} // Prevent card's onClick if it has one
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    );
  },
);
ProjectCard.displayName = "ProjectCard";

const IndustriesContantUSCard = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-card text-card-foreground p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:bg-slate-50 group">
      <Image
        src="/images/cta-new.svg"
        alt="Contact Us"
        width={250}
        height={250}
        className="mb-4"
      />
      <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-700 text-center group-hover:text-gray-800">
        Ready to Transform Your Industry with Custom SaaS Solutions?
      </h3>
      <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-500 text-center">
        Reach out to us, and let's discuss how we can create a tailored solution
        for your unique business needs.
      </p>
      <Link
        href="/contact-us"
        className="mt-4 inline-flex items-center gap-2 text-base font-medium text-primary transition-all duration-300 leading-snug
        bg-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg"
      >
        Contact Us
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export { ProjectCard, IndustriesContantUSCard };
