"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Fully Customized",
    subtitle: "SaaS Platforms",
    description:
      "Built around your unique business processes, not generic templates",
    image: "/modern-custom-dashboard-interface.jpg",
  },
  {
    id: 2,
    title: "Scalable",
    subtitle: "Cloud Architecture",
    description: "Grows with your business from startup to enterprise",
    image: "/cloud-infrastructure-network.jpg",
  },
  {
    id: 3,
    title: "Secure &",
    subtitle: "Performance Optimized",
    description: "Enterprise-grade security with lightning-fast performance",
    image: "/security-shield-lock.png",
  },
  {
    id: 4,
    title: "Industry-Specific",
    subtitle: "Solutions",
    description: "Tailored to your sector's unique requirements and workflows",
    image: "/business-industry-solutions.jpg",
  },
];

export default function WhyChooseWebMints() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 5000);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden font-grotesk">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center mb-6 text-sm tracking-wide text-indigo-600">
            <div className="w-8 h-px bg-indigo-600" />
            WHY WEBMINTS
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 text-balance tracking-tight">
            Custom SaaS Built
            <br />
            <span className="font-normal">Around Your Business</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground/70 max-w-xl leading-relaxed font-light">
            Off-the-shelf software rarely fits real business needs. We design
            solutions around your processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 shadow-lg order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={features[activeIndex].image || "/placeholder.svg"}
                  alt={features[activeIndex].title}
                  fill
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="text-xs tracking-widest text-foreground/70 font-light">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(features.length).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-indigo-600" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Feature List */}
          <div className="space-y-2 order-1 lg:order-2">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => handleFeatureClick(index)}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="w-full text-left group relative"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-indigo-600"
                      : "bg-transparent group-hover:bg-indigo-600/40"
                  }`}
                />

                <div className="pl-6 py-5 pr-4 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div
                        className={`text-xs tracking-widest mb-2.5 transition-all duration-500 ${
                          activeIndex === index
                            ? "text-indigo-600"
                            : "text-muted-foreground/30 group-hover:text-indigo-600/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3
                        className={`text-xl md:text-2xl font-normal mb-2 transition-all duration-500 tracking-tight ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground/40 group-hover:text-muted-foreground/60"
                        }`}
                      >
                        {feature.title}
                        <br />
                        <span className="font-light text-lg md:text-xl">
                          {feature.subtitle}
                        </span>
                      </h3>

                      <motion.p
                        initial={false}
                        animate={{
                          opacity: activeIndex === index ? 0.6 : 0,
                          height: activeIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="text-sm leading-relaxed overflow-hidden text-muted-foreground font-light"
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                        <circle
                          cx="20"
                          cy="20"
                          r="18"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          className="text-border"
                        />
                        {activeIndex === index && (
                          <motion.circle
                            cx="20"
                            cy="20"
                            r="18"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="text-indigo-600"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3.5, ease: "linear" }}
                            strokeLinecap="round"
                          />
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative border border-border/40 rounded-2xl p-10 md:p-14 text-center bg-gradient-to-br from-indigo-600/5 via-transparent to-indigo-600/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight text-balance">
                Ready to Transform Your Business?
              </h3>
              <p className="text-base text-muted-foreground/60 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
                Our team works closely with you from idea to launch, ensuring
                your SaaS product is built for long-term success with
                transparent pricing and expert support.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-flex items-center justify-center h-12 px-8 rounded-lg bg-indigo-600 text-primary-foreground font-medium overflow-hidden group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Talk to Our Experts
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>

                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skew: "-12deg" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
