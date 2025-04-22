import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full min-h-screen bg-[#01200C] p-4 sm:p-6 md:p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 mt-16 md:mt-28">
        {/* Contact Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            GET IN <br /> TOUCH:
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mt-6 mb-2 break-words">
            Email: address@gmail.com
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white">
            Noida, Uttar Pradesh 201009, IN
          </p>
        </div>

        {/* Links Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            IMPORTANT LINKS:
          </h1>
          <div className="flex flex-col mt-6 space-y-3">
            <Link to="#" className="text-lg sm:text-xl md:text-2xl text-white">
              About Us
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-2xl text-white">
              Careers
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-2xl text-white">
              FAQs
            </Link>
            <Link to="#" className="text-lg sm:text-xl md:text-2xl text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Footer Label */}
      <h1 className='text-6xl whitespace-nowrap sm:text-5xl md:text-6xl lg:text-8xl text-gray-500 font-bold absolute bottom-4 w-full text-center'>
        KNOW YOUR COLLEGES
      </h1>
    </div>
  );
}

export default Footer;
