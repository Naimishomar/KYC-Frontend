import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
  { name: "Abhinav", review: "I struggled with my assignments until I found this platform. The mentors provided excellent guidance, and I saw a significant improvement in my grades!" },
];

const TestimonialCard = ({ name, review, isActive }) => (
  <motion.div
    className={`flex-shrink-0 bg-white py-3 px-6 rounded-md shadow-md transition-all duration-500 overflow-hidden ${
      isActive ? "scale-115 w-[350px] h-[140px] z-10" : "scale-95 w-[350px] h-[140px] opacity-80"
    }`}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full" />
      <div>
        <div className="font-semibold text-gray-800">{name}</div>
        <img src="/mentorStar.png" alt="" className="w-18" />
      </div>
    </div>
    <div className="text-[12px] text-gray-600">{review}</div>
  </motion.div>
);

export default function TestimonialCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

const getSlideStyle = () => {
  const cardWidth = 340;
  const gap = 24;
  const offset = (cardWidth+gap) * centerIndex;
  const containerCenterOffset = window.innerWidth/1.2 - cardWidth / 2;

  return {
    transform: `translateX(${containerCenterOffset - offset}px)`,
    transition: "transform .5s ease-in-out"
  };
};

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center pt-10 h-55">
        <div className="flex gap-10" style={getSlideStyle()}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} name={t.name} review={t.review} isActive={idx === centerIndex} />
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 py-1">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === centerIndex ? "bg-green-400 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
