import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star } from 'lucide-react';

const colleges = [
  {
    name: 'Greendale University',
    rating: 5,
    image: '/image 33.png',
    details: 'A great college in the U.S. known for diversity.',
  },
  {
    name: 'Lutheran High School',
    rating: 4,
    image: '/image 91.png',
    details: 'Excellent faculty with a focus on STEM education.',
  },
  {
    name: 'Hindu College',
    rating: 5,
    image: '/image 93.png',
    details: 'Top-ranked college of Delhi University.',
  },
  {
    name: 'Greendale University',
    rating: 5,
    image: '/image 33.png',
    details: 'A great college in the U.S. known for diversity.',
  },
  {
    name: 'Lutheran High School',
    rating: 4,
    image: '/image 91.png',
    details: 'Excellent faculty with a focus on STEM education.',
  },
  {
    name: 'Hindu College',
    rating: 5,
    image: '/image 93.png',
    details: 'Top-ranked college of Delhi University.',
  },
  // Add more if needed
];

const AutoScrollCards = () => {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();

  // Auto-scroll effect
  useEffect(() => {
    let animationFrame;
    const scroll = () => {
      if (!containerRef.current || hoveredCard !== null) return;
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      containerRef.current.scrollLeft = scrollLeft + 1;
      if (scrollLeft + clientWidth >= scrollWidth) {
        containerRef.current.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [hoveredCard]);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10 h-fit">
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-8 py-8 no-scrollbar snap-x snap-mandatory scroll-hide"
      >
        {colleges.map((college, index) => (
          <motion.div
            key={index}
            className="snap-center relative shrink-0"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            animate={{
              scale: hoveredCard === index ? 1.1 : 1,
              transition: { duration: 0.3 },
            }}
            style={{ width: hoveredCard === index ? 360 : 300 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <img
                src={college.image}
                alt={college.name}
                className={`w-full h-70 object-cover transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-30' : 'opacity-100'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-2xl flex items-center justify-between">
                <h3 className="font-semibold text-lg">{college.name}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">Rating: {college.rating}</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              {hoveredCard === index && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-black p-4 text-center font-medium text-md">
                  {college.details}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCards;
