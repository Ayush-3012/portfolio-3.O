"use client";
import { useEffect, useRef } from "react";

const icons = [
  "/assets/icons/c++.png",
  "/assets/icons/js.png",
  "/assets/icons/python.png",
  "/assets/icons/react.png",
  "/assets/icons/node.png",
  "/assets/icons/mongodb.png",
  "/assets/icons/tailwind.png",
  "/assets/icons/express.png",
  "/assets/icons/machine-learning.png",
  "/assets/icons/data analytics.png",
  "/assets/icons/dsa.png",
];

export default function RotatingCircle() {
  const containerRef = useRef(null);

  // Just optional: you could even control rotation with state if needed
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.animation = "spin 20s linear infinite";
    }
  }, []);

  const radius = 120; // circle radius in px
  const iconSize = 50;
  const center = radius + iconSize / 2;

  return (
    <div className="flex flex-col items-center py-10 max-lg:-rotate-[15deg] max-md:-rotate-[10deg] max-sm:-rotate-[0deg] -rotate-[20deg]">
      {/* Circle Container */}
      <div
        className="relative"
        style={{
          width: `${center * 2}px`,
          height: `${center * 2}px`,
        }}
      >
        {/* Rotating Icon Circle */}
        <div
          ref={containerRef}
          className="absolute inset-0"
          style={{
            transformOrigin: "center center",
          }}
        >
          {icons.map((icon, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const x = center + radius * Math.cos(angle) - iconSize / 2;
            const y = center + radius * Math.sin(angle) - iconSize / 2;
            return (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className="absolute transition-all grayscale hover:grayscale-0 hover:scale-110"
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  top: `${y}px`,
                  left: `${x}px`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
