import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function Footer() {
  return (
    <footer className="w-full h-[70vh] lg:min-h-screen bg-[#01200C] p-10 md:px-30 md:py-20 relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        {/* Contact Section */}
        <div className="mt-20 lg:mt-0">
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
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 10, opacity: 0.2 }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true }}
				className="absolute bottom-0 left-0 w-full text-center tracking-[-0.24rem]  md:tracking-[-0.5rem] text-[10vw] md:text-[9.5vw] whitespace-nowrap font-extrabold text-[#d8d8d8] select-none"
				style={{
					fontSize: "vw",
					lineHeight: "2",
					scaleY: 2,
				}}
			>
				KNOW YOUR COLLEGES
			</motion.div>
    </footer>
  );
}

export default Footer;
