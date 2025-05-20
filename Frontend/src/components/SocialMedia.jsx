import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom'

const socials = [
  {
    name: 'Instagram',
    image: '/insta.png', 
	link: "https://instagram.com/knowyourcolleges_kyc",
  },
  {
    name: 'Linkedin',
    image: '/linkedin.png',
	link: "https://linkedin.com/company/knowyourcolleges",

  },
  {
    name: 'Twitter',
    image: '/twitter.png',
	link: "https://twitter.com/knowyourcolleges",
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
    <div className="bg-[#A6FFC7] text-black flex flex-col lg:flex-row justify-between gap-8 relative h-[120vh] py-3">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[45%] absolute">
        <div className="text-5xl md:text-8xl leading-[0.8] font-semibold px-2 md:pl-25 text-start">
          <div>OU</div>
          <div className='ml-25'>R~</div>
          <div>SOC</div>
          <div className='ml-15'>IALS</div>
        </div>

        <div className="mt-10 flex flex-col ml-60 text-xl sm:text-xl md:text-2xl font-medium">
			<div className='text-start w-50'>
				{socials.map((item, i) => (
					<div
					key={item.name}
					className={`transition-all duration-300 mb-3 px-2 ${
						i === index ? 'text-black font-bold text-3xl' : 'text-black font-[400]'
					}`}
					>
					<div className="flex items-center gap-2">
						<span className={`rounded-full bg-black inline-block ${ i === index ? 'w-3 h-3' : 'h-2 w-2'}`}></span>
						<Link to={item.link}>{item.name}</Link>
					</div>
					</div>
				))}
			</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-200 mt-6 lg:mt-0 absolute right-0">
        <div className="relative w-full h-full py-5 sm:h-84 md:h-84 lg:h-full rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={socials[index].image}
              src={socials[index].image}
              alt={socials[index].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;