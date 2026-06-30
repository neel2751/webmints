"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Globe, Minus, Plus } from "lucide-react";
import Image from "next/image";
import {
  DollarSignIcon,
  EuroIcon,
  IndianRupeeIcon,
  PoundSterlingIcon,
  XIcon,
} from "./animation/currency/currency";
import { MeshGradient, GodRays, DotOrbit } from "@paper-design/shaders-react";

const userTiers = [
  { id: "small", label: "1-10 users", users: 10, multiplier: 1 },
  { id: "medium", label: "11-50 users", users: 50, multiplier: 0.9 },
  { id: "large", label: "51-100 users", users: 100, multiplier: 0.8 },
  { id: "enterprise", label: "100+ users", users: 200, multiplier: 0.7 },
];

const features = [
  {
    id: "custom-design",
    label: "Custom UI/UX Design",
    description: "Tailored interface for your brand",
    basePrice: 5000,
  },
  {
    id: "api-integration",
    label: "API Integrations",
    description: "Connect with third-party services",
    basePrice: 3000,
    pricePerUnit: 500,
    unit: "integration",
  },
  {
    id: "mobile-app",
    label: "Mobile Applications",
    description: "iOS & Android native apps",
    basePrice: 8000,
  },
  {
    id: "advanced-analytics",
    label: "Analytics Dashboard",
    description: "Real-time insights & reporting",
    basePrice: 4000,
  },
  {
    id: "payment-gateway",
    label: "Payment Processing",
    description: "Stripe, PayPal integration",
    basePrice: 2500,
  },
  {
    id: "auth-system",
    label: "Authentication System",
    description: "Secure user management",
    basePrice: 3500,
  },
];

const supportLevels = [
  {
    id: "standard",
    label: "Standard Support",
    price: 500,
    description: "Email support, 48h response",
  },
  {
    id: "priority",
    label: "Priority Support",
    price: 1500,
    description: "24/7 support, 4h response",
  },
  {
    id: "dedicated",
    label: "Dedicated Support",
    price: 3000,
    description: "Dedicated account manager",
  },
];

export default function SaasPricingCalculator() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background font-grotesk">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-sm tracking-wide text-indigo-600/70">
            <div className="w-8 h-px bg-indigo-600/40" />
            PRICING CALCULATOR
            <div className="w-8 h-px bg-indigo-600/40" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-5 text-balance tracking-tight">
            Estimate Your
            <br />
            <span className="font-normal">Custom SaaS Cost</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Transparent pricing for your custom solution. Select features to get
            an instant estimate.
          </p>
        </motion.div>
        <CalculatorOption />
      </div>
    </section>
  );
}

