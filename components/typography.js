import React from "react";
import clsx from "clsx";

export const Heading = ({ level = 1, className, children }) => {
  const base = "font-bold text-gray-900";

  const styles = {
    1: "text-[6rem] leading-tight",
    2: "text-[3.5rem] leading-snug",
    3: "text-[2.5rem] leading-snug",
    4: "text-2xl leading-snug",
    5: "text-xl leading-snug",
    6: "text-lg leading-snug",
  };

  const Tag = `h${level}`;

  return <Tag className={clsx(base, styles[level], className)}>{children}</Tag>;
};

export const Paragraph = ({ size = "base", className, children }) => {
  const sizes = {
    lg: "text-[2rem] leading-relaxed",
    base: "text-[1.6rem] leading-relaxed",
    sm: "text-[1.4rem] leading-normal",
  };

  return (
    <p className={clsx("text-gray-700", sizes[size], className)}>{children}</p>
  );
};
