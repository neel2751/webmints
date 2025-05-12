import React from "react";

export default function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          style={{
            opacity: "1",
            transform: "none",
            willChange: "opacity",
          }}
        >
          <div
            className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-4 py-1.5 text-sm font-medium"
            data-v0-t="badge"
          >
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple Process, Powerful Results
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Get started in minutes and see the difference our platform can make
            for your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div
            className="relative z-10 flex flex-col items-center text-center space-y-4"
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-600/70 text-primary-foreground text-xl font-bold shadow-lg">
              01
            </div>
            <h3 className="text-xl font-bold">Create Account</h3>
            <p className="text-muted-foreground">
              Sign up in seconds with just your email. No credit card required
              to get started.
            </p>
          </div>
          <div
            className="relative z-10 flex flex-col items-center text-center space-y-4"
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-600/70 text-primary-foreground text-xl font-bold shadow-lg">
              02
            </div>
            <h3 className="text-xl font-bold">Configure Workspace</h3>
            <p className="text-muted-foreground">
              Customize your workspace to match your team's unique workflow and
              requirements.
            </p>
          </div>
          <div
            className="relative z-10 flex flex-col items-center text-center space-y-4"
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-600/70 text-primary-foreground text-xl font-bold shadow-lg">
              03
            </div>
            <h3 className="text-xl font-bold">Boost Productivity</h3>
            <p className="text-muted-foreground">
              Start using our powerful features to streamline processes and
              achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
