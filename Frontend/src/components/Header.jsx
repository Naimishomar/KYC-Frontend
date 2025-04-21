import React from 'react'

function Header() {
  return (
    <>
    <div className='w-full h-18 bg-black/80 px-10 flex items-center justify-between text-white'>
        <div className='flex items-center gap-6'>
            <div className='flex items-center'>
              <img className='w-8' src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" alt="" />
              <span className='text-2xl font-bold'>KYC</span>
            </div>
            <div className='border rounded-4xl px-2 flex items-center justify-between w-70'>
              <input type="text" placeholder='Search courses' className='px-2 focus:outline-none'/>
              <i className="ri-search-line text-2xl p-1 rounded-full"></i>
            </div>
        </div>
        <div className='flex gap-2 mx-5'>
          <button className='border px-8 rounded-4xl bg-white/15 cursor-pointer hover:bg-white/10'>Home</button>
          <button className='border px-8 rounded-4xl bg-white/15 cursor-pointer hover:bg-white/10'>Program</button>
          <button className='border px-8 rounded-4xl bg-[#06FA6F] text-black flex gap-2 items-center cursor-pointer'>Become Mentor<i className="ri-graduation-cap-line text-xl"></i></button>
        </div>
    </div>
    <hr  className='border-[#06FA6F]'/>
    <div className='flex items-center justify-between px-10 w-full h-15 bg-black/80'>
        <div className='flex gap-6'>
          <button className='border text-white px-4 bg-white/15 cursor-pointer py-1 rounded-4xl hover:bg-white/10'>College Events</button>
          <button className='border text-white px-4 bg-white/15 cursor-pointer py-1 rounded-4xl hover:bg-white/10'>College Compare</button>
          <button className='border text-white px-4 bg-white/15 cursor-pointer py-1 rounded-4xl hover:bg-white/10'>College Predictors</button>
        </div>
        <div>
          <button className='text-black px-4 cursor-pointer py-1 rounded-4xl flex items-center gap-2 bg-[#06FA6F]'>Login<i class="ri-user-2-fill"></i></button>
        </div>
    </div>
    </>
  )
}

export default Header