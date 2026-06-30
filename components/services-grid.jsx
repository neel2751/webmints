"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "branding",
    title: "Custom Branding Solutions",
    subtitle: "Define your unique identity",
    bgColor: "bg-gradient-to-br from-amber-800 to-amber-900",
    textColor: "text-amber-300",
    previewImage: "🎨",
    preview: (
      <div className="relative max-w-max bg-gradient-to-br from-amber-700 to-amber-800 rounded-lg p-2 flex items-center justify-center">
        <div className="text-4xl">🎨</div>
      </div>
    ),
    details: {
      description:
        "Create and establish your brand identity with comprehensive guidelines. Then, maintain consistency across all platforms.",
      sections: [
        {
          title: "Build your brand foundation",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-2xl">
                  🎨
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Brand Identity System
                </h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Logo design and variations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Color palette development</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Typography guidelines</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Maintain brand consistency",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                    ✓
                  </div>
                  <span className="font-medium">
                    Brand guidelines documentation
                  </span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Comprehensive style guide for your team to maintain brand
                  consistency across all touchpoints and platforms.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Start your brand journey",
    },
  },
  {
    id: "saas-development",
    title: "SaaS Platform Development",
    subtitle: "Build scalable solutions",
    bgColor: "bg-gradient-to-br from-red-900 to-red-950",
    textColor: "text-red-300",
    previewImage: "🚀",
    preview: (
      <div className="relative w-full h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-lg p-4 flex items-center justify-center">
        <div className="text-6xl">🚀</div>
      </div>
    ),
    details: {
      description:
        "Develop custom SaaS platforms tailored to your business needs. Then, scale with confidence as your user base grows.",
      sections: [
        {
          title: "Design and architect your platform",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-2xl">
                  🏗️
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Platform Architecture
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-semibold text-red-400">
                    Database Design
                  </div>
                  <div className="text-xs mt-1">Scalable data models</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-semibold text-red-400">
                    API Development
                  </div>
                  <div className="text-xs mt-1">RESTful & GraphQL</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-semibold text-red-400">UI/UX Design</div>
                  <div className="text-xs mt-1">User-centric interfaces</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-semibold text-red-400">Security</div>
                  <div className="text-xs mt-1">
                    Enterprise-grade protection
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Deploy and scale efficiently",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    📊
                  </div>
                  <span className="font-medium">
                    Performance monitoring & analytics
                  </span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Real-time insights into your platform performance with
                  automated scaling and optimization recommendations.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Build your SaaS platform",
    },
  },
  {
    id: "automation",
    title: "Workflow Automation",
    subtitle: "Streamline your operations",
    bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
    textColor: "text-blue-300",
    previewImage: "⚡",
    preview: (
      <div className="relative w-full h-32 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-4 flex items-center justify-center">
        <div className="text-6xl">⚡</div>
      </div>
    ),
    details: {
      description:
        "Automate repetitive tasks and optimize your business workflows. Then, focus on what matters most while automation handles the rest.",
      sections: [
        {
          title: "Design custom automations",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Automation Workflows
                </h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-lg">📨</span>
                    <span>Email automation & notifications</span>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-lg">🔄</span>
                    <span>Data synchronization across platforms</span>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-lg">📊</span>
                    <span>Report generation & delivery</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Monitor and optimize",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    📈
                  </div>
                  <span className="font-medium">
                    Track automation performance
                  </span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Get detailed insights on time saved, tasks completed, and ROI
                  from your automated workflows.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Automate your workflows",
    },
  },
  {
    id: "analytics",
    title: "Data Analytics & Insights",
    subtitle: "Make data-driven decisions",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    textColor: "text-gray-300",
    previewImage: "📊",
    preview: (
      <div className="relative w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-4 flex items-center justify-center">
        <div className="text-6xl">📊</div>
      </div>
    ),
    details: {
      description:
        "Transform raw data into actionable insights with powerful analytics tools. Then, make informed decisions based on real-time data.",
      sections: [
        {
          title: "Collect and visualize data",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                  📈
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Analytics Dashboard
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-2xl font-bold text-green-400">+42%</div>
                  <div className="text-xs text-gray-400 mt-1">Growth Rate</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-2xl font-bold text-blue-400">1.2M</div>
                  <div className="text-xs text-gray-400 mt-1">Data Points</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Monitoring</div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Generate actionable insights",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                    💡
                  </div>
                  <span className="font-medium">
                    AI-powered recommendations
                  </span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Leverage machine learning to identify patterns, predict
                  trends, and receive automated recommendations.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Unlock your data potential",
    },
  },
  {
    id: "Custom SaaS Development",
    title: "Custom SaaS Development",
    subtitle: "Tailored software solutions",
    bgColor: "bg-gradient-to-br from-green-900 to-green-950",
    textColor: "text-green-300",
    preview: (
      <div className="relative w-full h-32 bg-gradient-to-br from-green-800 to-green-900 rounded-lg p-4 flex items-center justify-center">
        <div className="text-6xl">🛠️</div>
      </div>
    ),
    details: {
      description:
        "Develop bespoke SaaS applications designed to meet your specific business requirements. Then, enjoy seamless integration and scalability.",
      sections: [
        {
          title: "Tailored software solutions",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-2xl">
                  🧩
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Custom Features
                </h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Feature development based on your needs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Seamless third-party integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Scalable architecture for growth</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Ongoing support & maintenance",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    🛡️
                  </div>
                  <span className="font-medium">24/7 Support</span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Dedicated support team to ensure your SaaS application runs
                  smoothly with regular updates and maintenance.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Get your custom SaaS solution",
    },
  },
  {
    id: "Integrations & APIs",
    title: "Integrations & APIs",
    subtitle: "Connect your tools seamlessly",
    bgColor: "bg-gradient-to-br from-purple-900 to-purple-950",
    textColor: "text-purple-300",
    preview: (
      <div className="relative w-full h-32 bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 flex items-center justify-center">
        <div className="text-6xl">🔗</div>
      </div>
    ),
    details: {
      description:
        "Integrate your existing tools and services with custom APIs. Then, streamline your workflows and enhance functionality.",
      sections: [
        {
          title: "Custom API development",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-2xl">
                  🔌
                </div>
                <h4 className="text-xl font-semibold text-white">
                  API Solutions
                </h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>RESTful and GraphQL APIs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Third-party service integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Real-time data synchronization</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Enhance functionality",
          content: (
            <div className="bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    🚀
                  </div>
                  <span className="font-medium">Boost productivity</span>
                </div>
                <p className="text-gray-400 text-sm pl-10">
                  Leverage integrations to automate tasks, improve data flow,
                  and enhance overall system functionality.
                </p>
              </div>
            </div>
          ),
        },
      ],
      cta: "Connect your tools",
    },
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <section
        className="py-20 px-4 font-grotesk
      "
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-sm font-semibold text-indigo-600 mb-2">
              What We Do
            </div>
            <h2 className="font-bold text-black/75 mb-2 text-5xl tracking-tight">
              Comprehensive SaaS Development{" "}
              {/* We have to add the curve line under the text */}
              <span className="text-indigo-600 whitespace-nowrap">
                Services
              </span>
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-8 tracking-tight">
              Our Services are tailored to your unique needs, ensuring you get
              the most value without any hidden fees. From initial consultation
              to deployment and ongoing support, we handle every aspect of your
              SaaS journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => {
                  setSelectedService(service);
                  setCurrentSection(0);
                }}
              >
                <ServiceCard
                  title={service.title}
                  subtitle={service.subtitle}
                  preview={service.preview}
                  bgColor={service.bgColor}
                  textColor={service.textColor}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"></div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-950 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>

                <div className="overflow-y-auto max-h-[90vh] pb-20">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${selectedService.bgColor} p-12 min-h-[60vh]`}
                  >
                    <h2
                      className={`text-4xl md:text-5xl font-bold ${selectedService.textColor} mb-6`}
                    >
                      {selectedService.title}
                    </h2>
                    <p
                      className={`text-lg ${selectedService.textColor} mb-8 opacity-90`}
                    >
                      {selectedService.details.description}
                    </p>

                    {currentSection === 0 ? (
                      <div className="space-y-8">
                        <Button className="bg-black hover:bg-gray-900 text-white px-6 py-6 text-lg rounded-lg">
                          {selectedService.details.cta}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <div className="grid grid-cols-1 gap-6 mt-8">
                          {selectedService.details.sections[0] && (
                            <div>
                              <h3
                                className={`text-2xl font-semibold ${selectedService.textColor} mb-4`}
                              >
                                {selectedService.details.sections[0].title}
                              </h3>
                              {selectedService.details.sections[0].content}
                            </div>
                          )}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCurrentSection(1)}
                          className={`w-full ${selectedService.bgColor} border-2 border-opacity-50 ${selectedService.textColor} border-current p-4 rounded-lg text-left font-semibold flex items-center justify-between mt-6`}
                        >
                          <span>See more capabilities</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                          {selectedService.details.sections[1] && (
                            <div>
                              <h3
                                className={`text-2xl font-semibold ${selectedService.textColor} mb-4`}
                              >
                                {selectedService.details.sections[1].title}
                              </h3>
                              {selectedService.details.sections[1].content}
                            </div>
                          )}
                        </div>

                        <div className="text-center py-12">
                          <h3
                            className={`text-3xl font-bold ${selectedService.textColor} mb-6`}
                          >
                            Ready to try it yourself?
                          </h3>
                          <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-lg">
                            {selectedService.details.cta}
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                          <div className="mt-4 text-6xl">👆</div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCurrentSection(0)}
                          className={`w-full ${selectedService.bgColor} border-2 border-opacity-50 ${selectedService.textColor} border-current p-4 rounded-lg text-left font-semibold flex items-center justify-between`}
                        >
                          <span>Back to overview</span>
                          <ArrowRight className="w-5 h-5 rotate-180" />
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                </div>
                {/* Make this mobile responsive as well */}
                <div className="absolute bottom-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
                  <div className="flex gap-2 justify-center overflow-scroll py-4 px-2">
                    {/* <ProductDropCard
                      items={services
                        .filter((s) => s.id !== selectedService.id)
                        .map((service) => ({
                          ...service,
                          onClick: () => {
                            setSelectedService(service);
                            setCurrentSection(0);
                          },
                        }))}
                      title={"Other Services"}
                      subtitle={"Explore our range of offerings"}
                    /> */}
                    {services.map((service) => (
                      <motion.button
                        key={service.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedService(service);
                          setCurrentSection(0);
                        }}
                        className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-all flex-shrink-0 ${
                          selectedService.id === service.id
                            ? service.bgColor + " " + service.textColor
                            : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                        }`}
                      >
                        <span className="text-xl md:text-2xl">
                          {service.previewImage}
                        </span>
                        <span className="text-xs md:text-sm hidden sm:inline">
                          {service.title.split(" ")[0]}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceCard({ title, subtitle, preview, bgColor, textColor }) {
  return (
    <div
      className={`
        ${textColor} rounded-2xl
    group px-8 py-8 min-h-[25rem] border flex flex-col transition-all hover:translate-y-[-6px] hover:z-10 hover:shadow-lg`}
    >
      <div className="w-full">
        {preview || (
          <div className="relative w-full h-32 bg-gray-200 rounded-lg p-4 flex items-center justify-center">
            <div className="text-6xl">🛠️</div>
          </div>
        )}
      </div>
      <div className="mt-6 text-2xl font-bold mb-2 transition-colors tracking-tight group-hover:text-indigo-600 cursor-pointer group-hover:underline">
        {title || "Custom SaaS Development"}
      </div>
      <div className="flex-1"></div>
      <div className="text-4xl tracking-tighter font-semibold text-gray-900">
        <span>
          <span className="tabular-nums font-bold px-1 bg-indigo-100 text-indigo-600 rounded-md">
            7.2x faster
          </span>{" "}
          <span className="text-gray-600">builds,</span>
        </span>
        <div className="text-xl font-bold mt-2">
          <span className="text-gray-500">and shorter end-to-end times.</span>{" "}
        </div>
      </div>
    </div>
  );
}
