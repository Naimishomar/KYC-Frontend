import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MentorSignup() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#DEFFEC] text-black relative">
      {/* Step Progress */}
      <div className="w-full py-10 px-4 md:px-15 text-lg flex flex-wrap items-center justify-between gap-2">
        <h1 className='text-3xl font-bold'>BECOME A MENTOR-</h1>
        <div className="flex items-center space-x-2 mr-6">
          <span>1. Sign Up</span>
          <img src="/mentorArrow.png" alt="arrow" className="w-10 h-auto" />
          <span>2. Profile</span>
          <img src="/mentorArrow.png" alt="arrow" className="w-10 h-auto" />
          <span>3. Assessment</span>
          <img src="/mentorArrow.png" alt="arrow" className="w-10 h-auto" />
          <span>4. Interview</span>
          <img src="/mentorArrow.png" alt="arrow" className="w-10 h-auto" />
          <span>5. Verification</span>
          <img src="/mentorArrow.png" alt="arrow" className="w-10 h-auto" />
          <span className="text-black font-bold">Finish!</span>
        </div>
      </div>

      {/* Main Form and Perks */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between relative">
        <img src="/mentorFrame.png" alt="" className='absolute inset-0 w-full h-full object-cover z-0 hidden sm:block' />
        {/* Form */}
        <div className="bg-white lg:rounded-tr-4xl p-5 lg:px-15 shadow-md w-full lg:w-1/2 lg:border-t-5 lg:border-r-5 border-green-300 z-30">
          <h2 className="text-3xl font-bold mb-5">Sign Up -</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div>
              <label htmlFor="" className='font-bold'>First Name*</label>
              <input type='text' className="w-full px-4 py-2 border rounded" placeholder="First Name *" />
            </div>
            <div>
              <label htmlFor="" className='font-bold'>Last Name*</label>
              <input className="w-full px-4 py-2 border rounded" placeholder="Last Name *" />
            </div>
          </div>
          <div>
            <label htmlFor="" className='font-bold'>Email*</label>
            <input className="w-full px-4 py-2 border rounded mb-2" placeholder="Email *" />
          </div>
          <div>
            <label htmlFor="" className='font-bold'>Password*</label>
            <input className="w-full px-4 py-2 border rounded mb-2" placeholder="Set Password *" type="password" />
          </div>
          <div>
            <label htmlFor="" className='font-bold'>Confirm Password*</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Confirm Password *" type="password" />
          </div>
          <button className="w-full bg-[#1dfe91] py-2 rounded-full font-semibold cursor-pointer hover:bg-green-400" onClick={()=> navigate('/mentor/dashboard')}>Sign Up</button>
          <p className="text-sm mt-2">
            Already Registered? <a href="#" className="text-blue-600 font-semibold">Login Now</a>
          </p>
          <button className="mt-4 w-full border py-2 rounded-full flex items-center justify-center gap-2 cursor-pointer">
          <i class="ri-google-fill text-2xl"></i>Sign up with Google
          </button>
        </div>

        {/* Perks */}
        <div className="bg-[#A9FFD4] rounded-xl w-full lg:w-1/3 lg:h-1/2 relative overflow-hidden lg:m-20">
        </div>
      </div>
    </div>
  );
}
