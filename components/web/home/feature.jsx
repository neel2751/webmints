import { BarChart, Layers, Shield, Star, User, Zap } from "lucide-react";
import React from "react";

export default function Feature() {
  const features = [
    {
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="w-5 text-indigo-600" />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="w-6 text-indigo-600" />,
    },
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with integrated communication tools.",
      icon: <User className="w-6 text-indigo-600" />,
    },
    {
      title: "Enterprise Security",
      description:
        "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="w-6 text-indigo-600" />,
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="w-6 text-indigo-600" />,
    },
    {
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="w-6 text-indigo-600" />,
    },
  ];

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-grotesk">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg font-sans">
            Our comprehensive services provides all the tools you need to
            streamline your workflow, boost productivity, and achieve your
            goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
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
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-grotesk">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
