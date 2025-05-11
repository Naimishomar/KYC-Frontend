import React from 'react';

export default function MentorSignup() {
  return (
    <div className="min-h-screen bg-[#DEFFEC] text-black relative">
      <img src="/mentorGirl.png" alt="logo" className='absolute bottom-0 right-0 z-10 rounded-br-4xl'/>
      {/* Step Progress */}
      <div className="w-full py-10 px-4 md:px-15 text-lg flex flex-wrap items-center justify-between gap-2">
        <h1 className='text-3xl mr-4 font-bold'>BECOME A MENTOR-</h1>
        <span>1. Sign Up</span>
        <span><img src="/bigArrow.png" alt="" /></span>
        <span>2. Profile</span>
        <span>➡️</span>
        <span>3. Assessment</span>
        <span>➡️</span>
        <span>4. Interview</span>
        <span>➡️</span>
        <span>5. Verification</span>
        <span>➡️</span>
        <span className="text-black font-bold">Finish!</span>
      </div>

      {/* Main Form and Perks */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        {/* Form */}
        <div className="bg-white lg:rounded-tr-4xl p-5 lg:px-15 shadow-md w-full lg:w-1/2 lg:border-t-5 lg:border-r-5 border-green-300">
          <h2 className="text-3xl font-bold mb-5">Sign Up -</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div>
              <label htmlFor="" className='font-bold'>First Name*</label>
              <input className="w-full px-4 py-2 border rounded" placeholder="First Name *" />
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
          <button className="w-full bg-[#1dfe91] py-2 rounded-full font-semibold cursor-pointer hover:bg-green-400">Sign Up</button>
          <p className="text-sm mt-2">
            Already Registered? <a href="#" className="text-blue-600 font-semibold">Login Now</a>
          </p>
          <button className="mt-4 w-full border py-2 rounded-full flex items-center justify-center gap-2 cursor-pointer">
          <i class="ri-google-fill text-2xl"></i>Sign up with Google
          </button>
        </div>

        {/* Perks */}
        <div className="bg-[#A9FFD4] rounded-xl w-full lg:w-1/3 lg:h-1/2 relative overflow-hidden lg:m-20">
          <img src="/mentorFrame.png" alt="" />
        </div>
      </div>
    </div>
  );
}
