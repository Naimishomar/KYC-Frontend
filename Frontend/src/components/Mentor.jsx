import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'Take daily sessions as per the allotted schedule.',
    image: '/firstMentor.png',
  },
  {
    name: 'Update the latest events & information about your college on the KYC college page.',
    image: '/secondMentor.png',
  },
  {
    name: 'Assist in brand awareness through content creation & marketing.',
    image: '/secondLast.png',
  },
  {
    name: 'Refer your friends from different colleges to KYC for additional earnings',
    image: '/lastMentor.png',
  },
];

function Mentor() {
  const [change, setChange] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % socials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChange(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='bg-[#DEFFEC] min-h-screen w-full relative'>
      {change ? (
        <div className='w-full h-screen text-2xl sm:text-3xl font-bold text-center flex justify-center items-center'>
          <img src="/star.png" alt="logo" className="w-16 sm:w-24 mb-4" />
          <h1>Turn your experience into impact—guide juniors and <br /> earn while doing it.</h1>
        </div>
      ) : (
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
          <h1 className='text-2xl sm:text-3xl font-bold text-start'>BECOME A MENTOR-</h1>
          <div className='flex sm:flex-row gap-4 sm:items-center mt-10 text-start'>
            <img src="/star.png" alt="logo" className='w-10'/>
            <h1 className='text-xl sm:text-3xl font-bold'>
              With great powers comes great responsibilities! <br />
              Here are yours-
            </h1>
          </div>

          <div className='text-black flex flex-col lg:flex-row justify-between gap-10 mt-8'>
            {/* Left Side */}
            <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-start text-lg sm:text-xl font-medium space-y-3 ml-0 sm:ml-15'>
                {socials.map((item, i) => (
                  <div
                    key={item.name}
                    className={`transition-all duration-300 ${
                      i === index ? 'text-black font-bold' : 'text-gray-600'
                    }`}
                  >
                    <div className='flex items-start gap-2'>
                      <span className='w-2 h-2 mt-2 rounded-full bg-black inline-block'></span>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className='w-full lg:w-1/3 h-60 sm:h-60 relative rounded-2xl overflow-hidden'>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={socials[index].image}
                  alt={socials[index].name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full object-cover'
                />
              </AnimatePresence>
            </div>
          </div>

          <div className='flex justify-center mt-12 relative'>
            <Link to='/mentor/signup' className='text-center bg-[#06F96E] cursor-pointer hover:bg-green-400 w-full sm:w-[90%] max-w-full rounded-full py-3 text-lg font-semibold'><button>Next <i className="ri-arrow-right-line ml-2"></i></button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mentor;
