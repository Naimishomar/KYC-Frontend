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
    <div className='bg-[#DEFFEC] w-full h-screen lg:px-[91px]'>
      {change ? (
        <div className='w-full h-full text-2xl sm:text-3xl font-bold text-center flex justify-center items-center -mt-30'>
          <div className='pt-30 flex'>
            <img src="/star.png" alt="logo" className="w-12" />
            <h1>Turn your experience into impact—guide juniors and <br /> earn while doing it.</h1>
          </div>
        </div>
      ) : (
        <div className='px-2 pt-[50px]'>
          <h1 className='text-[30px] font-[700] text-start'>BECOME A MENTOR-</h1>
          <div className='flex sm:flex-row gap-4 sm:items-center mt-[20px] text-start'>
            <div className='w-9'>
              <img src="/star.png" alt="logo" className='w-full h-full object-cover object-center'/>
            </div>
            <h1 className='text-[24px] font-poppins font-[700] leading-[25px]'>
              With great powers comes great responsibilities! <br />Here are yours-</h1>
          </div>

          <div className='text-black flex flex-col lg:flex-row justify-between gap-10 mt-[34px]'>
            {/* Left Side */}
            <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-start text-lg sm:text-xl font-medium space-y-3 sm:ml-10'>
                {socials.map((item, i) => (
                  <div key={item.name} className={`transition-all duration-300 ${i === index ? 'text-black font-bold' : 'text-gray-600'}`}>
                    <ul className="list-disc pl-5">
                      <li>{item.name}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className='w-full lg:w-[35vw] h-60 relative rounded-2xl overflow-hidden'>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={socials[index].image}
                  alt={socials[index].name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full object-contain'
                />
              </AnimatePresence>
            </div>
          </div>

          <div className='flex justify-center mt-5 relative'>
            <Link to='/mentor/signup' className='flex items-center justify-center text-center bg-[#06F96E] cursor-pointer hover:bg-green-400 w-full sm:w-[90%] max-w-full rounded-full text-lg font-semibold h-[44px]'><button>Next <i className="ri-arrow-right-line ml-2"></i></button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mentor;
