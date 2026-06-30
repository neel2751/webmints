// components/BlogContent.js
import "@/styles/tiptap.css"; // Import the exact same CSS file from your admin
import { cn } from "@/lib/utils";

export default function BlogContent({ html, className }) {
  if (!html) return null;

  return (
    <div
      /* 1. 'tiptap' class triggers your custom CSS variables
         2. 'prose' adds standard spacing for headings and paragraphs
         3. 'max-w-none' ensures it fills your container
      */
      className={cn(
        "tiptap prose prose-lg dark:prose-invert max-w-none",
        "prose-headings:font-bold prose-p:leading-relaxed",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
