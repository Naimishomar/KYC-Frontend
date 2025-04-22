import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
  {
    name: 'Instagram',
    image: '/insta.png', 
  },
  {
    name: 'Linkedin',
    image: '/insta.png',
  },
  {
    name: 'Twitter',
    image: '/insta.png',
  },
];

const SocialMedia = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % socials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#57fd9fe6] text-black flex flex-col lg:flex-row p-6 lg:p-10 justify-between gap-8 relative">
      
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[45%]">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none px-2 sm:px-6 text-start">
          <div>OU</div>
          <div>R~</div>
          <div>SOC</div>
          <div>IALS</div>
        </div>

        <div className="mt-8 flex flex-col items-start text-xl sm:text-2xl md:text-3xl font-medium px-4 sm:px-8">
          {socials.map((item, i) => (
            <div
              key={item.name}
              className={`transition-all duration-300 mb-2 ${
                i === index ? 'text-black font-bold' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[100%] mt-6 lg:mt-0 relative">
        <div className="relative w-full h-84 sm:h-84 md:h-84 lg:h-full bg-red-500 border-4 border-white rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={socials[index].image}
              src={socials[index].image}
              alt={socials[index].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
