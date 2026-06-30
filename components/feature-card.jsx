import React from "react";

export default function FeatureCard({ features = [] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 font-grotesk">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-6 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white hover:bg-gray-50 hover:border-gray-300"
        >
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 6px)",
              backgroundSize: "6px 6px",
              opacity: 0.3,
              backgroundPosition: "0 0 , 3px 3px",
              backgroundBlendMode: "overlay",
            }}
          ></div>
          <div
            className={`${feature.bgColor} w-10 h-10 rounded-lg flex items-center justify-center mb-5`}
          >
            {feature.icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 tracking-tighter text-gray-800">
            {feature.title}
          </h3>
          <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
