import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-full h-screen bg-[#01200C] p-3 relative  overflow-hidden'>
          <div className='flex justify-around mt-28'>
              <div>
                <h1 className='text-5xl font-bold text-white'>GET IN <br />TOUCH:</h1>
                <p className='text-3xl text-white mt-10 mb-2'>Email: address@gmail.com</p>
                <p className='text-3xl text-white'>Noida, Uttar Pradesh 201009, IN</p>
              </div>
              <div>
                <h1 className='text-5xl font-bold text-white'>IMPORTANT LINKS:</h1>
                <div className='flex flex-col mt-10 space-y-2'>
                  <Link className='text-3xl text-white'>About Us</Link>
                  <Link className='text-3xl text-white'>Careers</Link>
                  <Link className='text-3xl text-white'>FAQs</Link>
                  <Link className='text-3xl text-white'>Terms & Conditions</Link>
                </div>
              </div>
          </div>
          {/* <h1 className='text-9xl text-gray-500 font-bold whitespace-nowrap w-full flex justify-center absolute bottom-0'>KNOW YOUR COLLEGES</h1> */}
      </div>
    </>
  )
}

export default Footer