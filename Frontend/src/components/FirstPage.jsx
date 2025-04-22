import React, { useState, useEffect } from 'react';

function FirstPage() {
  const [changeText, setchangeText] = useState(0);
  const texts = [
    `Know The Truth <br/> Behind The <br/> Campus Walls`,
    `Ask A Senior! <br/> One Conversation Can <br/> Change Your Life.`,
    `Not Just Colleges, <br/> Real People, <br/> Real Stories.`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setchangeText(prev => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-[#06FA6F] relative overflow-hidden">
      <img
        src="/KYC2.png"
        alt="theme"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="relative flex flex-col md:flex-row justify-between  px-6 md:px-10 py-12 h-full gap-10">
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-8xl font-bold leading-tight">
            KNOW <br /> YOUR <br /> COLLEGES
          </h1>
        </div>
        <div className="w-full md:w-[50%] flex justify-center text-center">
          <p
            key={changeText}
            className="mb-40 text-3xl sm:text-4xl sm:mb-40 md:text-5xl font-bold motionDash"
            dangerouslySetInnerHTML={{ __html: texts[changeText] }}
          ></p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-10 md:px-16 h-20 absolute bottom-0 mb-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <img
          src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png"
          alt="logo"
          className="w-10 h-10"
        />
        <div className="w-full h-2 rounded-2xl bg-black/50"></div>
        <button className="bg-black/50 text-white px-6 py-2 rounded-full whitespace-nowrap">
          Get Started <i className="ri-arrow-right-up-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
