import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
  {
    name: 'Instagram',
    image: '/insta.png',
    url: 'https://www.instagram.com/knowyourcolleges_kyc/',
  },
  {
    name: 'Linkedin',
    image: '/linkedin.png',
    url: 'https://www.linkedin.com/company/know-your-colleges/',
  },
  {
    name: 'Twitter',
    image: '/twitter.png',
    url: 'https://x.com/Colleges_kyc',
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
    <div className="bg-[#A6FFC7] text-black flex flex-col lg:flex-row justify-between gap-8 relative lg:h-[110vh] h-[85vh]">
      
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[45%] pt-10 pl-10">
        <div className="text-5xl sm:text-6xl md:text-4xl lg:text-[85px] font-semibold leading-[0.85] px-2 sm:px-15 text-start">
          <img src="/ourSocials.png" alt="" className='w-[40%] lg:w-full md:w-full'/>
        </div>

        <div className="mt-8 flex flex-col items-start text-xl sm:text-2xl md:text-3xl font-medium px-4 sm:px-8">
          {socials.map((item, i) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 mb-2 ${
                i === index ? 'text-black font-bold' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full relative flex mx-auto">
        <div className="relative w-full h-full sm:h-80 md:h-84 lg:h-full rounded-2xl overflow-hidden ml-5">
          <AnimatePresence mode="wait">
            <motion.a
              key={socials[index].image}
              href={socials[index].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={socials[index].image}
                alt={socials[index].name}
                className="w-[95%] object-cover py-5"
              />
            </motion.a>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
