"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ShinyText({ text, className }) {
  const contentDelay = 0.5;
  const bannerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: contentDelay },
    },
  };
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      className="mb-1"
    >
      <span className={cn("relative overflow-hidden inline-block", className)}>
        {text}
        <span
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            animation: "shine 3s infinite linear",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        ></span>
        <style>{`
            @keyframes shine {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `}</style>
      </span>
    </motion.div>
  );
}
