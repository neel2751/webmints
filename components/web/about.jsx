"use client";
import React from "react";
import { motion } from "framer-motion";
import { CountAnimation } from "../animation/count-animation";

export default function About() {
  return (
    <motion.section className="bg-neutral-950 lg:mx-2 rounded-md mx-2">
      <div className="max-w-7xl mx-auto py-32">
        <div className="rounded-lg p-10 shadow-sm">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full max-w-md">
              <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-2 text-muted">
                The badge
              </div>
              <h2 className="my-5 text-2xl font-medium lg:text-4xl text-muted">
                Build your own website with our UI blocks
              </h2>
              <p className="text-sm text-muted-foreground lg:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur modi et recusandae ducimus eligendi eveniet soluta
                reprehenderit nostrum expedita omnis.
              </p>
            </div>
            <div className="w-full max-w-lg">
              <img
                src="https://notioly.com/wp-content/uploads/2025/01/492.A-Tea-By-The-Window.png"
                alt="placeholder"
                className="max-h-[420px] w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="mt-24 grid grid-cols-1 justify-between gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <CountAnimation
                number={200}
                className="text-4xl text-emerald-600"
              />
              <h6 className="text-5 mb-3 mt-5 font-semibold">Slack</h6>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, corporis!
              </p>
            </div>
            <div>
              <CountAnimation
                number={400}
                className="text-4xl text-indigo-600"
              />
              <h6 className="text-5 mb-3 mt-5 font-semibold">Google Drive</h6>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, corporis!
              </p>
            </div>
            <div>
              <p className="text-4xl text-rose-600">7000+</p>
              <h6 className="text-5 mb-3 mt-5 font-semibold">Dropbox</h6>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, corporis!
              </p>
            </div>
            <div>
              <p className="text-4xl text-amber-600">850+</p>
              <h6 className="text-5 mb-3 mt-5 font-semibold">Github</h6>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, corporis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
