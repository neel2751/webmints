// components/ui/product-drop-card.tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export const ProductDropCard = ({ items }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsToShow = 3; // Number of items visible at once

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < items.length - itemsToShow;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="overflow-hidden relative">
      {/* Carousel container with smooth transition */}
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        disabled={!canGoPrev}
        aria-label="Previous drop"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            onClick={item.onClick}
            key={index}
            className="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground cursor-pointer"
            style={{
              flexBasis: `calc((100% / ${itemsToShow}) - (${
                (itemsToShow - 1) * 16
              }px / ${itemsToShow}))`,
            }}
          >
            <div className="space-y-3">
              <div>
                <h3
                  className="
                font-bold text-xl leading-tight tracking-tighter text-gray-700
                "
                >
                  {item.title}
                </h3>
              </div>
              <div className="w-full overflow-hidden rounded-md bg-gray-100">
                {item.preview}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={!canGoNext}
        aria-label="Next drop"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
