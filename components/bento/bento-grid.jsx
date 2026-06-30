"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Zap,
  Grid,
  CuboidIcon as Cube,
  Gift,
  Users,
  MessageCircle,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "This marketing solution transformed our business!",
    author: "Jane Doe, CEO",
  },
  {
    id: 2,
    text: "Incredible results in just a few weeks!",
    author: "John Smith, Marketing Director",
  },
  {
    id: 3,
    text: "The best decision we've made for our brand.",
    author: "Alice Johnson, Small Business Owner",
  },
];

export default function MarketingGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="grid grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {renderGridItem(
                "col-span-6 md:col-span-4",
                "DIRECT TARGETING TOOLS",
                <Target />,
                "blue"
              )}
              {renderGridItem(
                "col-span-6 md:col-span-2 md:row-span-2",
                "NEXT LEVEL MARKETING",
                <Zap />,
                "purple"
              )}
              {renderGridItem(
                "col-span-6 md:col-span-2 md:row-span-2",
                "GRID ANALYTICS",
                <Grid />,
                "blue"
              )}
              {renderGridItem(
                "col-span-6 md:col-span-2",
                "3D STRATEGIES",
                <Cube />,
                "yellow"
              )}
              {renderGridItem(
                "col-span-3 md:col-span-2",
                "SPECIAL OFFER",
                <Gift />,
                "pink"
              )}
              {renderTestimonialCarousel("col-span-3 md:col-span-2")}
            </motion.div>
          )}
        </AnimatePresence>

        {renderFloatingChatBubble()}
      </div>
    </div>
  );

  function renderGridItem(gridClass, title, icon, color) {
    return (
      <motion.div
        className={`${gridClass} bg-[#0A0A0F] rounded-3xl p-6 relative overflow-hidden shadow-lg backdrop-blur-sm backdrop-filter`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(${getColorValues(
            color
          )},0.3),rgba(255,255,255,0)_60%)]`}
        ></div>
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {title}
            </h3>
            <div className={`text-${color}-400 w-8 h-8 md:w-10 md:h-10`}>
              {icon}
            </div>
          </div>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Leverage our advanced tools to boost your marketing efforts and
            reach your ideal audience with precision and efficiency.
          </p>
          <button
            className={`mt-4 self-start bg-${color}-600 text-white px-4 py-2 rounded hover:bg-${color}-700 transition`}
          >
            Learn More
          </button>
        </div>
      </motion.div>
    );
  }

  function renderTestimonialCarousel(gridClass) {
    return (
      <motion.div
        className={`${gridClass} bg-[#0A0A0F] rounded-3xl p-6 relative overflow-hidden shadow-lg backdrop-blur-sm backdrop-filter`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(192,132,252,0.2),rgba(255,255,255,0)_60%)]"></div>
        <div className="relative z-10 flex flex-col h-full justify-between">
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Users className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />
            <h3 className="font-bold text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              CUSTOMER
              <br />
              TESTIMONIALS
            </h3>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-gray-300"
            >
              <p className="text-sm md:text-base lg:text-lg mb-2">
                "{testimonials[currentTestimonialIndex].text}"
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                - {testimonials[currentTestimonialIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  function renderFloatingChatBubble() {
    return (
      <motion.div
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer backdrop-blur-sm backdrop-filter"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle size={24} />
      </motion.div>
    );
  }

  function getColorValues(color) {
    switch (color) {
      case "blue":
        return "0,122,255";
      case "purple":
        return "88,86,214";
      case "yellow":
        return "255,204,0";
      case "pink":
        return "255,45,85";
      default:
        return "255,255,255";
    }
  }
}
