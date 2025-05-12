"use client";

import { useState } from "react";

export default function FeatureSteps() {
  const steps = [
    {
      number: 1,
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
      image:
        "https://notioly.com/wp-content/uploads/2024/12/488.Looking-Around.png",
    },
    {
      number: 2,
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
      image:
        "https://notioly.com/wp-content/uploads/2024/12/487.High-Fives.png",
    },
    {
      number: 3,
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
      image:
        "https://notioly.com/wp-content/uploads/2024/12/488.Looking-Around.png",
    },
    {
      number: 4,
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
      image:
        "https://notioly.com/wp-content/uploads/2024/12/487.High-Fives.png",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-6">
          <p className="text-sm font-medium">Get started today</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Build your revenue collection
            <br />
            stack in days
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="border sm:px-10 sm:pt-10 pt-4 px-5 rounded-3xl  overflow-hidden">
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-4 left-4 right-4 hidden lg:block">
              {/* <div className="h-[2px] w-full bg-gray-200" /> */}
            </div>
            {steps.map((step) => (
              <div
                key={step.number}
                className="space-y-4 cursor-pointer relative group"
                onClick={() => setActiveStep(step.number)}
              >
                <div className="inline-flex items-center gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ease-in-out z-10 bg-white
                ${
                  step.number === activeStep
                    ? "border-2 border-indigo-600 text-indigo-600 scale-110"
                    : "border text-muted-foreground group-hover:border-indigo-600 group-hover:text-indigo-600 group-hover:scale-105"
                }`}
                  >
                    {step.number}
                  </div>
                  <h3
                    className={`font-semibold transition-colors ${
                      step.number === activeStep
                        ? "text-indigo-600"
                        : "group-hover:text-indigo-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <div className="space-y-2 transition-all duration-300 ease-in-out group-hover:translate-y-[-4px]">
                  <p className="text-sm text-muted-foreground group-hover:text-indigo-600/75">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-t-xl mt-12 h-[400px]">
            {steps.map(
              (step) =>
                step.number === activeStep && (
                  <div
                    key={step.number}
                    className="relative aspect-[2/1] w-full bg-gradient-to-br from-indigo-500 to-indigo-600"
                  >
                    <img
                      src={step.image}
                      alt={`Step ${step.number}`}
                      className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
