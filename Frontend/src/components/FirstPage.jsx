import React, { useState, useEffect } from 'react';

function FirstPage() {
  const [changeText, setchangeText] = useState(0);
  const [animationClass, setAnimationClass] = useState("textEnter");
  const texts = [
    `Know The Truth <br/> Behind The <br/> Campus Walls`,
    `Ask A Senior! <br/> One Conversation Can <br/> Change Your Life.`,
    `Not Just Colleges, <br/> Real People, <br/> Real Stories.`,
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("textExit");
      setTimeout(() => {
        setchangeText((prev) => (prev + 1) % texts.length);
        setAnimationClass("textEnter");
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-[#56DE88] relative overflow-hidden">
      <img
        src="/KYC2.png"
        alt="theme"
        className="absolute top-0 left-0 h-full w-full object-cover opacity-65"
      />
      <div className="relative flex flex-col md:flex-row justify-between  px-6 md:px-10 py-12 h-full gap-10">
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h1 className="text-8xl sm:text-8xl md:text-8xl lg:text-8xl font-extrabold leading-24 ml-10 tracking-wide">
            KNOW <br /> YOUR <br /> COLLEGES
          </h1>
        </div>
        <div className="w-full md:w-[50%] flex justify-center text-center overflow-hidden">
        <p className={`mb-40 text-3xl sm:text-4xl sm:mb-40 md:text-5xl font-bold text-end ${animationClass}`}
          dangerouslySetInnerHTML={{ __html: texts[changeText] }}></p>
      </div>
      </div>

      <div className="w-full px-4 sm:px-14 md:px-25 h-20 absolute bottom-0 mb-20 flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <img
          src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png"
          alt="logo"
          className="w-10 h-10"
        />
        <div className="w-full h-2 rounded-2xl bg-black/50"></div>
        <button className="bg-black/70 text-white px-8 py-1.5 rounded-full whitespace-nowrap text-2xl font-semibold">
          Get Started <i className="ri-arrow-right-up-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