function CalculatorOption() {
  const [selectedTier, setSelectedTier] = useState(userTiers[0]);
  const [selectedFeatures, setSelectedFeatures] = useState(new Set());
  const [featureCounts, setFeatureCounts] = useState({});
  const [selectedSupport, setSelectedSupport] = useState(supportLevels[0]);
  const [showCurrencyNotice, setShowCurrencyNotice] = useState(false);

  const toggleFeature = (id) => {
    const newFeatures = new Set(selectedFeatures);
    if (newFeatures.has(id)) {
      newFeatures.delete(id);
      const newCounts = { ...featureCounts };
      delete newCounts[id];
      setFeatureCounts(newCounts);
    } else {
      newFeatures.add(id);
      if (features.find((f) => f.id === id)?.pricePerUnit) {
        setFeatureCounts({ ...featureCounts, [id]: 1 });
      }
    }
    setSelectedFeatures(newFeatures);
  };

  const updateCount = (id, delta) => {
    const newCount = Math.max(1, (featureCounts[id] || 1) + delta);
    setFeatureCounts({ ...featureCounts, [id]: newCount });
  };

  const calculateTotal = () => {
    let total = 0;

    // Base platform cost
    const basePlatformCost = 10000 * selectedTier.multiplier;

    // Features cost
    const featuresCost = Array.from(selectedFeatures).reduce(
      (sum, featureId) => {
        const feature = features.find((f) => f.id === featureId);
        if (!feature) return sum;

        if (feature.pricePerUnit && featureCounts[featureId]) {
          return (
            sum +
            feature.basePrice +
            feature.pricePerUnit * (featureCounts[featureId] - 1)
          );
        }
        return sum + feature.basePrice;
      },
      0
    );

    // Support cost
    const supportCost = selectedSupport.price;

    total = basePlatformCost + featuresCost + supportCost;

    return {
      basePlatformCost,
      featuresCost,
      supportCost,
      total,
    };
  };

  const breakdown = calculateTotal();

  const handleGetQuote = () => {
    const calculatorData = {
      tier: selectedTier,
      features: Array.from(selectedFeatures),
      featureCounts,
      support: selectedSupport,
      breakdown,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      "saas_calculator_data",
      JSON.stringify(calculatorData)
    );
    console.log("[v0] Saved calculator data to localStorage:", calculatorData);

    setShowCurrencyNotice(true);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Configuration Panel */}
      <div className="lg:col-span-3 space-y-8">
        {/* User Tier Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-4 tracking-tight">Team Size</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {userTiers.map((tier) => (
              <motion.button
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 rounded-xl border text-left transition-all duration-300 ${
                  selectedTier.id === tier.id
                    ? "border-indigo-600 bg-indigo-600/5 shadow-lg shadow-indigo-600/10"
                    : "border-border/40 hover:border-indigo-600/30 bg-card"
                }`}
              >
                <div className="text-sm font-medium mb-1">{tier.label}</div>
                {tier.multiplier < 1 && (
                  <div className="text-xs text-indigo-600">
                    -{Math.floor((1 - tier.multiplier) * 100)}% discount
                  </div>
                )}

                {selectedTier.id === tier.id && (
                  <motion.div
                    layoutId="tier-indicator"
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Features Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-medium mb-4 tracking-tight">
            Features & Modules
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  onClick={() => toggleFeature(feature.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedFeatures.has(feature.id)
                      ? "border-indigo-600 bg-indigo-600/5"
                      : "border-border/40 hover:border-indigo-600/30 bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <div className="text-base font-bold  tracking-tight text-gray-700 mb-1">
                        {feature.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {feature.description}
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                        selectedFeatures.has(feature.id)
                          ? "bg-indigo-600 border-indigo-600"
                          : "border-border/40 group-hover:border-indigo-600/30"
                      }`}
                    >
                      {selectedFeatures.has(feature.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      ${feature.basePrice.toLocaleString()}
                      {feature.pricePerUnit &&
                        ` + $${feature.pricePerUnit}/${feature.unit}`}
                    </div>

                    {selectedFeatures.has(feature.id) &&
                      feature.pricePerUnit && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2 bg-muted/50 rounded-lg p-1"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateCount(feature.id, -1);
                            }}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-background transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium w-6 text-center">
                            {featureCounts[feature.id] || 1}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateCount(feature.id, 1);
                            }}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-background transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </motion.div>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-4 tracking-tight">
            Support Level
          </h3>
          <div className="space-y-3">
            {supportLevels.map((support) => (
              <motion.button
                key={support.id}
                onClick={() => setSelectedSupport(support)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between ${
                  selectedSupport.id === support.id
                    ? "border-indigo-600 bg-indigo-600/5"
                    : "border-border/40 hover:border-indigo-600/30 bg-card"
                }`}
              >
                <div className="flex-1">
                  <div className="text-base font-bold  tracking-tight text-gray-700 mb-1">
                    {support.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {support.description}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium">${support.price}/mo</div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      selectedSupport.id === support.id
                        ? "bg-indigo-600 border-indigo-600"
                        : "border-border/40"
                    }`}
                  >
                    {selectedSupport.id === support.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Price Breakdown Panel */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sticky top-8"
        >
          <div className="border border-border/40 rounded-2xl overflow-hidden bg-card shadow-lg">
            <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-600/5 to-transparent p-6 border-b border-border/40">
              <h3 className="text-lg font-normal mb-2 tracking-tight">
                Estimated Investment
              </h3>
              <div className="text-4xl font-medium tracking-tight">
                ${breakdown.total.toLocaleString()}
                {/* we have to make this shiny text like with any color */}
                <span
                  className="text-sm font-normal ml-2
                  bg-gradient-to-r from-amber-800 via-amber-600 to-amber-900 bg-clip-text text-transparent
                "
                >
                  one-time
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm pb-3 border-b border-border/20">
                  <span className="text-sm font-medium tracking-tight leading-snug text-gray-500">
                    Base Platform
                  </span>
                  <span className="font-medium">
                    ${breakdown.basePlatformCost.toLocaleString()}
                  </span>
                </div>

                {selectedFeatures.size > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                      <span>Features ({selectedFeatures.size})</span>
                    </div>
                    {Array.from(selectedFeatures).map((featureId) => {
                      const feature = features.find((f) => f.id === featureId);
                      if (!feature) return null;

                      const featureCost =
                        feature.pricePerUnit && featureCounts[featureId]
                          ? feature.basePrice +
                            feature.pricePerUnit *
                              (featureCounts[featureId] - 1)
                          : feature.basePrice;

                      return (
                        <motion.div
                          key={featureId}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex justify-between items-center text-xs pl-4"
                        >
                          <span className="text-gray-600">
                            {feature.label}
                            {featureCounts[featureId] > 1 &&
                              ` × ${featureCounts[featureId]}`}
                          </span>
                          <span className="text-gray-800 font-medium">
                            ${featureCost.toLocaleString()}
                          </span>
                        </motion.div>
                      );
                    })}
                    <div className="flex justify-between items-center text-sm pt-2 border-t border-border/20">
                      <span className="text-sm font-medium tracking-tight leading-snug text-gray-500">
                        Subtotal
                      </span>
                      <span className="font-medium">
                        ${breakdown.featuresCost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center text-sm pb-3 border-b border-border/20">
                  <span className="text-sm font-medium tracking-tight leading-snug text-gray-500">
                    Support (monthly)
                  </span>
                  <span className="font-medium">
                    ${breakdown.supportCost.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              <motion.button
                onClick={handleGetQuote}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 rounded-lg bg-indigo-600 text-indigo-600-foreground font-medium overflow-hidden relative group shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-shadow duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600 bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Detailed Quote
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
              <p className="text-xs mb-4  text-center font-medium tracking-tight leading-snug text-gray-500">
                Final pricing may vary based on specific requirements. Get in
                touch for a detailed proposal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Currency Notice Modal */}
      <AnimatePresence>
        {showCurrencyNotice && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCurrencyNotice(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-card border border-border/40 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
                {/* Close button */}
                <button
                  onClick={() => setShowCurrencyNotice(false)}
                  className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 z-50 bg-indigo-100 rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                >
                  <XIcon size={20} />
                </button>
                {/* Header with gradient */}
                <div className="relative bg-indigo-600 text-center border-b border-border/20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className=" mx-auto rounded-full flex items-center justify-center"
                  >
                    {/* Cover full */}
                    <Image
                      src="/images/good.svg"
                      alt="Currency Globe"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6"
                  >
                    <div className="relative flex items-center justify-center gap-6 mb-4">
                      {/* Currency Icons SVG Illustration */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto
                      "
                      >
                        <DollarSignIcon size={40} className="text-indigo-600" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto
                      "
                      >
                        <PoundSterlingIcon
                          size={40}
                          className="text-indigo-600"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto
                      "
                      >
                        <EuroIcon size={40} className="text-indigo-600" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto
                      "
                      >
                        <IndianRupeeIcon
                          size={40}
                          className="text-indigo-600"
                        />
                      </motion.div>

                      {/* We have to make the line in between this icon */}
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      className="text-xl font-bold mb-2 tracking-tight text-gray-700 text-center"
                    >
                      Multi-currency pricing is coming soon!
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-sm mb-4 tracking-tight leading-snug text-gray-600 text-center"
                    >
                      Get quotes in USD, EUR, GBP, INR, and more. Your data has
                      been saved and we'll process your request shortly.
                    </motion.p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setShowCurrencyNotice(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-12 rounded-lg bg-indigo-600 text-indigo-600-foreground font-medium relative overflow-hidden group shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-shadow duration-300 text-white"
                  >
                    <span className="relative z-10">Continue</span>
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
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCurrencyNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "24px",
              }}
              layout
              className="relative flex h-full w-full overflow-y-auto bg-indigo-600 transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                <MeshGradient
                  speed={1}
                  colors={["#2452F1", "#022474", "#163DB9", "#0B1D99"]}
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
              >
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                    Talk to sales
                  </h2>

                  <div className="space-y-4 sm:space-y-6 pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white leading-[150%]">
                          Learn how Acme can transform your business with
                          tailored solutions and flexible pricing options.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white leading-[150%]">
                          Experience firsthand how Acme Platform accelerates
                          delivery &amp; drives results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">
                    <div className="p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                      >
                        <div className="relative flex items-center justify-center gap-6 mb-4">
                          {/* Currency Icons SVG Illustration */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-16 h-16 mx-auto
                      "
                          >
                            <DollarSignIcon
                              size={32}
                              className="text-indigo-600"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-16 h-16 mx-auto
                      "
                          >
                            <PoundSterlingIcon
                              size={32}
                              className="text-indigo-600"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-16 h-16 mx-auto
                      "
                          >
                            <EuroIcon size={32} className="text-indigo-600" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-4 bg-indigo-100 rounded-full w-16 h-16 mx-auto
                      "
                          >
                            <IndianRupeeIcon
                              size={32}
                              className="text-indigo-600"
                            />
                          </motion.div>

                          {/* We have to make the line in between this icon */}
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3 }}
                          className="text-xl font-bold mb-2 tracking-tight text-gray-100 text-center"
                        >
                          Multi-currency pricing is coming soon!
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                          className="text-sm mb-4 tracking-tight leading-snug text-gray-300 text-center"
                        >
                          Get quotes in USD, EUR, GBP, INR, and more. Your data
                          has been saved and we'll process your request shortly.
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <form className="space-y-4 sm:space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    {/* Work Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="phone"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="website"
                          className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                        >
                          COMPANY WEBSITE
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                        />
                      </div>
                      <div className="sm:w-32 w-full">
                        <label
                          htmlFor="company-size"
                          className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                        >
                          COMPANY SIZE
                        </label>
                        <select
                          id="company-size"
                          name="company-size"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer text-sm h-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501+">501+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        ANYTHING ELSE?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-2.5 rounded-full bg-white text-[#0041C1] font-medium hover:bg-white/90 transition-colors tracking-[-0.03em] h-10"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={() => setShowCurrencyNotice(false)}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                aria-label="Close"
              >
                <XIcon size={20} />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
