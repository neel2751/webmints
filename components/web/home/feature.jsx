import { BarChart, Layers, Shield, Star, User, Zap } from "lucide-react";
import React from "react";

export default function Feature() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
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
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our comprehensive services provides all the tools you need to
            streamline your workflow, boost productivity, and achieve your
            goals.
          </p>
        </div>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ opacity: "1", willChange: "opacity" }}
        >
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 flex items-center justify-center text-primary mb-4">
                  <Zap className="w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Automation</h3>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and workflows to save time and
                  reduce errors.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 flex items-center justify-center text-primary mb-4">
                  <BarChart className="w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights with real-time data visualization and
                  reporting.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <User className="w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Work together seamlessly with integrated communication tools.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Shield className="w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Keep your data safe with end-to-end encryption and compliance
                  features.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Layers className="w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect with your favorite tools through our extensive API
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "1",
              transform: "none",
              willChange: "opacity",
            }}
          >
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:shadow-indigo-300 hover:text-indigo-600 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-10 rounded-full bg-indigo-600/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Star className="w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Get help whenever you need it with our dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
