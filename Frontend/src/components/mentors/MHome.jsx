import TestimonialCarousel from './TestimonialCarousel'
import {Link } from "react-router-dom";
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import MentorCard from './MentorCard';
import MDialog from './MDialog';
import { FaFilter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';


function MHome() {
  const [button, setButton] = useState(<span className='font-bold text-2xl'>Get Personalized Mentor<i class="ri-arrow-right-line ml-2 font-bold"></i></span>)
  const [filters, setFilters] = useState([
    'Delhi',
    'Amity Universite',
    'MBBS',
    'NEET',
  ]);

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <div className='bg-white'>
    <div className='text-black bg-[#E9E9E9] h-screen w-full'>
        <div className='w-full px-8 py-5 bg-white'>
          <div className='flex items-center space-x-8 pb-4'>
            <div className='flex items-center space-x-2'>
              <img src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" className='w-8' alt="lg" />
              <span className='text-[1.5rem] font-semibold'>KYC</span>
            </div>
            <div className='hidden md:flex rounded-sm items-center justify-center w-70 lg:w-135 bg-[#f1f1f1]'>
              <i className="ri-search-line text-xl text-gray-400 pl-3 rounded-full"></i>
              <input type="text" placeholder='Search colleges, courses, locations...' className="px-1 py-2  focus:outline-none w-full placeholder:text-gray-400 text-gray-400 placeholder:text-xl"/>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-14 text-gray-600 px-5'>
                <Link>Home</Link>
                <Link>Programs</Link>
                <Link>College Search</Link>
                <Link>College Events</Link>
                <Link>College Predictor</Link>
            </div>
            <div className='flex space-x-5 text-sm'>
              <button className='px-4 py-2 rounded-full bg-[#1dcc5d] text-white cursor-pointer'>Become a mentor</button>
              <button className='px-4 py-2 rounded-full bg-[#1dcc5d] text-white cursor-pointer'>Login</button>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-between items-center w-full pt-17 px-25'>
            <h1 className='font-bold text-5xl'>Our  Success Stories</h1>
            <MDialog button={button}/>
          </div>
        </div>
        <TestimonialCarousel/>
    </div>

    <div>
      <div className='flex justify-between items-center w-full py-10 px-25'>
        <h1 className='font-bold text-5xl'>Mentors</h1>
        <MDialog button={button}/>
      </div>
      <hr className='border-7' />

    <div className="flex items-center gap-4 bg-white px-20 py-3 rounded-md border">
      {/* Filter Button */}
      <button className="flex items-center gap-2 px-8 py-1.5 border-2 border-black rounded-lg mr-3"><span className='font-semibold text-xl'>Personalised Filters</span> <FaFilter className="text-xl" /></button>

      <div className="h-10 border-2 border-black"></div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-5 ml-3">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="bg-[#5BE38D] text-black px-3 py-2 rounded-md flex items-center gap-2 font-semibold text-xl"
          >
            <button onClick={() => removeFilter(filter)}>
              <IoClose className="text-lg" />
            </button>
            {filter}
          </div>
        ))}
      </div>
    </div>

    </div>
    <div>
      <MentorCard/>
    </div>
    <footer className="bg-[#151E2F] text-white py-10 px-5 md:px-40 h-80">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-10">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2">
          <img src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" alt="Logo" className="w-15" />
          <p className="font-bold text-xl">KNOW<br />YOUR<br />COLLEGES</p>
        </div>

        {/* Important Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3 text-xl">IMPORTANT LINKS</h3>
          <ul className="space-y-1 text-md">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">TERMS OF USE</a></li>
            <li><a href="#">CAREERS</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3 text-xl">CONNECT WITH US</h3>
          <div className="flex gap-5 justify-center text-xl">
            <a href="https://www.linkedin.com/company/know-your-colleges/"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/knowyourcolleges_kyc"><FaInstagram /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default MHome