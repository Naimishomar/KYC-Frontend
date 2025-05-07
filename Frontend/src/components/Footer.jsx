import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full min-h-screen bg-[#01200C] md:px-30 md:py-20 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Contact Section */}
        <div className="">
          <h1 className="text-3xl flex items-center gap-2 sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            <img src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" className='w-10 h-10'/>GET IN TOUCH:
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-white mt-6 mb-2 break-words">
            Email: address@gmail.com
          </p>
          <p className="text-lg sm:text-xl md:text-xl text-white">
            Noida, Uttar Pradesh 201009, IN
          </p>
        </div>

        {/* Links Section */}
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            IMPORTANT LINKS:
          </h1>
          <div className="flex flex-col mt-6 space-y-3">
            <Link to="#" className="text-lg sm:text-xl md:text-xl text-white">
              About Us
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-xl text-white">
              Careers
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-xl text-white">
              FAQs
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-xl text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Footer Label */}
      <h1 className='text-6xl whitespace-nowrap sm:text-5xl md:text-5xl lg:text-8xl text-green-900 font-bold absolute left-0 bottom-10 w-full text-center scale-y-250 scale-x-120'>
        KNOW YOUR COLLEGES
      </h1>
    </div>
  );
}

export default Footer;
